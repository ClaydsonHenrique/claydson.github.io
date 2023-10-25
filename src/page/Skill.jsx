import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiReact, SiRedux, SiMysql, SiTestinglibrary, SiJest, SiCss3, SiJavascript, SiDocker, SiGit, SiGithub, SiNodedotjs } from "react-icons/si";

import '../style/Skills.css'

export default function Skill() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    afterChange: (current) => setCurrentSkill(current),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
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
      <div>
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="habilidades" key={index}>
              {skill}
            </div>
          ))}
        </Slider>
        <div className="container-radio">
          {skills.map((_, index) => (
            <div className="radio-buttons">
              <input
                type="radio"
                key={index}
                id={`radio-${index}`}
                name="slider-radios"
                checked={index === currentSkill}
                onChange={() => setCurrentSkill(index)}
              />
              <label htmlFor={`radio-${index}`}></label>u
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
