import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import {useState} from 'react'


export default function Formulario({equipos,registrarColaborador}){
  const [nombre,setNombre] = useState("");
  const [puesto,setPuesto] = useState("");
  const [foto,setFoto] = useState("");
  const [equipo,setEquipo] = useState("");

  let datos = {
    nombre,
    puesto,
    foto,
    equipo
  }

  const manejarEnvio = (e) => {
    e.preventDefault();
    registrarColaborador(datos);
    setNombre("");
    setFoto("");
    setPuesto("");
  }

  return (
  <section className="formulario">
      <form action="" onSubmit={manejarEnvio}>
          <h2> Rellena el formulario para crear el colaborador</h2>
          <CampoTexto 
            nombreCampo="Nombre"
            placeholder="Ingresar nombre..." 
            required valor={nombre} 
            actualizarValor={setNombre}
          />  
          <CampoTexto 
            nombreCampo="Puesto" 
            placeholder="Ingresar puesto..." 
            required  valor={puesto} 
            actualizarValor={setPuesto}
          />

          <CampoTexto 
            nombreCampo="Foto" 
            placeholder="Ingresar enlace de foto..." 
            required  valor={foto} 
            actualizarValor={setFoto}
           />

          <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={equipos} />

          <Boton nombre="Crear"/>
      </form>
  </section>
  )
}

