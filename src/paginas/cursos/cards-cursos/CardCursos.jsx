import React from 'react'
import "./CardCursos.css";
import { useState, useEffect } from 'react';

const CardCursos = () => {

    const [listaCursos, setListaCursos] = useState([]);
    const [paginaAtual, setPaginaAtual] = useState(0)

    const itensPorPagina = 12;

    useEffect(() => {
        buscarCursos();
    }, []);

    async function buscarCursos() {
        try {
            const resp = await fetch(`http://localhost:8080/Cursos`);
            const data = await resp.json();
            setListaCursos(data)
        } catch (error) {
            console.error("ERRO AO BUSCAR OS CURSOS: " + error)
        }
    }

    const paginasTotal = Math.ceil(listaCursos.length / itensPorPagina)

    const indiceInicial = paginaAtual * itensPorPagina;
    const indiceFinal = indiceInicial + itensPorPagina;

    const cursoDaPagina = listaCursos.slice(indiceInicial, indiceFinal)

    return (

        <>
            <div className="container-cards-cursos">

                {cursoDaPagina.map(curso => (
                    <article key={curso.id} className="curso-card-cards-cursos">
                        {/* IMAGEM */}
                        <div className="imagem-container-cards-cursos">

                            <img
                                src={`data:image/jpeg;base64,${curso.imagemCurso}`}
                                alt="Inteligência Artificial"
                                className="imagem-curso-cards-cursos"
                            />

                            {/* Categoria */}
                            <span className="categoria-curso-cards-cursos">
                                {curso.categoria}
                            </span>

                        </div>

                        {/* CONTEÚDO */}
                        <div className="conteudo-curso-cards-cursos">

                            {/* Título */}
                            <h3 className="titulo-curso-cards-cursos">
                                {curso.nome}
                            </h3>

                            {/* Descrição */}
                            <p className="descricao-curso-cards-cursos">
                                {curso.descricao}
                            </p>

                            {/* Informações */}
                            <div className="informacoes-curso-cards-cursos">
                                <div className="informacao-cards-cursos">
                                    <span className="icone-informacao-cards-cursos">
                                        ◷
                                    </span>
                                    <span>
                                        {curso.duracao}h de conteúdo
                                    </span>
                                </div>
                                <div className="informacao-cards-cursos">
                                    <span className="icone-informacao-cards-cursos">
                                        ▣
                                    </span>
                                    <span>
                                        Presencial
                                    </span>
                                </div>
                            </div>

                            {/* BOTÕES */}
                            <div className="botoes-curso-cards-cursos">
                                <button className="botao-detalhes-cards-cursos">
                                    Ver Detalhes
                                </button>
                                <button className="botao-inscrever-cards-cursos">
                                    Inscrever-se
                                </button>
                            </div>
                        </div>

                    </article>
                ))}



            </div>

            {/* Controles de Paginação */}
            {listaCursos.length > 0 && (
                <div className="paginacao">
                    <button
                        disabled={paginaAtual === 0}
                        onClick={() => setPaginaAtual(atual => atual - 1)}
                    >
                        Anterior
                    </button>

                    <span>Página {paginaAtual + 1} de {paginasTotal}</span>

                    <button
                        disabled={paginaAtual >= paginasTotal - 1}
                        onClick={() => setPaginaAtual(atual => atual + 1)}
                    >
                        Próxima
                    </button>
                </div>
            )}
        </>
    )
}

export default CardCursos