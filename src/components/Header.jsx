import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useContext } from "react"
import { CartContext } from "../Context"

const Header = () => {

  const {visible, setVisible} = useContext(CartContext);

  return (
    <header className="header">
      <div className="header__container">

        {/* LOGO */}
        <a href="#home" className="header__logo">
          Shop<span>ly</span>
        </a>

        {/* NAVIGATION */}
        <nav className="header__nav">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <Link to="/about">About</Link>
        </nav>

        {/* ACTIONS */}
        <div className="header__actions">
          <button 
          className="header__button"
          onClick={() => setVisible(visible === "none" ? "block" : "none")}
          >
            🛒
          </button>

          <button className="header__button">
            ♡
          </button>
        </div>

      </div>

      <Cart />
    </header>
  );
};

export default Header;