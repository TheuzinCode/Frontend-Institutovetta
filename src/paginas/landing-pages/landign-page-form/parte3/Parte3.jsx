import React from 'react'
import './Parte3.css'
import { ImUser } from "react-icons/im";//icone user
import { LuMedal } from "react-icons/lu";//icone medalha
import { CiCalendar } from "react-icons/ci";//icone calendar
import { FiShield } from "react-icons/fi";//icone escuso

const Parte3 = () => {

    const diferenciais = [
        {
            icone: <ImUser />,
            nome: "Instrutores do Mercado",
            texto:
                "Profissionais atuantes nas maiores empresas, trazendo desafios reais para você resolver."
        },
        {
            icone: <CiCalendar />,
            nome: "1 Anos de Excelência",
            texto:
                "Mais de uma década formando líderes que hoje dirigem equipes nas principais empresas do país."
        },
        {
            icone: <LuMedal />,
            nome: "Certificação Reconhecida",
            texto:
                "Certificados com validade nacional chancelados pelas associações profissionais do setor."
        },
        {
            icone: <FiShield />,
            nome: "Garantia de Aprendizado",
            texto:
                "aqui você entra para aprender e só sai dominando a habilidade, com acompanhamento de perto."
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