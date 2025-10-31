import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar"> {/* contenedor general del Navbar */}
      <div className='navbar_logo'>Picorell</div> {/* Logo o nombre de la aplicación */}
      <ul className='navbar_links'> {/* contenedor de los enlaces de navegación */}
        <li className='navbar_item'><a className='navbar_link' href="/">Grabar</a></li>
        <li className='navbar_item'><a className='navbar_link' href="/last-table">Ultima Tabla</a></li>
        <li className='navbar_item'><a className='navbar_link' href="/database">Base de Datos</a></li>
      </ul>
    </nav>
  )
}