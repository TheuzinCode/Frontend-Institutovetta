import React, { useState } from 'react'
import './Parte1.css'
import { ImUser } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { rastrearEvento } from "../../../../componentes/meta-pixel/rastrearEvento";


const Parte1 = () => {

    const navegate = useNavigate();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [areaInteresse, setAreaInteresse] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [erros, setErros] = useState({})

    // Ordem visual dos campos, usada para focar o primeiro com erro
    const ordemCampos = ["nome", "email", "telefone", "areaInteresse"]

    const link = `https://backend-institutovetta-production.up.railway.app/leads/novolead`

    function formatarTelefone(valor) {
        // Remove tudo que não for número
        valor = valor.replace(/\D/g, "");

        // O preenchimento automático pode vir com o código do país (+55)
        if (valor.length > 11 && valor.startsWith("55")) {
            valor = valor.slice(2);
        }

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

    function validarCampos() {
        const novosErros = {};

        if (!nome.trim()) {
            novosErros.nome = "Digite seu nome completo.";
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            novosErros.email = "Digite seu e-mail.";
        } else if (!emailValido.test(email)) {
            novosErros.email = "Digite um e-mail válido.";
        }

        const telefoneNumeros = telefone.replace(/\D/g, "");

        if (!telefoneNumeros) {
            novosErros.telefone = "Digite seu WhatsApp com DDD.";
        } else if (telefoneNumeros.length < 10) {
            novosErros.telefone = "Digite um telefone válido, com DDD.";
        }

        if (!areaInteresse) {
            novosErros.areaInteresse = "Selecione uma área de interesse.";
        }

        return novosErros;
    }

    // Some o erro do campo assim que o usuário começa a corrigi-lo
    function limparErro(campo) {
        setErros((anteriores) => ({ ...anteriores, [campo]: "" }));
    }

    function classeCampo(classeBase, campo) {
        return erros[campo]
            ? classeBase + " campo-com-erro-page-form-parte1"
            : classeBase;
    }

    async function salvarDados(e) {
        e.preventDefault();

        const novosErros = validarCampos();
        setErros(novosErros);

        // Mostra o erro embaixo de cada campo e leva o foco ao primeiro deles
        const primeiroCampoComErro = ordemCampos.find((campo) => novosErros[campo]);

        if (primeiroCampoComErro) {
            document.getElementById(primeiroCampoComErro)?.focus();
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

            rastrearEvento("Lead", {
                content_name: "Consultoria Gratuita",
                content_category: areaInteresse
            });

            navegate("/obrigado");

        } catch (error) {
            console.error("Erro ao salvar:", error);
            setErros({
                envio: "Não foi possível enviar. Verifique sua conexão e tente novamente."
            });
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
                    <form id="formulario" className="card-formulario-page-form-parte1"
                        onSubmit={salvarDados}
                        noValidate
                    >

                        <h2 className="titulo-formulario-page-form-parte1">
                            Fale com a gente
                        </h2>


                        <p className="descricao-formulario-page-form-parte1">
                            Preencha os dados e um consultor entrará em contato.
                        </p>


                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            autoComplete="name"
                            autoCapitalize="words"
                            className={classeCampo("entrada-page-form-parte1", "nome")}
                            placeholder="Nome completo"
                            value={nome}
                            aria-invalid={!!erros.nome}
                            aria-describedby={erros.nome ? "erro-nome" : undefined}
                            onChange={(e) => {
                                setNome(formatarNome(e.target.value));
                                limparErro("nome");
                            }}
                        />

                        {erros.nome && (
                            <p id="erro-nome" className="mensagem-erro-page-form-parte1">
                                {erros.nome}
                            </p>
                        )}


                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className={classeCampo("entrada-page-form-parte1", "email")}
                            placeholder="Seu melhor e-mail"
                            value={email}
                            aria-invalid={!!erros.email}
                            aria-describedby={erros.email ? "erro-email" : undefined}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                limparErro("email");
                            }}
                        />

                        {erros.email && (
                            <p id="erro-email" className="mensagem-erro-page-form-parte1">
                                {erros.email}
                            </p>
                        )}


                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            autoComplete="tel-national"
                            className={classeCampo("entrada-page-form-parte1", "telefone")}
                            placeholder="WhatsApp com DDD"
                            value={telefone}
                            aria-invalid={!!erros.telefone}
                            aria-describedby={erros.telefone ? "erro-telefone" : undefined}
                            onChange={(e) => {
                                setTelefone(formatarTelefone(e.target.value));
                                limparErro("telefone");
                            }}
                        />

                        {erros.telefone && (
                            <p id="erro-telefone" className="mensagem-erro-page-form-parte1">
                                {erros.telefone}
                            </p>
                        )}


                        <select
                            id="areaInteresse"
                            name="areaInteresse"
                            className={classeCampo("selecao-page-form-parte1", "areaInteresse")}
                            value={areaInteresse}
                            aria-invalid={!!erros.areaInteresse}
                            aria-describedby={erros.areaInteresse ? "erro-areaInteresse" : undefined}
                            onChange={(e) => {
                                setAreaInteresse(e.target.value);
                                limparErro("areaInteresse");
                            }}
                        >

                            <option value="" disabled>
                                Área de interesse
                            </option>

                            <option value="Administração e Gestão">Administração e Gestão</option>
                            <option value="Finanças e Contabilidade">Finanças e Contabilidade</option>
                            <option value="Comércio, Atendimento e Serviços">Comércio, Atendimento e Serviços</option>
                            <option value="Saúde e Cuidados">Saúde e Cuidados</option>
                            <option value="Desenvolvimento Pessoal">Desenvolvimento Pessoal</option>
                            <option value="Marketing Digital">Marketing Digital</option>
                            <option value="Informática">Informática</option>
                            <option value="Excel e Análise de Dados">Excel e Análise de Dados</option>
                            <option value="Inteligência Artificial">Inteligência Artificial</option>
                            <option value="Automação">Automação</option>
                            <option value="Programação">Programação</option>
                            <option value="Desenvolvimento Web">Desenvolvimento Web</option>
                            <option value="Design Gráfico">Design Gráfico</option>
                            <option value="Desenvolvimento de Games">Desenvolvimento de Games</option>
                            <option value="Idiomas">Idiomas</option>

                        </select>

                        {erros.areaInteresse && (
                            <p id="erro-areaInteresse" className="mensagem-erro-page-form-parte1">
                                {erros.areaInteresse}
                            </p>
                        )}


                        <textarea
                            id="mensagem"
                            name="mensagem"
                            className="area-texto-page-form-parte1"
                            placeholder="Mensagem adicional (opcional)"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                        ></textarea>


                        {erros.envio && (
                            <p className="mensagem-erro-page-form-parte1 mensagem-erro-envio-page-form-parte1" role="alert">
                                {erros.envio}
                            </p>
                        )}

                        <button className="botao-page-form-parte1" type="submit">
                            INSCREVA-SE
                        </button>

                    </form>






                </div>

            </section>
        </>
    )
}

export default Parte1