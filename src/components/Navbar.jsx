import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo-sf.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Men', path: '/men' },
    { name: 'Children', path: '/children' },
    { name: 'Contact', path: '/#contact' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="SF Logo" className="logo-img" />
          <span className="logo-text">SRIMAN FASHIONS</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-item" onClick={() => setIsOpen(false)}>
              {link.name}
            </Link>
          ))}
        </div>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <style>{`
        .navbar {
          background: linear-gradient(90deg, #000000 0%, #1a1a1a 100%);
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: all 0.4s ease;
          border-bottom: 1px solid rgba(191, 149, 63, 0.1);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: rgba(10, 10, 10, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          border-bottom: 1px solid rgba(191, 149, 63, 0.3);
        }

        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-container {
          display: flex;
          align-items: center;
          text-decoration: none;
          gap: 15px;
        }

        .logo-img {
          width: 50px;
          height: auto;
          filter: drop-shadow(0 0 5px rgba(191, 149, 63, 0.3));
          transition: transform 0.3s ease;
        }

        .logo-container:hover .logo-img {
          transform: rotate(5deg) scale(1.05);
        }

        .logo-text {
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 3px;
          color: #fff;
          text-transform: uppercase;
          font-family: serif;
          background: linear-gradient(to right, #fff, #bf953f);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: all 0.3s ease;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
        }

        .nav-item {
          font-weight: 400;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 2px;
          position: relative;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }

        .nav-item:hover {
          color: #bf953f;
        }

        .nav-item::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: 0;
          left: 50%;
          background-color: #bf953f;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          box-shadow: 0 0 10px #bf953f;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          border: none;
          background: none;
          cursor: pointer;
          padding: 5px;
        }

        .bar {
          width: 30px;
          height: 2px;
          background-color: #bf953f;
          transition: all 0.3s ease;
        }

        .hamburger.active .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger.active .bar:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active .bar:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #0a0a0a;
            flex-direction: column;
            padding: 2rem;
            text-align: center;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-bottom: 1px solid rgba(191, 149, 63, 0.2);
            gap: 2rem;
          }

          .nav-links.active {
            transform: translateX(0);
          }

          .nav-item {
            font-size: 1.1rem;
            display: inline-block;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
