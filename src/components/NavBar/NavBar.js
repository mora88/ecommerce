import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav  className="navbar">
            <h1 className="navbar-logo">KM Tecnologia</h1>
            <div className="nav-container">
                <button>Celulares</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;