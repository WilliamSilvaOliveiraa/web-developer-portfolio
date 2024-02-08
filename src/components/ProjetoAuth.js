import "./Projeto.css";
import "./ProjetoAuth.css";
import { FaRegUser } from "react-icons/fa";
import auth from "../imgs/auth.png";
import m_eurogrill from "../imgs/m_eurogrill.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated, config } from "react-spring"; // Certifique-se de incluir a importação de 'config'
import m_authenticator from "../imgs/m-authenticator.png";
import React, { useEffect, useState } from "react";

function ProjetoAuth() {
  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [showMockup, setShowMockup] = useState(false);

  // Use o hook useSpring para animar a escala da div com um efeito elástico
  const mockupAnimation = useSpring({
    from: { opacity: 0, scale: 0.8 },
    to: {
      opacity: showMockup ? 1 : 0,
      scale: showMockup ? 1 : 0.8,
    },
    config: config.wobbly,
  });

  useEffect(() => {
    // Ao montar o componente, inicie a animação
    setShowMockup(true);
  }, []);

  return (
    <div class="projeto-main">
      <div className="navbar">
        <Link to="/" className="text-not">
          {" "}
          <h1 className="">
            <code>{"<Silva />"}</code>
          </h1>
        </Link>

        <div className="links">
          <Link to="/eurogrill"> EuroGrill Ecommerce</Link>
          <Link to="/authenticator"> Themed Authenticator</Link>
          <Link to="/currency"> Currency Converter</Link>
          <Link to="/argus"> Argus</Link>
        </div>

        <a
          className="pointer"
          onClick={() =>
            handleExternalLinkClick("https://linktr.ee/WilliamOliveiraSilva")
          }
        >
          {" "}
          <FaRegUser className="icone-user" />
        </a>
      </div>
      <div className="project-page">
        <div className="project-top">
          <div className="project-logo ">
            <img src={auth}></img>
            <h2
              className="diminuir
            "
            >
              Autenticador de Registro e Login com Temas Escuro e Claro
            </h2>
          </div>
          <animated.div className="project-mockup" style={mockupAnimation}>
            <img src={m_authenticator} alt="Mockup Eurogrill" />
          </animated.div>
        </div>
        <div className="project-buttons">
          <a href="#" className="project-open">
            <p>Abrir Projeto</p>
          </a>
          <a href="#" className="project-repo">
            <p>Abrir Repositório</p>
          </a>
        </div>
      </div>
      <div className="footer">
        <div className="footer-padding">
          <div className="footer-contents">
            <h1 className="footer-title">Navegue</h1>
            <a className="footer-links">Início</a>
            <a className="footer-links">Blog</a>
            <a className="footer-links">Projetos</a>
          </div>
          <div className="footer-contents">
            <h1 className="footer-title">Projetos</h1>
            <a className="footer-links">EuroGrill</a>
            <a className="footer-links">Argus</a>
            <a className="footer-links">Themed Authenticator</a>
          </div>
          <div className="footer-contents">
            <h1 className="footer-title">Contato</h1>
            <a className="footer-links-contacts">
              <div className="contact-icon left white">
                <FaWhatsapp />{" "}
              </div>{" "}
              <div className="contact-content white-text">55 19982249290</div>{" "}
            </a>
            <a className="footer-links-contacts">
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
      <div className="circle8"></div>
      <div className="circle9"></div>
      <div className="circle10"></div>
    </div>
  );
}

export default ProjetoAuth;
