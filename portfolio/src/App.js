import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

// Create About component with animations
const About = () => (
  <motion.section 
    className="about-section"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="section-overlay" />
    <div className="container">
      <h2 className="text-center mb-5" data-aos="fade-down">About Me</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm" data-aos="fade-up">
            <div className="card-body">
              <p>
                I am a passionate software developer with expertise in full-stack development.
                My journey in programming started with a curiosity to create and solve problems,
                which has now evolved into a professional career where I build robust and
                scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
