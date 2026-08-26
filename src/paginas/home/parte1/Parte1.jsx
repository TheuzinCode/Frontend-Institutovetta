import React from 'react'
import "./Parte1.css"
import { TbPointFilled } from "react-icons/tb"; //icone ponto
import { FaArrowRight } from "react-icons/fa6"; //icone seta para direita
import { FaUserGraduate } from "react-icons/fa"; //icone estudante
import { CiHeart } from "react-icons/ci"; //icone coraçaõ
import { IoBookOutline } from "react-icons/io5"; //icone livro
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Parte1cds = () => {
    return (
        <>
            <div className="degrade-home">
                <div className="parte1-container-home">
                    <div>
                        <div className="container-frase-efeito-home">
                            <div className="frase-efeito-home">
                                <div className="pointer"><TbPointFilled /></div>
                                <div>Inteligência Artificial em Alta — Prepare-se para o Futuro</div>
                            </div>
                        </div>
                    </div>
                    <div className="titulo-principal-home">
                        <p>
                            Domine a <span style={{ color: '#ec6f26' }}> Inteligência
                                <br /> Artificial </span> agora
                        </p>

                    </div>
                    <div className="descricao-principal-home">
                        Cursos de IA, Machine Learning, Automação e muito mais. Transforme <br />
                        sua carreira com as tecnologias que estão redefinindo o mundo.
                    </div>
                    <div className="container-botoes-home">
                        <Link to="/cursos" className='config-link'>
                            <div className='botao-ver-cursos'> <IoBookOutline size={19} className='book'/> Cursos</div>
                        </Link>

                        <Link to="/cursos" className='config-link'>
                            <div className='botao-matricule-se'> Matricule-se Agora
                                <span className='arrow-right-home'><FaArrowRight /></span></div>
                        </Link>
                    </div>


                    <div className="grid-container-informacoes-home">
                        <div className="grid-item-informacoes-home">
                            <div><FaUserGraduate color="#F26716" size={30} /></div>
                            <div className="grid-numero-informacao-home">600+</div>
                            <div className="grid-descricao-informacao-home">Alunos Formados</div>
                        </div>
                        <div className="grid-item-informacoes-home">
                            <div><CiHeart color="#F26716" size={30} /></div>
                            <div className="grid-numero-informacao-home">98%</div>
                            <div className="grid-descricao-informacao-home">Satisfação</div>
                        </div>
                        <div className="grid-item-informacoes-home">
                            <div><IoBookOutline color="#F26716" size={30} /></div>
                            <div className="grid-numero-informacao-home">50+</div>
                            <div className="grid-descricao-informacao-home">Cursos Disponíveis</div>
                        </div>
                        <div className="grid-item-informacoes-home">
                            <div><IoBriefcaseOutline color="#F26716" size={30} /></div>
                            <div className="grid-numero-informacao-home">85%</div>
                            <div className="grid-descricao-informacao-home">Empregabilidade</div>
                        </div>
                    </div>






                </div>
            </div>
        </>
    )
}

export default Parte1cds