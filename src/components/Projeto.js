import "./Projeto.css";
import { FaRegUser } from "react-icons/fa";
import eurogrill from "../imgs/Eurogrill.png";
import m_eurogrill from "../imgs/m_eurogrill.png";
import { Link } from "react-router-dom";
import { useSpring, animated, config } from "react-spring"; // Certifique-se de incluir a importação de 'config'

import React, { useEffect, useState } from "react";

function Projeto() {
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
        <Link to="/">
          {" "}
          <h1 className="">
            <code>{"<Silva />"}</code>
          </h1>
        </Link>

        <div className="links">
          <a href="">EuroGrill Ecommerce</a>
          <a href="">Themed Authenticator </a>
          <a href="">Currency converter</a>
          <a href="">Argus</a>
        </div>

        <FaRegUser className="icone-user" />
      </div>
      <div className="project-page">
        <div className="project-top">
          <div className="project-logo">
            <img src={eurogrill}></img>
            <h2>Ecommerce e blog sobre uma empresa de churrasqueiras.</h2>
          </div>
          <animated.div className="project-mockup" style={mockupAnimation}>
            <img src={m_eurogrill} alt="Mockup Eurogrill" />
          </animated.div>
        </div>
        <div className="project-buttons">
          <a href="#" className="project-open">
            Abrir Projeto
          </a>
          <a href="#" className="project-repo">
            Abrir Repositório
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projeto;
