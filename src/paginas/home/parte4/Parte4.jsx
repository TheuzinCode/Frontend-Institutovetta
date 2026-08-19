import React from 'react'
import "./Parte4.css"
import {
    FiUserPlus,
    FiCpu,
    FiCode,
    FiAward
} from "react-icons/fi";

const Parte4 = () => {
    return (
        <>
            <section className="parte4-home">
                <div className="container-parte4-home">
                    <div className="cabecalho-parte4-home">
                        <span className="badge-parte4-home">
                            ✦ NOSSA METODOLOGIA
                        </span>
                        <h2 className="titulo-parte4-home">
                            Como transformamos sua <span>carreira</span>
                        </h2>
                        <p className="descricao-parte4-home">
                            Um método comprovado em 4 etapas que já transformou a vida
                            de mais de 600 profissionais.
                        </p>
                    </div>

                    <div className="linha-parte4-home"></div>
                    <div className="etapas-parte4-home">
                        <div className="etapa-parte4-home">
                            <div className="circulo-parte4-home">
                                <span className="numero-parte4-home">01</span>
                                <FiUserPlus />
                            </div>
                            <h3>Inscrição e Diagnóstico</h3>
                            <p>
                                Você se inscreve e recebe um diagnóstico personalizado
                                que identifica seu nível atual e recomenda a trilha ideal.
                            </p>
                        </div>

                        <div className="etapa-parte4-home">
                            <div className="circulo-parte4-home">
                                <span className="numero-parte4-home">02</span>
                                <FiCpu />
                            </div>
                            <h3>Aulas com Especialistas</h3>
                            <p>
                                Aulas ao vivo e gravadas com profissionais que atuam
                                nas maiores empresas de tecnologia.
                            </p>
                        </div>

                        <div className="etapa-parte4-home">
                            <div className="circulo-parte4-home">
                                <span className="numero-parte4-home">03</span>
                                <FiCode />
                            </div>
                            <h3>Projetos Práticos Reais</h3>
                            <p>
                                Desenvolva projetos reais utilizando as ferramentas
                                utilizadas pelo mercado.
                            </p>
                        </div>
                        <div className="etapa-parte4-home">
                            <div className="circulo-parte4-home">
                                <span className="numero-parte4-home">04</span>
                                <FiAward />
                            </div>
                            <h3>Certificação e Carreira</h3>
                            <p>
                                Conclua sua formação com certificado reconhecido
                                e apoio para empregabilidade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parte4