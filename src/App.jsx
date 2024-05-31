import {useState} from 'react'
import {v4 as uuid } from 'uuid'
import Header from './components/Header/Header.jsx'
import './App.css';
import Formulario from './components/formulario/Formulario.jsx';
import Equipo from './components/Equipo/index.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Footer from './components/Footer/index.jsx';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,setColaboradores] = useState([])

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario:"#57C278",
    
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario:"#A6D157",

    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
  
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
    
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
    
    },
    {
      id: uuid(),
      titulo:  "Innovacion y Gestión",
      colorPrimario:"#FF8A29",

    }
  ]);

  // Mostrar o oculatar el formulario 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // registrar nuevo colaborador
  const registrarColaborador = (colaborador) => {
    //spread operator
    setColaboradores([...colaboradores,colaborador])
  }

  // Eliminar Colaborador 
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id )

    setColaboradores(nuevosColaboradores)
  }

  const cambiarColor = (color,id) => {
     const colorActualizado = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      })
      setEquipos(colorActualizado)
    }

    const crearEquipo = (nuevoEquipo) => {
      setEquipos([...equipos,nuevoEquipo])
    }

    const like = (id) => {
      const actualizarDatos = colaboradores.map((colaborador) => {
        if(colaborador.id === id){  
          colaborador.fav = !colaborador.fav
        } 
        return colaborador
      })

      setColaboradores(actualizarDatos)
    }

  return ( 
    <>
      <Header /> 

      { mostrarFormulario === true ?  <Formulario  equipos = {equipos.map(equipo => equipo.titulo)} registrarColaborador={registrarColaborador} nuevoEquipo ={crearEquipo} /> : <> </>}

      <MiOrg  cambiarMostrar = {cambiarMostrar} />

      {equipos.map((equipo) => {
          return  <Equipo key={equipo.id} 
                    id={equipo.id}
                    titulo={equipo.titulo} 
                    colorPrimario = {equipo.colorPrimario} 
                    actualizarLike = {like}
                    colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
                    eliminarColaborador = {eliminarColaborador}
                    cambiarColor = {cambiarColor}
                  /> }
      )}

      <Footer />
    </>
  )
}

export default App
