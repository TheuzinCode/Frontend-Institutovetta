import React from 'react'
import './Parte5.css'
import { Link } from "react-router-dom";

const Parte5 = () => {
    return (
        <>
            <section className="pagina-page-form-parte5">

                <div className="conteudo-page-form-parte5">


                    <h2 className="titulo-page-form-parte5">
                        Não Espere o Mercado{" "}
                        <span className="destaque-titulo-page-form-parte5">
                            Te Atropelar
                        </span>
                    </h2>


                    <p className="descricao-page-form-parte5">
                        As vagas da próxima turma são limitadas. Preencha o formulário agora e
                        garanta sua consultoria gratuita com um de nossos especialistas.
                    </p>

                    <Link to={"/page-form"}>
                    <button className="botao-page-form-parte5">

                        Quero Agendar Minha Consultoria

                        <span className="seta-botao-page-form-parte5">↑</span>

                    </button>
                    </Link>


                    <div className="status-page-form-parte5">

                        <span className="ponto-status-page-form-parte5"></span>

                        Consultores disponíveis agora

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte5