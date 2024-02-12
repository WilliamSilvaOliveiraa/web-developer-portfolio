import "./Projeto.css";
import "./ProjetoArgus.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import argus from "../imgs/argus1.png";
import m_argus from "../imgs/m-argus.png";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useSpring, animated, config } from "react-spring";
import video from "../imgs/argus final2.mp4";
import argusprincipal from "../imgs/argus principal.png";
import argus2 from "../imgs/argus2.png";
import argus3 from "../imgs/argus3.png";
import argus4 from "../imgs/argus4.png";
import argus6 from "../imgs/argus6.png";
import argusfinal1 from "../imgs/argusfinal1.png";
import { FaAnglesDown } from "react-icons/fa6";

function ProjetoArgus() {
  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank");
  };
  useEffect(() => {
    //  Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  const [showMockup, setShowMockup] = useState(false);

  //Use o hook useSpring para animar a escala da div com um efeito elástico
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
      <div className="project-page">
        <div className="project-top">
          <div className="project-logo">
            <img src={argus}></img>
            <h2 className="diminuir-argus">
              Ferramenta Destok Para Monitoramento Remoto Sobre Outras Máquinas
            </h2>
          </div>
          <animated.div className="project-mockup" style={mockupAnimation}>
            <img src={m_argus} alt="Mockup Eurogrill" />
          </animated.div>
        </div>
        <div className="seta-argus">
          <FaAnglesDown className="size" />
        </div>
      </div>
      <div className="argus-section">
        <div className="argus-title">
          <h2>Oque foi o Argus?</h2>
          <p>
            Argus foi o meu TCC do curso de desenvolvimentos de sistemas
            desenvolvido na Etec João Berlamino<br></br>O objetivo do Argus foi
            solucionar problemas em questões de monitoramento em local
            corporativo e escolar, onde alunos constantemente deixavam a aula de
            lado para ficarem fazendo qualquer outra coisa no computador da
            escola.
          </p>
        </div>
        <div className="argus-img">
          <img src={argusprincipal}></img>
        </div>
        <div className="argus-text-img">
          <div className="argus-text">
            <p>
              O projeto contava com uma conexão entre máquinas através de IP e
              Porta, onde o back-end criava um executor manipulado com o IP e
              Porta do Computador que iria monitorar e era injetado e executado
              esse mesmo executor nas máquinas que iriam ser monitoradas.{" "}
            </p>
          </div>
          <div className="argus-imgs">
            <img src={argus3}></img>
            <img src={argus4}></img>
          </div>
          <div className="argus-text">
            <p>
              Tendo essa conexão ativa, a máquina CLIENT onde seria a monitorada
              tirava prints em tempo real de sua tela e logo em seguida era
              transformado essas prints em bytes e então eram passados para a
              máquina HOST através do laço de repetição WHILE onde eram
              convertidos para frames e renderizados sequencialmente,
              transformando então a sensação de video em tempo real.{" "}
            </p>
          </div>
          <div className="argus-imgs">
            <img src={argus2}></img>
            <img src={argus6}></img>
          </div>
        </div>
        <h1 className="final-text">Demonstração Final</h1>
        <div className="argus-final">
          <div className="argus-img-final">
            <img src={argusfinal1}></img>
          </div>
          <div className="argus-video">
            <video controls>
              <source src={video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
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

export default ProjetoArgus;
