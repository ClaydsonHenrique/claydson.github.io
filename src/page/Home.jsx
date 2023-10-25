import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import perfil from '../images/claydson.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main id="home" className="pg-1 bg-padrao ">
      <section className={`detailsHome ${show ? 'animate-up' : ''}`}>
        <div className="container-title"  >
          {/* titulo */}
          <h1 className="whi-500 title " >I'm Claydson Henrique, a Web Developer</h1>
          {/* descrição */}
          <p className='text-02'>I'm 24 years old, a web developer based in Luziânia-Goiás. I have a passion for creating web pages and solving problems.</p>
          {/* descreve uma pequena parte sobre alguma de suas paginas */}
          <div className='marginBottom' >
            <span className="traco"></span>
            <h3 className='subtitle'>ABOUT ME</h3>
            <p className='text-02'>Eu iniciei com web desenvolvedor atraves de um curso intensivo, que tem duração de 1 ano e nos da conhecimento tanto front quanto back end. Desde então não paro mais de procurar conhecimeto e explorar novos desafios</p>
            <Link className="cor-1 link">LEARN MORE </Link>
          </div>
          <span className="divisor"></span>
          <div className='marginBottom'>
            <h3 className='subtitle'>MY PAGES</h3>
            <p className='text-02'>Conheça alguns dos meu projetos feito esse ano, e acompanhe a evolução de cada um deles</p>
            <div className='link'><Link className="cor-1 link ">LEARN MORE</Link></div>
            <span className="divisor"></span>
          </div>
          <div className='marginBottom'>
            <h3 className='subtitle'>FOLLOW ME</h3>
            <div>
              <Link to='https://github.com/ClaydsonHenrique' target="_blank" className='social'><AiFillGithub></AiFillGithub>
              </Link>
              <Link to='https://www.linkedin.com/in/claydson/' target="_blank" className='social'><AiFillLinkedin></AiFillLinkedin>
              </Link>
              <Link to='https://www.instagram.com/_claydson/' target="_blank"
                className='social'><AiOutlineInstagram></AiOutlineInstagram>
              </Link>
            </div>
          </div>
        </div>
        <div className="image-container">
          {/* adicione aqui seu perfil */}
          <img className="homeImage" src={perfil} alt="" />
        </div>
      </section>
    </main>
  )
}
