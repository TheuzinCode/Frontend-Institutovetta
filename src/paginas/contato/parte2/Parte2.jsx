import React from 'react'
import "./Parte2.css"
import { FaMapMarkerAlt } from "react-icons/fa"; // pointer maps
import { FaWhatsapp } from "react-icons/fa"; // icone whatsapp
import { MdOutlineEmail } from "react-icons/md"; // icone email
import { FiPhone } from "react-icons/fi"; // icone telefone

const Parte2 = () => {
    return (
        <>
            <section className="pagina-contato-parte2">


                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-contato-parte2">

                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>
                    <span className="particula-contato-parte2"></span>

                </div>


                <div className="conteudo-contato-parte2">


                    {/* CABECALHO */}
                    <div className="cabecalho-contato-parte2">

                        <div className="badge-contato-parte2">
                            <span className="icone-badge-contato-parte2">✆</span>
                            NOSSOS CANAIS
                        </div>


                        <h2 className="titulo-contato-parte2">
                            Como <span className="destaque-titulo-contato-parte2">nos encontrar</span>
                        </h2>


                        <p className="descricao-contato-parte2">
                            Escolha o canal que preferir. Estamos aqui para te ajudar em cada
                            etapa.
                        </p>

                    </div>



                    {/* CARDS */}
                    <div className="grade-contato-parte2">


                        <div className="card-contato-parte2">

                            <div className="icone-laranja-contato-parte2">
                            <FaMapMarkerAlt />
                            </div>

                            <h3 className="nome-canal-contato-parte2">
                                Endereço
                            </h3>

                            <p className="texto-canal-contato-parte2">
                                R. Sinfonia Popular, 22, Sala 1
                            </p>

                            <p className="texto-canal-contato-parte2">
                                Grajau, São Paulo - SP
                            </p>

                            <p className="texto-canal-contato-parte2">
                                CEP: 04844-620
                            </p>

                        </div>


                        <div className="card-contato-parte2">

                            <div className="icone-verde-contato-parte2">
                                <FaWhatsapp />
                            </div>

                            <h3 className="nome-canal-contato-parte2">
                                WhatsApp
                            </h3>

                            <p className="texto-canal-contato-parte2">
                                (11) 9 4081-8818
                            </p>

                            <p className="texto-canal-contato-parte2">
                                Atendimento de Seg a Sab, 8h às 20h
                            </p>

                        </div>


                        <div className="card-contato-parte2">

                            <div className="icone-azul-contato-parte2">
                                <MdOutlineEmail />
                            </div>

                            <h3 className="nome-canal-contato-parte2">
                                E-mail
                            </h3>

                            <p className="texto-canal-contato-parte2">
                                contato@instituto.com.br
                            </p>

                            <p className="texto-canal-contato-parte2">
                                suporte@instituto.com.br
                            </p>

                        </div>


                        <div className="card-contato-parte2">

                            <div className="icone-laranja-contato-parte2">
                                <FiPhone />
                            </div>

                            <h3 className="nome-canal-contato-parte2">
                                Telefone
                            </h3>

                            <p className="texto-canal-contato-parte2">
                                (11) 3000-0000
                            </p>

                            <p className="texto-canal-contato-parte2">
                               
                            </p>

                        </div>


                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte2