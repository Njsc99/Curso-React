import "./NavBar.css";
import logo from "../../assets/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <ul className="nav-list">
            <li>
              <Link to="/category/Alimentos" className="nav-list">Alimentos</Link>
            </li>
            <li>
              <Link to="/category/Accesorios" className="nav-list">Accesorios</Link>
            </li>
            <li>
              <Link to="/category/Cuidados" className="nav-list">Cuidados</Link>
            </li>
            <li>
              <Link to="/category/Juguetes" className="nav-list">Juguetes</Link>            
            </li>
            <li>
              <Link to="/category/Higiene" className="nav-list">Higiene</Link>
            </li>
            <li>
              <Link to="/category/Buscar" className="nav-list">Buscar</Link>
            </li>
        </ul>

        <CartWidget />
    </div>
  )
}

export default NavBar;