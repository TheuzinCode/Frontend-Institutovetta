import React from 'react'
import "./Parte2.css"
import { LuBrain } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
    import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";

const Parte2 = () => {
    return (
        <>
            <div className="container-central-part2-home">
                <section className="cursos-part2-home">
                    <div className="container-part2-home">
                        <div className="cabecalho-cursos-part2-home">
                            <div className="titulo-area-part2-home">
                                <span className="badge-part2-home">
                                    ● TENDÊNCIA 2026
                                </span>
                                <h1 className="titulo-area-h1-part2-home">
                                    Cursos de <span className="titulo-area-h1-span-part2-home">Inteligência Artificial</span>
                                </h1>
                                <h2 className="titulo-area-h2-part2-home">
                                    que estão transformando carreiras
                                </h2>
                            </div>
                            <Link to={"/cursos"}>
                                <a className="btn-cursos-part2-home">
                                    Ver todos os cursos de IA →
                                </a>
                            </Link>
                        </div>
                        <div className="cards-part2-home">
                            <div className="card-part2-home">
                                <div className="topo-card-part2-home">
                                    <div className="icone-part2-home"><RiRobot2Line /></div>
                                    <span className="tag-part2-home laranja">
                                        Mais Procurado
                                    </span>
                                </div>
                                <h3 className="card-h3-part2-home">IA Generativa & ChatGPT</h3>
                                <p className="card-p-part2-home">
                                    Domine o ChatGPT, Midjourney, Copilot e as principais
                                    ferramentas de IA generativa para turbinar sua produtividade.
                                </p>
                                <div className="rodape-card-part2-home">
                                    <div className='horas-rodape'>
                                        <CiClock2 className='icone-relogio' size={15} />  <span> 40h de conteúdo</span>
                                    </div>

                                    <Link to={"/cursos"} className='saiba-mais'>
                                        <a className="rodape-card-a-part2-home" >Saiba mais →</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-part2-home">
                                <div className="topo-card-part2-home">
                                    <div className="icone-part2-home azul"><LuBrain /></div>
                                    <span className="tag-part2-home azul">
                                        Novo
                                    </span>
                                </div>
                                <h3 className="card-h3-part2-home">IA para Negocios</h3>
                                <p className="card-p-part2-home">
                                    Domine na prática o pilar de Empreendendo com IA nos Negócios, ChatGPT,
                                    comunicação profissional para inovar e escalar os lucros da sua empresa.
                                </p>
                                <div className="rodape-card-part2-home">
                                    <div className='horas-rodape'>
                                        <CiClock2 className='icone-relogio' size={15} />  <span> 120h de conteúdo</span>
                                    </div>
                                    <Link to={"/cursos"} className='saiba-mais'>
                                        <a className="rodape-card-a-part2-home">Saiba mais →</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="card-part2-home">
                                <div className="topo-card-part2-home">
                                    <div className="icone-part2-home azul"><LuBrain /></div>
                                    <span className="tag-part2-home azul">
                                        Novo
                                    </span>
                                </div>
                                <h3 className="card-h3-part2-home">IA para Negocios</h3>
                                <p className="card-p-part2-home">
                                    Automatize tarefas repetitivas, crie agentes inteligentes e
                                    integre IA aos seus fluxos utilizando n8n e LangChain.
                                </p>
                                <div className="rodape-card-part2-home">
                                    <div className='horas-rodape'>
                                        <CiClock2 className='icone-relogio' size={15} />  <span> 60h de conteúdo</span>
                                    </div>
                                    <Link to={"/cursos"} className='saiba-mais'>
                                        <a className="rodape-card-a-part2-home">Saiba mais →</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="destaque-ia-parte2-home">

                    <div className="container-destaque-parte2-home">

                        <div className="texto-destaque-parte2-home">

                            <span className="badge-destaque-parte2-home">
                                ✨ DESTAQUE DO MOMENTO
                            </span>

                            <h2 className="texto-destaque-h2-parte2-home">
                                IA para Profissionais Não-Técnicos
                            </h2>

                            <p>
                                Aprenda a usar IA no seu trabalho sem precisar saber programar.
                                Aumente sua produtividade em até 10x com as ferramentas certas.
                            </p>

                        </div>

                        <div className="imagem-destaque-parte2-home">


                            <img className="imagem-destaque-img-parte2-home" />

                            <Link to={"/cursos"}>
                                <a className="botao-inscrever-parte2-home">
                                    Quero me inscrever →
                                </a>
                            </Link>

                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}

export default Parte2