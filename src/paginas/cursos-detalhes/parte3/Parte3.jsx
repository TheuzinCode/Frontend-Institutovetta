import { React, useState, useEffect } from 'react'
import "./Parte3.css"

const Parte3 = ({ curso }) => {

    const [relacionados, setRelacionados] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:8080/cursos/${curso.id}/relacionados`)
            .then(res => res.json())
            .then(data => setRelacionados(data));

    }, [curso.id]
    )

    console.log(relacionados)

    return (
        <>
            <section className="pagina-cursos-detalhes-parte3">

                <div className="conteudo-cursos-detalhes-parte3">


                    <h2 className="titulo-cursos-detalhes-parte3">
                        Cursos <span>Relacionados</span>
                    </h2>

                    {/* CARD 1 */}
                    <div className="grade-cursos-detalhes-parte3">

                        {
                            relacionados.map(cursos => (
                                <>
                                    <div key={curso.id} className="card-cursos-detalhes-parte3">

                                        <div className="imagem-cursos-detalhes-parte3">

                                            <img
                                                src={`data:image/jpeg;base64,${curso.imagemCapaCurso}`}
                                                alt="Machine Learning com Python"
                                            />

                                        </div>


                                        <div className="info-cursos-detalhes-parte3">

                                            <span className="categoria-cursos-detalhes-parte3">
                                                {cursos?.categoria}
                                            </span>

                                            <h3 className="nome-curso-cursos-detalhes-parte3">
                                                {curso?.nome}
                                            </h3>

                                            <div className="rodape-cursos-detalhes-parte3">

                                                <div className="dados-cursos-detalhes-parte3">
                                                    <span className="estrela-cursos-detalhes-parte3">★</span>
                                                    <span className="nota-cursos-detalhes-parte3">{curso?.nome}</span>
                                                    <span className="ponto-cursos-detalhes-parte3">•</span>
                                                    <span className="horas-cursos-detalhes-parte3">{curso?.duracao}h</span>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </>
                            ))
                        }

                    </div>

                </div>

            </section>

        </>
    )
}

export default Parte3