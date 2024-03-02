import { Link } from "react-router-dom";
import { FaTimes, FaBars, FaRegUser } from "react-icons/fa";
import { useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Adiciona ou remove a classe 'no-scroll' no corpo da página
  if (isNavVisible) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }

  // Fecha a navegação responsiva quando um link é clicado
  const closeNavOnLinkClick = () => {
    setIsNavVisible(false);
  };
  return (
    <header>
      <Link to="/" className="text-not">
        <h1>
          <code>{"<Silva />"}</code>
        </h1>
      </Link>
      <nav ref={navRef} className={isNavVisible ? "responsive-nav" : ""}>
        <a
          className="pointer "
          id="not-visib"
          onClick={() =>
            handleExternalLinkClick("https://linktr.ee/WilliamOliveiraSilva")
          }
        >
          <FaRegUser className="icone-user" />
        </a>
        <Link className="link" to="/eurogrill" onClick={closeNavOnLinkClick}>
          EuroGrill Ecommerce
        </Link>
        <Link className="link" to="/template" onClick={closeNavOnLinkClick}>
          Landing Page
        </Link>
        <Link
          className="link"
          to="/authenticator"
          onClick={closeNavOnLinkClick}
        >
          Themed Authenticator
        </Link>
        <Link className="link" to="/currency" onClick={closeNavOnLinkClick}>
          Currency Converter
        </Link>
        <Link className="link" to="/argus" onClick={closeNavOnLinkClick}>
          Argus
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn " onClick={showNavbar}>
        <FaBars />
      </button>
      <a
        className="pointer "
        id="visib"
        onClick={() =>
          handleExternalLinkClick("https://linktr.ee/WilliamOliveiraSilva")
        }
      >
        <FaRegUser className="icone-user" />
      </a>
    </header>
  );
}

export default Navbar;
