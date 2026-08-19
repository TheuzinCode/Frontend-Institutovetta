import React from 'react'
import './Parte5.css'


const Parte5 = () => {

    const depoimentos = [
        {
            texto:
                "“Mandei mensagem no WhatsApp, em 15 minutos já estava conversando com um consultor. Ele me ajudou a escolher o curso ideal e ainda ganhei 15% de desconto. Melhor decisão!”",
            iniciais: "CR",
            nome: "Camila Rodrigues",

        },
        {
            texto:
                "“O atendimento via WhatsApp foi o que me convenceu. Tirei TODAS as minhas dúvidas antes de me inscrever. Zero pressão, muita informação útil. Super recomendo!”",
            iniciais: "LA",
            nome: "Lucas Andrade",

        },
        {
            texto:
                "“Recebi um e-book gratuito antes mesmo de me matricular. Isso me deu tanta confiança que indiquei para 3 amigos. Todos fizeram cursos diferentes e amaram.”",
            iniciais: "JS",
            nome: "Juliana Santos",

        }
    ];


    return (
        <>
            <section className="pagina-page-whatsApp-parte5">

                <div className="conteudo-page-whatsApp-parte5">


                    {/* CABECALHO */}
                    <div className="cabecalho-page-whatsApp-parte5">

                        <span className="rotulo-page-whatsApp-parte5">
                            DEPOIMENTOS
                        </span>


                        <h2 className="titulo-page-whatsApp-parte5">
                            Quem Falou Com a Gente,{" "}
                            <span className="destaque-titulo-page-whatsApp-parte5">
                                Recomenda
                            </span>
                        </h2>


                        <p className="descricao-page-whatsApp-parte5">
                            Pessoas reais que deram o primeiro passo pelo WhatsApp e hoje estão
                            em grandes empresas.
                        </p>

                    </div>



                    {/* GRADE DE DEPOIMENTOS */}
                    <div className="grade-page-whatsApp-parte5">

                        {depoimentos.map((item, indice) => (

                            <div className="card-page-whatsApp-parte5" key={indice}>

                                <div className="estrelas-page-whatsApp-parte5">
                                    ★ ★ ★ ★ ★
                                </div>


                                <p className="texto-page-whatsApp-parte5">
                                    {item.texto}
                                </p>


                                <div className="autor-page-whatsApp-parte5">

                                    <div className="iniciais-page-whatsApp-parte5">
                                        {item.iniciais}
                                    </div>

                                    <div>
                                        <strong className="nome-autor-page-whatsApp-parte5">
                                            {item.nome}
                                        </strong>
                                        {
                                            /*<span className="cargo-autor-page-whatsApp-parte5">
                                                 {item.cargo}
                                              </span>*/
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SELO FINAL */}
                    <div className="rodape-page-whatsApp-parte5">

                        <div className="selo-page-whatsApp-parte5">

                            <span className="estrelas-selo-page-whatsApp-parte5">
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

export default Parte5