import React from "react";
import perfil from '../images/claydson.png'
import { Link } from "react-router-dom";
import '../style/Foote.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Footer() {
  return (
    <section id="footer" >
      <div className="container-footer">
        <div className="dados-footer">
          <img src={perfil} alt="" className="footer-img" />
          <div>
            <h1>Claydson Henrique</h1>
            <h3>Desenvolvedor Web front-end</h3>
            <div className="container-social-footer">
              <Link to='https://github.com/ClaydsonHenrique' target="_blank" className='social-footer'><AiFillGithub></AiFillGithub>
              </Link>
              <Link to='https://www.linkedin.com/in/claydson/' target="_blank" className='social-footer'><AiFillLinkedin></AiFillLinkedin>
              </Link>
              <Link to='https://www.instagram.com/_claydson/' target="_blank"
                className='social-footer'><AiOutlineInstagram></AiOutlineInstagram>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title-contato">Entrar em contato:</h1>
          <p>ME MANDE UM E-MAIL:</p>
          <Link className="link-email">claydsonhenriquebs@gmail.com</Link>
          <p className="link-linkedin">OU ENTRE EM CONTATO:<Link to='' className="link-footer">Linkedin</Link></p>
        </div>
      </div>
      <span className="divisor-footer"></span>
      <div className="container-footer-1">
        <p >Todos direitos reservados. © 2023 <span>Claydson Henrique</span> </p>
      </div>
    </section>
  )
}