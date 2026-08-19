import React from 'react'
import Parte1 from "./parte1/Parte1"
import Parte2 from "./parte2/Parte2"
import Parte3 from "./parte3/Parte3"
import Cabecalho from '../../componentes/cabecalho/Cabecalho'
import Rodape from '../../componentes/rodape/Rodape'
import BotaoWhats from '../../componentes/whats/BotaoWhats'

const CursosDetalhes = () => {
    return (
        <>
            <Cabecalho />
            <Parte1 />
            <Parte2 />
            <Parte3 />
            <Rodape />
            <BotaoWhats />
        </>
    )
}

export default CursosDetalhes