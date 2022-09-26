import React from 'react';
import './App.css';
import Maincontent from './components/Maincontent';
import Navbar from './components/Navbar';
import Secondsection from './components/Secondsection';
import Titlebar from './components/Titlebar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
       <Titlebar />
       <Navbar />
       <Maincontent />
       <Secondsection />
       <Footer />
    </div>
  );
}

export default App;
