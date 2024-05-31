import './Footer.css'

export default function Footer (){
  return (
    <footer  className='footer' style={{ backgroundImage:"url(./img/footer.png)"}}>
      <div className="iconos">
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-github"></i>
      </div>
      <div className="logo">
        <img src="./img/Logo.png" alt="Logo de la empresa" />
      </div>
      <div className="parrafos">
        <p>Diseñado por Alura Latam</p>
        <p> Desarrollado por Eduard Villamil</p>
      </div>
    </footer>

  )
}