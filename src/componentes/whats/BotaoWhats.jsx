import React from 'react'
import './BotaoWhats.css'
import { FaWhatsapp } from "react-icons/fa";

const BotaoWhats = () => {
    const numero = '5511940818818';
    const mensagem = 'Olá! Gostaria de saber mais sobre os cursos do Instituto Vetta.';

    const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    return (
    
    <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='botao-whatsapp'
        aria-label='Falar no WhatsApp'
    >
        <FaWhatsapp />
    </a>

  )
}

export default BotaoWhats