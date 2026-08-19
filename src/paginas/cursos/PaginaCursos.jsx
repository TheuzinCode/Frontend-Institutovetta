import React from 'react'
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Rodape from "../../componentes/rodape/Rodape"
import Parte1 from "./parte1/Parte1"
import MenuCurso from "./menu-cursos/MenuCurso"
import CardCursos from "./cards-cursos/CardCursos"
import Parte4 from "./parte4/Parte4Cursos"
import BotaoWhats from '../../componentes/whats/BotaoWhats'

const PaginaCursos = () => {
    return (
        <>
            <Cabecalho />
            <Parte1 />
            <MenuCurso />
            <CardCursos />
            <Parte4 />
            <Rodape />
            <BotaoWhats />
        </>
    )
}

export default PaginaCursos