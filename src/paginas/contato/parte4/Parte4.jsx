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
                'Você fala com a gente no WhatsApp e agenda uma visita na unidade mais perto de você. Na visita você conhece a sala, o material e tira todas as dúvidas com nossa equipe.'
        },
        {
            pergunta: "Os cursos possuem certificado?",
            resposta:
                "Sim. Ao concluir, você recebe o certificado de conclusão do Instituto Vetta, válido para apresentar no currículo e em processos seletivos., válido em todo o território nacional."
        },
        {
            pergunta: "Preciso ter experiência ou saber mexer em computador para começar?",
            resposta:
                "Não. A maioria dos nossos alunos começa do zero, e a aula é individualizada: o instrutor senta do seu lado e acompanha o seu ritmo. Basta ter, no mínimo, o ensino fundamental I."
        },
        {
            pergunta: "E se eu não gostar do curso?",
            resposta:
                "Você pode trocar. Se durante o curso perceber que se identifica mais com outra área, é só falar com a nossa equipe que a gente faz a mudança para o curso que combina mais com você."
        },
        {
            pergunta: "E se eu faltar uma aula?",
            resposta:
                "Você não fica para trás. Temos aulas de reforço justamente para quem precisou faltar ou quer revisar um conteúdo antes de seguir para o próximo módulo. É só combinar com o instrutor."
        },
        {
            pergunta: "Tenho mais de 40 anos. Ainda dá tempo?",
            resposta:
                "Dá. Temos alunas que voltaram a estudar depois de 20 anos fora da sala de aula e hoje trabalham na área. Como o acompanhamento é individual, ninguém é comparado com ninguém, cada um vai no seu ritmo, e o instrutor está ali para explicar quantas vezes for preciso."
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