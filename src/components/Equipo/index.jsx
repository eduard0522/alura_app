import './Equipo.css'
import Colaborador from '../colaborador'
import { useState } from 'react';
export default function Equipo(props) {

  
  const{titulo,colorPrimario,colorSecundario,colaboradores,eliminarColaborador} = props;
  const estiloTitulo  = {
   borderColor : colorPrimario
  }
  const [color,setColor] = useState(colorSecundario)

  const estiloSecion  = {
    backgroundColor : color
   }

   const manejadorColor = (e) => {
    setColor(e.target.value)
   }

   { if (colaboradores.length > 0) {
        return (
          <section className="equipo" style={estiloSecion}>
              <input type="color" value={colorSecundario} className="color" onChange={manejadorColor}/>
              <h3 style={estiloTitulo}> {titulo} </h3>
              <div className="colaboradores"> 
                {colaboradores.map((colaborador,i) =>  
                <Colaborador
                    key={i}
                    datos={colaborador}  
                    color={colorPrimario} 
                    eliminarColaborador={eliminarColaborador}
                />)}
              </div>
          </section>
        )
    } else{
        return <> </>
    } 
  }
}