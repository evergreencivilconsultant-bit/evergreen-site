import React from 'react';
import { Layers, Compass, ShieldCheck } from 'lucide-react';
import BlueprintHotspots from './BlueprintHotspots';

export default function Services() {
  const services = [
    {
      icon: <Layers size={32} />,
      title: "Structural Engineering",
      description: "Comprehensive structural design, foundation systems, and seismic analysis ensuring maximum safety, durability, and full compliance with modern building regulations."
    },
    {
      icon: <Compass size={32} />,
      title: "Architectural Planning",
      description: "Innovative design planning, detailed 2D layouts, photorealistic 3D elevations, and optimized space planning for both high-end residential and commercial projects."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Construction Supervision",
      description: "Professional project management, stringent quality audits, strict execution monitoring, and structural safety supervision throughout the lifecycle of construction."
    }
  ];

  return (
    <section className="section-padding" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center reveal-el active">
          <h2>Professional Engineering Services</h2>
          <p>We blend deep scientific analysis with innovative architectural planning to deliver world-class infrastructure.</p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid" style={{ marginBottom: '40px' }}>
          {services.map((service, index) => (
            <div key={index} className="service-card reveal-el active" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="service-icon-box">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Integrated Interactive Blueprint anatomy hotspots */}
        <div className="reveal-el active" style={{ animationDelay: '200ms' }}>
          <BlueprintHotspots />
        </div>

      </div>
    </section>
  );
}
