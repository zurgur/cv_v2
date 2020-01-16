import React from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Background from './components/Background';
import Skillz from './components/Skillz';
import Download from './components/Download';
import Exp from './components/Exp';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Footer />
      <Skillz />
      <Exp />
      <Download />
    </div>
  );
}

export default App;
