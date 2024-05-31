import './ListaOpciones.css'

export default function ListaOpciones({valor,actualizarEquipo,equipos}) {

  const manejarCambio = (e) => {
    actualizarEquipo(e.target.value)
    console.log(valor)
  }
  return <div className="lista-opciones">
    <label htmlFor="equipo"> Equipos</label>
    <select name="equipo" id="equipo" value={valor} onChange={manejarCambio} >
      <option value="" disabled defaultValue="" hidden>Seleccionar equipo </option> 
      {equipos.map((equipo,i) =>  <option key={i} > {equipo} </option> )}
    </select>
  </div>
}

