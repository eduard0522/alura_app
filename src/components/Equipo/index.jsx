import './Equipo.css'
import hexToRgba from 'hex-to-rgba'
import Colaborador from '../colaborador'

export default function Equipo(props) {

  const{titulo,colorPrimario,colaboradores,eliminarColaborador,cambiarColor,id,actualizarLike} = props;
 
  const estiloTitulo  = {
    borderColor : colorPrimario
  }

  const estiloSecion  = {
    backgroundColor : hexToRgba(colorPrimario,0.4)

  }

   { if (colaboradores.length > 0) {
        return (
          <section className="equipo" style={estiloSecion}>
              <input type="color" value={colorPrimario} className="color" onChange={(e) => cambiarColor(e.target.value,id)}/>
              <h3 style={estiloTitulo}> {titulo} </h3>
              <div className="colaboradores"> 
                {colaboradores.map((colaborador,i) =>  
                <Colaborador
                    key={colaborador.id}
                    datos={colaborador}  
                    color={colorPrimario} 
                    eliminarColaborador={eliminarColaborador}
                    actualizarLike={actualizarLike}
                />)}
              </div>
          </section>
        )
    } else{
        return <> </>
    } 
  }
}