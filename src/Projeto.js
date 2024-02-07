import "./Projeto.css";
import { FaRegUser } from "react-icons/fa";
import eurogrill from "./imgs/Eurogrill.png";
import m_eurogrill from "./imgs/m_eurogrill.png";

function Projeto() {
  return (
    <div class="projeto-main">
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
      <div className="project-page">
        <div className="project-top">
          <div className="project-logo">
            <img src={eurogrill}></img>
            <h2>texto do projeto</h2>
          </div>
          <div className="project-mockup">
            <img src={m_eurogrill}></img>
          </div>
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
