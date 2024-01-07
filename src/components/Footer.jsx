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
            <div className="container-social-footer">
            <Link to='https://github.com/ClaydsonHenrique' target="_blank" className='social-footer'><AiFillGithub></AiFillGithub> <span className="social-link">github.com/ClaydsonHenrique</span></Link>
            <Link to='https://www.linkedin.com/in/claydson/' target="_blank" className='social-footer'><AiFillLinkedin></AiFillLinkedin><span className="social-link">linkedin.com/in/claydson/</span></Link>
            <Link to='https://www.instagram.com/_claydson/' target="_blank" className='social-footer'><AiOutlineInstagram></AiOutlineInstagram><span className="social-link">instagram.com/_claydson/</span></Link>
            </div>
        </div>
        <div>
        
        </div>
      </div>
      <div className="container-footer-1">
        <p>Todos direitos reservados. © 2023 <span>Claydson Henrique</span></p>
      </div>
    </section>
  )
}
