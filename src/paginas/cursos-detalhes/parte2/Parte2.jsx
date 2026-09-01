import React, { useState } from 'react'
import Modal from '../../../componentes/modal/Modal.jsx'
import "./Parte2.css"
import { FaRegLightbulb } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { ImUser } from "react-icons/im";
import { FaStar } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";



const Parte2 = ({ curso }) => {

    const [abaAtiva, setAbaAtiva] = useState("visao");
    const [modal, setModal] = useState(false)

    return (
        <>

            <section className="pagina-cursos-detalhes-parte2">
                <div className="conteudo-cursos-detalhes-parte2">


                    {/* COLUNA ESQUERDA */}
                    <div className="coluna-principal-cursos-detalhes-parte2">


                        {/* ABAS */}
                        <div className="abas-cursos-detalhes-parte2">

                            <button
                                className={
                                    abaAtiva === "visao"
                                        ? "aba-cursos-detalhes-parte2 aba-ativa-cursos-detalhes-parte2"
                                        : "aba-cursos-detalhes-parte2"
                                }
                                onClick={() => setAbaAtiva("visao")}
                            >
                                Visão Geral
                            </button>

                        </div>


                        {/* CARD - O QUE VOCÊ VAI APRENDER */}




                        <div className="card-cursos-detalhes-parte2">

                            <h2 className="titulo-card-cursos-detalhes-parte2">
                                <span className="icone-titulo-cursos-detalhes-parte2"><FaRegLightbulb /></span>
                                O que você vai aprender
                            </h2>

                            <div className="lista-aprendizado-cursos-detalhes-parte2">
                                {curso?.modulos?.map(modulo => (
                                    <div className="item-aprendizado-cursos-detalhes-parte2" key={modulo.id}>
                                        <span className="check-cursos-detalhes-parte2">✓</span>
                                        {modulo.nome}
                                    </div>
                                ))

                                }
                            </div>

                        </div>


                        {/* CARD - SOBRE O CURSO */}
                        <div className="card-cursos-detalhes-parte2">

                            <h2 className="titulo-card-cursos-detalhes-parte2">
                                <span className="icone-titulo-cursos-detalhes-parte2"><IoDocumentTextOutline /></span>
                                Sobre o Curso
                            </h2>


                            <p className="texto-sobre-cursos-detalhes-parte2">
                                {curso.sobreCurso}
                            </p>


                            <div className="estatisticas-cursos-detalhes-parte2">

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2"><FaRegClock size={22} color='#ff6335' /></span>
                                    <strong>{curso?.duracao}h</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Carga Horária
                                    </span>
                                </div>

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2"><ImUser size={22} color='#ff6335' /></span>
                                    <strong>600</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Alunos
                                    </span>
                                </div>

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2"><FaStar size={22} color='#ff6335' /></span>
                                    <strong>{curso?.avaliacao}/5.0</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Avaliação
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>



                    {/* COLUNA DIREITA - CARD DE COMPRA */}
                    <aside className="card-compra-cursos-detalhes-parte2">

                        <div className="linha-preco-cursos-detalhes-parte2">

                            <span className="preco-cursos-detalhes-parte2">
                                Garanta já sua vaga!
                            </span>
                        </div>


                        <p className="oferta-cursos-detalhes-parte2">
                            Inscrições por tempo limitado — inscreva-se agora!
                        </p>


                        <button className="botao-principal-cursos-detalhes-parte2" onClick={() => setModal(true)}>
                            Inscreva-se Agora
                        </button>




                        <div className="garantia-cursos-detalhes-parte2">
                            <span className="icone-garantia-cursos-detalhes-parte2">🛡</span>
                            Garantia de Aprendizado
                        </div>


                        <ul className="beneficios-cursos-detalhes-parte2">

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2"><FaRegClock /></span>
                                {curso.duracao}h de conteúdo em vídeo
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2"><FaArrowDown /></span>
                                Materiais para download
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2"><RiComputerLine /></span>
                                Acesso mobile e desktop
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2"><PiMedal /></span>
                                Certificado de conclusão
                            </li>

                        </ul>

                    </aside>


                </div>

            </section>

            <Modal
                aberto={modal}
                fechar={() => setModal(false)}
                curso={curso?.nome}
            />
        </>
    )
}

export default Parte2