import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Perfil from "./imgs/Perfil.jpg";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import siteFoto from "./imgs/modelo.png";

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
            Me chamo William Oliveira Silva e amo tecnologia e programação.
            Quando era mais jovem programei em Java e C#, criando jogos e
            plugins do jogo Minecraft.<br></br>
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
      <div className="projects">
        <div className="title-projects">
          <h1>Projetos</h1>
          <h2>Veja os projetos onde coloquei meu conhecimento em prática</h2>
        </div>
        <div className="projects-container-2">
          <div className="project-container">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>EuroGrill</h2>
            <p>Ecommerce e blog local</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </div>
          <div className="project-container">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>EuroGrill</h2>
            <p>Ecommerce e blog local</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </div>
        </div>
        <div className="projects-container-3">
          <div className="project-container">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>EuroGrill</h2>
            <p>Ecommerce e blog local</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </div>
          <div className="project-container">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>EuroGrill</h2>
            <p>Ecommerce e blog local</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </div>
          <div className="project-container">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>EuroGrill</h2>
            <p>Ecommerce e blog local</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skill-title"></div>
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </div>
  );
}

export default App;
