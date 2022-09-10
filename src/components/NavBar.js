import CartWidget from "./CartWidget"

const NavBar = () => {
return (
   <div className="collapse navbar-collapse text-center" id="collapsibleNavbar">
      <ul className="navbar-nav">
         <li className="nav-item"><a className="nav-link" >Home</a></li>
         <li className="nav-item"><a className="nav-link" >Servicios</a></li>
         <li className="nav-item"><a className="nav-link" >Nosotros</a></li>
         <li className="nav-item"><a className="nav-link" >Contacto</a></li>
         <li className="nav-item"><a className="nav-link" >Eventos</a></li>
          <CartWidget></CartWidget>
        </ul>
    </div>
)
}
export default NavBar