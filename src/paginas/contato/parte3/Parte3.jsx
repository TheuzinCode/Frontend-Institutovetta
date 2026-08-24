import React, { useState } from 'react'
import { IoChatbubbleOutline } from "react-icons/io5"; //icone balao do mensagem
import { FaRegClock } from "react-icons/fa6"; // icone relogio
import { GoShieldCheck } from "react-icons/go"; // icone escudo check
import { ImUser } from "react-icons/im"; //icone pessoa
import Swal from "sweetalert2";
import "./Parte3.css"

const Parte3 = () => {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const link = `http://localhost:8080/contato/novo/leadcontato`


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


    async function salvarLeads(e) {
        e.preventDefault();

        if (!nome || !email || !numero || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos");
            return;
        }

        if (!email.includes("@")) {
            alert("Digite um email válido");
            return;
        }

        const Lead = {
            nome: nome,
            email: email,
            telefone: numero,
            assunto: assunto,
            mensagem: mensagem
        }


        try {
            const resp = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(Lead)
            });

            Swal.fire({
                icon: "success",
                title: "Enviado com sucesso!",
                text: "Agora é só aguardar. Em breve, um dos nossos representantes entrará em contato com você.",
                confirmButtonText: "Entendi",
                customClass: {
                    popup: "popup-vetta",
                    title: "titulo-vetta",
                    htmlContainer: "texto-vetta",
                    confirmButton: "botao-vetta"
                },
                buttonsStyling: false
            });

            setNome("")
            setEmail("")
            setNumero("")
            setAssunto("")
            setMensagem("")

        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar. Por favor, tente novamente.");
        }
    }

    return (
        <>

            <section className="pagina-contato-parte3">


                {/* PARTICULAS DE FUNDO */}
                <div className="particulas-contato-parte3">

                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>
                    <span className="particula-contato-parte3"></span>

                </div>


                <div className="conteudo-contato-parte3">


                    {/* COLUNA ESQUERDA */}
                    <div className="coluna-texto-contato-parte3">


                        <div className="badge-contato-parte3">
                            <span className="icone-badge-contato-parte3"><IoChatbubbleOutline /></span>
                            FALE COM A GENTE
                        </div>


                        <h2 className="titulo-contato-parte3">
                            Envie uma <span className="destaque-titulo-contato-parte3">mensagem</span>
                        </h2>


                        <p className="descricao-contato-parte3">
                            Preencha o formulário ao lado e nossa equipe entrará em contato em
                            até 24 horas. Se preferir, também atendemos via WhatsApp com
                            resposta imediata.
                        </p>


                        <div className="lista-vantagens-contato-parte3">


                            <div className="vantagem-contato-parte3">

                                <div className="icone-vantagem-contato-parte3">
                                    <FaRegClock color='#ffff' size={20} />
                                </div>

                                <div>
                                    <strong className="nome-vantagem-contato-parte3">
                                        Resposta Rápida
                                    </strong>

                                    <span className="texto-vantagem-contato-parte3">
                                        Respondemos em até 24 horas úteis
                                    </span>
                                </div>

                            </div>


                            <div className="vantagem-contato-parte3">

                                <div className="icone-vantagem-contato-parte3">
                                    <GoShieldCheck color='#ffff' size={20} />
                                </div>

                                <div>
                                    <strong className="nome-vantagem-contato-parte3">
                                        Dados Protegidos
                                    </strong>

                                    <span className="texto-vantagem-contato-parte3">
                                        Seus dados são criptografados e nunca compartilhados
                                    </span>
                                </div>

                            </div>


                            <div className="vantagem-contato-parte3">

                                <div className="icone-vantagem-contato-parte3">
                                    <ImUser color='#ffff' size={20} />
                                </div>

                                <div>
                                    <strong className="nome-vantagem-contato-parte3">
                                        Atendimento Humanizado
                                    </strong>

                                    <span className="texto-vantagem-contato-parte3">
                                        Fale com pessoas reais, não bots
                                    </span>
                                </div>

                            </div>


                        </div>


                    </div>



                    {/* COLUNA DIREITA - FORMULARIO */}
                    <div className="card-formulario-contato-parte3">


                        <h3 className="titulo-formulario-contato-parte3">
                            Envie sua mensagem
                        </h3>


                        <div className="linha-campos-contato-parte3">

                            <div className="campo-contato-parte3">

                                <label className="rotulo-contato-parte3">
                                    Nome completo
                                </label>

                                <input
                                    type="text"
                                    className="entrada-contato-parte3"
                                    placeholder="Seu nome"
                                    value={nome}
                                    onChange={(e) => setNome(formatarNome(e.target.value))}
                                />

                            </div>


                            <div className="campo-contato-parte3">

                                <label className="rotulo-contato-parte3">
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    className="entrada-contato-parte3"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                            </div>

                        </div>


                        <div className="linha-campos-contato-parte3">

                            <div className="campo-contato-parte3">

                                <label className="rotulo-contato-parte3">
                                    WhatsApp
                                </label>

                                <input
                                    type="tel"
                                    className="entrada-contato-parte3"
                                    placeholder="(11) 99999-9999"
                                    value={numero}
                                    onChange={(e) => setNumero(formatarTelefone(e.target.value))}
                                />

                            </div>


                            <div className="campo-contato-parte3">

                                <label className="rotulo-contato-parte3">
                                    Assunto
                                </label>

                                <select className="selecao-contato-parte3"
                                    onChange={(e) => setAssunto(e.target.value)}
                                    value={assunto}>

                                    <option value="" disabled>
                                        Selecione um assunto
                                    </option>

                                    <option value="cursos">
                                        Dúvidas sobre cursos
                                    </option>

                                    <option value="matricula">
                                        Matrícula e pagamento
                                    </option>

                                    <option value="empresas">
                                        Proposta para empresas
                                    </option>

                                    <option value="suporte">
                                        Suporte técnico
                                    </option>

                                </select>

                            </div>

                        </div>


                        <div className="campo-contato-parte3">

                            <label className="rotulo-contato-parte3">
                                Mensagem
                            </label>

                            <textarea
                                className="area-texto-contato-parte3"
                                placeholder="Conte-nos como podemos ajudar..."
                                maxLength={500}
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                            ></textarea>

                            <span className="contador-contato-parte3">
                                {mensagem.length}/500
                            </span>

                        </div>


                        <button className="botao-enviar-contato-parte3" onClick={salvarLeads}>
                            <span className="icone-botao-contato-parte3">➤</span>
                            Enviar Mensagem
                        </button>


                    </div>


                </div>

            </section>
        </>
    )
}

export default Parte3