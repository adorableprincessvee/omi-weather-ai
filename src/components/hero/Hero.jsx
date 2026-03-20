import React, { useState } from "react";
import robot from "../../assets/logo.png";
import logo from "../../assets/log.png";
import styles from "./Hero.module.css";

const Hero = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.hero}>
      {/* NAVBAR */}
      <nav className={`${styles.nav} ${styles.sticky}`}>
        <div className={styles.logo}>
          <img src={logo} alt="OMI AI Logo" />
          <span>OMI AI</span>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.mobileOpen : ''}`}>
          <li><a href="#features" onClick={(e) => { e.preventDefault(); if (scrollToSection) scrollToSection('features'); }}>Features</a></li>
          <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); if (scrollToSection) scrollToSection('how-it-works'); }}>How It Works</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); if (scrollToSection) scrollToSection('about'); }}>About</a></li>
        </ul>

        <div className={styles.navActions}>
          <button className={`${styles.navBtn} ${styles.desktopOnly}`}>Get Started</button>
          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* CLOUDS BACKGROUND */}
      <div className={styles.clouds}></div>
      
      {/* HERO CONTENT */}
      <div className={styles.heroContent}>
        {/* LEFT */}
        <div className={styles.text}>
          <span className={styles.badge}>AI Powered</span>
          <h1>
            Meet OMI AI, Your Intelligent Weather Assistant
          </h1>

          <p>
            Real-time weather updates, personalized alerts,
            and friendly guidance — all through a smart AI companion.
          </p>

          <button className={styles.cta}>Talk to OMI</button>
        </div>

        {/* RIGHT */}
        <div className={styles.visual}>
          <div className={styles.particles}></div>
          <img src={robot} alt="OMI AI Avatar" className={styles.avatar} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
