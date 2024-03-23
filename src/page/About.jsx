import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import PDFViewer from '../components/PdfView';
import { Link } from 'react-router-dom';
import curriculo from '../images/curriculo/Curriculo2.pdf'
export default function AboutHome() {

  return (
    <main className='aboutHome' id='about'>
      <div className='img-bg'> </div>
      <Slide triggerOnce>
        <section className='containerAboutHome'>
          {/* mais uma explicação breve */}
          <div className="containerRigth">
            <div className='container-AH-1'>
              <p className='about-03'><span className="textBlue">{'<'}</span> ABOUT ME <span className="textBlue">{'| >'}</span></p>
              <p className='description-03'>Eu iniciei com web desenvolvedor atraves de um curso intensivo, que tem duração de 1 ano e nos da conhecimento tanto front quanto back end. Desde então não paro mais de procurar conhecimeto e explorar novos desafios. </p>
            </div>
            <div className='container-AH-1 '>
              <p className='about-03'><span className="textBlue">{'<'}</span> OBJETIVOS<span className="textBlue">{'| >'}</span></p>
              <p className=' description-03'>Minha jornada no mundo do desenvolvimento começou em 2022, quando fiz a transição de carreira para seguir minha paixão pela tecnologia e pela criação digital. Desde então, venho explorando esse emocionante universo e aprimorando minhas habilidades como desenvolvedor web para um dia ne tornar um Full Stack.</p>
              <button className="curriculo" onClick={() => window.open(curriculo, '_blank')}>Acesse meu Curriculo</button>
            </div>
          </div>
        </section>
      </Slide>
    </main>
  )
}