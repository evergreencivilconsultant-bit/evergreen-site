import React, { useState, useEffect, useRef } from 'react';
import ProjectTimeline from './ProjectTimeline';

// Lightweight dynamic counter component using Intersection Observer
const ScrollCounter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let active = true;
    let observer;

    const countUp = () => {
      const duration = 1500; // 1.5 seconds animation
      const frames = 50;
      const interval = duration / frames;
      const increment = target / frames;
      let frame = 0;

      const timer = setInterval(() => {
        if (!active) {
          clearInterval(timer);
          return;
        }

        frame++;
        const val = Math.ceil(increment * frame);
        
        if (frame >= frames) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(val);
        }
      }, interval);
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        countUp();
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      active = false;
      if (observer) {
        observer.disconnect();
      }
    };
  }, [target]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

export default function About() {
  const stats = [
    { value: 150, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 24, suffix: "/7", label: "Consulting Support" }
  ];

  return (
    <section className="section-padding about-section" id="about">
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center reveal-el active">
          <h2>About Evergreen Civil Consultant</h2>
          <p>Delivering engineering excellence and advanced architectural systems since 2016.</p>
        </div>

        {/* Text and Stats Grid */}
        <div className="about-grid" style={{ marginBottom: '50px' }}>
          <div className="about-text-content reveal-el active">
            <p>
              Evergreen Civil Consultant is a premier, full-service engineering and infrastructure
              advisory firm. We specialize in robust structural engineering design, custom architectural
              layouts, technical site supervision, and advanced structural health auditing.
            </p>
            <p>
              Our steadfast mission is to design and oversee building systems that are safe, functional,
              cost-efficient, and highly sustainable. We closely align with regional structural codes while 
              introducing cutting-edge construction methodologies.
            </p>
            <p>
              From conceptual drafting using modern CAD systems to physical quality control on the active job
              site, we ensure total engineering integrity. Our teams collaborate closely with builders,
              investors, and municipal authorities to ensure smooth approval and execution workflows.
            </p>
          </div>

          {/* Stats panel incorporating dynamic Count-Ups */}
          <div className="about-stats reveal-el active">
            {stats.map((stat, index) => (
              <div key={index} className="stat-box" style={{ animationDelay: `${index * 100}ms` }}>
                <h4>
                  {stat.label === "Consulting Support" ? (
                    <span>24/7</span>
                  ) : (
                    <ScrollCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </h4>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrated Engineering Project Workflow Timeline */}
        <div className="reveal-el active" style={{ animationDelay: '150ms' }}>
          <ProjectTimeline />
        </div>

      </div>
    </section>
  );
}
