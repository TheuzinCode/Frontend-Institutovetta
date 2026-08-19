import React from 'react'
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Parte1 from "./Parte1/Parte1"
import Parte2 from "./parte2/Parte2"
import Parte3 from "./parte3/Parte3"
import Parte4 from "./parte4/Parte4"
import Parte5 from "./parte5/Parte5"
import Parte6 from "./parte6/Parte6"
import Rodape from "../../componentes/rodape/Rodape"
import BotaoWhats from '../../componentes/whats/BotaoWhats'


const PaginaHome = () => {
  return (
    <>
      <Cabecalho />

      <Parte1 />

      <Parte2 />

      <Parte3 />

      <Parte4 />

      <Parte5 />

      <Parte6 />

      <Rodape />

      <BotaoWhats />

    </>
  )
}

export default PaginaHome