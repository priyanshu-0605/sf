import React, { useEffect, useRef, useState } from 'react';

const ChildrenCollection = () => {
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

  return (
    <section id="children" className="children-collection" ref={sectionRef}>
      <div className={`content-wrapper ${isVisible ? 'animate' : ''}`}>
        <h2 className="section-title">Fashion For The Little Ones</h2>

        <div className="message-container">
          <p className="main-text">
            For <span className="highlight">Boys</span> & <span className="highlight">Girls</span>. From <span className="highlight">Infants</span> to <span className="highlight">Teens</span>.
          </p>

          <p className="sub-text">
            Every smile deserves a style. Our collection captures the innocence of childhood and the energy of youth, offering comfort and charm for every age and every occasion.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <span className="feature-label">Variety</span>
              <h3>Boys & Girls</h3>
              <p>Cute to Cool</p>
            </div>
            <div className="feature-item">
              <span className="feature-label">Growth</span>
              <h3>0 - 14 Years</h3>
              <p>Infants • Toddlers • Teens</p>
            </div>
            <div className="feature-item">
              <span className="feature-label">Occasion</span>
              <h3>Every Moment</h3>
              <p>Ethnic • Party • Casuals • Shoes</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .children-collection {
          min-height: 80vh;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .content-wrapper.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 4rem;
          margin-bottom: 3rem;
          font-weight: 300;
          letter-spacing: 4px;
          text-transform: uppercase;
          background: linear-gradient(to right, #fff, #bf953f, #fff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          background-size: 200% auto;
          animation: shine 6s linear infinite;
        }

        .message-container {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(191, 149, 63, 0.2);
          border-radius: 20px;
          padding: 4rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .main-text {
          font-size: 2rem;
          line-height: 1.4;
          margin-bottom: 2rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
        }

        .highlight {
          color: #bf953f;
          font-weight: 600;
          font-style: italic;
        }

        .sub-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 800px;
          margin: 0 auto 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 3rem;
        }

        .feature-item h3 {
          color: #bf953f;
          font-size: 1.5rem;
          margin: 1rem 0 0.5rem;
          font-weight: 400;
          letter-spacing: 1px;
        }

        .feature-item p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .feature-label {
          font-size: 0.9rem;
          display: block;
          margin-bottom: 0.5rem;
          color: rgba(191, 149, 63, 0.8);
          font-family: serif;
          font-style: italic;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.5rem;
            line-height: 1.2;
          }

          .message-container {
            padding: 2rem;
          }

          .main-text {
            font-size: 1.5rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ChildrenCollection;
