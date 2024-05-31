import './Colaborador.css'
import { RiCloseCircleFill } from "react-icons/ri";
import { GoHeartFill,GoHeart} from "react-icons/go";

export default function Colaborador (props){
  const{nombre,puesto,foto,id,fav} = props.datos
  const {eliminarColaborador,actualizarLike} = props
  const controllaEliminar = () => {
    eliminarColaborador(id)
  }
  return (
    <div className="colaborador">
      <RiCloseCircleFill  className="eliminar" onClick={controllaEliminar}/>
      <div className="encabezado" style={{backgroundColor:props.color}}>
          <img src={foto} alt="Avatar del colaborador" />
      </div>
      <div className="info">

        <h4>{nombre}</h4>

        <h5>{puesto}</h5>

        {fav ?  <GoHeartFill color="red"  onClick={() => actualizarLike(id)}/> : <GoHeart onClick={() => actualizarLike(id)} /> }
       
      </div>
    </div>
  )
}