import React, { useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Navbar from '../components/layouts/Navbar';  
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar';
import Exprience from '../components/Exprience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Intro from '../components/Intro';

import Activities from './Activities';
import Details from './Details.tsx';

// Home component for the main page
const Home = () => {
  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <Navbar />

      <div className="row g-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-12 col-md-9 p-4">
          {/* Intro Section */}
          <Intro />

          {/* Experience Section */}
          <Exprience />

          {/* Education Section */}
          <Education />

          {/* Skills Section */}
          <Skills />

          {/* Contact Section */}
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const NoonWebCV = () => {

  // ✅ Fade-in effect เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/details/:projectId" element={<Details />} />
    </Routes>
  );
};

export default NoonWebCV;