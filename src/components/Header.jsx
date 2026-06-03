import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { MessageCircle } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track scroll positions for the simplified sections
      const sections = ['home', 'services', 'projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = "https://wa.me/919120155475?text=Hello%20Evergreen%20Civil%20Consultant,%20I%20need%20consultation.";

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo Section */}
        <a href="#home" className="logo-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <div className="logo-wrapper">
            <Logo />
          </div>
          <div className="logo-text">
            <h1>Evergreen <span>Civil Consultant</span></h1>
            <p>Engineering Excellence • Structural Innovation</p>
          </div>
        </a>

        {/* Desktop & Mobile Menu Navigation */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <a 
            href="#home" 
            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
          >
            Home
          </a>
          <a 
            href="#services" 
            className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('projects'); }}
          >
            Project
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
          >
            Contact
          </a>

          {/* Quick-contact CTA Button */}
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn header-cta"
            onClick={() => setIsMenuOpen(false)}
            style={{
              padding: '10px 18px',
              fontSize: '0.85rem',
              boxShadow: 'none',
              borderRadius: '30px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: 'var(--clr-primary-400)',
              color: 'var(--clr-neutral-900)',
              fontWeight: '700'
            }}
          >
            <MessageCircle size={15} fill="currentColor" /> Chat Now
          </a>
        </nav>

        {/* Burger Button */}
        <button 
          className={`burger-btn ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>
      </div>
    </header>
  );
}
