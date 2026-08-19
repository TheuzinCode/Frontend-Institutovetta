import React from 'react'
import {
    FiAward,
    FiClock,
    FiMonitor,
    FiArrowRight,
} from "react-icons/fi";
import "./Parte3.css"

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
                                <img />

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>
                                <span className="status-laranja-parte3-home">
                                    Mais Procurado
                                </span>
                            </div>
                            <div className="conteudo-card-parte3-home">

                                <h3>
                                    IA Generativa & ChatGPT
                                </h3>

                                <p>
                                    Domine o ChatGPT, Midjourney, Copilot e as
                                    principais ferramentas de IA generativa.
                                    Aumente sua produtividade e destaque-se
                                    no mercado.
                                </p>

                                <div className="infos-parte3-home">

                                    <span>
                                        <FiClock />
                                        40h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Online
                                    </span>

                                </div>

                                <button className="botao-card-parte3-home">
                                    Ver Detalhes
                                </button>

                            </div>

                        </div>

                        {/* CARD 2 */}

                        <div className="card-parte3-home">

                            <div className="imagem-parte3-home">

                                {/* COLOCAR IMAGEM */}
                                <img />

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>

                                <span className="status-azul-parte3-home">
                                    Novo
                                </span>

                            </div>

                            <div className="conteudo-card-parte3-home">

                                <h3>
                                    Machine Learning com Python
                                </h3>

                                <p>
                                    Construa modelos preditivos, redes neurais
                                    e sistemas de recomendação utilizando
                                    Python, TensorFlow e Scikit-Learn.
                                </p>

                                <div className="infos-parte3-home">

                                    <span>
                                        <FiClock />
                                        120h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Online
                                    </span>

                                </div>

                                <button className="botao-card-parte3-home">
                                    Ver Detalhes
                                </button>

                            </div>

                        </div>

                        {/* CARD 3 */}

                        <div className="card-parte3-home">

                            <div className="imagem-parte3-home">

                                {/* COLOCAR IMAGEM */}
                                <img />

                                <span className="categoria-parte3-home">
                                    Inteligência Artificial
                                </span>

                                <span className="status-laranja-parte3-home">
                                    Em Alta
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
                                        60h de conteúdo
                                    </span>

                                    <span>
                                        <FiMonitor />
                                        Online
                                    </span>

                                </div>

                                <button className="botao-card-parte3-home">
                                    Ver Detalhes
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="container-botao-parte3-home">

                        <button className="botao-ver-todos-parte3-home">

                            Ver Todos os Cursos

                            <FiArrowRight />

                        </button>

                    </div>

                </div>

            </section>
        </>
    )
}

export default Parte3