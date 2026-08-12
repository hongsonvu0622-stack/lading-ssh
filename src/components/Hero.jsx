import React, { useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const mockupRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!mockupRef.current) return;
    const rect = mockupRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    mockupRef.current.style.transition = 'none';
    mockupRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!mockupRef.current) return;
    mockupRef.current.style.transition = 'transform 0.5s ease';
    mockupRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <section className="hero">
      <div className="hero-background-grid"></div>
      <div className="hero-content">
        <h1 className="hero-title">The Ultimate <span className="highlight">SSH Client</span></h1>
        <p className="hero-subtitle">A modern, high-performance workspace for developers and sysadmins.</p>
        <div className="cta-container">
          <a href="https://github.com/hongsonvu0622-stack/aetherssh-tool" target="_blank" rel="noopener noreferrer" className="cta-button">Download for macOS</a>
          <a href="https://github.com/hongsonvu0622-stack/aetherssh-tool" target="_blank" rel="noopener noreferrer" className="cta-button outline">Download for Windows</a>
        </div>
      </div>
      
      <div className="hero-mockup-container">
        <div 
          className="mockup-window"
          ref={mockupRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mockup-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="mockup-body">
            <div className="terminal-fake-content">
              root@aetherssh:~# ./connect_to_the_future.sh
              <br/>[OK] Connected securely.
            </div>
          </div>
        </div>
        <div className="mockup-glow"></div>
      </div>
    </section>
  );
}
