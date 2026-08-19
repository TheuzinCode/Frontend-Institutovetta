import React from 'react'
import './Parte4.css'
import { FaWhatsapp } from "react-icons/fa";//icone Whats
import { IoArrowForwardOutline } from "react-icons/io5";//icone seta 

const Parte4 = () => {

    const numero = '5511940818818'
    const mensagem = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Vetta.'
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    return (
        <>
            <section className="pagina-page-whatsApp-parte4">
                <div className="conteudo-page-whatsApp-parte4">

                    <h2 className="titulo-page-whatsApp-parte4">
                        Pronto para dar o{" "}
                        <span className="destaque-titulo-page-whatsApp-parte4">
                            Próximo Passo?
                        </span>
                    </h2>

                    <p className="descricao-page-whatsApp-parte4">
                        Clique no botão e converse agora com um consultor. É rápido, gratuito
                        e sem compromisso.
                    </p>
                    <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Falar no WhatsApp'
                    >
                        <button className="botao-page-whatsApp-parte4">
                            <span className="icone-botao-page-whatsApp-parte4"><FaWhatsapp /></span>
                            Quero Falar Agora no WhatsApp
                            <span className="seta-botao-page-whatsApp-parte4"><IoArrowForwardOutline /></span>
                        </button>
                    </a>

                    <div className="status-page-whatsApp-parte4">
                        <span className="ponto-status-page-whatsApp-parte4"></span>
                        Consultores online agora — resposta em minutos
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parte4