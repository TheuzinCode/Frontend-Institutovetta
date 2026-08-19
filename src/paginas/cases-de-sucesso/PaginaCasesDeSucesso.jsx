import React from 'react'
import Cabecalho from "../../componentes/cabecalho/Cabecalho"
import Parte1 from './parte1/Parte1'
import Parte2 from './parte2/Parte2'
import Parte4 from './parte4/Parte4'
import Rodape from '../../componentes/rodape/Rodape'
import BotaoWhats from '../../componentes/whats/BotaoWhats'

const PaginaCasesDeSucesso = () => {
  return (
    <>  
      <Cabecalho />
      <Parte1 />
      <Parte2 />
      <Parte4 />
      <Rodape />
      <BotaoWhats />
    </>
  )
}

export default PaginaCasesDeSucesso