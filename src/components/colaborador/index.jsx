import './Colaborador.css'
import { RiCloseCircleFill } from "react-icons/ri";

export default function Colaborador (props){
  const{nombre,puesto,foto} = props.datos
  const {eliminarColaborador} = props
  return (
    <div className="colaborador">
      <RiCloseCircleFill  className="eliminar" onClick={eliminarColaborador}/>
      <div className="encabezado" style={{backgroundColor:props.color}}>
          <img src={foto} alt="Avatar del colaborador" />
      </div>
      <div className="info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
      </div>
    </div>
  )
}