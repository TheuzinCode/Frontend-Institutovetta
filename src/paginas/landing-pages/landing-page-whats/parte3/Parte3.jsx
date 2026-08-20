import React from 'react'
import './Parte3.css'
import { ImUser } from "react-icons/im";//icone user
import { LuMedal } from "react-icons/lu";//icone medalha
import { CiCalendar } from "react-icons/ci";//icone calendar
import { FiShield } from "react-icons/fi";//icone escuso

const Parte3 = () => {

    const pilares = [
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
            <section className="pagina-page-whatsApp-parte3">

                <div className="conteudo-page-whatsApp-parte3">


                    {/* CABECALHO */}
                    <div className="cabecalho-page-whatsApp-parte3">

                        <span className="rotulo-page-whatsApp-parte3">
                            POR QUE O INSTITUTO VETTA
                        </span>


                        <h2 className="titulo-page-whatsApp-parte3">
                            O Que Nos Torna{" "}
                            <span className="destaque-titulo-page-whatsApp-parte3">
                                Únicos
                            </span>
                        </h2>


                        <p className="descricao-page-whatsApp-parte3">
                            Pilares que sustentam nossa metodologia e garantem resultados
                            consistentes há mais de uma década.
                        </p>

                    </div>



                    {/* GRADE DE PILARES */}
                    <div className="grade-page-whatsApp-parte3">

                        {pilares.map((item, indice) => (

                            <div className="item-page-whatsApp-parte3" key={indice}>

                                <div className="icone-page-whatsApp-parte3">
                                    {item.icone}
                                </div>

                                <h3 className="nome-pilar-page-whatsApp-parte3">
                                    {item.nome}
                                </h3>

                                <p className="texto-pilar-page-whatsApp-parte3">
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