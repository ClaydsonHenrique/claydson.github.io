import React from "react";


export default function Header() {
  return (
    <header id="header">
      <nav className="nav" >
        <a href="#home" >Home</a>
        <a href="#about" >About</a>
        <a href="#skills" >Skills</a>
        <a href="#projects" >Projects</a>
      </nav>
    </header>
  );
}