import React, { useEffect, useState } from 'react';
import { Slide } from "react-awesome-reveal";
import OnlineStore from '../images/projetos/onlineStore.png'
import MusicApps from '../images/projetos/aaa.png'
import backEnd from '../images/projetos/imgBackend.jpg'
import comic from '../images/projetos/comic.png'
import jogo_da_memorioa from '../images/projetos/jogo-da-memoria.png'
import trivia from '../images/projetos/trivia.png'

import '../style/Projects.css'
import { Link } from "react-router-dom";


//  array com projetos a ser adicionado 

const projects = [
  
  // projeto trybe tunes
  { image: MusicApps, title: 'Music App', details: 'Este projeto, desenvolvido durante o curso da Trybe, destaca habilidades como consumo de dados de API, uso de hooks como useEffect e useState, gerenciamento de rotas com React Router Dom, e criação de links de navegação com o componente Link.', link:'https://github.com/ClaydsonHenrique/Music-App'},
  
  // projeto Online Store
  { image: OnlineStore, title: 'Online Store', details: 'Este projeto consiste na construção de uma API para gerenciamento de vendas, permitindo operações de criação, leitura, atualização e exclusão (CRUD) de produtos e vendas. A API segue os princípios RESTful e utiliza um banco de dados MySQL para armazenar os dados.', link:'https://github.com/ClaydsonHenrique/online-store'},
  
  // Back end projeto trybe and dragons
  { image: backEnd, title: 'Danges and Dragons', details: 'O projeto representa um mergulho prático nos princípios da Orientação a Objetos, trazendo a capacidade de criar uma estrutura versátil e dinâmica para jogos de RPG, promovendo um aprendizado sólido sobre a construção de sistemas complexos e interativos.', link:'https://github.com/ClaydsonHenrique/Danges_And_Dragons'},
  
  // jogo trivia 
  { image: trivia, title: 'Trivia', details: 'Desenvolvido com React, Redux e integração com a API Open Trivia Database, o jogo oferece uma seleção de cinco perguntas em cada rodada, abrangendo diversos temas. Além disso, o projeto inclui testes unitários para garantir a estabilidade e funcionalidade do jogo.', link:'https://github.com/ClaydsonHenrique/Trivia-Quest'},
  
  {
    image: jogo_da_memorioa, title: 'Jogo da Memoria', details: 'O Jogo da Memória foi desenvolvida em React, proporcionando uma experiência clássica do jogo da memória de forma digital. Com uma interface intuitiva, o jogo oferece três níveis de dificuldade, permitindo jogadores se divirtam. ' , link:''},
    
  {
    image: comic, title: 'Comic', details: 'Este projeto é uma plataforma de revistas em quadrinhos que utiliza a API da Marvel para acessar informações detalhadas sobre uma ampla gama de quadrinhos.Desenvolvido com o auxílio de React e Redux. O site oferece aos usuários uma experiência imersiva' , link:''},
]



export default function Projects() {

  const [show, setShow] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);
  
  return (
  <Slide triggerOnce>
    <section className="container-projetct" id="projects" >
      <div id="Projects" >
        <div>
          <h3 className='subtitles' ><span className='designTitles'>{'<'}</span> Laboratorio <span className='designTitles'>{'/>'}</span></h3>
          <div className="detailsProjects">
            {projects.map((project, index) => (
              <div className={ project.image ? 'projeto' : ' projeto center' }  >
                
                {/* verificando se o projeto contem imagem  */}
                {project.image ? <div
                  className="imgProjects" style={{ backgroundImage: `url(${project.image})` }}>
                </div> : null}
                
                <h2 className={`titleProjects ${show ? 'animate-up' : ''}`} > {project.title}</h2>
                <p className="details">{project.details}</p>
                <Link className="repositorio_link" to={project.link}> Ver no GitHub</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Slide>
  )
}