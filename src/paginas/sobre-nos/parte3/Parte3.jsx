import React from 'react'
import './Parte3.css'
import { FaRegLightbulb } from "react-icons/fa";//icone lampada
import { IoShieldOutline } from "react-icons/io5"; //icone Escudo
import { CiHeart } from "react-icons/ci"; // icone coração
import { FaBullseye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


const Parte3 = () => {

  const pilares = [
    {
      icone: <FaBullseye />,
      nome: "Missão",
      texto:
        "Democratizar o acesso à educação profissional de qualidade, capacitando pessoas para conquistar melhores oportunidades e transformar suas realidades."
    },
    {
      icone: <FaEye size={18}/>,
      nome: "Visão",
      texto:
        "Ser o instituto de educação profissional mais reconhecido do Brasil, referência em inovação pedagógica e impacto na empregabilidade dos alunos."
    },
    {
      icone: <CiHeart size={20} />,
      nome: "Valores",
      texto:
        "Inovação, excelência, ética, inclusão e compromisso com o desenvolvimento humano e social são os valores que nos movem todos os dias."
    }
  ];


  const valores = [
    {
      icone: <FaRegLightbulb size={17} />,
      nome: "Inovação",
      texto:
        "Buscamos constantemente novas formas de ensinar e preparar profissionais para os desafios do futuro."
    },
    {
      icone: <IoShieldOutline size={17}/>,
      nome: "Excelência",
      texto:
        "Comprometidos com a mais alta qualidade em cada curso, material e interação com nossos alunos."
    },
    {
      icone: <CiHeart size={20} />,
      nome: "Impacto Social",
      texto:
        "Acreditamos que a educação é o maior agente de transformação social e econômica do país."
    }
  ];


  return (
    <>
      <section className="pagina-sobre-nós-parte3">


        {/* PARTICULAS DE FUNDO */}
        <div className="particulas-sobre-nós-parte3">

          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>
          <span className="particula-sobre-nós-parte3"></span>

        </div>


        <div className="conteudo-sobre-nós-parte3">


          {/* CABECALHO */}
          <div className="cabecalho-sobre-nós-parte3">

            <div className="badge-sobre-nós-parte3">
              <span className="icone-badge-sobre-nós-parte3">◎</span>
              PILARES
            </div>


            <h2 className="titulo-sobre-nós-parte3">
              Missão, Visão e{" "}
              <span className="destaque-titulo-sobre-nós-parte3">
                Valores
              </span>
            </h2>


            <p className="descricao-sobre-nós-parte3">
              Os pilares que guiam cada decisão e cada curso que desenvolvemos.
            </p>

          </div>



          {/* CARDS PRINCIPAIS */}
          <div className="grade-principal-sobre-nós-parte3">

            {pilares.map((item, indice) => (

              <div className="card-principal-sobre-nós-parte3" key={indice}>

                <div className="icone-principal-sobre-nós-parte3">
                  {item.icone}
                </div>

                <h3 className="nome-principal-sobre-nós-parte3">
                  {item.nome}
                </h3>

                <p className="texto-principal-sobre-nós-parte3">
                  {item.texto}
                </p>

              </div>

            ))}

          </div>



          {/* CARDS SECUNDARIOS */}
          <div className="grade-secundaria-sobre-nós-parte3">

            {valores.map((item, indice) => (

              <div className="card-secundario-sobre-nós-parte3" key={indice}>

                <div className="icone-secundario-sobre-nós-parte3">
                  {item.icone}
                </div>

                <div>
                  <strong className="nome-secundario-sobre-nós-parte3">
                    {item.nome}
                  </strong>

                  <p className="texto-secundario-sobre-nós-parte3">
                    {item.texto}
                  </p>
                </div>

              </div>

            ))}

          </div>


        </div>

      </section>
    </>
  )
}

export default Parte3