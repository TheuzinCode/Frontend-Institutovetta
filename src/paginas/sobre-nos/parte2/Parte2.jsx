import React from 'react'
import './Parte2.css'
import { CiCalendar } from "react-icons/ci"; //icone caledar
import { FaGraduationCap } from "react-icons/fa6"; //icone chapeu
import { IoBookOutline } from "react-icons/io5"; //icone book
import { FaRegBuilding } from "react-icons/fa";//icone predio


const Parte2 = () => {

  const numeros = [
    { icone: <CiCalendar size={23} />, valor: "2+", rotulo: "Anos de Experiência" },
    { icone: <FaGraduationCap size={23} />, valor: "600+", rotulo: "Alunos Formados" },
    { icone: <IoBookOutline size={23} />, valor: "50+", rotulo: "Cursos Disponíveis" },
    { icone: <FaRegBuilding size={23} />, valor: "10+", rotulo: "Empresas Parceiras" }
  ];



  return (
    <>
      <section className="pagina-sobre-nós-parte2">


        {/* PARTICULAS DE FUNDO */}
        <div className="particulas-sobre-nós-parte2">

          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>
          <span className="particula-sobre-nós-parte2"></span>

        </div>


        <div className="conteudo-sobre-nós-parte2">

          <div className="grade-sobre-nós-parte2">

            {numeros.map((item, indice) => (

              <div className="item-sobre-nós-parte2" key={indice}>

                <div className="icone-sobre-nós-parte2">
                  {item.icone}
                </div>

                <strong className="numero-sobre-nós-parte2">
                  {item.valor}
                </strong>

                <span className="rotulo-sobre-nós-parte2">
                  {item.rotulo}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>
    </>
  )
}

export default Parte2