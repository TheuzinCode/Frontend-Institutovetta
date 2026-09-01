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
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";




const Rodape = () => {



  const linkInstagram = "https://www.instagram.com/institutovetta/"
  const linkFacebook = "https://www.facebook.com/profile.php?id=61589252169527"


  const numero = '5511940818818';
  const mensagem = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Vetta.';

  const linkWhats = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  const [email, setEmail] = useState("");

  const linkUrl = `http://localhost:8080/novidade/novo`

  async function novidade(e) {
    e.preventDefault();

    if (!email) {
      alert("Por favor, preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      alert("Digite um email válido");
      return;
    }

    const novidadeEmail = {
      email: email
    };

    try {
      const response = await fetch(linkUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(novidadeEmail)
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar");
      }

      const data = await response.json();

      setEmail("")

    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao salvar. Por favor, tente novamente.");
    }
  }

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

                <button type="submit" onClick={novidade}>
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

              <Link to={"/cursos"}>
                Informática Completa
              </Link>
              <Link to={"/cursos"}>
                Marketing Digital
              </Link>
              <Link to={"/cursos"}>
                Desenvolvimento Web
              </Link>
              <Link to={"/cursos"}>
                Assistente Administrativo
              </Link>

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

                <a href={linkInstagram}
                  target='_blank'>
                  <FaInstagram />
                </a>

                <a href={linkFacebook}
                  target='_blank'>
                  <FaFacebook />
                </a>

                <a href={linkWhats}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Falar no WhatsApp'>
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