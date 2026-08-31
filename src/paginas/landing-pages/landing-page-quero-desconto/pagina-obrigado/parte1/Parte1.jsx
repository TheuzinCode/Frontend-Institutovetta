import React, { useEffect, useState } from "react";
import './Parte1.css'
import { useNavigate } from "react-router-dom";


const Parte1 = () => {
    const navigate = useNavigate();
    const [contador, setContador] = useState(10);
    useEffect(() => {

        const intervalo = setInterval(() => {
            setContador((segundos) => segundos - 1);
        }, 1000);

        const timer = setTimeout(() => {
            navigate("/");
        }, 10000);

        return () => {
            clearInterval(intervalo);
            clearTimeout(timer);
        };

    }, [navigate]);

    return (
        <>
            <section className="pagina-obrigado-laranja">

                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-obrigado-laranja">

                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>
                    <span className="particula-obrigado-laranja"></span>

                </div>

                <div className="conteudo-obrigado-laranja">

                    {/* SELO DE CONFIRMACAO */}
                    <div className="area-selo-obrigado-laranja">

                        <div className="circulo-obrigado-laranja">
                            ✓
                        </div>
                    </div>

                    <h1 className="titulo-obrigado-laranja">
                        obrigado por se{" "}
                        <span className="destaque-titulo-obrigado-laranja">
                            Inscrever!
                        </span>
                    </h1>

                    <p className="descricao-obrigado-laranja">
                        Sua inscrição foi recebida com sucesso. Você agora faz parte
                        do <strong>Instituto Vetta</strong> e receberá descontos exclusivos,
                        novidades e condições especiais em primeira mão.
                    </p>

                    <p className="aviso-obrigado-laranja">
                        Fique de olho no seu WhatsApp e Email — a primeira mensagem já
                        está a caminho.
                    </p>

                    <p className="destaque-titulo-obrigado-laranja">
                        Você será redirecionado para a página inicial em{" "}
                        <strong>{contador}</strong> segundo
                        {contador !== 1 ? "s" : ""}.
                    </p>
                </div>
            </section>
        </>
    )
}

export default Parte1