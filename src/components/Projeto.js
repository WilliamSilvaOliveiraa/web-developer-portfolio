import "./Projeto.css";
import { FaRegUser } from "react-icons/fa";
import eurogrill from "../imgs/Eurogrill.png";
import m_eurogrill from "../imgs/m_eurogrill.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated, config } from "react-spring"; // Certifique-se de incluir a importação de 'config'

import React, { useEffect, useState } from "react";

function Projeto() {
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
          <div className="project-logo">
            <img src={eurogrill}></img>
            <h2>Ecommerce e blog de uma empresa de churrasqueiras.</h2>
          </div>
          <animated.div className="project-mockup" style={mockupAnimation}>
            <img src={m_eurogrill} alt="Mockup Eurogrill" />
          </animated.div>
        </div>
        <div className="project-buttons">
          <a
            href="http://eurogrillchurrasqueiras.com.br"
            target="_blank"
            className="project-open"
          >
            <p>Abrir Projeto</p>
          </a>

          <a
            href="https://github.com/WilliamSilvaOliveiraa/eurogrill-website"
            target="_blank"
            className="project-repo"
          >
            <p>Abrir Repositório</p>
          </a>
        </div>
      </div>
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
              href="https://www.linkedin.com/in/william-oliver-6a981b22a/"
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
      <div className="circle8"></div>
      <div className="circle9"></div>
      <div className="circle10"></div>
    </div>
  );
}

export default Projeto;
