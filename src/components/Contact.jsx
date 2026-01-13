import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/srimanfashion/',
      display: '@srimanfashion',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919908105014',
      display: '+91 99081 05014',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@srimanfashions',
      display: '@srimanfashions',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:sandeepvodala@gmail.com',
      display: 'sandeepvodala@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="contact-us" ref={sectionRef}>
      <div className={`contact-content ${isVisible ? 'animate' : ''}`}>
        <h2 className="contact-title">Connect With Us</h2>
        <p className="contact-subtitle">We'd love to hear from you.</p>

        <div className="links-grid">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
            >
              <div className="icon-wrapper">
                {link.icon}
              </div>
              <div className="link-info">
                <span className="link-name">{link.name}</span>
                <span className="link-display">{link.display}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-us {
          min-height: 60vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          color: #fff;
          position: relative;
        }

        .contact-content {
          max-width: 1200px;
          width: 100%;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .contact-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          font-weight: 300;
          letter-spacing: 3px;
          text-transform: uppercase;
          background: linear-gradient(to right, #fff, #bf953f, #fff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: shine 5s linear infinite;
        }

        .contact-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 3rem;
          font-weight: 300;
        }

        .links-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          padding: 0 1rem;
        }

        .social-card {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1rem; /* Smaller padding */
          border-radius: 12px;
          text-decoration: none;
          color: white;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); /* Bouncy transition */
          position: relative;
          overflow: hidden;
        }

        .social-card:hover {
          background: linear-gradient(145deg, rgba(191, 149, 63, 0.1), rgba(0,0,0,0));
          border-color: #bf953f;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 10px 20px rgba(0,0,0,0.3), 0 0 15px rgba(191, 149, 63, 0.2);
        }

        .icon-wrapper {
          background: rgba(255, 255, 255, 0.1);
          width: 40px; /* Smaller icon wrapper */
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: #bf953f;
          transition: all 0.3s ease;
        }

        .social-card:hover .icon-wrapper {
          background: #bf953f;
          color: #000;
          transform: rotate(10deg);
        }

        .link-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          overflow: hidden;
        }

        .link-name {
          font-size: 0.75rem; /* Smaller text */
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 0.15rem;
        }

        .link-display {
          font-size: 0.9rem; /* Smaller text */
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 100%;
        }

        @media (max-width: 1024px) {
            .links-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
          .contact-title {
            font-size: 2.5rem;
          }
          .links-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
