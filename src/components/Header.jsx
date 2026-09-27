import { Link } from "react-router-dom";

const Header = () => {
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
          <button className="header__button">
            🛒
          </button>

          <button className="header__button">
            ♡
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;