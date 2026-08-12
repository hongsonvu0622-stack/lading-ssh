import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo-text">AetherSSH</span>
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="https://github.com/hongsonvu0622-stack/aetherssh-tool" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </nav>
  );
}
