import "./App.css";
import { FaRegUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Perfil from "./imgs/Perfil.jpg";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import siteFoto from "./imgs/modelo.png";
import etec from "./imgs/etec.jpg";
import react from "./imgs/react.png";
import php from "./imgs/php.png";
import bradesco from "./imgs/bradesco.png";
import { FaAngleDoubleRight } from "react-icons/fa";

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
        <div className="skill-title">
          <h1>Habilidades e Certificados</h1>
          <h2>Conheça minha formação</h2>
        </div>
        <div className="skill-containers">
          <div className="skill-containers-2">
            <div className="skill-container">
              <div className="skill-img">
                <img src={etec}></img>
              </div>
              <div className="text-skill">
                <h2>Desenvolvimento de Sistemas</h2>
                <p>
                  Formado em Técnico em Desenvolvimentos de Sistemas<br></br>
                  Onde: Etec João Berlamino<br></br>Duração: 3 Anos <br></br>{" "}
                  Data: 2021 - 2023 <br></br>Conteúdos: Kotlin, PHP 7, React,
                  Laravel, Xamp, MySQL, HeidiSQl, HTML, CSS, Vs, VsCode, C#, C e
                  Arduino.
                </p>
              </div>
              <div className="certificate">
                Certificado <FaAngleDoubleRight />
              </div>
            </div>
            <div className="skill-container">
              <div className="skill-img">
                <img src={react}></img>
              </div>
              <div className="text-skill">
                <h2>Curso React + Redux Completo</h2>
                <p>
                  Conclusão de Curso React + Redux<br></br>Onde: Udemy<br></br>
                  Duração: 54.5 Horas <br></br> Aulas: 444<br></br>Contéudos:
                  React Js, Redux, Webpack, Redux-Form, MongoDB, Express e Node.
                </p>
              </div>
              <div className="certificate">
                Certificado <FaAngleDoubleRight />
              </div>
            </div>
          </div>
          <div className="skill-containers-3">
            <div className="skill-container">
              <div className="skill-img">
                <img src={php}></img>
              </div>
              <div className="text-skill">
                <h2>Curso Completo de PHP 7</h2>
                <p>
                  Conclusão de Curso Completo de PHP 7<br></br>Onde: Udemy
                  <br></br>Duração: 33.5 Horas<br></br>Aulas: 138<br></br>Data:
                  2021 - 2023 <br></br>Conteúdos: PHP, Banco de Dados e
                  Conceitos MVC, ORM e Orientação Ao Objeto.
                </p>
              </div>
              <div className="certificate">
                Certificado <FaAngleDoubleRight />
              </div>
            </div>
            <div className="skill-container">
              <div className="skill-img">
                <img src={bradesco}></img>
              </div>
              <div className="text-skill">
                <h2>Curso Bradesco</h2>
                <p>
                  Sistemas Operacionais - Conceitos Básicos<br></br>
                  Onde: Fundação Bradesco<br></br>Duração: 5 Horas
                </p>
              </div>
              <div className="certificate">
                Certificado <FaAngleDoubleRight />
              </div>
            </div>
            <div className="skill-container">
              <div className="skill-img">
                <img src={bradesco}></img>
              </div>
              <div className="text-skill">
                <h2>Desenvolvimento de Sistemas</h2>
                <p>
                  Fundamentos de TI - Hardware e Software<br></br>
                  Onde: Fundação Bradesco<br></br>Duração: 15 Horas
                </p>
              </div>
              <div className="certificate">
                Certificado <FaAngleDoubleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-title"></div>
        <div className="contacts-type"></div>
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </div>
  );
}

export default App;
