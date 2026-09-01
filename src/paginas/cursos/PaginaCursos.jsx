import React from 'react'
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Rodape from "../../componentes/rodape/Rodape"
import Parte1 from "./parte1/Parte1"
import MenuCurso from "./menu-cursos/MenuCurso"
import CardCursos from "./cards-cursos/CardCursos"
import Parte4 from "./parte4/Parte4Cursos"
import BotaoWhats from '../../componentes/whats/BotaoWhats'
import { useState, useEffect } from "react";

const PaginaCursos = () => {

    const [listaCursos, setListaCursos] = useState([]);
    const [nomeCurso, setNomeCurso] = useState("")
    const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

    useEffect(() => {
        async function buscarCursos() {
            try {
                const params = new URLSearchParams();

                if (nomeCurso) params.append("nome", nomeCurso);
                if (categoriaAtiva !== "Todos") params.append("categoria", categoriaAtiva);

                const resp = await fetch(`http://localhost:8080/cursos?${params}`);
                const data = await resp.json();
                setListaCursos(data);
            } catch (error) {
                console.error("ERRO AO BUSCAR OS CURSOS:", error);
            }
        }

        const timer = setTimeout(buscarCursos, 400);
        return () => clearTimeout(timer);
    }, [nomeCurso, categoriaAtiva]);

    return (
        <>
            <Cabecalho />
            <Parte1 />
            <MenuCurso
                nomeCurso={nomeCurso}
                setNomeCurso={setNomeCurso}
                categoriaAtiva={categoriaAtiva}
                setCategoriaAtiva={setCategoriaAtiva}
            />
            <CardCursos listaCursos={listaCursos} />
            <Parte4 />
            <Rodape />
            <BotaoWhats />
        </>
    )
}

export default PaginaCursos