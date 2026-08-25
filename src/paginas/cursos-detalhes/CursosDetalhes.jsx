import { React, useState, useEffect } from 'react'
import Parte1 from "./parte1/Parte1"
import Parte2 from "./parte2/Parte2"
import Parte3 from "./parte3/Parte3"
import Cabecalho from '../../componentes/cabecalho/Cabecalho'
import Rodape from '../../componentes/rodape/Rodape'
import BotaoWhats from '../../componentes/whats/BotaoWhats'
import { useParams } from 'react-router-dom';

const CursosDetalhes = () => {

    const { id } = useParams();
    const [curso, setCurso] = useState(null);


    useEffect(() => {
        async function buscarCursos() {
            try {
                const resp = await fetch(`http://localhost:8080/cursos/${id}`);
                const data = await resp.json();
                setCurso(data);
            } catch (err) {
                console.error("ERRO:", err);
            }
        }

        buscarCursos();
    }, [id])

    if (!curso) {
        return <h1>Carregando...</h1>;
    }


    return (
        <>
            <Cabecalho />
            <Parte1 curso={curso} />
            <Parte2 />
            <Parte3 />
            <Rodape />
            <BotaoWhats />
        </>
    )
}

export default CursosDetalhes