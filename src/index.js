import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Projeto from "./components/Projeto";
import ProjetoArgus from "./components/ProjetoArgus";
import ProjetoAuth from "./components/ProjetoAuth";
import ProjetoCurrency from "./components/ProjetoCurrency";
import ProjetoTodo from "./components/ProjetoTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/eurogrill" element={<Projeto />}></Route>
        <Route path="/argus" element={<ProjetoArgus />}></Route>
        <Route path="/authenticator" element={<ProjetoAuth />}></Route>
        <Route path="/curreny" element={<ProjetoCurrency />}></Route>
        <Route path="/to-do-list" element={<ProjetoTodo />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
