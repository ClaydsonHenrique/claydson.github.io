import React from "react";

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
      style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingBottom: "60px", padding:'60px' }}>
      <h2 style={{paddingBottom:'40px'}}>Here is one of my projects</h2>
      {renderProjects()}
      <section style={{ display: "flex", gap: "40px", flexWrap: "wrap", justifyContent: "center" }}>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
        <div style={{ backgroundColor: "black", height: "250px", width: "350px" }}></div>
      </section>
    </section>
  )
}