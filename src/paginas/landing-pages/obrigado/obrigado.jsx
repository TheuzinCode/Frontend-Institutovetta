import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Cabecalho from '../../../componentes/cabecalho/Cabecalho'
import Rodape from '../../../componentes/rodape/Rodape'
import Parte1 from './parte1/Parte1'
import { rastrearEvento } from '../../../componentes/meta-pixel/rastrearEvento'

/* Dispara o Lead do Meta Pixel assim que a pessoa chega nesta página.
   O formulário só navega para cá depois de salvar o lead com sucesso,
   então o evento representa uma conversão de verdade. */

const Obrigado = () => {

    const { state } = useLocation()
    const leadDisparado = useRef(false)

    useEffect(() => {
        // Em desenvolvimento o StrictMode monta a página duas vezes;
        // a referência garante um único disparo por visita
        if (leadDisparado.current) return
        leadDisparado.current = true

        const parametros = { content_name: "Consultoria Gratuita" }

        // A área de interesse chega pelo state da navegação do formulário
        if (state?.areaInteresse) {
            parametros.content_category = state.areaInteresse
        }

        rastrearEvento("Lead", parametros)
    }, [state])

    return (
        <>
        <Cabecalho />
        <Parte1 />
        <Rodape />
        </>
    )
}

export default Obrigado
