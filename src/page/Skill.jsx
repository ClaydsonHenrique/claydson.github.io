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
    <SiHtml5 className="skill" key="HTML5" />,
    <SiReact className="skill" key="REACT" />,
    <SiCss3 className="skill" key="CSS3" />,
    <SiTestinglibrary className="skill" key="RTL" />,
    <SiJest className="skill" key="JEST" />,
    <DiJavascript className="skill" key="JAVASCRIPT" />,
    <SiRedux className="skill" key="REDUX" />,
    <SiGit className="skill" key="GIT" />,
    <SiGithub className="skill" key="GITHUB" />,
    <SiDocker className="skill" key="DOCKER" />,
    <SiNodedotjs className="skill" key="NODE.JS" />,
    <SiMysql className="skill" key="MYSQL" />,
  ];

  return (
    <section id="skills">
      <h1 className="title-04">HARD AND SOFT SKILLS</h1>
      <div className="slideContainer">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="habilidades" key={index}>
              <div className="radio-skil"> {skill}</div>
              <h3 className="nameSkil">{skill.key}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
