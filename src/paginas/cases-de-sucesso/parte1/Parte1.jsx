import React from 'react'
import "./Parte1.css"


const Parte1 = () => {
    return (
        <>
            <section className="pagina-cases-sucesso-parte1">
                {/* MALHA DE LINHAS AO FUNDO */}
                <svg
                    className="malha-cases-sucesso-parte1"
                    viewBox="0 0 1200 470"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >

                    <polyline points="0,60 190,140 420,40 700,120 980,30 1200,90" />
                    <polyline points="0,300 160,210 380,330 640,240 900,350 1200,260" />
                    <polyline points="0,440 240,360 520,450 780,380 1040,460 1200,400" />
                    <polyline points="190,140 160,210 380,330 420,40" />
                    <polyline points="700,120 640,240 900,350 980,30" />
                    <polyline points="240,360 380,330 520,450" />
                    <polyline points="900,350 1040,460 780,380" />

                </svg>


                {/* PARTICULAS */}
                <div className="particulas-cases-sucesso-parte1">

                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>
                    <span className="particula-cases-sucesso-parte1"></span>

                </div>


                <div className="conteudo-cases-sucesso-parte1">

                    <div className="badge-cases-sucesso-parte1">
                        <span className="ponto-badge-cases-sucesso-parte1"></span>
                        Transformações Reais
                    </div>

                    <h1 className="titulo-cases-sucesso-parte1">
                        Cases de <span className="destaque-titulo-cases-sucesso-parte1">Sucesso</span>
                    </h1>

                    <p className="descricao-cases-sucesso-parte1">
                        Histórias reais de alunos que transformaram suas carreiras. Veja como
                        a educação de qualidade muda vidas.
                    </p>


                    <div className="acoes-cases-sucesso-parte1">

                        <button className="botao-principal-cases-sucesso-parte1">
                            Comece Sua Jornada
                        </button>

                        <button className="botao-secundario-cases-sucesso-parte1">
                            Ver Histórias
                            <span className="seta-botao-cases-sucesso-parte1">↓</span>
                        </button>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Parte1