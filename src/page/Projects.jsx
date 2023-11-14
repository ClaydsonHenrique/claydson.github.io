import React from "react";
import OnlineStore from '../images/projetos/onlineStore.png'
import '../style/Projects.css'
import { Link } from "react-router-dom";



export default function Projects() {
  return (
    <section className="container-projetct" id="projects" >
      <div id="Projects" >
        <div>
          <h3><span>/</span> MEU PORTFÓLIO</h3>
          <h1>Dê uma olhada nos últimos projetos que fiz</h1>
          <div style={{ display: 'flex' }}>
            <div >
                <h1>Desenvolvimento de site Ecomerces </h1>
              <Link to='https://claydsonhenrique.github.io/online-store/' target="_blank" rel="noopener noreferrer">
                <img className="imgProjects" src={OnlineStore} alt="" />
              </Link>
            </div>
         
            <div>
              <h1>Desenvolvimento de site Ecomerces </h1>
              <Link to='https://claydsonhenrique.github.io/online-store/' target="_blank" rel="noopener noreferrer">
                <img className="imgProjects" src={OnlineStore} alt="" />
              </Link>
            </div>
            
            <div>
              <h1>Desenvolvimento de site Ecomerces </h1>
              <Link to='https://claydsonhenrique.github.io/online-store/' target="_blank" rel="noopener noreferrer">
                <img className="imgProjects" src={OnlineStore} alt="" />
              </Link>
            </div>
            <div>
              <h1>Desenvolvimento de site Ecomerces </h1>
              <Link to='https://claydsonhenrique.github.io/online-store/' target="_blank" rel="noopener noreferrer">
                <img className="imgProjects" src={OnlineStore} alt="" />
              </Link>
            </div>
            <div>
              <h1>Desenvolvimento de site Ecomerces </h1>
              <Link to='https://claydsonhenrique.github.io/online-store/' target="_blank" rel="noopener noreferrer">
                <img className="imgProjects" src={OnlineStore} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}