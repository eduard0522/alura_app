import {useState} from 'react'
import Header from './components/Header/Header.jsx'
import './App.css';
import Formulario from './components/formulario/Formulario.jsx';
import Equipo from './components/Equipo/index.jsx';
import MiOrg from './components/MiOrg/index.jsx';
import Footer from './components/Footer/index.jsx';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,setColaboradores] = useState([])
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  // LISTA DE EQUIPOS

  const equipos = [
    {
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7F9",
    },
    {
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    {
      titulo:"Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      titulo:  "Innovacion y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEEDF",
    },
  ]



  const registrarColaborador = (colaborador) => {
    //spread operator
    setColaboradores([...colaboradores,colaborador])
  }

  const eliminarColaborador = () => {
    //spread operator
    console.log('eliminando colabora<dor')
  }

  return ( 
    <>
      <Header /> 

      { mostrarFormulario === true ?  <Formulario  equipos = {equipos.map(equipo => equipo.titulo)} registrarColaborador={registrarColaborador}/> : <> </>}

      <MiOrg  cambiarMostrar = {cambiarMostrar} />

      {equipos.map((equipo) => {
          return  <Equipo key={equipo.titulo} 
                    titulo={equipo.titulo} 
                    colorPrimario = {equipo.colorPrimario} 
                    colorSecundario={equipo.colorSecundario}
                    colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
                    eliminarColaborador = {eliminarColaborador}
                  /> }
      )}

      <Footer />



    </>
  )
}

export default App
