import './Header.css'

/**
 * Encabezado principal de la aplicación.
 * Componente presentacional: solo muestra título y subtítulo.
 */
function Header({ titulo = 'Solicitudes Académicas', subtitulo = 'Consulta y organiza tus trámites en un solo lugar' }) {
  return (
    <header className="header">
      <div className="header__contenido">
        <span className="header__logo" aria-hidden="true">🎓</span>
        <div>
          <h1 className="header__titulo">{titulo}</h1>
          <p className="header__subtitulo">{subtitulo}</p>
        </div>
      </div>
    </header>
  )
}

export default Header
