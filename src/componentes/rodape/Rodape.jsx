import React from 'react'
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import "./Rodape.css"
import logo from "../../assets/imgs/Logo-cabecalho.png"

import { Link } from "react-router-dom";
import { useState } from "react";


const Rodape = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();




  };

  return (
    <>
      <footer className="rodape">
        <div className="container-rodape">

          <div className="conteudo-rodape">

            {/* Newsletter */}

            <div className="newsletter-rodape">

              <div className="logo-rodape">
                <img src={logo} alt="Logo" />
              </div>

              <h2 className="titulo-rodape">
                Receba novidades e
                <span> oportunidades exclusivas</span>
              </h2>

              <p className="descricao-rodape">
                Inscreva-se na nossa newsletter e fique por dentro dos
                novos cursos, promoções e conteúdos gratuitos.
              </p>

              <form className="formulario-rodape">

                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" onClick={handleSubmit}>
                  Inscrever-se
                </button>

              </form>

            </div>

            {/* Navegação */}

            <div className="coluna-rodape">

              <h4>NAVEGAÇÃO</h4>

              <Link to={"/"}>
                Home
              </Link>

              <Link to={"/cursos"}>
                Cursos
              </Link>

              <Link to={"/sobre-nos"}>
                Sobre Nós
              </Link>

              <Link to={"/cases-de-sucesso"}>
                Cases
              </Link>

            </div>

            {/* Cursos */}

            <div className="coluna-rodape">

              <h4>CURSOS</h4>

              <a href="/">Gestão de Projetos</a>
              <a href="/">Análise de Dados</a>
              <a href="/">Marketing Digital</a>
              <a href="/">Desenvolvimento Web</a>

            </div>

            {/* Contato */}

            <div className="coluna-rodape">

              <h4>CONTATO</h4>

              <div className="item-contato-rodape">
                <FaMapMarkerAlt />
                <span>R. Sinfonia Popular, 22 - Grajaú </span>
              </div>

              <div className="item-contato-rodape">
                <FaPhoneAlt />
                <span>(11) 94081-8818</span>
              </div>

              <div className="item-contato-rodape">
                <FaEnvelope />
                <span>contato@institutovetta.com.br</span>
              </div>

              <div className="redes-rodape">

                <a href="#">
                  <FaInstagram />
                </a>

                <a href="#">
                  <FaLinkedin />
                </a>

                <a href="#">
                  <FaYoutube />
                </a>

                <a href="#">
                  <FaWhatsapp />
                </a>

              </div>

            </div>

          </div>

          <div className="bottom-rodape">

            <p>
              © 2026 Instituto Vetta Profissionalizante. Todos os direitos reservados.
            </p>

            <div className="links-bottom-rodape">
              <a href="/">Política de Privacidade</a>
              <a href="/">Termos de Uso</a>
            </div>

          </div>

        </div>
      </footer>
    </>
  )
}

export default Rodape