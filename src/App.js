import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Perfil from "./imgs/Perfil.jpg";

function App() {
  return (
    <div class="main">
      <div className="navbar">
        <h1 className="">
          <code>{"<Silva />"}</code>
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
      <div className="about-me">
        <h2>Sobre mim</h2>
        <div className="text-img">
          <p>
            Me chamo William Oliveira Silva e eu amo tecnologia e programação.
            Quando era mais jovem programei em Java e C#, criando jogos e
            plugins de minecraft.<br></br>
            <br></br>Em 2021, decidi ingressar em uma carreira de estudos em
            programação, dessa vez focando na web.
            <br></br>
            <br></br>Escolhi Javascript devido à sua grande comunidade, grande
            potencial de crescimento e possibilidade de reutilização de
            conhecimentos na web, mobile e backend, através de React e Node.
          </p>
          <div className="img-container">
            <div className="img-bola">
              <img src={Perfil}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
