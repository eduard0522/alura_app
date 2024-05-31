import './Formulario.css'
import Campo from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import {useState} from 'react'
import {v4 as uuid } from "uuid"


export default function Formulario({equipos,registrarColaborador,nuevoEquipo}){
  const [nombre,setNombre] = useState("");
  const [puesto,setPuesto] = useState("");
  const [foto,setFoto] = useState("");
  const [equipo,setEquipo] = useState("");


  // EQUIPO 
  const [titulo,setTitulo] = useState("");
  const [color,setColor] = useState("")

  let datos = {
    id:uuid(),
    nombre,
    puesto,
    foto,
    equipo,
    fav:false
  };

  let datosEquipo = {
    id:uuid(),  
    titulo,
    colorPrimario: color
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    registrarColaborador(datos);
    setNombre("");
    setFoto("");
    setPuesto("");
  }

  const manejarEnvioEquipo = (e) => {
    e.preventDefault();
    setColor("");
    setTitulo("")
    nuevoEquipo(datosEquipo)
  }

  return (
  <section className="formulario">
      <form action="" onSubmit={manejarEnvio}>
          <h2> Rellena el formulario para crear el colaborador</h2>
          <Campo 
            nombreCampo="Nombre"
            placeholder="Ingresar nombre..." 
            required valor={nombre} 
            actualizarValor={setNombre}
          />  
          <Campo 
            nombreCampo="Puesto" 
            placeholder="Ingresar puesto..." 
            required  valor={puesto} 
            actualizarValor={setPuesto}
          />

          <Campo 
            nombreCampo="Foto" 
            placeholder="Ingresar enlace de foto..." 
            required  valor={foto} 
            actualizarValor={setFoto}
           />

          <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={equipos} />
          <Boton nombre="Crear"/>
      </form>

      <form action="" onSubmit={(e) => manejarEnvioEquipo(e)}>
          <h2> Rellena el formulario para crear un equipo</h2>
          <Campo 
            nombreCampo="Titulo"
            placeholder="Ingresar titulo..." 
            required 
            valor={titulo} 
            actualizarValor={setTitulo}
          />  
          <Campo 
            nombreCampo="Color" 
            placeholder="Ingresar color en formato Hex....." 
            required 
            valor={color} 
            actualizarValor={setColor}
            type="color"
          />
          <Boton nombre="Crear"/>
      </form>
      
  </section>
  )
}

