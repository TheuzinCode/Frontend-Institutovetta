import React, { useState } from 'react'
import './Parte1.css'
import { ImUser } from "react-icons/im";
import { useNavigate } from "react-router-dom";


const Parte1 = () => {

    const navegate = useNavigate();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [areaInteresse, setAreaInteresse] = useState("")
    const [mensagem, setMensagem] = useState("")

    const link = `http://localhost:8080/leads/novolead`

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

    async function salvarDados(e) {
        e.preventDefault();

        if (!nome || !email || !telefone || !areaInteresse) {
            alert("Por favor, preencha todos os campos");
            return;
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
            email: email,
            numero: telefone,
            cursoInteressado: areaInteresse,
            mensagem: mensagem
        }

        try {
            const resp = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(lead)
            });

            if (!resp.ok) {
                throw new Error("Erro ao salvar");
            }

            const data = await resp.json();

            setNome("")
            setEmail("")
            setTelefone("")
            setAreaInteresse("")
            setMensagem("")

            navegate("/obrigado");

        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar. Por favor, tente novamente.");
        }

    }

    return (
        <>
            <section className="pagina-page-form-parte1">

                <div className="conteudo-page-form-parte1">


                    {/* COLUNA ESQUERDA */}
                    <div className="coluna-esquerda-page-form-parte1">


                        <h1 className="titulo-page-form-parte1">
                            Transforme sua{" "}
                            <span className="destaque-titulo-page-form-parte1">Carreira</span>{" "}
                            com Quem Entende do Futuro
                        </h1>


                        <p className="descricao-page-form-parte1">
                            Cursos livres com metodologia prática, instrutores do mercado e
                            certificação reconhecida. Mais de{" "}
                            <strong>600 alunos</strong> formados e{" "}
                            <strong>85% de empregabilidade</strong>.
                        </p>
                    </div>

                    {/* FORMULARIO */}
                    <div className="card-formulario-page-form-parte1">

                        <h2 className="titulo-formulario-page-form-parte1">
                            Agende sua Consultoria Gratuita
                        </h2>


                        <p className="descricao-formulario-page-form-parte1">
                            Preencha os dados e um consultor entrará em contato.
                        </p>


                        <input
                            type="text"
                            className="entrada-page-form-parte1"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e) => setNome(formatarNome(e.target.value))}
                        />


                        <input
                            type="email"
                            className="entrada-page-form-parte1"
                            placeholder="Seu melhor e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <input
                            type="tel"
                            className="entrada-page-form-parte1"
                            placeholder="WhatsApp com DDD"
                            value={telefone}
                            onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                        />


                        <select className="selecao-page-form-parte1" value={areaInteresse}
                            onChange={(e) => setAreaInteresse(e.target.value)}
                        >

                            <option value="" disabled>
                                Área de interesse
                            </option>

                            <option value="marketing">Marketing Digital</option>
                            <option value="dados">Análise de Dados</option>
                            <option value="projetos">Gestão de Projetos</option>
                            <option value="web">Desenvolvimento Web</option>
                            <option value="design">Design UX/UI</option>
                            <option value="ia">Inteligência Artificial</option>

                        </select>


                        <textarea
                            className="area-texto-page-form-parte1"
                            placeholder="Mensagem adicional (opcional)"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>


                        <button className="botao-page-form-parte1"
                            onClick={salvarDados}
                        >
                            INSCREVER - SE
                        </button>

                    </div>






                </div>

            </section>
        </>
    )
}

export default Parte1