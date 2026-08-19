import React from 'react'
import './Parte5.css'
import { Link } from "react-router-dom";

const Parte5 = () => {
    return (
        <>
            <section className="pagina-sobre-nós-parte5">


                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-sobre-nós-parte5">

                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>
                    <span className="particula-sobre-nós-parte5"></span>

                </div>


                <div className="conteudo-sobre-nós-parte5">


                    <h2 className="titulo-sobre-nós-parte5">
                        Faça parte da nossa história
                    </h2>


                    <p className="descricao-sobre-nós-parte5">
                        Junte-se a milhares de profissionais que já escolheram o Instituto
                        para transformar suas carreiras.
                    </p>

                    <Link to={"/cursos"}>
                        <button className="botao-sobre-nós-parte5">
                            Ver Nossos Cursos
                            <span className="seta-botao-sobre-nós-parte5">→</span>
                        </button>
                    </Link>


                </div>

            </section>

        </>

    )
}

export default Parte5