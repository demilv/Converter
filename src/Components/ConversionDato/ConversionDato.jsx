import './ConversionDato.css'

const  ConversionDato = ({tipo2, datoFinal}) => {
    return (
        <div className="displayConversion">
            <input className="appResult" disabled value={datoFinal}></input>
            <h5 className="tipoConversion">{tipo2}</h5>
        </div>
    )
}

export default ConversionDato;