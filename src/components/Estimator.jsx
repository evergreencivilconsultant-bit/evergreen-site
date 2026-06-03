import React, { useState, useEffect } from 'react';
import { Calculator, Ruler, Layers, ArrowRight } from 'lucide-react';

export default function Estimator() {
  const [serviceType, setServiceType] = useState('structural');
  const [length, setLength] = useState(40);
  const [width, setWidth] = useState(30);
  const [floors, setFloors] = useState(1);
  const [estimate, setEstimate] = useState({ min: 0, max: 0 });

  // Rates in INR per Square Foot
  const rates = {
    structural: { min: 10, max: 14, label: 'Structural Engineering Design' },
    architectural: { min: 8, max: 12, label: 'Architectural Planning & 3D Layouts' },
    supervision: { min: 6, max: 9, label: 'Construction Supervision' },
    complete: { min: 20, max: 28, label: 'Complete Turnkey Design & Audit' }
  };

  const totalArea = length * width * floors;

  useEffect(() => {
    const rate = rates[serviceType];
    const minPrice = totalArea * rate.min;
    const maxPrice = totalArea * rate.max;
    setEstimate({ min: minPrice, max: maxPrice });
  }, [serviceType, length, width, floors]);

  // Format currency to Indian Rupees (INR)
  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const handleApplyEstimate = () => {
    const rateLabel = rates[serviceType].label;
    const estimateText = `Hello! I calculated a preliminary estimate on your website:
- Service: ${rateLabel}
- Dimensions: ${length} ft x ${width} ft (${floors} Floor${floors > 1 ? 's' : ''})
- Total Work Area: ${totalArea.toLocaleString()} Sq. Ft.
- Estimated Cost Range: ${formatCurrency(estimate.min)} - ${formatCurrency(estimate.max)}

I would like to schedule a consultation with your engineering team to discuss this project.`;

    // 1. Fill the textarea in the Contact component
    const contactTextarea = document.getElementById('form-message');
    if (contactTextarea) {
      contactTextarea.value = estimateText;
      // Trigger native React state update for textarea if controlled
      const event = new Event('input', { bubbles: true });
      contactTextarea.dispatchEvent(event);
    }

    // 2. Scroll to the Contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-padding" id="estimator" style={{ backgroundColor: 'var(--clr-neutral-100)' }}>
      <div className="container">
        <div className="section-header text-center reveal-el active">
          <h2>Project Cost Estimator</h2>
          <p>
            Get an instant, data-driven cost range for our consulting services. 
            Adjust the sliders below to match your building's dimensions.
          </p>
        </div>

        {/* Styling layout for sliders & cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="estimator-layout">
          
          {/* Controls Card */}
          <div style={{
            backgroundColor: 'var(--clr-neutral-200)',
            border: '1px solid var(--clr-neutral-300)',
            borderRadius: '24px',
            padding: '35px',
            boxShadow: 'var(--shadow-sm)'
          }}>
            
            {/* Service Selection */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{
                fontFamily: 'var(--ff-headings)',
                fontWeight: '600',
                fontSize: '1rem',
                color: 'var(--clr-primary-800)',
                display: 'block',
                marginBottom: '10px'
              }}>
                Select Engineering Service
              </label>
              <select 
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  border: '2px solid var(--clr-neutral-300)',
                  backgroundColor: 'var(--clr-neutral-100)',
                  fontSize: '0.98rem',
                  fontFamily: 'var(--ff-body)',
                  color: 'var(--clr-neutral-800)',
                  fontWeight: '500',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="structural">Structural Design &amp; Audits (₹10 - ₹14/sq.ft)</option>
                <option value="architectural">Architectural Planning &amp; 3D (₹8 - ₹12/sq.ft)</option>
                <option value="supervision">Quality &amp; Site Supervision (₹6 - ₹9/sq.ft)</option>
                <option value="complete">Complete Turnkey Consulting (₹20 - ₹28/sq.ft)</option>
              </select>
            </div>

            {/* Sliders Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              
              {/* Length Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--clr-primary-800)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Ruler size={16} /> Work Area Length
                  </span>
                  <span style={{ color: 'var(--clr-primary-500)' }}>{length} Feet</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '5px',
                    background: 'var(--clr-neutral-300)',
                    outline: 'none',
                    cursor: 'pointer',
                    accentColor: 'var(--clr-primary-400)'
                  }}
                />
              </div>

              {/* Width Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--clr-primary-800)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Ruler size={16} /> Work Area Width
                  </span>
                  <span style={{ color: 'var(--clr-primary-500)' }}>{width} Feet</span>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="150" 
                  value={width}
                  onChange={(e) => setWidth(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '5px',
                    background: 'var(--clr-neutral-300)',
                    outline: 'none',
                    cursor: 'pointer',
                    accentColor: 'var(--clr-primary-400)'
                  }}
                />
              </div>

              {/* Floors Counter */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: '600', fontSize: '0.95rem' }}>
                  <span style={{ color: 'var(--clr-primary-800)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Layers size={16} /> Number of Floors
                  </span>
                  <span style={{ color: 'var(--clr-primary-500)' }}>{floors} Floor{floors > 1 ? 's' : ''}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="6" 
                  value={floors}
                  onChange={(e) => setFloors(parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '5px',
                    background: 'var(--clr-neutral-300)',
                    outline: 'none',
                    cursor: 'pointer',
                    accentColor: 'var(--clr-primary-400)'
                  }}
                />
              </div>

            </div>

          </div>

          {/* Results Glassmorphic Card */}
          <div style={{
            background: 'linear-gradient(135deg, var(--clr-primary-800) 0%, var(--clr-primary-900) 100%)',
            color: 'var(--clr-neutral-100)',
            borderRadius: '24px',
            padding: '40px',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            minHeight: '380px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            
            {/* Dynamic visual bubble */}
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '180px',
              height: '180px',
              background: 'radial-gradient(circle, rgba(82, 183, 136, 0.15) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Calculator style={{ color: 'var(--clr-primary-300)' }} size={24} />
                <h3 style={{ color: 'var(--clr-neutral-100)', fontSize: '1.4rem' }}>Estimation Summary</h3>
              </div>

              {/* Area and Multiplier Indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', opacity: 0.85 }}>
                  <span>Footprint Size:</span>
                  <span>{length} ft × {width} ft</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', opacity: 0.85 }}>
                  <span>Total Floors:</span>
                  <span>{floors} Floor{floors > 1 ? 's' : ''}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: '700' }}>
                  <span style={{ color: 'var(--clr-primary-300)' }}>Calculated Build Area:</span>
                  <span>{totalArea.toLocaleString()} Sq. Ft.</span>
                </div>
              </div>

              {/* Cost Range Display */}
              <div style={{ marginBottom: '35px' }}>
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8, display: 'block', marginBottom: '6px' }}>
                  Estimated Consulting Range:
                </span>
                <div style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: '800',
                  color: 'var(--clr-primary-300)',
                  lineHeight: '1.1'
                }}>
                  {formatCurrency(estimate.min)}
                  <span style={{ fontSize: '1.3rem', color: 'var(--clr-neutral-100)', margin: '0 8px', fontWeight: '400' }}>to</span>
                  <br style={{ display: totalArea > 8000 ? 'block' : 'none' }} />
                  {formatCurrency(estimate.max)}
                </div>
                <span style={{ fontSize: '0.78rem', opacity: 0.65, display: 'block', marginTop: '12px' }}>
                  *Prices exclude local municipal authorization licensing fees and GST.
                </span>
              </div>
            </div>

            {/* CTA to copy and jump to scheduling */}
            <button 
              onClick={handleApplyEstimate}
              className="btn"
              style={{
                width: '100%',
                backgroundColor: 'var(--clr-primary-400)',
                color: 'var(--clr-primary-800)',
                boxShadow: '0 4px 15px rgba(82, 183, 136, 0.4)',
                fontWeight: '700'
              }}
            >
              Use Estimate to Book Appointment <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
