import React from "react";


const renderSkills = (typeSkills) => {

  const skillsNames = typeSkills === 'hardSkills' ? ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NEXT.JS', 'DOCKER', 'MYSQL', 'GIT']
    : ['Trabalho em equipe', 'Auto liderança', 'Resiliencia', 'Colaboração']

  return (
    <div>
      <ul style={{ textAlign: 'start' }}>
        {skillsNames.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Skill() {
  return (

    <section id="skills" style={{ padding: '60px', backgroundColor: "#4a148c", }}>
      <h1 style={{ textAlign: 'center', fontSize:'35px' }}> HARD AND SOFT SKILLS</h1>
      <div style={{ display: "flex", justifyContent: "center",gap:'40px', padding: '50px ', lineHeight: '25px' , fontSize:'20px'}} >
        {renderSkills('hardSkills')}
        {renderSkills('softSkills')}
      </div>
    </section>
  )
}