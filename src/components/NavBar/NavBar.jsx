import "./NavBar.css";
import logo from "../../assets/logo.jpg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="nav-container">
        <img className="logo" src={logo} alt="" />

        <ul className="nav-list">
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Monitores</li>
            <li>Accesorios</li>
        </ul>

        <CartWidget />
    </div>
  )
}

export default NavBar;