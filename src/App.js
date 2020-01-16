import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Skillz from './components/Skillz';
import Download from './components/Download';
import Exp from './components/Exp';
import ScrollButton from './components/ScrollButton';

function App() {
  const [className, setClassName] = useState("");
  const toggleTheme = (e) => {
    if (className === '') {
      setClassName('dark');
    } else {
      setClassName('');
    }
  }
  return (
    <div className={`App ${className}`}>
      <Header toggleTheme={toggleTheme} />
      <Background />
      <Skillz />
      <Exp />
      <Download />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default App;
