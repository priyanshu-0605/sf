import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3 className="footer-logo">Sriman Fashions</h3>
          <p className="footer-desc">
            Curating premium fashion for those who appreciate elegance and quality.
          </p>
        </div>

        <button onClick={scrollToTop} className="back-to-top">
          Back to Top
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sriman Fashions. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #0a0a0a;
          color: var(--color-white);
          padding: 4rem 0 2rem;
          text-align: center;
          position: relative;
        }

        .footer-content {
          margin-bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-logo {
          color: var(--color-white);
          margin-bottom: 1rem;
          font-size: 1.5rem;
          letter-spacing: 1px;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: #cccccc;
          max-width: 400px;
          line-height: 1.6;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .back-to-top {
          background: transparent;
          border: 1px solid rgba(191, 149, 63, 0.5);
          color: #bf953f;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .back-to-top:hover {
          background: #bf953f;
          color: #000;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
