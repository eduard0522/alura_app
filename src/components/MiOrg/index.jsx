import './MiOrg.css'

export default function MiOrg (props) {
  return (
    <section className="org-section">
        <h3 className="title"> Mi organización</h3>
        <img src="/img/grupo.png" alt="Icono agregar grupo" onClick={props.cambiarMostrar}/>
    </section>
  )
}