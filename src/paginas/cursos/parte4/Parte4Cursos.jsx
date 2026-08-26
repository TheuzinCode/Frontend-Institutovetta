import React from 'react'
import './Parte4Cursos.css'
import { Link } from "react-router-dom";

const Parte4Cursos = () => {
    return (
        <>
            <section className="secao-nao-encontrou-cursos">
                <div className="conteudo-nao-encontrou-cursos">

                    <h2 className="titulo-nao-encontrou-cursos">
                        Não encontrou o que procura?
                    </h2>

                    <p className="descricao-nao-encontrou-cursos">
                        Entre em contato conosco e nos conte o que você precisa.
                        Podemos ter a solução ideal para você.
                    </p>

                    <Link to={"/contato"} className='saiba-mais'>
                        <button className="botao-nao-encontrou-cursos">
                            <span className="icone-email-nao-encontrou-cursos">
                                ✉
                            </span>

                            Falar com a Equipe
                        </button>
                    </Link>

                </div>
            </section>
        </>
    )
}

export default Parte4Cursos