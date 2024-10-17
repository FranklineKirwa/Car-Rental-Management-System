import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const Home = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <p>Find the best cars at affordable prices!</p>
      </header>

      <section className="homepage-sections">
        <div className="homepage-card">
          <h2>Browse Cars</h2>
          <p>Explore our wide range of cars for rent.</p>
          <Link to="/cars" className="homepage-link">
            View Cars
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
