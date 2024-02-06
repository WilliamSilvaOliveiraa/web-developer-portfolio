import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div class="main">
      <div className="navbar">
        <h1 className="">
          <code>{"<William />"}</code>
        </h1>

        <div className="links">
          <a href="">Blog</a>
          <a href="">EuroGrill Ecommerce</a>
          <a href="">Themed Authenticator </a>
          <a href="">Currency converter</a>
          <a href="">Argus</a>
        </div>

        <FaRegUser className="icone-user" />
      </div>
      <div className="title">
        <h2>Seu próximo desenvolvedor</h2>
        <h1>Fullstack ;)</h1>
        <p>
          Me chamo William Oliveira Silva, 18 anos, desenvolvedor fullstack
          React, saiba mais sobre mim{" "}
        </p>
        <div className="link-social">
          <a href="">
            <FaGithub />
            GitHub
          </a>
          <a href="">
            <FaLinkedin />
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
