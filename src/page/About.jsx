import React from 'react';
import { Slide } from "react-awesome-reveal";

export default function AboutHome() {
  return (
    <main className='aboutHome' id='about'>
      <div className='img-bg'> </div>
      <Slide triggerOnce>
        <section className='containerAboutHome'>
          {/* mais uma explicação breve */}
          <div className='container-AH-1'>
            <p className='about-03'><span className='bg-blue'>/</span>ABOUT ME</p>
            <h1 className='title-03'>Prazer em conhecê-lo, sou Claydson Henrique </h1>
            <p className='description-03'>Olá, eu sou Claydson Henrique, e minha jornada no mundo do desenvolvimento começou em 2022, quando fiz a transição de carreira para seguir minha paixão pela tecnologia e pela criação digital. Desde então, venho explorando esse emocionante universo e aprimorando minhas habilidades como desenvolvedor web.</p>
          </div>
          <div className='container-AH-1 margin-top'>
            <h1 className='title-03 '>Minha jornada e objetivos</h1>
            <p className=' margin-top-text description-03'>Minha jornada de transição me ensinou a valorizar a determinação e a busca constante pelo conhecimento. Com uma base sólida em [JavaScript, React, Html, Css, Redux, Testes Unitarios], estou empenhado em criar soluções web inovadoras e de alta qualidade.</p>
          <button className="curriculo">Acesse meu Curriculo</button>
          </div>
        </section>
      </Slide>
    </main>
  )
}