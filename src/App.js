import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

import logoImg from './assets/logo.png';
import imgMkj from './assets/banner.png';
import googlePlayIcon from './assets/google-play.png';

import TRG11B from './assets/app/trg11b.png';
import TRG02B from './assets/app/trg02b.png';
import TRG10B from './assets/app/trg10b.png';
import TRG08B from './assets/app/trg08b.png';


import PolicyPage from './PolicyPage';

// Header component
function Header() {
  const location = useLocation();
  const isPolicyPage = location.pathname === '/policy';

  return (
      <header className="header">
          <div className="container header-container">
            <div className="header-left">
              <div className="logo-wrapper">
                <img src={logoImg} alt="Bangalore Agency" className="logo-img" />
                <span className="studio-name">Bangalore Agency Studio</span>
              </div>
            </div>

            {!isPolicyPage && (
              <nav className="nav">
                <Link to="/" className="nav-link">HOME</Link>
                <Link to="/policy" className="nav-link">POLICY</Link>
                <a href="#contact" className="nav-link">CONTACT</a>
              </nav>
            )}
          </div>
        </header>
  );
}

// Trang chính
function HomePage() {
  const games = [
    {
      name: 'Phone Case Maker DIY',
      image: TRG11B,
      link: 'https://play.google.com/store/apps/details?id=com.casual.phone.diy.coloring.master'
    },
    {
      name: 'Boba Tea DIY: Drink Game',
      image: TRG02B,
      link: 'https://play.google.com/store/apps/details?id=com.casual.game.boba.tea.drink'
    },
    {
      name: 'Magic Slime Simulator: ASMR',
      image: TRG10B,
      link: 'https://play.google.com/store/apps/details?id=com.casual.slime.simulator.master'
    },
    {
      name: 'Mini Game Relax – Fun & Chill',
      image: TRG08B,
      link: 'https://play.google.com/store/apps/details?id=com.calm.tick.tackrelax.minigame'
    }
  ];

  return (
    <>
      {/* About Section */}
      <section id="about" className="section about">
        <div className="container about-row">
          <div className="about-text-container">
            <h2 className="highlight-title">Welcome to Bangalore Agency Studio</h2>
            <p className="about-text">
            Bangalore Agency Studio creates fun, creative, and relaxing mobile games that spark imagination and bring joy to players of all ages – from designing unique phone cases and mixing tasty boba drinks, to playing with satisfying slime and enjoying a variety of mini games whenever and wherever you want.
            </p>
          </div>
          <div className="about-img-container">
            <img src={imgMkj} alt="About MKJ Studio" className="about-img" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="games" className="section games">
        <div className="container">
          <h2 className="text-center">Our Products</h2>
          <div className="game-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.name} />
                <div className="game-info">
                  <h3>{game.name}</h3>
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="btn btn-google-play">
                    <img src={googlePlayIcon} alt="Google Play" className="google-play-icon" />
                    Get on Google Play
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, request support, please contact us at:<br />
            <a href="mailto:bangaloreagency2022@gmail.com">bangaloreagency2022@gmail.com</a><br />
            <span style={{ display: 'inline-block', marginTop: '10px' }}>
              🏠 "Linh Dam, Hoang Liet
                Ha Noi - 100000
                Vietnam (VN)"
            </span>
          </p>
        </div>
      </section>
    </>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policy" element={<PolicyPage />} />
        </Routes>
        <footer className="footer">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} Bangalore Agency. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
