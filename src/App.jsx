import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ComparisonSlider from './components/ComparisonSlider';
import Services from './components/Services';
import Estimator from './components/Estimator';
import ServiceWizard from './components/ServiceWizard';
import Projects from './components/Projects';
import DashboardMockup from './components/DashboardMockup';
import Reviews from './components/Reviews';
import About from './components/About';
import FaqSearch from './components/FaqSearch';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Setup reveal on scroll
    const revealElements = document.querySelectorAll('.reveal-el');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once revealed
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px' // Reveal slightly before entering viewport
    });

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <div className="reveal-el">
          <ComparisonSlider />
        </div>

        <div className="reveal-el">
          <Services />
        </div>

        <div className="reveal-el">
          <Estimator />
        </div>

        <div className="reveal-el">
          <ServiceWizard />
        </div>
        
        <div className="reveal-el">
          <Projects />
        </div>

        <div className="reveal-el">
          <DashboardMockup />
        </div>

        <div className="reveal-el">
          <Reviews />
        </div>
        
        <div className="reveal-el">
          <About />
        </div>

        <div className="reveal-el">
          <FaqSearch />
        </div>
        
        <div className="reveal-el">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
