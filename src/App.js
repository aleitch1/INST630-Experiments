import React from 'react';
import './App.css';
import Maincontent from './components/Maincontent';
import Navbar from './components/Navbar';
import Secondsection from './components/Secondsection';
import Titlebar from './components/Titlebar';



function App() {
  return (
    <div className="App">
       <Titlebar />
       <Navbar />
       <Maincontent />
       <Secondsection />
    </div>
  );
}

export default App;
