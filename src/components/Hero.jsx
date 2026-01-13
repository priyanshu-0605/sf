import React from 'react';

const Hero = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const videoRef = React.useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.15; // Subtle, low volume
    }
  }, []);

  return (
    <section className="hero">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/SF_V.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text and button removed as requested */}

      {/* Mute Button */}
      <button
        onClick={toggleMute}
        className="mute-btn"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          // Muted Icon (Speaker X)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          // Unmuted Icon (Speaker Wave)
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>

      <div className="hero-overlay"></div>

      <style>{`
        .hero {
          height: 90vh;
          background-color: #f0f0f0; /* Fallback */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden; 
        }

        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0;
          animation: fadeIn 1.5s ease-out forwards;
          filter: contrast(1.1) saturate(1.2);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Overlay for text readability */
        .hero::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%);
            z-index: 1;
            pointer-events: none;
        }

        .hero-content {
          z-index: 2;
          max-width: 800px;
          padding: var(--spacing-md);
          color: var(--color-white);
          position: relative;
        }

        .hero-title {
          font-size: 5rem;
          color: var(--color-white);
          margin-bottom: var(--spacing-md);
          font-weight: 400;
          letter-spacing: -2px;
          line-height: 1;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          margin-bottom: var(--spacing-xl);
          opacity: 0.9;
          font-weight: 300;
          letter-spacing: 1px;
        }
        
        .btn-hero {
            border: 1px solid var(--color-white);
            color: var(--color-white);
            padding: 16px 32px;
            font-size: 0.9rem;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .btn-hero:hover {
            background-color: var(--color-white);
            color: var(--color-primary);
        }

        .mute-btn {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            z-index: 10;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: white;
            transition: all 0.3s ease;
            backdrop-filter: blur(4px);
        }

        .mute-btn:hover {
            background: rgba(255, 255, 255, 0.4);
            transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .mute-btn {
              bottom: 1rem;
              right: 1rem;
              width: 40px;
              height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
