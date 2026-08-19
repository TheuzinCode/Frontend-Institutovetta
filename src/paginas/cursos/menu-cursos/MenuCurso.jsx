import React from 'react'
import { useState } from "react";
import "./MenuCurso.css";

const MenuCurso = () => {


    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
    const [modalidadeAtiva, setModalidadeAtiva] = useState("Todos");

    const categorias = [
        "Todos",
        "Tecnologia",
        "Gestão",
        "Marketing",
        "Soft Skills",
        "Finanças"
    ];

    const modalidades = [
        "Todos",
        "Online",
        "Presencial"
    ];

    return (
        <>
            <section className="menu-cursos-menu-cursos">
                <div className="container-menu-cursos-menu-cursos">

                    {/* BUSCA */}
                    <div className="busca-menu-cursos-menu-cursos">
                        <span className="icone-busca-menu-cursos-menu-cursos">
                            🔍
                        </span>
                        <input
                            type="text"
                            placeholder="Buscar curso..."
                            className="input-busca-menu-cursos-menu-cursos"
                        />
                    </div>
                    
                    {/* CATEGORIAS */}
                    <div className="filtros-categoria-menu-cursos-menu-cursos">
                        {categorias.map((categoria) => (
                            <button
                                key={categoria}
                                type="button"
                                className={`botao-filtro-menu-cursos-menu-cursos ${categoriaAtiva === categoria
                                        ? "ativo-menu-cursos"
                                        : ""
                                    }`}
                                onClick={() => setCategoriaAtiva(categoria)}
                            >
                                {categoria}
                            </button>
                        ))}
                    </div>
                    
                    {/* MODALIDADE */}
                    <div className="filtros-modalidade-menu-cursos-menu-cursos">
                        {modalidades.map((modalidade) => (
                            <button
                                key={modalidade}
                                type="button"
                                className={`botao-modalidade-menu-cursos-menu-cursos ${modalidadeAtiva === modalidade
                                        ? "ativo-modalidade-menu-cursos"
                                        : ""
                                    }`}
                                onClick={() => setModalidadeAtiva(modalidade)}
                            >
                                {modalidade}
                            </button>
                        ))}
                    </div>
                </div>

            </section>
        </>
    )
}

export default MenuCurso