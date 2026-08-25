import React from 'react'
import "./Parte1.css"
import { Link } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
import { PiMedal } from "react-icons/pi";
import { MdOutlineShield } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";

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
                            <Link to={"/cursos"} className="breadcrumb-cursos-detalhes-completo">Cursos</Link>
                            <span>›</span>
                            {curso?.nome}
                        </div>


                        <div className="tags-cursos-detalhes-completo">

                            <span className="tag-principal-cursos-detalhes-completo">
                                {curso?.categoria}
                            </span>

                            {/* <span className="tag-popular-cursos-detalhes-completo">
                                Mais Procurado
                            </span> */}

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
                                <CiClock2 />  {curso?.duracao}h de conteúdo
                            </span>

                            <span className="item-info-cursos-detalhes-completo">
                                ▣ Presencial
                            </span>

                            <span className="item-info-cursos-detalhes-completo">
                                <PiMedal /> Certificado incluso
                            </span>

                        </div>

                    </div>



                    <div className="card-compra-cursos-detalhes-completo">

                        <div className="imagem-curso-cursos-detalhes-completo">

                            <img
                                src={`data:image/jpeg;base64,${curso.imagemCapaCurso}`}
                                alt={curso?.nome}
                            />
                        </div>


                        <div className="conteudo-card-cursos-detalhes-completo">

                            <div className="preco-cursos-detalhes-completo">
                                Garanta já sua vaga!
                            </div>


                            <p className="economia-cursos-detalhes-completo">
                                <CiClock2 />   Inscrições por tempo limitado — inscreva-se agora!
                            </p>


                            <button className="botao-principal-cursos-detalhes-completo">
                                Inscreva-se Agora
                            </button>


                            <div className="garantia-cursos-detalhes-completo">
                                <div className='beneficios-cursos-descritivo'>
                                    <div className='icone-beneficios-curso'>
                                        <MdOutlineShield size={17} />
                                    </div>
                                    <div>
                                        Garantia de aprendizado
                                    </div>
                                </div>

                            </div>


                            <ul className="beneficios-cursos-detalhes-completo">

                                <li>
                                    <div className='beneficios-cursos-descritivo'>
                                        <div className='icone-beneficios-curso'>
                                            <CiClock2 size={15} />
                                        </div>
                                        <div>
                                            {curso?.duracao}h de conteúdo
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='beneficios-cursos-descritivo'>
                                        <div className='icone-beneficios-curso'>
                                            <FaArrowDown size={14} />
                                        </div>
                                        <div>
                                            Materiais para download
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='beneficios-cursos-descritivo'>
                                        <div className='icone-beneficios-curso'>
                                            <RiComputerLine size={15} />
                                        </div>
                                        <div>
                                            Acesso mobile e desktop
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className='beneficios-cursos-descritivo'>
                                        <div className='icone-beneficios-curso'>
                                            <PiMedal size={16} />
                                        </div>
                                        <div>
                                            Certificado de conclusão
                                        </div>
                                    </div>
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