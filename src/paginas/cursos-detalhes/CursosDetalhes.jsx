import { React, useState, useEffect, useRef } from 'react'
import Parte1 from "./parte1/Parte1"
import Parte2 from "./parte2/Parte2"
import Cabecalho from '../../componentes/cabecalho/Cabecalho'
import Rodape from '../../componentes/rodape/Rodape'
import BotaoWhats from '../../componentes/whats/BotaoWhats'
import { useParams } from 'react-router-dom';
import { rastrearEvento } from '../../componentes/meta-pixel/rastrearEvento';

const CursosDetalhes = () => {

    const { id } = useParams();
    const [curso, setCurso] = useState(null);


    useEffect(() => {
        async function buscarCursos() {
            try {
                const resp = await fetch(`https://backend-institutovetta-production.up.railway.app/cursos/${id}`);
                const data = await resp.json();
                setCurso(data);
            } catch (err) {
                console.error("ERRO:", err);
            }
        }

        buscarCursos();
    }, [id])

    /* Avisa a Meta qual curso foi visualizado, para permitir
       remarketing por curso. Guardamos o id ja rastreado para
       nao duplicar o evento se o efeito rodar de novo. */
    const ultimoRastreado = useRef(null);

    useEffect(() => {

        if (!curso) return;
        if (ultimoRastreado.current === curso.id) return;

        ultimoRastreado.current = curso.id;

        rastrearEvento("ViewContent", {
            content_ids: [String(curso.id)],
            content_type: "product",
            content_name: curso.nome,
            content_category: curso.categoria
        });

    }, [curso])


    if (!curso) {
        return <h1>Carregando...</h1>;
    }


    return (
        <>
            <Cabecalho />
            <Parte1 curso={curso} />
            <Parte2 curso={curso} />
            <Rodape />
            <BotaoWhats />
        </>
    )
}

export default CursosDetalhes