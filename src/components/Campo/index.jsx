import './Campo.css'

 function Campo(props) {

    const manejarCambio = (e) => {
      props.actualizarValor(e.target.value)
    }

    const {type = "text"} = props
    return( 
    <>
      <div className="campo">
        <label htmlFor="nombre"> {props.nombreCampo} </label>
          <input 
            type={type} 
            id="nombre" 
            placeholder={props.placeholder}
            required={props.required} 
            onChange={manejarCambio} 
            value={props.valor}
          />
      </div>
    </>
  )

}

export default Campo