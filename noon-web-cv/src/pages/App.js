import React, { useEffect} from 'react';
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
import Portfolio from '../components/Portfolio';

const NoonWebCV = () => {

  // ✅ Fade-in effect เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    document.body.classList.add("fade-in");
  }, []);

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

          {/* Portfolio Section */}
          <Portfolio />

          {/* Contact Section */}
          <Contact />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NoonWebCV;