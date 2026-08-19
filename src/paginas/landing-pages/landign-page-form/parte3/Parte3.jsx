import React from 'react'
import './Parte3.css'

const Parte3 = () => {

    const diferenciais = [
        {
            icone: "👤",
            nome: "Instrutores do Mercado",
            texto:
                "Profissionais que atuam nas maiores empresas do Brasil, trazendo casos reais para a sala de aula."
        },
        {
            icone: "📅",
            nome: "14 Anos de Excelência",
            texto:
                "Mais de uma década formando profissionais que hoje ocupam cargos de liderança no mercado."
        },
        {
            icone: "🎖",
            nome: "Certificação Reconhecida",
            texto:
                "Certificados com validade nacional e chancela das principais associações profissionais do setor."
        },
        {
            icone: "🛡",
            nome: "Garantia de Satisfação",
            texto:
                "Se não gostar na primeira semana, devolvemos 100% do seu investimento. Sem burocracia."
        }
    ];

    return (
        <>
            <section className="pagina-page-form-parte3">

                <div className="conteudo-page-form-parte3">


                    {/* CABECALHO */}
                    <div className="cabecalho-page-form-parte3">

                        <span className="rotulo-page-form-parte3">
                            POR QUE O INSTITUTO VETTA
                        </span>


                        <h2 className="titulo-page-form-parte3">
                            Diferenciais que Fazem a{" "}
                            <span className="destaque-titulo-page-form-parte3">
                                Diferença
                            </span>
                        </h2>


                        <p className="descricao-page-form-parte3">
                            Não somos apenas mais uma escola. Somos o parceiro da sua
                            transformação profissional.
                        </p>

                    </div>



                    {/* GRADE DE DIFERENCIAIS */}
                    <div className="grade-page-form-parte3">

                        {diferenciais.map((item, indice) => (

                            <div className="item-page-form-parte3" key={indice}>

                                <div className="icone-page-form-parte3">
                                    {item.icone}
                                </div>

                                <h3 className="nome-item-page-form-parte3">
                                    {item.nome}
                                </h3>

                                <p className="texto-item-page-form-parte3">
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

export default Parte3