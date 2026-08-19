import React, { useState }from 'react'
import "./Parte2.css"

const Parte2 = () => {

    const [abaAtiva, setAbaAtiva] = useState("visao");
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

                            <button
                                className={
                                    abaAtiva === "curriculo"
                                        ? "aba-cursos-detalhes-parte2 aba-ativa-cursos-detalhes-parte2"
                                        : "aba-cursos-detalhes-parte2"
                                }
                                onClick={() => setAbaAtiva("curriculo")}
                            >
                                Currículo
                            </button>

                            <button
                                className={
                                    abaAtiva === "instrutor"
                                        ? "aba-cursos-detalhes-parte2 aba-ativa-cursos-detalhes-parte2"
                                        : "aba-cursos-detalhes-parte2"
                                }
                                onClick={() => setAbaAtiva("instrutor")}
                            >
                                Instrutor
                            </button>

                        </div>


                        {/* CARD - O QUE VOCÊ VAI APRENDER */}
                        <div className="card-cursos-detalhes-parte2">

                            <h2 className="titulo-card-cursos-detalhes-parte2">
                                <span className="icone-titulo-cursos-detalhes-parte2">💡</span>
                                O que você vai aprender
                            </h2>


                            <div className="lista-aprendizado-cursos-detalhes-parte2">

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Dominar o ChatGPT para produtividade profissional
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Criar imagens com Midjourney e DALL-E
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Automatizar tarefas repetitivas com IA
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Escrever prompts eficientes (Prompt Engineering)
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Usar IA para criar conteúdo, relatórios e apresentações
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Integrar IA no seu fluxo de trabalho diário
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Ferramentas de IA para marketing, vendas e gestão
                                </div>

                                <div className="item-aprendizado-cursos-detalhes-parte2">
                                    <span className="check-cursos-detalhes-parte2">✓</span>
                                    Construir agentes de IA sem programar
                                </div>

                            </div>

                        </div>


                        {/* CARD - SOBRE O CURSO */}
                        <div className="card-cursos-detalhes-parte2">

                            <h2 className="titulo-card-cursos-detalhes-parte2">
                                <span className="icone-titulo-cursos-detalhes-parte2">📄</span>
                                Sobre o Curso
                            </h2>


                            <p className="texto-sobre-cursos-detalhes-parte2">
                                Este curso foi desenvolvido para profissionais que desejam dominar
                                as ferramentas de Inteligência Artificial Generativa mais
                                utilizadas no mercado. Você aprenderá a usar o ChatGPT, Midjourney,
                                Copilot e dezenas de outras ferramentas para automatizar tarefas,
                                criar conteúdo de alta qualidade e aumentar sua produtividade em
                                até 10x. Não é necessário conhecimento técnico prévio — o curso é
                                100% prático e focado em resultados reais.
                            </p>


                            <div className="estatisticas-cursos-detalhes-parte2">

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2">🕐</span>
                                    <strong>40h</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Carga Horária
                                    </span>
                                </div>

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2">👤</span>
                                    <strong>3.842</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Alunos
                                    </span>
                                </div>

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2">📊</span>
                                    <strong>Iniciante</strong>
                                    <span className="label-estatistica-cursos-detalhes-parte2">
                                        Nível
                                    </span>
                                </div>

                                <div className="box-estatistica-cursos-detalhes-parte2">
                                    <span className="icone-estatistica-cursos-detalhes-parte2">⭐</span>
                                    <strong>4.9/5.0</strong>
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
                                R$ 497
                            </span>

                            <span className="preco-antigo-cursos-detalhes-parte2">
                                R$ 997
                            </span>

                        </div>


                        <p className="oferta-cursos-detalhes-parte2">
                            -50% OFF — Oferta por tempo limitado!
                        </p>


                        <button className="botao-principal-cursos-detalhes-parte2">
                            Matricular-se Agora
                        </button>


                        <button className="botao-secundario-cursos-detalhes-parte2">
                            Experimente Grátis
                        </button>


                        <div className="garantia-cursos-detalhes-parte2">
                            <span className="icone-garantia-cursos-detalhes-parte2">🛡</span>
                            Garantia de 7 dias ou seu dinheiro de volta
                        </div>


                        <ul className="beneficios-cursos-detalhes-parte2">

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2">🕐</span>
                                40h de conteúdo em vídeo
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2">⤓</span>
                                Materiais para download
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2">∞</span>
                                Acesso vitalício
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2">📱</span>
                                Acesso mobile e desktop
                            </li>

                            <li>
                                <span className="icone-beneficio-cursos-detalhes-parte2">🎖</span>
                                Certificado de conclusão
                            </li>

                        </ul>

                    </aside>


                </div>

            </section>


        </>
    )
}

export default Parte2