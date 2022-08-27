import CartWidget from "./CartWidget"

const NavBar = () => {
return (
   <div class="collapse navbar-collapse text-center" id="collapsibleNavbar">
      <ul class="navbar-nav">
         <li class="nav-item"><a class="nav-link" >Home</a></li>
         <li class="nav-item"><a class="nav-link" >Servicios</a></li>
         <li class="nav-item"><a class="nav-link" >Nosotros</a></li>
         <li class="nav-item"><a class="nav-link" >Contacto</a></li>
         <li class="nav-item"><a class="nav-link" >Eventos</a></li>
          <CartWidget></CartWidget>
        </ul>
    </div>
)
}
export default NavBar