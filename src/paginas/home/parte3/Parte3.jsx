import React from 'react'
import { FiAward, FiClock, FiMonitor, FiArrowRight, } from "react-icons/fi";
import "./Parte3.css"
import { Link } from "react-router-dom";
import automacao from "../../../assets/imgs/Automação com IA n8n.svg";
import Desenvolvimento from "../../../assets/imgs/Desenvolvimento web.svg"
import criacao from "../../../assets/imgs/Criação de Apps com IA.svg"

const Parte3 = () => {
    return (
        <>

            <section className="secao-parte3-home">

                <div className="container-parte3-home">

                    <div className="cabecalho-parte3-home">

                        <div className="badge-parte3-home">
                            <FiAward />
                            <span>CURSOS EM DESTAQUE</span>
                        </div>

                        <h2 className="titulo-parte3-home">
                            Aprenda <span>com quem</span> é referência
                        </h2>

                        <p className="descricao-parte3-home">
                            Cursos desenvolvidos por especialistas do mercado,
                            com foco em resultados práticos e empregabilidade.
                        </p>

                    </div>

                    <div className="cards-parte3-home">
                        {/* CARD 1 */}
                        <div className="card-parte3-home">
                            <div className="imagem-parte3-home">

                                {/* COLOCAR IMAGEM */}
                                <img src={criacao}/>

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>
                                <span className="status-laranja-parte3-home">
                                    Mais Procurado
                                </span>
                            </div>
                            <div className="conteudo-card-parte3-home">

                                <h3>
                                    Criação de Apps com IA
                                </h3>

                                <p>
                                    Desenvolva aplicativos utilizando
                                    Inteligência Artificial e tecnologia moderna.
                                    Aprenda programação, criação de interfaces
                                    e novas ferramentas digitais.
                                </p>

                                <div className="infos-parte3-home">

                                    <span>
                                        <FiClock />
                                        90h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Presencial
                                    </span>

                                </div>

                                <Link to={"/cursos"}>
                                    <button className="botao-card-parte3-home">
                                        Ver Detalhes
                                    </button>
                                </Link>


                            </div>

                        </div>

                        {/* CARD 2 */}

                        <div className="card-parte3-home">

                            <div className="imagem-parte3-home">

                                {/* COLOCAR IMAGEM */}
                                <img src={automacao} />

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>

                                <span className="status-azul-parte3-home">
                                    Novo
                                </span>

                            </div>

                            <div className="conteudo-card-parte3-home">

                                <h3>
                                    Automação com IA & n8n
                                </h3>

                                <p>
                                    Automatize tarefas repetitivas, crie agentes
                                    inteligentes e integre IA aos seus fluxos
                                    utilizando n8n, LangChain e APIs.
                                </p>

                                <div className="infos-parte3-home">

                                    <span>
                                        <FiClock />
                                        120h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Presencial
                                    </span>

                                </div>

                                <Link to={"/cursos"}>
                                    <button className="botao-card-parte3-home">
                                        Ver Detalhes
                                    </button>
                                </Link>


                            </div>

                        </div>

                        {/* CARD 3 */}

                        <div className="card-parte3-home">

                            <div className="imagem-parte3-home">

                                {/* COLOCAR IMAGEM */}
                                <img src={Desenvolvimento} />

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>

                                <span className="status-laranja-parte3-home">
                                    Em Alta
                                </span>

                            </div>

                            <div className="conteudo-card-parte3-home">

                                <h3>
                                    Desenvolvimento Web
                                </h3>

                                <p>
                                    Aprenda a desenvolver sistemas e páginas para internet. 
                                    Domine programação, banco de dados e tecnologias essenciais da web.
                                </p>

                                <div className="infos-parte3-home">

                                    <span>
                                        <FiClock />
                                        100h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Presencial
                                    </span>

                                </div>

                                <Link to={"/cursos"}>
                                    <button className="botao-card-parte3-home">
                                        Ver Detalhes
                                    </button>
                                </Link>

                            </div>

                        </div>

                    </div>

                    <div className="container-botao-parte3-home">

                        <Link to={"/cursos"} className='saiba-mais'>
                            <button className="botao-ver-todos-parte3-home">

                                Ver Todos os Cursos

                                <FiArrowRight />

                            </button>
                        </Link>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Parte3