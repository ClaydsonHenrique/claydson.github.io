import React, { useState } from 'react'
import Hearder from './components/Header'
import Home from './page/Home'
import AboutHome from './page/About'
import Footer from './components/Footer'
import Skill from './page/Skill'
import './style/style.css'



function App() {
  const [menu, setMenu] = useState(false)
  return (
    <div style={{ position: 'relative' }} >
      <Hearder />
      <Home />
      <AboutHome></AboutHome>
      <Skill></Skill>
      <Footer />
    </div>
  );
}

export default App;
