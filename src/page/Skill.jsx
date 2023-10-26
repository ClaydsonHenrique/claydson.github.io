import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiReact, SiRedux, SiMysql, SiTestinglibrary, SiJest, SiCss3, SiJavascript, SiDocker, SiGit, SiGithub, SiNodedotjs } from "react-icons/si";

import '../style/Skills.css'

export default function Skill() {

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const skills = [
    <SiHtml5 className="skill" key="html5" />,
    <SiReact className="skill" key="react" />,
    <SiCss3 className="skill" key="css3" />,
    <SiTestinglibrary className="skill" key="testing-library" />,
    <SiJest className="skill" key="jest" />,
    <SiJavascript className="skill" key="javascript" />,
    <SiRedux className="skill" key="redux" />,
    <SiGit className="skill" key="git" />,
    <SiGithub className="skill" key="github" />,
    <SiDocker className="skill" key="docker" />,
    <SiNodedotjs className="skill" key="nodejs" />,
    <SiMysql className="skill" key="mysql" />,
  ];

  return (
    <section id="skills">
      <h1>HARD AND SOFT SKILLS</h1>
      <div className="slideContainer">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="habilidades" key={index}>
              {skill}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
