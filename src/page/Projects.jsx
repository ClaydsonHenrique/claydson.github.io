import React from "react";
import OnlineStore from '../images/projetos/onlineStore.png'
import MusicApps from '../images/projetos/aaa.png'
import '../style/Projects.css'
import { Link } from "react-router-dom";

const projects = [
  { image: MusicApps, title: 'Music App', details: 'Projeto feio em react, ultilizando a api do Itunes.  Tem como ouvir previas de musicar, alem de favoritar as musicar preferidas.', link:'https://github.com/ClaydsonHenrique/Music-App'},
  { image: OnlineStore, title: 'Online Store', details: '', link:'https://github.com/ClaydsonHenrique/online-store'},
  { image: '', title: '', details: '' , link:''},
  { image: '', title: '', details: '' , link:''},
  { image: '', title: '', details: '' , link:''},
  { image: '', title: '', details: '' , link:''},
  { image: '', title: '', details: '' , link:''},
]



export default function Projects() {

  return (
    <section className="container-projetct" id="projects" >
      <div id="Projects" >
        <div>
          <h3><span>/</span> MEU PORTFÓLIO</h3>
          <h1>Dê uma olhada nos últimos projetos que fiz</h1>
          <div className="detailsProjects">
            {projects.map((project, index) => (
              <div className="projeto"  >

                <div
                  className="imgProjects" style={{ backgroundImage: `url(${project.image})` }}>
                </div>
                <h2>{project.title}</h2>
                <p>{project.details}</p>
                <Link to ={project.link}>Acesse o repositorio do projeto</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}