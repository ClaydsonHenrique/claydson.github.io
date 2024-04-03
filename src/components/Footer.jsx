import React from "react";
import perfil from '../images/claydson.png'
import { Link } from "react-router-dom";
import '../style/Foote.css'
import bgfooter from "../images/renderizacao-3d-de-um-design-de-poliplexo-baixo-com-estrutura-de-comunicacao-de-rede.jpg"
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from "react-icons/ai";
import curriculo from '../images/curriculo/Curriculo2.pdf'

export default function Footer() {
  return (
    <section id="footer">
      <div className="img-bg-footer">
        <img src={bgfooter} alt="" />
      </div>
      <div className="container-footer">
        <div className="dados-footer">
          <img src={perfil} alt="" className="footer-img" />
            <div className="container-social-footer">
            <Link to='https://github.com/ClaydsonHenrique' target="_blank" className='social-footer'><AiFillGithub></AiFillGithub> <span className="social-link">github.com/ClaydsonHenrique</span></Link>
            <Link to='https://www.linkedin.com/in/claydson/' target="_blank" className='social-footer'><AiFillLinkedin></AiFillLinkedin><span className="social-link">linkedin.com/in/claydson/</span></Link>
            <Link to='https://www.instagram.com/_claydson/' target="_blank" className='social-footer'><AiOutlineInstagram></AiOutlineInstagram><span className="social-link">instagram.com/_claydson/</span></Link>
            </div>
        </div>
        <div className="containerCurriculo">
          <button className="curriculo" onClick={() => window.open(curriculo, '_blank')}>Acesse meu Curriculo</button>
        </div>
      </div>
      <div className="container-footer-1">
        <p className="textFooter">@ 2023 <span className="textBlue">claydsonhenrique</span> - Design by <span className="textBlue"> Henrique Macedo</span> </p>
        <p className="textFooter">Site feito em <span className="textBlue">React - CSS3 </span> </p>
      </div>
    </section>
  )
}
