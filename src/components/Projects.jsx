import React, { useState } from 'react';
import { Filter, LayoutGrid } from 'lucide-react';

export default function Projects() {
  // Base list of past works
  const [projectList] = useState([
    {
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      category: "Residential",
      title: "Green Valley Residency",
      description: "Multi-story residential apartment structure involving comprehensive seismic design, construction supervision, and high-performance quality auditing."
    },
    {
      img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop",
      category: "Commercial",
      title: "Apex Commercial Hub",
      description: "Modern commercial workspace facility showcasing highly optimized architectural space plans, sustainable features, and reinforced concrete systems."
    },
    {
      img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      category: "Industrial",
      title: "Matrix Industrial Warehouse",
      description: "Heavy industrial manufacturing and storage facility with custom foundation planning, large-span steel truss engineering, and full safety audit compliance."
    },
    {
      img: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop",
      category: "Commercial",
      title: "Royal Residency Tower",
      description: "G+12 commercial and corporate skyscraper. Prepared blueprint approvals and managed load distribution analyses."
    },
    {
      img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1200&auto=format&fit=crop",
      category: "Industrial",
      title: "Sarnath Cement Plant Unit",
      description: "Foundations for heavy vibratory machinery, load checks, and environmental safety evaluations."
    }
  ]);

  // Tab filtering state
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

  // Handle Dynamic Filtering
  const filteredProjects = activeFilter === 'All' 
    ? projectList 
    : projectList.filter(proj => proj.category === activeFilter);

  return (
    <section className="section-padding projects-section" id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center reveal-el active">
          <h2>Our Past Works Portfolio</h2>
          <p>
            Browse our completed engineering landmarks representing quality structural consulting.
          </p>
        </div>

        {/* Portfolio Tool Controls (Filter Tabs) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '40px',
          borderBottom: '2px solid var(--clr-neutral-300)',
          paddingBottom: '20px'
        }} className="portfolio-bar">
          
          {/* Filtering Tab Group */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  fontFamily: 'var(--ff-headings)',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  border: '2px solid',
                  borderColor: activeFilter === cat ? 'var(--clr-primary-500)' : 'transparent',
                  backgroundColor: activeFilter === cat ? 'var(--clr-primary-100)' : 'transparent',
                  color: activeFilter === cat ? 'var(--clr-primary-700)' : 'var(--clr-neutral-600)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {cat === 'All' ? <LayoutGrid size={15} /> : <Filter size={14} />}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card reveal-el active" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
