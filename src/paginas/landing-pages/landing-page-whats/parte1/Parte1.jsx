import React from 'react'
import './Parte1.css'
import { LuCheckCheck } from "react-icons/lu"; //icone double check
import { CiClock2 } from "react-icons/ci";//icone relogio
import { IoIosLock } from "react-icons/io";//icone cadeado
import { ImUser } from "react-icons/im";//icone user
import { CiStar } from "react-icons/ci";//icone estrela
import { FaWhatsapp } from "react-icons/fa";//icone Whats
import { IoArrowForwardOutline } from "react-icons/io5";//icone seta 


const Parte1 = () => {

    const numero = '5511940818818'
    const mensagem = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Vetta.'
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    return (
        <>
            <section className="pagina-page-whatsApp-parte1">

                <div className="conteudo-page-whatsApp-parte1">


                    {/* COLUNA ESQUERDA */}
                    <div className="coluna-texto-page-whatsApp-parte1">


                        <div className="badge-page-whatsApp-parte1">
                            <span className="ponto-badge-page-whatsApp-parte1"></span>
                            Atendimento via WhatsApp
                        </div>


                        <h1 className="titulo-page-whatsApp-parte1">
                            Fale Direto com Quem Vai{" "}
                            <span className="destaque-titulo-page-whatsApp-parte1">
                                Transformar
                            </span>{" "}
                            Sua Carreira
                        </h1>


                        <p className="descricao-page-whatsApp-parte1">
                            Converse agora mesmo com um consultor especializado. Tire dúvidas,
                            conheça os cursos e descubra o melhor caminho para sua carreira —
                            tudo pelo WhatsApp, sem burocracia.
                        </p>


                        <div className="acoes-page-whatsApp-parte1">

                            <a
                                href={link}
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label='Falar no WhatsApp'
                            >
                                <button className="botao-principal-page-whatsApp-parte1">
                                    <span className="icone-whats-botao-page-whatsApp-parte1"> <FaWhatsapp /></span>
                                    Iniciar Conversa no WhatsApp
                                    <span className="seta-botao-page-whatsApp-parte1"><IoArrowForwardOutline size={20} /></span>
                                </button>
                            </a>
                        </div>


                        <div className="selos-page-whatsApp-parte1">

                            <span className="selo-page-whatsApp-parte1">
                                <span className="icone-selo-page-whatsApp-parte1"><CiClock2 size={15} /></span>
                                Resposta em minutos
                            </span>

                            <span className="selo-page-whatsApp-parte1">
                                <span className="icone-selo-page-whatsApp-parte1"><IoIosLock /></span>
                                Zero compromisso
                            </span>

                            <span className="selo-page-whatsApp-parte1">
                                <span className="icone-selo-page-whatsApp-parte1"><ImUser size={15} /></span>
                                Atendimento humano
                            </span>

                        </div>


                    </div>



                    {/* COLUNA DIREITA - ICONE FLUTUANTE */}
                    <div className="coluna-visual-page-whatsApp-parte1">

                        <div className="quadro-page-whatsApp-parte1">

                            <span className="simbolo-whats-page-whatsApp-parte1"> <FaWhatsapp /></span>


                            <div className="bolha-topo-page-whatsApp-parte1">
                                <FaWhatsapp />
                            </div>


                            <div className="bolha-lateral-page-whatsApp-parte1">
                                <CiStar />
                            </div>


                            <div className="bolha-base-page-whatsApp-parte1">
                                <LuCheckCheck />
                            </div>

                        </div>

                    </div>


                </div>

            </section >
        </>
    )
}

export default Parte1