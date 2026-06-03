import React, { useState } from 'react';
import { HelpCircle, Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Structural Engineering",
      q: "Why is a dedicated structural design essential instead of just using standard mason rules?",
      a: "Masons rely on generic thumbs-rules which often lead to either massive waste of expensive steel or dangerous under-reinforced columns. We calculate exact loads depending on your specific soil bear capacity, height, and seismic zone requirements. It saves money on steel and concrete and guarantees the building will never sag, crack, or tilt."
    },
    {
      category: "Blueprint Approvals",
      q: "Do you assist in preparing files for Varanasi Development Authority (VDA) approvals?",
      a: "Yes! We draft fully-compliant 2D municipal layouts, boundary specifications, and load certificates that meet local building bylaws and zoning parameters. We hand over a ready-to-submit blueprint package and can sign off as certified structural engineers."
    },
    {
      category: "Site Supervision",
      q: "What does construction site supervision cover?",
      a: "Supervision involves checking critical checkpoints before concrete casting: validating steel rebar spacing and diameters match blueprints, checking slump testing to verify water-cement ratio, columns vertical alignment reviews, and concrete moisture curing quality checks."
    },
    {
      category: "Structural Audits",
      q: "What is a structural stability certificate?",
      a: "It is an official engineering document signed by a licensed structural engineer stating that your building's skeleton (foundations, pillars, beams, slab) has been tested, audited, and calculated to safely resist design loads. It is mandatory for commercial, educational, and factory permits."
    },
    {
      category: "Architectural Planning",
      q: "Is Vastu Shastra integrated into your architectural layouts?",
      a: "Absolutely. All of our architectural plans blend modern, efficient circulation concepts, optimal ventilation layouts, and structural logic with standard Vastu orientations to bring harmony, light, and airflow."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(
    faq => 
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="section-padding" id="faq" style={{ backgroundColor: 'var(--clr-neutral-200)' }}>
      <div className="container" style={{ maxWidth: '750px' }}>
        
        {/* Section Header */}
        <div className="section-header text-center reveal-el active">
          <h2>Engineering FAQ Center</h2>
          <p>
            Get clear, scientific answers to common questions about structural design, 
            local bylaws, and quality supervision.
          </p>
        </div>

        {/* Search Bar Panel */}
        <div style={{
          position: 'relative',
          marginBottom: '35px'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '15px',
            transform: 'translateY(-50%)',
            color: 'var(--clr-neutral-600)'
          }}>
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type your question here (e.g. VDA, steel rebar, Vastu...)"
            style={{
              width: '100%',
              padding: '14px 18px 14px 45px',
              borderRadius: '50px',
              border: '2px solid var(--clr-neutral-300)',
              backgroundColor: 'var(--clr-neutral-100)',
              fontSize: '0.98rem',
              fontFamily: 'var(--ff-body)',
              color: 'var(--clr-neutral-800)',
              outline: 'none',
              transition: 'var(--transition-fast)'
            }}
            className="faq-search-input"
          />
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'var(--clr-neutral-100)',
                  border: '1px solid var(--clr-neutral-300)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(index)}
                  style={{
                    width: '100%',
                    padding: '22px 25px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                    outline: 'none',
                    gap: '15px'
                  }}
                >
                  <div>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: '700',
                      color: 'var(--clr-primary-500)',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '4px'
                    }}>
                      {faq.category}
                    </span>
                    <span style={{
                      fontFamily: 'var(--ff-headings)',
                      fontWeight: '700',
                      fontSize: '1rem',
                      color: 'var(--clr-primary-800)',
                      lineHeight: '1.4'
                    }}>
                      {faq.q}
                    </span>
                  </div>
                  <div style={{ color: 'var(--clr-primary-500)', flexShrink: 0 }}>
                    {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {openIndex === index && (
                  <div style={{
                    padding: '0 25px 25px 25px',
                    borderTop: '1px solid var(--clr-neutral-300)',
                    backgroundColor: 'var(--clr-neutral-200)',
                    fontSize: '0.94rem',
                    color: 'var(--clr-neutral-600)',
                    lineHeight: '1.75',
                    animation: 'fadeIn 0.3s ease-out'
                  }}>
                    <p style={{ margin: '20px 0 0 0' }}>
                      {faq.a}
                    </p>
                  </div>
                )}

              </div>
            ))
          ) : (
            <div style={{
              backgroundColor: 'var(--clr-neutral-100)',
              border: '1px solid var(--clr-neutral-300)',
              borderRadius: '16px',
              padding: '40px',
              textAlign: 'center',
              color: 'var(--clr-neutral-600)'
            }}>
              <HelpCircle size={36} style={{ color: 'var(--clr-neutral-400)', marginBottom: '10px' }} />
              <p style={{ margin: 0, fontWeight: '600' }}>No matching questions found.</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '0.85rem' }}>Try searching another keyword or coordinate.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
