import { LuShoppingCart, LuHeart, LuUserCircle } from "react-icons/lu";
import "./Navbar.css";
import logo from "../img/logo.png";
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-nav container">
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} />
          </div>
          <div className="navbar-title">
            <h1>REACT SNEAKERS</h1>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <div className="navbar-right">
          <li>
            <LuShoppingCart />
            <p>13,69 $</p>
          </li>
          <li>
            <LuHeart />
            <p>Bookmarks</p>
          </li>
          <li>
            <LuUserCircle />
            <p>Profile</p>
          </li>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
