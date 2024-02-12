import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header>
      <h3> Logo </h3>
      <nav ref={navRef}>
        <Link className="link" to="/eurogrill">
          EuroGrill Ecommerce
        </Link>
        <Link className="link" to="/authenticator">
          Themed Authenticator
        </Link>
        <Link className="link" to="/currency">
          Currency Converter
        </Link>
        <Link className="link" to="/argus">
          Argus
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
