import React, { useEffect, useRef } from 'react';
import { Terminal, Key, FolderOpen, Network, Code, Activity, MonitorSmartphone } from 'lucide-react';
import './FeatureGrid.css';

const features = [
  { id: 1, title: 'Integrated Terminal', desc: 'Built-in xterm.js terminal with multi-tab support.', icon: <Terminal className="feature-icon" size={32} /> },
  { id: 2, title: 'Smart SSH Keychain', desc: 'Secure vault for identities and private keys.', icon: <Key className="feature-icon" size={32} /> },
  { id: 3, title: 'Visual SFTP', desc: 'Beautiful graphical file explorer for remote servers.', icon: <FolderOpen className="feature-icon" size={32} /> },
  { id: 4, title: 'Port Forwarding', desc: 'Visually configure Local and Remote forwarding rules.', icon: <Network className="feature-icon" size={32} /> },
  { id: 5, title: 'Command Snippets', desc: 'Reusable shell scripts executed with 1-click.', icon: <Code className="feature-icon" size={32} /> },
  { id: 6, title: 'Cross-Platform', desc: 'Native applications for both macOS and Windows.', icon: <MonitorSmartphone className="feature-icon" size={32} /> }
];

export default function FeatureGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const cards = gridRef.current ? gridRef.current.querySelectorAll('.feature-card') : [];
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="features-section">
      <h2 className="section-title">Everything you need. <span className="highlight">And more.</span></h2>
      <div className="feature-grid" ref={gridRef}>
        {features.map((feature, idx) => (
          <div key={feature.id} className="feature-card" style={{ transitionDelay: `${idx * 100}ms` }}>
            <div className="feature-icon-wrapper">
              {feature.icon}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
