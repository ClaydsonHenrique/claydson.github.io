import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css'
import logo from '../images/logo.png'


export default function Header() {
  return (
    <header id="header">
      <div>
        <Link to="/" className="logo"><h1> { `Claydson Henrique </>`}</h1></Link>
      </div>
      <nav className="nav" >
        <a href="#home" >Home</a>
        <a href="#about" >About</a>
        <a href="#skills" >Skills</a>
        <a href="#projects" >Projects</a>
      </nav>
    </header>
  );
}