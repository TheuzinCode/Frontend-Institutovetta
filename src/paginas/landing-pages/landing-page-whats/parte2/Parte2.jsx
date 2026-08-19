import React from 'react'
import './Parte2.css'
import { FaChartColumn } from "react-icons/fa6";
import { LuBrain } from "react-icons/lu";
import { FaRegBuilding } from "react-icons/fa";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

const Parte2 = () => {

    const cursos = [
        {
            icone: <GoGraph />,
            nome: "Marketing Digital",
            texto:
                "Marketing Digital, Facebook Business, Meta Business e Google Ads com cases de grandes marcas brasileiras."
        },
        {
            icone: <FaChartColumn />,
            nome: "Análise de Dados",
            texto:
                "Python, SQL, Power BI e Excel Avançado com dados para decisões estratégicas de alto impacto."
        },
        {
            icone: <FaRegBuilding />,
            nome: "IA para Negocios",
            texto:
                "Empreendendo com IA nos Negócios, ChatGPT, comunicação profissional para inovar e escalar os lucros da sua empresa."
        },
        {
            icone: "</>",
            nome: "Desenvolvimento Web",
            texto:
                "HTML, CSS, PHP e WordPress com projetos do zero ao deploy em produção."
        },
        {
            icone: <LuBrain />,
            nome: "Inteligência Artificial",
            texto:
                "Fundamentos do N8N, ChatGPT, Inteligência Artificial E Lovable com aplicações práticas em negócios."
        },
        {
            icone: <FaPeopleRobbery />,
            nome: "Cuidador de Idosos",
            texto:
                "Figma, design systems, pesquisa com usuários e prototipação interativa com feedback de experts."
        }
    ];

    const numero = '5511940818818'
    const mensagem = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Vetta.'
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

    return (
        <>
            <section className="pagina-page-whatsApp-parte2">
                <div className="conteudo-page-whatsApp-parte2">

                    {/* CABECALHO */}
                    <div className="cabecalho-page-whatsApp-parte2">
                        <span className="rotulo-page-whatsApp-parte2">
                            NOSSOS CURSOS
                        </span>
                        <h2 className="titulo-page-whatsApp-parte2">
                            Formações que{" "}
                            <span className="destaque-titulo-page-whatsApp-parte2">
                                Aceleram
                            </span>{" "}
                            Carreiras
                        </h2>
                        <p className="descricao-page-whatsApp-parte2">
                            Cursos práticos desenhados com líderes do mercado. O que você
                            aprende na segunda, aplica na terça.
                        </p>
                    </div>

                    {/* GRADE DE CURSOS */}
                    <div className="grade-page-whatsApp-parte2">
                        {cursos.map((item, indice) => (
                            <div className="card-page-whatsApp-parte2" key={indice}>

                                <div className="icone-page-whatsApp-parte2">
                                    {item.icone}
                                </div>

                                <h3 className="nome-curso-page-whatsApp-parte2">
                                    {item.nome}
                                </h3>

                                <p className="texto-curso-page-whatsApp-parte2">
                                    {item.texto}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* RODAPE */}

                    <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Falar no WhatsApp'
                    >
                        <div className="rodape-page-whatsApp-parte2">
                            <a className="link-rodape-page-whatsApp-parte2">
                                Não encontrou seu curso? Fale com a gente no WhatsApp
                                <span className="seta-rodape-page-whatsApp-parte2">→</span>
                            </a>
                        </div>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Parte2