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
          <p className='subtitleHome'>Web Developer</p>
          {/* descrição */}
          <p className='text-02'>I'm 24 years old, a web developer based in Luziânia-Goiás. I have a passion for creating web pages and solving problems.</p>

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
