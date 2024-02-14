import "../components/Home.css";
import { FaRegUser } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { FaAngleDoubleRight } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoVue } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { SiMysql } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

import Perfil from "../imgs/Perfil.jpg";
import siteFoto from "../imgs/modelo.png";
import etec from "../imgs/etec.jpg";
import etec2 from "../imgs/etec2.png";
import react from "../imgs/react.png";
import react2 from "../imgs/react2.png";
import php from "../imgs/php.png";
import bradesco from "../imgs/bradesco.png";
import eurogrillp from "../imgs/eurogrill-p.png";
import argus from "../imgs/argus principal.png";
import authenticator from "../imgs/authenticator.png";
import conversor from "../imgs/conversor.png";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Navbar from "./Navbar";

function Home() {
  const [navbarClass, setNavbarClass] = useState("navbar");
  const [menuIconVisible, setMenuIconVisible] = useState(true);

  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };

  const toggleNavbar = () => {
    setNavbarClass((prevClass) =>
      prevClass === "navbar" ? "navbar-responsive" : "navbar"
    );
    setMenuIconVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="main">
      <div className="title">
        <h2>Seu próximo desenvolvedor</h2>
        <h1>Fullstack ;)</h1>
        <p>
          Me chamo William Oliveira Silva, 18 anos, desenvolvedor fullstack
          React, saiba mais sobre mim{" "}
        </p>
        <div className="link-social">
          <a href="https://github.com/WilliamSilvaOliveiraa">
            <FaGithub />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/william-silva-6a981b22a/">
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
          <Link to="/eurogrill" className=" project-container text-not">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={eurogrillp}></img>
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
          </Link>
          <Link to="/authenticator" className="project-container text-not">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={authenticator}></img>
            <h2>Authenticator</h2>
            <p>Autenticador com Temas </p>
            <div className="card-footer">
              <div className="tec-icons">
                <IoLogoVue />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </Link>
        </div>
        <div className="projects-container-3">
          <Link to="/argus" className="project-container text-not">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={argus}></img>
            <h2>Argus</h2>
            <p>Ferramenta De Monitoramento</p>
            <div className="card-footer">
              <div className="tec-icons">
                <TbBrandCpp />
                <SiMysql />
                <IoLogoCss3 />
                <SiAdobephotoshop />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </Link>
          <Link to="/currency" className="project-container text-not">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={conversor}></img>
            <h2>Conversor</h2>
            <p>Teste com cálculos em vue</p>
            <div className="card-footer">
              <div className="tec-icons">
                <FaReact />
                <FaNode />
                <SiAdobeillustrator />
              </div>
              <div className="btn-show">Ver Mais</div>
            </div>
          </Link>
          <div className="project-container desativar">
            <div className="circle4"></div>
            <div className="circle5"></div>
            <div className="circle6"></div>
            <div className="circle7"></div>
            <img src={siteFoto}></img>
            <h2>Empty</h2>
            <p>‎ ‎ </p>
            <div className="card-footer">
              <div className="tec-icons"></div>
              <div className="btn-show">Vazio</div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="skill-title">
          <h1>Informações</h1>
          <h2>Conheça minha formação</h2>
        </div>
        <div className="skill-text-carac">
          <div className="skill-left">
            <div className="skill-info">
              <h1>Formação:</h1>
              <h2>
                ETEC João Belarmino: Técnico em Desenvolvimento de Sistemas -
                Amparo, SP Fevereiro/2021 - Dezembro/2023;
              </h2>
            </div>
            <div className="skill-info">
              <h1>Experiência:</h1>
              <h2>
                • Freelancer, <i>São Paulo</i> - <b>Desenvolvedor FrontEnd</b>
              </h2>
              <h2>
                <i>Dezembro 2023 - Presente</i>
              </h2>
              <br></br>
              <h2 id="h2-bottom">
                <b>Projeto:</b> EuroGrillㅤ
                <a href="http://eurogrillchurrasqueiras.com.br" target="_blank">
                  (Link do Projeto)
                </a>
              </h2>
              <h2>
                O site oferece uma interface fácil de usar para análisar preços,
                fotos e ambientes de um estrutura para futuras intalações de
                churrasqueiras
              </h2>
              <br></br>ㅤ
              <h2>
                • Trabalho de Conclusão de Curso, <i>Amparo</i>
              </h2>
              <h2>
                <i>2023</i>
              </h2>
              <br></br>
              <h2 id="h2-bottom">
                <b>Projeto:</b> Argus ㅤ
                <Link to="/argus" target="_blank">
                  (Link do Projeto)
                </Link>
              </h2>
              <h2>
                Argus foi uma aplicação Desktop produzido em c++ onde é
                responsável por monitorar máquinas de forma remota através de
                uma conexão IP PORTA
              </h2>
            </div>
          </div>
          <div className="skill-right">
            <div className="skill-info">
              <h1>Tecnologias:</h1>
              <h2>
                React<br></br>
                JavaScript(Es6)<br></br>
                HTML<br></br>
                Css<br></br>
                PHP<br></br>
                C++<br></br>
                Bootstrap<br></br>
                Git / Github<br></br>
                User Experience<br></br>
                Figma<br></br>
                Photoshop<br></br>
              </h2>
            </div>
            <div className="skill-info">
              <h1>Idioma:</h1>
              <h2>Português - Nativo</h2>
              <h2>Inglês - Avançado</h2>
            </div>
          </div>
        </div>
        <div className="skill-title">
          <h1>Certificados</h1>
          <h2>Meus cursos e Certificados</h2>
        </div>
        <div className="skill-containers">
          <div className="skill-containers-2">
            <div className="skill-container">
              <div className="skill-img">
                <img className="rect" src={etec}></img>
                <img className="rect2" src={etec2}></img>
              </div>
              <div className="text-skill">
                <h2 id="align-left">Desenvolvimento de Sistemas</h2>
                <p>
                  Formado em Técnico em Desenvolvimentos de Sistemas<br></br>
                  <b>
                    <b>Onde</b>
                  </b>
                  : Etec João Berlamino<br></br>
                  <b>Duração</b>: 3 Anos <br></br> Data: 2021 - 2023 <br></br>
                  <b>Contéudos</b>: Kotlin, PHP 7, React, Laravel, Xamp, MySQL,
                  HeidiSQl, HTML, CSS, Vs, VsCode, C#, C e Arduino.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/1d_b6NyzO_jL34XAb43gDAeOHFDruIjnS/view?usp=sharing"
                target="_blank"
                className="certificate not certificate-big"
              >
                Certificado <FaAngleDoubleRight />
              </a>
            </div>
            <div className="skill-container">
              <div className="skill-img">
                <img className="rect" src={react}></img>
                <img className="rect2" src={react2}></img>
              </div>
              <div className="text-skill">
                <h2 id="align-left">Curso React + Redux Completo</h2>
                <p>
                  Conclusão de Curso React + Redux<br></br>
                  <b>Onde</b>: Udemy<br></br>
                  <b>Duração</b>: 54.5 Horas <br></br> Aulas: 444<br></br>
                  <b>Contéudos</b>: React Js, Redux, Webpack, Redux-Form,
                  MongoDB, Express e Node.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/17xfuwuKK3z1R4p00hyExgKkgBTEWaII1/view?usp=sharing"
                target="_blank"
                className="certificate not certificate-big"
              >
                Certificado <FaAngleDoubleRight />
              </a>
            </div>
          </div>
          <div className="skill-containers-3">
            <div className="skill-container" id="zez">
              <div className="skill-img">
                <img src={php}></img>
              </div>
              <div className="text-skill">
                <h2>Curso Completo de PHP 7</h2>
                <p className="desativar-p">
                  Conclusão de Curso Completo de PHP 7<br></br>
                  <b>Onde</b>: Udemy
                  <br></br>
                  <b>Duração</b>: 33.5 Horas<br></br>Aulas: 138<br></br>Data:
                  2021 - 2023 <br></br>
                  <b>Contéudos</b>: PHP, Banco de Dados e Conceitos MVC e ORM.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/183DsT9fZG8HwE5oa7WYp05HiGhcuem7W/view?usp=sharing"
                target="_blank"
                className="certificate not "
              >
                Certificado <FaAngleDoubleRight />
              </a>
            </div>
            <div className="skill-container" id="zez">
              <div className="skill-img">
                <img src={bradesco}></img>
              </div>
              <div className="text-skill">
                <h2>Curso Bradesco</h2>
                <p className="desativar-p">
                  Sistemas Operacionais - Conceitos Básicos<br></br>
                  <b>Onde</b>: Fundação Bradesco<br></br>
                  <b>Duração</b>: 5 Horas
                </p>
              </div>
              <a
                href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDialog.aspx?AFeaPo%2buSXJjQ4dhIhPPcbL74xYk%2fnS3"
                target="_blank"
                className="certificate not "
              >
                Certificado <FaAngleDoubleRight />
              </a>
            </div>
            <div className="skill-container " id="zez">
              <div className="skill-img">
                <img src={bradesco}></img>
              </div>
              <div className="text-skill">
                <h2>Curso Bradesco</h2>
                <p className="desativar-p">
                  Fundamentos de TI - Hardware e Software<br></br>
                  <b>Onde</b>: Fundação Bradesco<br></br>
                  <b>Duração</b>: 15 Horas
                </p>
              </div>
              <a
                href="https://lms.ev.org.br/mpls/Web/Lms/Student/PrintCertificateDialog.aspx?AFeaPo%2buSXLqYHBTxoppwmOY7JMhlQx9"
                target="_blank"
                className="certificate not"
              >
                Certificado <FaAngleDoubleRight />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <div className="contact-title">
          <h1>Contato</h1>
          <p>
            Caso você tenha se interessado e deseja trabalhar comigo, você pode
            entrar em contato
          </p>
        </div>
        <div className="contacts-type">
          <div className="contact-type">
            <div className="contact-icon">
              <FaWhatsapp />{" "}
            </div>{" "}
            <div className="contact-content center">55 19982249290</div>{" "}
          </div>
          <a
            href="https://www.linkedin.com/in/william-oliver-6a981b22a/"
            target="_blank"
            className="contact-type"
          >
            <div className="contact-icon">
              <FaLinkedin />
            </div>
            <div className="contact-content center">Linked in</div>
          </a>
          <div className="contact-type">
            <div className="contact-icon">
              <SiGmail />
            </div>
            <div className="contact-content center">
              williamsilva20062005@gmail.com
            </div>
          </div>
        </div>
      </div>
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div className="circle11"></div>
      <div className="circle12"></div>
      <div className="circle13"></div>
      <div className="circle14"></div>
      <div className="footer">
        <div className="footer-padding">
          <div className="footer-contents">
            <h1 className="footer-title">Navegue</h1>
            <Link to="/" className="footer-links not">
              Início
            </Link>
            <a
              href="https://linktr.ee/WilliamOliveiraSilva"
              target="_blank"
              className="footer-links not"
            >
              Blog
            </a>
          </div>
          <div className="footer-contents">
            <h1 className="footer-title">Projetos</h1>
            <Link className="footer-links not" to="/eurogrill">
              EuroGrill Ecommerce
            </Link>

            <Link className="footer-links not" to="/argus">
              Argus
            </Link>
            <Link className="footer-links not" to="/argus">
              Authenticator
            </Link>
          </div>
          <div className="footer-contents">
            <h1 className="footer-title">Contato</h1>
            <a className="footer-links-contacts">
              <div className="contact-icon left white">
                <FaWhatsapp />{" "}
              </div>{" "}
              <div className="contact-content white-text">55 19982249290</div>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/william-silva-6a981b22a/"
              target="_blank"
              className="footer-links-contacts not"
            >
              <div className="contact-icon left white">
                <FaLinkedin />
              </div>
              <div className="contact-content white-text">Linked in</div>
            </a>
            <a className="footer-links-contacts">
              <div className="contact-icon left white">
                <SiGmail />
              </div>
              <div className="contact-content white-text">
                williamsilva20062005@gmail.com
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
