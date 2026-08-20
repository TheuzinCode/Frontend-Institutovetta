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

    return (
        <>
            <section className="pagina-page-form-parte2">

                <div className="conteudo-page-form-parte2">


                    {/* CABECALHO */}
                    <div className="cabecalho-page-form-parte2">

                        <span className="rotulo-page-form-parte2">
                            NOSSOS CURSOS
                        </span>


                        <h2 className="titulo-page-form-parte2">
                            Formações que o{" "}
                            <span className="destaque-titulo-page-form-parte2">
                                Mercado
                            </span>{" "}
                            Exige
                        </h2>


                        <p className="descricao-page-form-parte2">
                            Cursos atualizados com as tecnologias e metodologias mais demandadas
                            pelas empresas. Conteúdo prático, direto ao ponto e focado em
                            resultados.
                        </p>

                    </div>



                    {/* GRADE DE CURSOS */}
                    <div className="grade-page-form-parte2">

                        {cursos.map((item, indice) => (

                            <div className="card-page-form-parte2" key={indice}>

                                <div className="icone-page-form-parte2">
                                    {item.icone}
                                </div>

                                <h3 className="nome-curso-page-form-parte2">
                                    {item.nome}
                                </h3>

                                <p className="texto-curso-page-form-parte2">
                                    {item.texto}
                                </p>

                            </div>

                        ))}

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte2