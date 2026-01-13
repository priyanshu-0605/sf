import React, { useEffect, useRef, useState } from 'react';

const AboutUs = () => {
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
    <section className="about-us" ref={sectionRef}>
      <div className={`about-content ${isVisible ? 'animate' : ''}`}>
        <h2 className="about-title">Our Legacy</h2>
        <div className="about-text-container">
          <p className="about-text highlight">
            It all started in <span className="gold-text">March 2012</span>.
          </p>
          <p className="about-text">
            Fourteen years ago, Sriman Fashions was just a dream—a small beginning with a heart full of passion. We stitched our hopes into every fabric, believing that quality and elegance would speak louder than words.
          </p>
          <p className="about-text">
            From those humble early days to this grand stage today, our journey has been nothing short of extraordinary. But we didn't walk this path alone.
          </p>
          <p className="about-text emotional">
            To our loyal customers who have stood beside us through every season, every trend, and every milestone: <span className="gold-text">You are our strength.</span> You turned our small idea into a legacy.
          </p>
          <p className="about-text final">
            Here's to 14 years of elegance, and to many more years of dressing your dreams.
          </p>
        </div>
      </div>

      <style>{`
        .about-us {
          min-height: 80vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          color: #fff;
          overflow: hidden;
          position: relative;
        }

        .about-us::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.05) 0%, transparent 70%);
            pointer-events: none;
        }

        .about-content {
          max-width: 900px;
          text-align: center;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }

        .about-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .about-title {
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
          animation: shine 5s linear infinite;
        }

        @keyframes shine {
            to {
                background-position: 200% center;
            }
        }

        .about-text-container {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .about-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 300;
        }

        .about-text.highlight {
            font-size: 1.5rem;
            font-weight: 400;
        }

        .about-text.emotional {
            font-style: italic;
            border-left: 3px solid #bf953f;
            padding-left: 1.5rem;
            margin: 1rem 0;
            text-align: left;
            background: rgba(255,255,255,0.03);
            padding: 1.5rem;
            border-radius: 0 10px 10px 0;
        }

        .about-text.final {
            font-size: 1.4rem;
            margin-top: 1rem;
            letter-spacing: 1px;
        }

        .gold-text {
          color: #bf953f;
          font-weight: 500;
        }



        @media (max-width: 768px) {
          .about-title {
            font-size: 2.5rem;
          }
          
          .about-text {
            font-size: 1rem;
          }
          
          .about-text.emotional {
              text-align: center;
              border-left: none;
              border-top: 2px solid #bf953f;
              border-bottom: 2px solid #bf953f;
              border-radius: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUs;
