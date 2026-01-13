import React, { useEffect, useRef, useState } from 'react';

const VisitStore = () => {
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
    <section className="visit-store" ref={sectionRef}>
      <div className={`visit-content ${isVisible ? 'animate' : ''}`}>
        <h2 className="visit-title">Visit Our Store</h2>

        <div className="info-card">
          <div className="info-block">
            <h3 className="info-label">Address</h3>
            <p className="address-text">
              Metro Station, 1-8-41/3&4, Street Number 11,<br />
              Opp Metro Pillar 1129, Chikkadpally Lane,<br />
              HDFC Bank Lane, Dead End,<br />
              Chikkadpally, Hyderabad, Telangana 500044
            </p>
            <a
              href="https://www.google.com/maps/place/SRIMAN+FASHIONS+RETAIL+%26+wholesale/@17.4011223,78.4937056,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb99c0eb087c2f:0x6b0f503311347b35!8m2!3d17.4011223!4d78.4962805!16s%2Fg%2F11cn5r0gg9?entry=ttu&g_ep=EgoyMDI2MDEwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="map-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="map-icon">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              View on Google Maps
            </a>
          </div>

          <div className="separator"></div>

          <div className="info-block">
            <h3 className="info-label">Store Timings</h3>
            <div className="timing-details">
              <p className="days">Monday - Sunday</p>
              <p className="time">11:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .visit-store {
          min-height: 60vh;
          background: #0a0a0a;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4rem 2rem;
          color: #fff;
          position: relative;
        }

        .visit-content {
          max-width: 900px;
          width: 100%;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }

        .visit-content.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .visit-title {
          font-size: 3.5rem;
          margin-bottom: 3rem;
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

        .info-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            text-align: left;
        }

        .info-block {
            flex: 1;
        }

        .info-label {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: #bf953f;
            margin-bottom: 1.5rem;
            display: inline-block;
            border-bottom: 1px solid rgba(191, 149, 63, 0.3);
            padding-bottom: 0.5rem;
        }

        .address-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 2rem;
            font-weight: 300;
        }

        .map-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
            background: transparent;
            border: 1px solid #bf953f;
            color: #bf953f;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-size: 0.9rem;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            text-transform: uppercase;
        }

        .map-btn:hover {
            background: #bf953f;
            color: #000;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(191, 149, 63, 0.2);
        }

        .separator {
            width: 1px;
            height: 150px;
            background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .timing-details .days {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 0.5rem;
        }

        .timing-details .time {
            font-size: 1.5rem;
            color: #fff;
            font-weight: 400;
        }

        @media (max-width: 768px) {
            .visit-title {
                font-size: 2.5rem;
            }
            
            .info-card {
                flex-direction: column;
                text-align: center;
                padding: 2rem;
            }

            .separator {
                width: 100%;
                height: 1px;
                background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
                margin: 1rem 0;
            }

            .info-label {
                margin-bottom: 1rem;
            }

            .address-text {
                font-size: 1rem;
            }
        }
      `}</style>
    </section>
  );
};

export default VisitStore;
