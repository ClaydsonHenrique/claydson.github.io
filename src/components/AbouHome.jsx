import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

export default function AboutHome() {
  return (
    <main style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems:'end' }}>
      <Slide triggerOnce>
        <section>
          {/* mais uma explicação breve */}
          <div>
            <p><span>/</span>ABOUT ME</p>
            <h1>I'm starting out as a web developer </h1>
            <p>I'm in a career transition, where I had never been involved with programming. But I spent a long time studying and now I'm a front end web developer.</p>
          </div>
          <div>
            <p>My first contact with the developer environment was in 2022, since then I haven't stopped studying.</p>
          </div>
          <Link to='/about'>More about me </Link>
        </section>
      </Slide>
    </main>
  )
}