import React, { useState } from 'react'
import "./Parte4.css"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";



const Parte4 = () => {

    const [aberta, setAberta] = useState(0);

    const perguntas = [
        {
            pergunta: "Como funciona o processo de matrícula?",
            resposta:
                'O processo é 100% online. Escolha seu curso, clique em "Matricule-se", preencha seus dados e escolha a forma de pagamento. Você recebe acesso imediato ao conteúdo após a confirmação.'
        },
        {
            pergunta: "Os cursos possuem certificado?",
            resposta:
                "Sim. Ao concluir 100% das aulas você recebe um certificado digital com carga horária, válido em todo o território nacional."
        },
        {
            pergunta: "Posso parcelar o pagamento?",
            resposta:
                "Sim. Aceitamos parcelamento em até 12x no cartão de crédito, além de PIX e boleto à vista com desconto."
        },
        {
            pergunta: "E se eu não gostar do curso?",
            resposta:
                "Você tem 7 dias para pedir o reembolso integral, sem precisar justificar. Basta enviar uma mensagem para o nosso suporte."
        },
        {
            pergunta: "O acesso ao curso é vitalício?",
            resposta:
                "Sim. Depois da matrícula o conteúdo fica disponível para sempre, incluindo as atualizações futuras do curso."
        },
        {
            pergunta: "Vocês oferecem suporte durante o curso?",
            resposta:
                "Oferecemos suporte por e-mail e WhatsApp de segunda a sexta, das 8h às 20h, com tutores que acompanham cada turma."
        },
        {
            pergunta: "Preciso ter experiência prévia para fazer os cursos?",
            resposta:
                "Não. Os cursos partem do nível iniciante e cada módulo indica os pré-requisitos, quando existirem."
        }
    ];

    const alternar = (indice) => {
        setAberta(aberta === indice ? null : indice);
    };

    return (
        <>
            <section className="pagina-contato-parte4">


                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-contato-parte4">

                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>
                    <span className="particula-contato-parte4"></span>

                </div>


                <div className="conteudo-contato-parte4">


                    {/* CABECALHO */}
                    <div className="cabecalho-contato-parte4">

                        <div className="badge-contato-parte4">
                            <span className="icone-badge-contato-parte4"><IoChatboxOutline size={16} /></span>
                            FAQ
                        </div>


                        <h2 className="titulo-contato-parte4">
                            Perguntas <span className="destaque-titulo-contato-parte4">&amp; Respostas</span>
                        </h2>


                        <p className="descricao-contato-parte4">
                            Tudo que você precisa saber antes de começar.
                        </p>

                    </div>



                    {/* LISTA DE PERGUNTAS */}
                    <div className="lista-contato-parte4">

                        {perguntas.map((item, indice) => (

                            <div
                                key={indice}
                                className={
                                    aberta === indice
                                        ? "item-contato-parte4 item-aberto-contato-parte4"
                                        : "item-contato-parte4"
                                }
                            >

                                <button
                                    className="pergunta-contato-parte4"
                                    onClick={() => alternar(indice)}
                                    aria-expanded={aberta === indice}
                                >

                                    <span className="texto-pergunta-contato-parte4">
                                        {item.pergunta}
                                    </span>

                                    <span className="seta-contato-parte4">
                                        <MdKeyboardArrowDown />
                                    </span>

                                </button>


                                {aberta === indice && (
                                    <p className="resposta-contato-parte4">
                                        {item.resposta}
                                    </p>
                                )}

                            </div>

                        ))}

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte4