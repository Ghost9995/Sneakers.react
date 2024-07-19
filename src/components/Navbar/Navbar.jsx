import "./Navbar.css";
import logo from "../img/logo.png";
import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-nav container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-title">
            <h1>REACT SNEAKERS</h1>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <ul className="navbar-right">
          <li>
            <LuShoppingCart />
            <p>1205 руб.</p>
          </li>
          <li>
            <LuHeart />
            <p>Bookmarks</p>
          </li>
          <li>
            <LuUserCircle />
            <p>Profile</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
