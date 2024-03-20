import React from 'react'
import Hearder from './components/Header'
import Home from './page/Home'
import AboutHome from './page/About'
import Footer from './components/Footer'
import Skill from './page/Skill'
import Projects from './page/Projects'
import './style/style.css'



function App() {
  return (
    <div className='containerApp' >
      <Hearder />
      <Home />
      <AboutHome></AboutHome>
      <Skill></Skill>
      <Projects></Projects>
      <Footer />
    </div>
  );
}

export default App;
