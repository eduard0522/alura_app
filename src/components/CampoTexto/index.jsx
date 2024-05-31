import './CampoTexto.css'

 function CampoTexto(props) {

    const manejarCambio = (e) => {
      props.actualizarValor(e.target.value)
    }
    return( 
    <>
      <div className="campoTexto">
        <label htmlFor="nombre"> {props.nombreCampo} </label>
          <input 
            type="text" 
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

export default CampoTexto