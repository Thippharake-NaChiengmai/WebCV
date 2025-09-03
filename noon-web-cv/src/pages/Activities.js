import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import Sidebar from '../components/layouts/Sidebar';
import Portfolio from '../components/Portfolio.tsx';
import Achievements from '../components/Achievements';

const Activities = () => {
  return (
    <div className="min-vh-100 bg-light">
      {/* Navigation */}
      <Navbar />

      <div className="row g-0">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="col-12 col-md-9 p-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* Activities & Achievements Section */}
                <Achievements />

                {/* Portfolio Section */}
                <Portfolio />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Activities;
