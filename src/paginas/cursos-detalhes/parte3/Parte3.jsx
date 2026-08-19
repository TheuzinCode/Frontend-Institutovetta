import React from 'react'
import "./Parte3.css"

const Parte3 = () => {
    return (
        <>
            <section className="pagina-cursos-detalhes-parte3">

                <div className="conteudo-cursos-detalhes-parte3">


                    <h2 className="titulo-cursos-detalhes-parte3">
                        Cursos <span>Relacionados</span>
                    </h2>


                    <div className="grade-cursos-detalhes-parte3">


                        {/* CARD 1 */}
                        <div className="card-cursos-detalhes-parte3">

                            <div className="imagem-cursos-detalhes-parte3">

                                <img
                                    src="https://via.placeholder.com/400x220"
                                    alt="Machine Learning com Python"
                                />

                                <span className="selo-novo-cursos-detalhes-parte3">
                                    Novo
                                </span>

                            </div>


                            <div className="info-cursos-detalhes-parte3">

                                <span className="categoria-cursos-detalhes-parte3">
                                    Inteligência Artificial
                                </span>

                                <h3 className="nome-curso-cursos-detalhes-parte3">
                                    Machine Learning com Python
                                </h3>

                                <div className="rodape-cursos-detalhes-parte3">

                                    <div className="dados-cursos-detalhes-parte3">
                                        <span className="estrela-cursos-detalhes-parte3">★</span>
                                        <span className="nota-cursos-detalhes-parte3">4.8</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                        <span className="horas-cursos-detalhes-parte3">120h</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                    </div>

                                    <strong className="preco-cursos-detalhes-parte3">
                                        R$ 897
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* CARD 2 */}
                        <div className="card-cursos-detalhes-parte3">

                            <div className="imagem-cursos-detalhes-parte3">

                                <img
                                    src="https://via.placeholder.com/400x220"
                                    alt="Automação com IA e n8n"
                                />

                                <span className="selo-alta-cursos-detalhes-parte3">
                                    Em Alta
                                </span>

                            </div>


                            <div className="info-cursos-detalhes-parte3">

                                <span className="categoria-cursos-detalhes-parte3">
                                    Inteligência Artificial
                                </span>

                                <h3 className="nome-curso-cursos-detalhes-parte3">
                                    Automação com IA &amp; n8n
                                </h3>

                                <div className="rodape-cursos-detalhes-parte3">

                                    <div className="dados-cursos-detalhes-parte3">
                                        <span className="estrela-cursos-detalhes-parte3">★</span>
                                        <span className="nota-cursos-detalhes-parte3">4.9</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                        <span className="horas-cursos-detalhes-parte3">60h</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                    </div>

                                    <strong className="preco-cursos-detalhes-parte3">
                                        R$ 597
                                    </strong>

                                </div>

                            </div>

                        </div>


                        {/* CARD 3 */}
                        <div className="card-cursos-detalhes-parte3">

                            <div className="imagem-cursos-detalhes-parte3">

                                <img
                                    src="https://via.placeholder.com/400x220"
                                    alt="Gestão de Projetos com Agile e Scrum"
                                />

                            </div>


                            <div className="info-cursos-detalhes-parte3">

                                <span className="categoria-cursos-detalhes-parte3">
                                    Gestão
                                </span>

                                <h3 className="nome-curso-cursos-detalhes-parte3">
                                    Gestão de Projetos com Agile &amp; Scrum
                                </h3>

                                <div className="rodape-cursos-detalhes-parte3">

                                    <div className="dados-cursos-detalhes-parte3">
                                        <span className="estrela-cursos-detalhes-parte3">★</span>
                                        <span className="nota-cursos-detalhes-parte3">4.7</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                        <span className="horas-cursos-detalhes-parte3">80h</span>
                                        <span className="ponto-cursos-detalhes-parte3">•</span>
                                    </div>

                                    <strong className="preco-cursos-detalhes-parte3">
                                        R$ 397
                                    </strong>

                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}

export default Parte3