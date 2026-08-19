import React from 'react'
import "./Parte5.css"
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Aluna from "../../../assets/imgs/aluna-vetta.svg"

const Parte5 = () => {
    return (
        <>
            <section className="parte5-home">
                <div className="container-parte5-home">
                  
                    <div className="conteudo-parte5-home">
                        <div className="texto-parte5-home">
                            <span className="subtitulo-parte5-home">
                                Conheça o programa
                            </span>
                            <h2 className="titulo-parte5-home">
                                Quero Desconto
                            </h2>
                            <p className="descricao-parte5-home">
                                Acreditamos em você. Receba até 50% de desconto
                                para começar seu curso agora mesmo.
                            </p>
                            <a href="#" className="botao-parte5-home">
                                QUERO SABER MAIS
                            </a>
                        </div>
                        <div className="imagem-parte5-home">
                            <img
                                src={Aluna}
                                alt="Aluna"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parte5