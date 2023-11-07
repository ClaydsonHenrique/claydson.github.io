import React from "react";
import perfil from '../images/claydson.png'
import { Link } from "react-router-dom";
import '../style/Foote.css'
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <section id="footer">
      <div className="img-bg-footer"></div>
      <div className="container-footer">
        <div className="dados-footer">
          <img src={perfil} alt="" className="footer-img" />
          <div>
            <h1>Claydson Henrique</h1>
            <h3>Desenvolvedor Web front-end</h3>
            <div className="container-social-footer">
              <Link to='https://github.com/ClaydsonHenrique' target="_blank" className='social-footer'><AiFillGithub></AiFillGithub></Link>
              <Link to='https://www.linkedin.com/in/claydson/' target="_blank" className='social-footer'><AiFillLinkedin></AiFillLinkedin></Link>
              <Link to='https://www.instagram.com/_claydson/' target="_blank" className='social-footer'><AiOutlineInstagram></AiOutlineInstagram></Link>
            </div>
          </div>
        </div>
        <div>
          <h1 className="title-contato">Entrar em contato:</h1>
          <div className="contato" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <p className="text-footer">ME MANDE UM E-MAIL:</p>
            <p className="link-email">claydsonhenriquebs@gmail.com</p>
            <p className="link-linkedin">OU ENTRE EM CONTATO:</p>
            <Link to='' className="link-footer">Linkedin</Link>
          </div>
        </div>
      </div>
      <div className="container-footer-1">
        <p>Todos direitos reservados. © 2023 <span>Claydson Henrique</span></p>
      </div>
    </section>
  )
}
