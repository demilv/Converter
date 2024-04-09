import './App.css';
import InputDato from './InputDato/InputDato';
import SelectorTipo from './SelectorTipo/SelectorTipo';
import ConversionDato from './ConversionDato/ConversionDato'
import SaveDato from './SaveDato/SaveDato'
import MostrarFavorito from './MostrarFavorito/MostrarFavorito'
import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import { useState } from 'react';
import React from 'react';

function App() {
  const [resultado, setResultado] = useState(0)
  const [resultadoOriginal, setResultadoOriginal] = useState(0)
  const [resultadoFinal, setResultadoFinal] = useState(0)
  const [datosGuardados, setDatosGuardados] = useState([])
  const [datosGuardadosOriginales, setDatosGuardadosOriginales] = useState([])
  const [tipo1, setTipo1] = useState([])
  const [arrayTipo1, setArrayTipo1] = useState([])
  const [tipo2, setTipo2] = useState([])
  const [arrayTipo2, setArrayTipo2] = useState([])

  const handleInputDatoChange = (valor) =>{
    setResultado(valor)
  }

  const handleValorFinal = (original, valorfinal, modo1, modo2) =>{
    setResultadoOriginal(original)
    setResultadoFinal(valorfinal)
    setTipo1(modo1)
    setTipo2(modo2)
  }

  const saveData = (valorFinal, valorOriginal, tipo1, tipo2) =>{
    if (valorFinal !==0)
    {      
      setDatosGuardados([...datosGuardados, valorFinal])
      setArrayTipo2([...arrayTipo2, tipo2])
    }
    if (valorOriginal !==0)    {
      setDatosGuardadosOriginales([...datosGuardadosOriginales, valorOriginal])
      setArrayTipo1([...arrayTipo1, tipo1])
    }
  }

  const handleDelete = (posArr) =>{
    const datosNoEliminados = [...datosGuardados]
    datosNoEliminados.splice(posArr,1)
    setDatosGuardados(datosNoEliminados)
  }

  return (
    <div className="AppFull">
      <Top></Top>
      <div className='AppBacks'>      
        <div className='AppFirstBackground'>
          <h4 className="Titulo">convert</h4>
            <div className='AppComponents'>          
              <SelectorTipo input={resultado} onResultadoChange={handleValorFinal}></SelectorTipo>            
              <InputDato onInputDatoChange={handleInputDatoChange} tipo1={tipo1}></InputDato> 
            </div> 
            <div className="SaveConversionPairing">          
              <SaveDato onSaveChange={saveData} datoFinal={resultadoFinal} datoOriginal={resultadoOriginal} tipo1={tipo1} tipo2={tipo2}></SaveDato>      
              <ConversionDato datoFinal={resultadoFinal} tipo2={tipo2}></ConversionDato>
            </div>            
        </div>
        <div className='AppFavorito'>
          <MostrarFavorito datos={datosGuardados} onDelete={handleDelete} arrayTipo1={arrayTipo1} arrayTipo2={arrayTipo2} datosOriginales={datosGuardadosOriginales}></MostrarFavorito>
        </div>
      </div>
      <Bottom></Bottom>
    </div>
  );
}

export default App;
