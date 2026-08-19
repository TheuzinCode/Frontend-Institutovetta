import React from 'react'
import './Parte4.css'

const Parte4 = () => {

    const empresas = [
        { icone: "🏦", nome: "Itaú Unibanco" },
        { icone: "👑", nome: "Nubank" },
        { icone: "🏛", nome: "Accenture" },
        { icone: "🍴", nome: "iFood" },
        { icone: "🛍", nome: "Mercado Livre" },
        { icone: "💳", nome: "Stone" },
        { icone: "📊", nome: "BTG Pactual" },
        { icone: "🛒", nome: "Magalu" },
        { icone: "💠", nome: "PicPay" }
    ];

    return (
        <>
            <section className="pagina-cases-sucesso-parte4">


                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-cases-sucesso-parte4">

                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>
                    <span className="particula-cases-sucesso-parte4"></span>

                </div>


                <div className="conteudo-cases-sucesso-parte4">


                    {/* CABECALHO */}
                    <div className="cabecalho-cases-sucesso-parte4">

                        <div className="badge-cases-sucesso-parte4">
                            EMPRESAS PARCEIRAS
                        </div>


                        <p className="descricao-cases-sucesso-parte4">
                            Nossos alunos trabalham em empresas como
                        </p>

                    </div>



                    {/* CARROSSEL INFINITO */}
                    <div className="faixa-cases-sucesso-parte4">

                        <div className="trilha-cases-sucesso-parte4">

                            {empresas.map((item, indice) => (

                                <div className="empresa-cases-sucesso-parte4" key={"a" + indice}>

                                    <span className="icone-empresa-cases-sucesso-parte4">
                                        {item.icone}
                                    </span>

                                    <span className="nome-empresa-cases-sucesso-parte4">
                                        {item.nome}
                                    </span>

                                </div>

                            ))}


                            {/* copia para o loop continuo */}
                            {empresas.map((item, indice) => (

                                <div
                                    className="empresa-cases-sucesso-parte4"
                                    key={"b" + indice}
                                    aria-hidden="true"
                                >

                                    <span className="icone-empresa-cases-sucesso-parte4">
                                        {item.icone}
                                    </span>

                                    <span className="nome-empresa-cases-sucesso-parte4">
                                        {item.nome}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte4