import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import perfil from '../images/claydson.png'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Home() {
  const [show, setShow] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);
  }, []);


  return (
    <main id="home" className="pg-1 bg-padrao ">
      <section className={`detailsHome ${show ? 'animate-up' : ''}`}>
        <div className="container-title"  >
          {/* titulo */}
          <p className='hello'>Hello!</p>
          <p className="whi-500 title " >I´m Claydson Henrique</p>
          <p className='subtitleHome'>Desenvolvedor full stack</p>
          {/* descrição */}
          <p className='text-02'>Tenho 24 anos, sou um desenvolvedor web baseado em Luziânia-Goiás. Tenho paixão por criar páginas web e resolver problemas.</p>
          <div>
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
