import './MostrarFavorito.css'

function MostrarFavorito ({datos, onDelete, arrayTipo1, arrayTipo2, datosOriginales}) {

    const MostrarDatos = () => {
            return datos.map((dato, index) =>             
            <article className="favoritosLinea" key= {index}>
                <h3 className="favoritosData">{datosOriginales[index]}{arrayTipo1[index]}{" -> "}{dato}{arrayTipo2[index]}</h3>
                <span className="favoritosX" onClick={()=> onDelete(index)}>x</span> 
            </article>
            )
        }

        return(
            <section>
            <h4>saved</h4>
            <div className='favoritosDivisor'>
                <MostrarDatos></MostrarDatos>
            </div>                
            </section>
        )
    }

export default MostrarFavorito;