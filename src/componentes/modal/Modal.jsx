import React, { useState } from 'react'
import "./Modal.css"
import { LuAlarmClock } from "react-icons/lu";
import Swal from "sweetalert2";
import { FaLock } from "react-icons/fa";

const modal = ({ aberto, fechar, curso }) => {

    if (!aberto) return null;

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [numero, setNumero] = useState("")
    const [cursoSelecionado, setCursoSelecionada] = useState(curso)
    const link = `http://localhost:8080/curso/novoLead`


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

    async function salvarLeads() {

        if (!nome || !email || !numero || !cursoSelecionado) {
            alert("Por favor, preencha todos os campos");
            return;
        }

        if (!email.includes("@")) {
            alert("Digite um email válido");
            return;
        }

        const lead = {
            nome: nome,
            email: email,
            telefone: numero,
            cursoEscolhido: cursoSelecionado
        }

        try {

            const resp = await fetch(link, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(lead)
            });

            fechar()

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


        } catch (error) {
            console.error("Erro ao salvar:", error);
            alert("Erro ao salvar. Por favor, tente novamente.");
        }

    }



    return (
        <>
            <div className="overlay-modal-inscricao" onClick={fechar}>
                <div
                    className="modal-inscricao"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className="fechar-modal-inscricao"
                        onClick={fechar}
                    >
                        ✕
                    </button>

                    <div className="topo-modal-inscricao">

                        <span className="categoria-modal-inscricao">
                            INSCRIÇÃO
                        </span>

                        <h2>
                            {curso}
                        </h2>

                        <h3>Garanta já sua vaga!</h3>

                        <p>
                            <LuAlarmClock /> Inscrições por tempo limitado
                        </p>

                    </div>

                    <form className="form-modal-inscricao" onSubmit={(e) => {
                        e.preventDefault();
                        salvarLeads();
                    }}>

                        <div className="campo-modal-inscricao">
                            <label>Nome completo</label>

                            <input
                                type="text"
                                placeholder="Seu nome"
                                value={nome}
                                onChange={(e) => setNome(formatarNome(e.target.value))} />
                        </div>

                        <div className="campo-modal-inscricao">
                            <label>E-mail</label>

                            <input
                                type="email"
                                placeholder="seu@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="campo-modal-inscricao">
                            <label>WhatsApp</label>

                            <input
                                type="text"
                                placeholder="(11) 9 9999-9999"
                                value={numero}
                                onChange={(e) => setNumero(formatarTelefone(e.target.value))} />
                        </div>

                        <button
                            className="btn-modal-inscricao"
                            type="submit"
                        >
                            Confirmar Inscrição
                        </button>

                    </form>

                    <span className="rodape-modal-inscricao">
                        <FaLock /> Seus dados estão seguros.
                    </span>

                </div>
            </div>
        </>
    )
}

export default modal