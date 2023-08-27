import React from "react";
import '../style/mobilePage.css'

export default function About() {
  return (
    <section 
id="about"
style={{  display: "flex",width:'auto', flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px" }}>
        <h1 style={{fontSize:'30px' , marginBottom:"30px"}}>ABOUT ME</h1>
      <div
 style={{  fontSize:'20px', textAlign:"center", lineHeight:'26px' ,}}
className="aboutText">
        I am 24 years old, a web developer based in Luziânia-Goiás. I have a passion for creating web pages and solving problems. I feel excited when presented with new challenges and I am always seeking to learn something new.
      </div>
    </section >

  )
}