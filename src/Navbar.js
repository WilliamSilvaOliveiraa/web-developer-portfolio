import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-main">
      <h1 className="texto-logo">
        <code>{"<William />"}</code>
      </h1>

      <div>
        <a href="">Blog</a>
        <a href="">EuroGrill Ecommerce</a>
        <a href="">Themed Authenticator </a>
        <a href="">Currency converter</a>
        <a href="">Argus</a>
      </div>
      <FaUser className="icone-user" />
    </div>
  );
}

export default Navbar;
