import React from 'react'
import './Parte4.css'

const Parte4 = () => {

  const marcos = [
    {
      ano: "2025",
      texto: "Fundação do instituto com 50 cursos presenciais em São Paulo"
    },
    {
      ano: "2025",
      texto: "Expansão para o formato online, alcançando alunos em todo o Brasil"
    },
    
    {
      ano: "2026",
      texto:
        "Parceria com mais de 5 empresas para programas de capacitação corporativa"
    },
    {
      ano: "2026",
      texto:
        "Lançamento da plataforma digital com mais de 500 alunos ativos"
    }
  ];


  return (
    <>
      <section className="pagina-sobre-nós-parte4">


        {/* PARTICULAS DE FUNDO */}
        <div className="particulas-sobre-nós-parte4">

          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>
          <span className="particula-sobre-nós-parte4"></span>

        </div>


        <div className="conteudo-sobre-nós-parte4">


          {/* CABECALHO */}
          <div className="cabecalho-sobre-nós-parte4">

            <div className="badge-sobre-nós-parte4">
              <span className="icone-badge-sobre-nós-parte4">⇅</span>
              JORNADA
            </div>


            <h2 className="titulo-sobre-nós-parte4">
              Nossa{" "}
              <span className="destaque-titulo-sobre-nós-parte4">
                Trajetória
              </span>
            </h2>


            <p className="descricao-sobre-nós-parte4">
              Uma história de crescimento, dedicação e transformação de vidas.
            </p>

          </div>



          {/* LINHA DO TEMPO */}
          <div className="linha-tempo-sobre-nós-parte4">

            {marcos.map((item, indice) => (

              <div
                className={
                  indice % 2 === 0
                    ? "marco-sobre-nós-parte4 marco-direita-sobre-nós-parte4"
                    : "marco-sobre-nós-parte4 marco-esquerda-sobre-nós-parte4"
                }
                key={indice}
              >

                <div className="card-sobre-nós-parte4">

                  <span className="ponto-sobre-nós-parte4"></span>

                  <strong className="ano-sobre-nós-parte4">
                    {item.ano}
                  </strong>

                  <p className="texto-sobre-nós-parte4">
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

export default Parte4