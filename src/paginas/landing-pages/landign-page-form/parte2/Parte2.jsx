import React from 'react'
import './Parte2.css'

const Parte2 = () => {

    const cursos = [
        {
            icone: "📈",
            nome: "Marketing Digital",
            texto:
                "Domine SEO, tráfego pago, social media e estratégias de growth que geram resultados reais para negócios."
        },
        {
            icone: "📊",
            nome: "Análise de Dados",
            texto:
                "Aprenda Python, SQL, Power BI e transforme dados brutos em insights estratégicos para tomada de decisão."
        },
        {
            icone: "🗂",
            nome: "Gestão de Projetos",
            texto:
                "Metodologias ágeis, Scrum, PMBOK e liderança de times para entregar projetos no prazo e no orçamento."
        },
        {
            icone: "</>",
            nome: "Desenvolvimento Web",
            texto:
                "Do front-end ao back-end: React, Node.js, bancos de dados e deploy em cloud com projetos práticos."
        },
        {
            icone: "🎨",
            nome: "Design UX/UI",
            texto:
                "Pesquisa com usuários, prototipação no Figma, design systems e testes de usabilidade com cases reais."
        },
        {
            icone: "🧠",
            nome: "Inteligência Artificial",
            texto:
                "Machine Learning, NLP, visão computacional e LLMs aplicados a problemas reais do mercado."
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