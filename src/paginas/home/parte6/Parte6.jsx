import React from 'react'
import "./Parte6.css"
import { useState } from "react"
import { FaBuilding } from "react-icons/fa"; // icone predio
import { IoLocationSharp } from "react-icons/io5"; // icone localizacao
import { BsTelephone } from "react-icons/bs"; //icone telefone
import { MdOutlineEmail } from "react-icons/md"; // icone email
import { CiClock2 } from "react-icons/ci"; //icone relogio

const Parte6 = () => {

    const unidades = [
        {
            id: "grajau",
            nome: "Unidade São Paulo - Grajaú",
            badge: "",
            endereco: "R. Sinfonia Popular, 22, 1ª Sala, Grajaú - SP",
            telefone: "(11) 94081-8818",
            email: "unidadegrajau@instituto.com.br",
            horario: "Seg à Sex: 8h às 20h | Sáb: 8h às 17h",
            mapa:
                "https://www.google.com/maps?q=Rua+Sinfonia+Popular+22+São+Paulo&output=embed"
        },
        {
            id: "parelheiros",
            nome: "Unidade São Paulo - Parelheiros",
            badge: "",
            endereco: "Estr. da Colônia Mário Reimberg Christe, 7, 2ª Sala, Parelheiros - SP",
            telefone: "(11) 94080-9351",
            email: "unidadeparelheiros@instituto.com.br",
            horario: "Seg à Sex: 8h às 19h | Sáb: 8h às 16h",
            mapa:
                "https://www.google.com/maps?q=Estrada+da+Colonia+Mario+Reimberg+Christe+7+São+Paulo&output=embed"
        }
    ]

    const [unidadeAtiva, setUnidadeAtiva] = useState(unidades[0]);

    return (
        <>
            <section className="parte6-home">
                <div className="container-parte6-home">
                    <div className="cabecalho-parte6-home">
                        <div className="badge-parte6-home">
                            📍 NOSSAS UNIDADES
                        </div>
                        <h2 className="titulo-parte6-home">
                            Presentes na <span>Zona Sul de SP</span>
                        </h2>
                        <p className="descricao-parte6-home">
                            Escolha a unidade mais próxima e venha conhecer nossa estrutura de ponta.
                        </p>
                    </div>

                    <div className="conteudo-parte6-home">

                        {/* MAPA */}
                        <div className="mapa-parte6-home">
                            <iframe
                                title="Mapa"
                                src={unidadeAtiva.mapa}
                                loading="lazy"
                            />
                        </div>

                        {/* LISTA */}

                        <div className="lista-unidades-parte6-home">

                            {unidades.map((unidade) => (

                                <div
                                    key={unidade.id}
                                    onClick={() => setUnidadeAtiva(unidade)}
                                    className={
                                        unidadeAtiva.id === unidade.id
                                            ? "unidade-ativa-parte6-home"
                                            : "item-unidade-parte6-home"
                                    }
                                >

                                    <div className="topo-unidade-parte6-home">

                                        <div className="icone-unidade-parte6-home">
                                            <FaBuilding />
                                        </div>

                                        <div className="titulo-unidade-parte6-home">
                                            <h3>{unidade.nome}</h3>

                                            {unidade.badge && (
                                                <span>{unidade.badge}</span>
                                            )}
                                        </div>

                                    </div>

                                    {unidadeAtiva.id === unidade.id && (

                                        <div className="informacoes-unidade-parte6-home">
                                            <p><IoLocationSharp size={22} className="icone-parte6-home" /> {unidade.endereco}</p>
                                            <p><BsTelephone size={22} className="icone-parte6-home" /> {unidade.telefone}</p>
                                            <p><MdOutlineEmail size={22} className="icone-parte6-home" /> {unidade.email}</p>
                                            <p><CiClock2 size={22} className="icone-parte6-home" /> {unidade.horario}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Parte6