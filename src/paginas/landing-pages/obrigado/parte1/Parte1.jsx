import React from 'react'
import './Parte1.css'

const Parte1 = () => {
    return (
        <>
            <section className="pagina-obrigado">

                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-obrigado">

                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>
                    <span className="particula-obrigado"></span>

                </div>

                <div className="conteudo-obrigado">

                    {/* SELO DE CONFIRMACAO */}
                    <div className="area-selo-obrigado">

                        <div className="circulo-obrigado">
                            ✓
                        </div>
                    </div>

                    <h1 className="titulo-obrigado">
                        Obrigado por se{" "}
                        <span className="destaque-titulo-obrigado">
                            Inscrever!
                        </span>
                    </h1>

                    <p className="descricao-obrigado">
                        Sua inscrição foi recebida com sucesso. Você agora faz parte
                        do <strong>Instituto Vetta</strong> e receberá conteúdos exclusivos,
                        novidades e condições especiais em primeira mão.
                    </p>

                    <p className="aviso-obrigado">
                        Fique de olho no seu WhatsApp e Email — a primeira mensagem de boas-vindas já
                        está a caminho. 📩
                    </p>
                </div>
            </section>
        </>
    )
}

export default Parte1