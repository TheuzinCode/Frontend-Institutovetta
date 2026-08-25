import React from 'react'
import "./Parte1.css"
import { Link } from "react-router-dom";

const Parte1 = ({ curso }) => {

    if (!curso) {
        return <h1>Carregando...</h1>;
    }

    return (
        <>
            <section className="pagina-cursos-detalhes-completo">

                <div className="conteudo-cursos-detalhes-completo">

                    <div className="area-informacoes-cursos-detalhes-completo">

                        <div className="breadcrumb-cursos-detalhes-completo">
                           <Link to={"/"} className="breadcrumb-cursos-detalhes-completo">Home</Link>  
                           <span>›</span> 
                           <Link to={"/cursos"}className="breadcrumb-cursos-detalhes-completo">Cursos</Link> 
                           <span>›</span> 
                           {curso?.nome}
                        </div>


                        <div className="tags-cursos-detalhes-completo">

                            <span className="tag-principal-cursos-detalhes-completo">
                                Inteligência Artificial
                            </span>

                            <span className="tag-popular-cursos-detalhes-completo">
                                Mais Procurado
                            </span>

                            <span className="tag-nivel-cursos-detalhes-completo">
                                Iniciante
                            </span>

                        </div>


                        <h1 className="titulo-cursos-detalhes-completo">
                            {curso?.nome}
                        </h1>


                        <p className="descricao-cursos-detalhes-completo">
                            {curso.descricao}
                        </p>


                        <div className="avaliacao-cursos-detalhes-completo">

                            <span className="estrelas-cursos-detalhes-completo">
                                <span className="estrelas-cursos-detalhes-completo">
                                    {"★".repeat(curso.avaliacao)}
                                    {"☆".repeat(5 - curso.avaliacao)}
                                </span>
                            </span>

                            <strong className="nota-cursos-detalhes-completo">
                                {curso.avaliacao}
                            </strong>

                            <span className="item-info-cursos-detalhes-completo">
                                ◉ {curso?.duracao} de conteúdo
                            </span>

                            <span className="item-info-cursos-detalhes-completo">
                                ▣ Presencial
                            </span>

                            <span className="item-info-cursos-detalhes-completo">
                                ♧ Certificado incluso
                            </span>

                        </div>


                        <div className="instrutor-cursos-detalhes-completo">

                            { /*  <div className="foto-instrutor-cursos-detalhes-completo">
                                <img
                                    src="https://via.placeholder.com/45"
                                    alt="Instrutor"
                                />
                            </div> */ }

                        </div>

                    </div>



                    <div className="card-compra-cursos-detalhes-completo">

                        { /* <div className="imagem-curso-cursos-detalhes-completo">

                            <img
                                src="https://via.placeholder.com/400x180"
                                alt="Curso IA"
                            />

                            <span className="desconto-cursos-detalhes-completo">
                                -50% OFF
                            </span>

                        </div> */}


                        <div className="conteudo-card-cursos-detalhes-completo">

                            <div className="preco-cursos-detalhes-completo">
                                R$ 497
                            </div>


                            <div className="preco-antigo-cursos-detalhes-completo">
                                R$ 997
                            </div>


                            <p className="economia-cursos-detalhes-completo">
                                Economize R$ 500 — Oferta por tempo limitado!
                            </p>


                            <button className="botao-principal-cursos-detalhes-completo">
                                Inscreva-se Agora
                            </button>


                            <div className="garantia-cursos-detalhes-completo">
                                🛡 Garantia de aprendizado
                            </div>


                            <ul className="beneficios-cursos-detalhes-completo">

                                <li>
                                    ◉ {curso?.duracao} de conteúdo
                                </li>

                                <li>
                                    ↓ Materiais para download
                                </li>

                                <li>
                                    ◫ Acesso mobile e desktop
                                </li>

                                <li>
                                    ♧ Certificado de conclusão
                                </li>

                            </ul>


                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte1