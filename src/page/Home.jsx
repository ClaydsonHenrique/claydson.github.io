import React from "react";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";

const imagem = "https://cdn.colegioplanck.com.br/wp-content/uploads/2021/06/Colegio-Planck-Profissao-programador-o-que-faz-esse-profissional-tao-disputado-no-mercado-arte-2-Autores-Grupo-S2-Marketing-Freepik.jpg"

export default function Home() {
  return (
    <section id="home">
<div style={{ padding: "90px 0", display: "flex", justifyContent: "space-around"}}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", width: "400px" }}>
        <h2>Claydson Henrique !!</h2>
        <p> Developer Web</p>
        <p> Learn more about my experiences and projects!</p>
      </div>
      <div >
        <img src={imagem} alt="" style={{ height: "300px", width: "400px", borderRadius: "20px" }} id="img" />
      </div>
</div>
      <About />
      <Skill />
      <Projects />
    </section>
  )
}
