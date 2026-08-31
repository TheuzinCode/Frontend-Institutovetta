import React, { useState } from 'react'
import './Parte1.css'
import aluna from "../../../../assets/imgs/aluno-vetta.svg"
import logo from "../../../../assets/imgs/logo-desconto.svg"
import { useNavigate } from "react-router-dom";

const Parte1 = () => {

    const IconeCoracao = () => (
        <svg viewBox="0 0 24 24">
            <path d="M12 20.5 4.5 13a4.6 4.6 0 0 1 6.5-6.5l1 1 1-1A4.6 4.6 0 0 1 19.5 13Z" />
        </svg>
    );

    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [unidades, setUnidades] = useState("")
    const [robo, setRobo] = useState("")
    const navigate = useNavigate();

    const link = `http://localhost:8080/quero-desconto/novo/lead-desconto`

    function formatarTelefone(valor) {
        // Remove tudo que não for número
        valor = valor.replace(/\D/g, "");

        // Limita a 11 dígitos
        valor = valor.slice(0, 11);

        // (11) 98765-4321
        if (valor.length > 10) {
            return valor.replace(
                /^(\d{2})(\d{5})(\d{4})$/,
                "($1) $2-$3"
            );
        }

        // (11) 9876-5432
        if (valor.length > 6) {
            return valor.replace(
                /^(\d{2})(\d{4})(\d+)$/,
                "($1) $2-$3"
            );
        }

        if (valor.length > 2) {
            return valor.replace(
                /^(\d{2})(\d+)$/,
                "($1) $2"
            );
        }

        if (valor.length > 0) {
            return valor.replace(/^(\d+)/, "($1");
        }

        return valor;
    }

    function formatarNome(valor) {
        return valor.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
    }



    async function salvarLeadDesconto(e) {
        e.preventDefault();


        if (!nome || !telefone || !email || !unidades) {
            alert("TODOS CAMPOS OBRIGATORIOS")
        }


        if (!email.includes("@")) {
            alert("Digite um email válido");
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValido.test(email)) {
            alert("Digite um e-mail válido.");
            return;
        }

        const telefoneNumeros = telefone.replace(/\D/g, "");

        if (telefoneNumeros.length < 10) {
            alert("Digite um telefone válido.");
            return;
        }

        const lead = {
            nome: nome,
            numero: telefone,
            email: email,
            unidade: unidades
        }


        try {
            const resp = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(lead)
            })

            if (!resp.ok) {
                throw new Error("Erro ao salvar");
            }

            setNome("")
            setEmail("")
            setTelefone("")
            setUnidades("") 
            setRobo("")

            navigate("/quero-desconto/obrigado")


        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar. Por favor, tente novamente.");
        }

    }


    return (
        <>
            <div className="pagina-quero-desconto">
                <section className="hero-quero-desconto">
                    <div className="container-quero-desconto">
                        {/* Coluna da esquerda */}
                        <div className="conteudo-quero-desconto">
                            <h1 className="titulo-quero-desconto">
                                Estude no <span>Instituto vetta</span> e construa uma carreira brilhante!
                            </h1>
                            <p className="subtitulo-quero-desconto">Nós apostamos em você!</p>

                            <div className="visual-quero-desconto">
                                <div className="selos-quero-desconto">
                                    <p className="selo-quero-desconto">
                                        <span className="selo-linha-quero-desconto">
                                            <strong className="selo-numero-quero-desconto">+de 98%</strong> dos
                                        </span>
                                        <span className="selo-texto-quero-desconto">estudantes satisfeitos</span>
                                    </p>
                                    <p className="selo-quero-desconto">
                                        <span className="selo-linha-quero-desconto">
                                            <strong className="selo-numero-quero-desconto">+700</strong> alunos
                                        </span>
                                        <span className="selo-texto-quero-desconto">matriculados</span>
                                    </p>
                                </div>

                                <div className="foto-quero-desconto">
                                    <span
                                        className="coracao-quero-desconto coracao-um-quero-desconto"
                                        aria-hidden="true"
                                    >
                                        <IconeCoracao />
                                    </span>
                                    <span
                                        className="coracao-quero-desconto coracao-tres-quero-desconto"
                                        aria-hidden="true"
                                    >
                                        <IconeCoracao />
                                    </span>
                                    <span
                                        className="coracao-quero-desconto coracao-dois-quero-desconto"
                                        aria-hidden="true"
                                    >
                                        <IconeCoracao />
                                    </span>

                                    <img
                                        className="estudante-quero-desconto"
                                        src={aluna}
                                        alt="Estudante sorrindo com mochila e celular"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Coluna da direita: formulário */}
                        <aside className="painel-quero-desconto">
                            <h2 className="titulo-form-quero-desconto">
                                Receba até <span className="destaque-quero-desconto">50% de desconto</span> em qualquer
                                curso!
                            </h2>

                            <form className="formulario-quero-desconto" onSubmit={salvarLeadDesconto}>
                                <div className="campos-quero-desconto">
                                    <div className="campo-quero-desconto">
                                        <label className="rotulo-quero-desconto" htmlFor="nome">
                                            Nome*
                                        </label>
                                        <input
                                            className="input-quero-desconto"
                                            id="nome"
                                            name="nome"
                                            type="text"
                                            value={nome}
                                            onChange={(e) => setNome(formatarNome(e.target.value))}
                                            required

                                        />
                                    </div>

                                    <div className="campo-quero-desconto">
                                        <label className="rotulo-quero-desconto" htmlFor="celular">
                                            Celular*
                                        </label>
                                        <div className="telefone-quero-desconto">
                                            <input
                                                className="input-quero-desconto input-telefone-quero-desconto"
                                                id="celular"
                                                name="celular"
                                                value={telefone}
                                                onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="campo-quero-desconto">
                                        <label className="rotulo-quero-desconto" htmlFor="email">
                                            Email*
                                        </label>
                                        <input
                                            className="input-quero-desconto"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="campo-quero-desconto">
                                        <label className="rotulo-quero-desconto" htmlFor="estado">
                                            Unidades
                                        </label>
                                        <select className="select-quero-desconto" id="estado" name="estado"
                                            value={unidades}
                                            onChange={(e) => setUnidades(e.target.value)}
                                        >
                                            <option value="">Selecione a unidade</option>
                                            <option value="Grajau">Grajau</option>
                                        </select>
                                    </div>

                                    <div className="campo-quero-desconto campo-largo-quero-desconto">
                                        <label className="rotulo-quero-desconto" htmlFor="verificacao">
                                            8 + 3 = ?
                                        </label>
                                        <input
                                            className="input-quero-desconto"
                                            id="verificacao"
                                            name="verificacao"
                                            type="text"
                                            inputMode="numeric"
                                            autoComplete="off"
                                            required
                                            value={robo}
                                            onChange={(e) => setRobo(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <label className="consentimento-quero-desconto" htmlFor="lgpd">
                                    <input
                                        className="checkbox-quero-desconto"
                                        id="lgpd"
                                        name="lgpd"
                                        type="checkbox"
                                        required
                                    />
                                    <span>
                                        A empresa está em conformidade com as diretrizes de proteção de dados da LGPD. Leia
                                        nossa política de privacidade para entender como coletamos, armazenamos e
                                        processamos suas informações privadas sob a LGPD.
                                    </span>
                                </label>

                                <p className="aviso-quero-desconto">
                                    Exemplo: Ao informar meus dados, estou ciente das diretrizes da{" "}
                                    <a className="link-quero-desconto" href="#">
                                        Política de Privacidade
                                    </a>
                                    .
                                </p>

                                <button className="botao-quero-desconto" type="submit">
                                    Quero meu desconto
                                </button>
                            </form>
                        </aside>
                    </div>
                </section>

                <footer className="rodape-quero-desconto">
                    <div className="logos-quero-desconto">
                        <span className="marca-quero-desconto">
                            <img src={logo} className='config-logo' />
                        </span>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Parte1