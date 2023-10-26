import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiReact, SiRedux, SiMysql, SiTestinglibrary, SiJest, SiCss3, SiDocker, SiGit, SiGithub, SiNodedotjs } from "react-icons/si";
import { DiJavascript } from 'react-icons/di'

import '../style/Skills.css'

export default function Skill() {

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 1000,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const skills = [
    {
      icone: <SiHtml5 className="skill" key="HTML5" />,
      text: 'Tenho ampla experiência em estruturar o conteúdo da web, aproveitando os recursos do HTML5. Com meu conhecimento em HTML, estou apto a transformar conceitos criativos em realidade na forma de páginas web bem elaboradas e funcionais '
    },
    {
      icone: <SiReact className="skill" key="REACT" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiCss3 className="skill" key="CSS3" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiTestinglibrary className="skill" key="RTL" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiJest className="skill" key="JEST" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <DiJavascript className="skill" key="JAVASCRIPT" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiRedux className="skill" key="REDUX" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiGit className="skill" key="GIT" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiGithub className="skill" key="GITHUB" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiDocker className="skill" key="DOCKER" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiNodedotjs className="skill" key="NODE.JS" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
    {
      icone: <SiMysql className="skill" key="MYSQL" />,
      text: 'uma das linguagens de programação mais versáteis e amplamente utilizadas na web. Possuo experiência em criar aplicações web dinâmicas e interativas, manipulando o DOM'
    },
  ];

  return (
    <section id="skills">
      <h1 className="title-04">HARD SKILLS</h1>
      <div className="slideContainer">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="habilidades" key={index}>
              <div className="radio-skil"> {skill.icone}</div>
              <h3 className="nameSkil">{skill.icone.key}</h3>
              <div className="container-text-01"> <p>{skill.text}</p></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
