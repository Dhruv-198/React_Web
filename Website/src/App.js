import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Home from './Component/Home';
// import Service from './Component/Service';
// import About from './Component/About';
// import Contact from './Component/Contact';
import './App.css';
import Home from './Components/Home';
import Services from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Service" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;