import React from 'react';
import './app.css';



import {Footer , Blog , Possibility , Features , Header , WhatGPT3} from './container/main';
import {Cta , Brand , Navbar} from './components/main';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App