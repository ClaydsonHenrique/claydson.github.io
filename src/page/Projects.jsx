import React from "react";

import '../style/Projects.css'
import comic from '../images/comic.png'
import jogoDaMemoria from '../images/jogo-da-memoria.png'
import calculadora from '../images/calculadora.png'

const renderProjects = () => {
  const allProjects = []
  allProjects.map((projetc, index) => {
    return (
      <div key={index}>{projetc}</div>
    )
  })
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "60px", padding: '60px' }}>
      <h2 style={{ paddingBottom: '40px' }}>Here is one of my projects</h2>
      {renderProjects()}
      <section style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        <div className="containerProject">
          <div className="imageContainer" >
            <img src={jogoDaMemoria} alt="" className="image" />
          </div>
          <div>
            <p className="textProject"> Este é um projeto de jogo da memória desenvolvido usando a biblioteca React. O jogo oferece três níveis de dificuldade e três conjuntos de cartas temáticas para tornar a experiência de jogo mais envolvente e desafiadora. </p>
          </div>
        </div>
        <div className="containerProject">
          <div className="imageContainer" >
            <img src={comic} alt="" className="image" />
          </div>
          <div>
            <p className="textProject"> Marvel Web, é uma plataforma web dinâmica que mergulha profundamente no vasto universo dos quadrinhos da Marvel. Com o poder do React e Redux e integrei a API da Marvel </p>
          </div>
        </div>
        <div className="containerProject">
          <div className="imageContainer" >
            <img src={calculadora} alt="" className="image" />
          </div>
          <div>
            <p className="textProject"> Marvel Web, é uma plataforma web dinâmica que mergulha profundamente no vasto universo dos quadrinhos da Marvel. Com o poder do React e Redux e integrei a API da Marvel </p>
          </div>
        </div>
      </section>
    </section>
  )
}