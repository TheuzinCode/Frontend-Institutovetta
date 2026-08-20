import React from 'react'
import './Parte1.css'

const Parte1 = () => {
    return (
        <>
            <section className="pagina-page-form-parte1">

                <div className="conteudo-page-form-parte1">


                    {/* COLUNA ESQUERDA */}
                    <div className="coluna-esquerda-page-form-parte1">


                        <h1 className="titulo-page-form-parte1">
                            Transforme sua{" "}
                            <span className="destaque-titulo-page-form-parte1">Carreira</span>{" "}
                            com Quem Entende do Futuro
                        </h1>


                        <p className="descricao-page-form-parte1">
                            Cursos livres com metodologia prática, instrutores do mercado e
                            certificação reconhecida. Mais de{" "}
                            <strong>5.000 alunos</strong> formados e{" "}
                            <strong>92% de empregabilidade</strong>.
                        </p>


                        {/* FORMULARIO */}
                        <div className="card-formulario-page-form-parte1">

                            <h2 className="titulo-formulario-page-form-parte1">
                                Agende sua Consultoria Gratuita
                            </h2>


                            <p className="descricao-formulario-page-form-parte1">
                                Preencha os dados e um consultor entrará em contato.
                            </p>


                            <input
                                type="text"
                                className="entrada-page-form-parte1"
                                placeholder="Nome completo"
                            />


                            <input
                                type="email"
                                className="entrada-page-form-parte1"
                                placeholder="Seu melhor e-mail"
                            />


                            <input
                                type="tel"
                                className="entrada-page-form-parte1"
                                placeholder="WhatsApp com DDD"
                            />


                            <select className="selecao-page-form-parte1" defaultValue="">

                                <option value="" disabled>
                                    Área de interesse
                                </option>

                                <option value="marketing">Marketing Digital</option>
                                <option value="dados">Análise de Dados</option>
                                <option value="projetos">Gestão de Projetos</option>
                                <option value="web">Desenvolvimento Web</option>
                                <option value="design">Design UX/UI</option>
                                <option value="ia">Inteligência Artificial</option>

                            </select>


                            <textarea
                                className="area-texto-page-form-parte1"
                                placeholder="Mensagem adicional (opcional)"
                            ></textarea>


                            <button className="botao-page-form-parte1">
                                INSCREVER - SE
                            </button>

                        </div>


                    </div>



                    {/* COLUNA DIREITA */}
                    <div className="coluna-direita-page-form-parte1">

                        <div className="moldura-imagem-page-form-parte1">

                            <img
                                src="https://via.placeholder.com/500x560"
                                alt="Alunos estudando no espaço do instituto"
                            />


                            <div className="cartao-topo-page-form-parte1">

                                <div className="icone-verde-page-form-parte1">
                                    ↑
                                </div>

                                <div>
                                    <strong className="numero-page-form-parte1">
                                        92%
                                    </strong>

                                    <span className="rotulo-page-form-parte1">
                                        Empregabilidade
                                    </span>
                                </div>

                            </div>


                            <div className="cartao-base-page-form-parte1">

                                <div className="icone-laranja-page-form-parte1">
                                    👤
                                </div>

                                <div>
                                    <strong className="numero-page-form-parte1">
                                        5.000+
                                    </strong>

                                    <span className="rotulo-page-form-parte1">
                                        Alunos Formados
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </section>  
        </>
    )
}

export default Parte1