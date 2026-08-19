import React from 'react'
import './Parte4.css'

const Parte4 = () => {

    const depoimentos = [
        {
            texto:
                "“O Instituto Vetta mudou completamente a minha trajetória profissional. Em 6 meses após o curso, consegui uma promoção e meu salário dobrou. A metodologia prática fez toda a diferença.”",
            iniciais: "CR",
            nome: "Camila Rodrigues",
            cargo: "Analista de Marketing Sênior na Vivo"
        },
        {
            texto:
                "“Eu trabalhava com suporte técnico e migrei para dados. O instituto me deu toda a base e o suporte para essa transição. Hoje trabalho com o que amo e ganho 3x mais.”",
            iniciais: "LA",
            nome: "Lucas Andrade",
            cargo: "Cientista de Dados no iFood"
        },
        {
            texto:
                "“Fiz o curso de Gestão de Projetos e foi o melhor investimento da minha vida. Os professores são incríveis e o networking que fiz durante o curso foi fundamental.”",
            iniciais: "JS",
            nome: "Juliana Santos",
            cargo: "Product Manager no Nubank"
        }
    ];


    return (
        <>
            <section className="pagina-page-form-parte4">

                <div className="conteudo-page-form-parte4">


                    {/* CABECALHO */}
                    <div className="cabecalho-page-form-parte4">

                        <span className="rotulo-page-form-parte4">
                            DEPOIMENTOS
                        </span>


                        <h2 className="titulo-page-form-parte4">
                            Quem Fez,{" "}
                            <span className="destaque-titulo-page-form-parte4">
                                Recomenda
                            </span>
                        </h2>


                        <p className="descricao-page-form-parte4">
                            Histórias reais de profissionais que transformaram suas carreiras
                            com o Instituto Vetta.
                        </p>

                    </div>



                    {/* GRADE DE DEPOIMENTOS */}
                    <div className="grade-page-form-parte4">

                        {depoimentos.map((item, indice) => (

                            <div className="card-page-form-parte4" key={indice}>

                                <div className="estrelas-page-form-parte4">
                                    ★ ★ ★ ★ ★
                                </div>


                                <p className="texto-page-form-parte4">
                                    {item.texto}
                                </p>


                                <div className="autor-page-form-parte4">

                                    <div className="iniciais-page-form-parte4">
                                        {item.iniciais}
                                    </div>

                                    <div>
                                        <strong className="nome-autor-page-form-parte4">
                                            {item.nome}
                                        </strong>

                                        <span className="cargo-autor-page-form-parte4">
                                            {item.cargo}
                                        </span>
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>



                    {/* SELO FINAL */}
                    <div className="rodape-page-form-parte4">

                        <div className="selo-page-form-parte4">

                            <span className="estrelas-selo-page-form-parte4">
                                ★ ★ ★ ★ ★
                            </span>

                            Avaliação 4.8 no Google — +100 avaliações

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte4