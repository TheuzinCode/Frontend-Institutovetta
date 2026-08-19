import React, { useEffect, useState } from "react";
import "./Cabecalho.css";
import logo from "../../assets/imgs/Logo-cabecalho.png";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cabecalho = () => {

    const [menuAberto, setMenuAberto] = useState(false);
    const [rolado, setRolado] = useState(false);

    useEffect(() => {
        const aoRolar = () => setRolado(window.scrollY > 20);

        aoRolar();
        window.addEventListener("scroll", aoRolar, { passive: true });

        return () => window.removeEventListener("scroll", aoRolar);
    }, []);

    return (
        <header
            className={`cor-de-fundo-cabecalho ${rolado ? "rolado" : ""} ${menuAberto ? "menu-aberto" : ""}`}
        >

            <div className="cabecalho-container">

                <Link to={"/"}>
                    <div className="campo-logo">
                        <img className="logo" src={logo} alt="Logo" />
                    </div>
                </Link>
                <div
                    className="menu-hamburguer"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    {menuAberto ? <FiX /> : <FiMenu />}
                </div>

                <div className={`menu ${menuAberto ? "ativo" : ""}`}>

                    <Link
                        to="/"
                        className="titulos-cabecalho"
                        onClick={() => setMenuAberto(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/cursos"
                        className="titulos-cabecalho"
                        onClick={() => setMenuAberto(false)}
                    >
                        Cursos
                    </Link>

                    <Link
                        to="/sobre-nos"
                        className="titulos-cabecalho"
                        onClick={() => setMenuAberto(false)}
                    >
                        Sobre nós
                    </Link>

                    <Link
                        to="/cases-de-sucesso"
                        className="titulos-cabecalho"
                        onClick={() => setMenuAberto(false)}
                    >
                        Cases de Sucesso
                    </Link>

                    <Link
                        to="/contato"
                        className="titulos-cabecalho"
                        onClick={() => setMenuAberto(false)}
                    >
                        Contato
                    </Link>

                    <Link
                        to="/cursos"
                        className="texto-matricule"
                        onClick={() => setMenuAberto(false)}
                    >
                        <div className="botao-matricule">
                            <div>Matricule-se</div>
                            <div className="icon-matricule">
                                <FiArrowUpRight />
                            </div>
                        </div>
                    </Link>

                </div>

            </div>

        </header>
    );
};

export default Cabecalho;
