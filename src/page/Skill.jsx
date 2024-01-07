import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiHtml5, SiReact, SiRedux, SiTestinglibrary, SiJest, SiCss3, SiDocker, SiGit, SiGithub, SiNodedotjs, SiTypescript, SiSequelize } from "react-icons/si";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { DiJavascript, DiMysql } from 'react-icons/di'

import '../style/Skills.css'

export default function Skill() {

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    prevArrow: <FaChevronLeft />,
    nextArrow: <FaChevronRight />,
    speed: 1000,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1.4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };


  const skills = [
    {
      icone: <SiHtml5 className="skill" key="HTML5" />,
    },
    {
      icone: <SiTypescript className="skill" key="TypeScript" />,
    },
    {
      icone: <SiSequelize className="skill" key="Sequelize" />,
    },
    {
      icone: <SiReact className="skill" key="REACT" />,
    },
    {
      icone: <SiCss3 className="skill" key="CSS3" />,
    },
    {
      icone: <SiTestinglibrary className="skill" key="RTL" />,
    },
    {
      icone: <SiJest className="skill" key="JEST" />,
    },
    {
      icone: <DiJavascript className="skill" key="JAVASCRIPT" />,
    },
    {
      icone: <SiRedux className="skill" key="REDUX" />,
    },
    {
      icone: <SiGit className="skill" key="GIT" />,
    },
    {
      icone: <SiGithub className="skill" key="GITHUB" />,
    },
    {
      icone: <SiDocker className="skill" key="DOCKER" />,
    },
    {
      icone: <SiNodedotjs className="skill" key="NODE.JS" />,
    },
    {
      icone: <DiMysql className="skill" key="MYSQL" />,
    },
  ];

  return (
    <section id="skills">
      <h1 className='subtitles' ><span className='designTitles'>{'<'}</span> Skils <span className='designTitles'>{'/>'}</span></h1>
      <div className="slideContainer">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div className="habilidades" key={index}>
              <div className="radio-skil"> {skill.icone}</div>
              <h3 className="nameSkil">{skill.icone.key}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
