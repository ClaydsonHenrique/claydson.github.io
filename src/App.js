import React from 'react'
import Hearder from './components/Header'
import Home from './page/Home'
import Footer from './components/Footer'
import './style/Header.css'
import './style/mobilePage.css'


function App() {
  return (
    <div style={{position:'relative'}}>
      <Hearder />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
