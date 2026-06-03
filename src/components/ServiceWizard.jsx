import React, { useState } from 'react';
import { HelpCircle, ArrowRight, ArrowLeft, Lightbulb, Check } from 'lucide-react';

export default function ServiceWizard() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    goal: '',
    stage: '',
    concern: ''
  });

  const [recommendation, setRecommendation] = useState(null);

  const handleSelect = (field, value) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setStep(prev => prev - 1);
  };

  const handleCalculate = () => {
    let result = {
      title: '',
      description: '',
      rate: '',
      formText: ''
    };

    // Calculation Logic depending on combinations
    if (answers.goal === 'audit' || answers.stage === 'audit') {
      result = {
        title: "Structural Safety & Health Auditing",
        description: "Your project requires a deep diagnostic engineering audit. We check core load tolerances, beam deflections, concrete core integrity, and prepare full safety certificates.",
        rate: "₹6 - ₹8 per Sq. Ft.",
        formText: "Audit Request: I need a Structural Safety Audit for my property. Goal: Check safety, Stage: Completed structure."
      };
    } else if (answers.concern === 'architectural' && answers.stage === 'land') {
      result = {
        title: "Premium Architectural Planning & 3D Layouts",
        description: "We recommend starting with our premium concept design package. You receive modern 2D space layouts, custom architectural elevations, Vastu compliance planning, and highly optimized 3D exterior renders.",
        rate: "₹8 - ₹12 per Sq. Ft.",
        formText: "Planning Request: I need Architectural Planning & 3D Renders. Goal: New build, Stage: Raw land planning."
      };
    } else if (answers.concern === 'structural' || answers.stage === 'approvals') {
      result = {
        title: "Advanced Structural Engineering Design",
        description: "Your primary focus requires highly detailed steel reinforcement scheduling, foundation concrete modeling, shear wall placement, and load balance equations to meet Indian standard safety codes.",
        rate: "₹10 - ₹14 per Sq. Ft.",
        formText: "Design Request: I need Structural Engineering & Load Calculations. Goal: Stability blueprint, Stage: Preparing approvals."
      };
    } else if (answers.concern === 'supervision' || answers.stage === 'construction') {
      result = {
        title: "Construction Supervision & Quality Assurance",
        description: "To safeguard material strengths and ensure builders adhere strictly to blueprints, we recommend our professional supervisor audits. We conduct routine site checks, concrete slump tests, and column casting checks.",
        rate: "₹6 - ₹9 per Sq. Ft.",
        formText: "Supervision Request: I need Site Construction Supervision. Goal: Quality checks, Stage: Under active building."
      };
    } else {
      result = {
        title: "Complete Turnkey Engineering Consulting",
        description: "We recommend our comprehensive turnkey advisory package. We handle architectural blueprints, structural steel math, municipal licensing coordination, and complete active site construction supervision from excavation to handover.",
        rate: "₹20 - ₹28 per Sq. Ft.",
        formText: "Advisory Request: I need Complete Turnkey Engineering Consulting. Goal: Full custom build management."
      };
    }

    setRecommendation(result);
    setStep(4);
  };

  const handleApplyWizard = () => {
    if (!recommendation) return;

    const textToInsert = `Hello! I completed your interactive Service Wizard:
- Recommended Service: ${recommendation.title}
- Details: ${recommendation.description}
- Estimated Consulting Rates: ${recommendation.rate}

Please check my coordinates to schedule a consultation slot for this project.`;

    const contactTextarea = document.getElementById('form-message');
    if (contactTextarea) {
      contactTextarea.value = textToInsert;
      const event = new Event('input', { bubbles: true });
      contactTextarea.dispatchEvent(event);
    }

    // Scroll to the Contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReset = () => {
    setAnswers({ goal: '', stage: '', concern: '' });
    setRecommendation(null);
    setStep(1);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--clr-neutral-200)', borderTop: '1px solid var(--clr-neutral-300)' }}>
      <div className="container" style={{ maxWidth: '750px' }}>
        
        {/* Card Frame */}
        <div style={{
          backgroundColor: 'var(--clr-neutral-100)',
          border: '1px solid var(--clr-neutral-300)',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', borderBottom: '1px solid var(--clr-neutral-300)', paddingBottom: '15px' }}>
            <HelpCircle style={{ color: 'var(--clr-primary-500)' }} size={24} />
            <h3 style={{ fontSize: '1.4rem', color: 'var(--clr-primary-800)', margin: 0 }}>Service Selector Wizard</h3>
            {step < 4 && <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: 'var(--clr-neutral-600)', fontWeight: '600' }}>Step {step} of 3</span>}
          </div>

          {/* STEP 1: GOAL */}
          {step === 1 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--clr-primary-700)' }}>What is your primary project goal?</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {[
                  { id: 'residential', text: 'Build a new residential home' },
                  { id: 'commercial', text: 'Construct a commercial office / shop / complex' },
                  { id: 'industrial', text: 'Develop a large industrial factory / warehouse' },
                  { id: 'audit', text: 'Conduct safety audit / stability check on an existing building' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('goal', opt.id)}
                    style={{
                      padding: '14px 20px',
                      borderRadius: '12px',
                      border: '2px solid',
                      borderColor: answers.goal === opt.id ? 'var(--clr-primary-400)' : 'var(--clr-neutral-300)',
                      backgroundColor: answers.goal === opt.id ? 'var(--clr-primary-100)' : 'var(--clr-neutral-200)',
                      color: 'var(--clr-neutral-800)',
                      textAlign: 'left',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={handleNext} disabled={!answers.goal} className="btn" style={{ padding: '10px 24px', opacity: answers.goal ? 1 : 0.6, cursor: answers.goal ? 'pointer' : 'not-allowed' }}>
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: STAGE */}
          {step === 2 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--clr-primary-700)' }}>What stage is your project currently in?</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {[
                  { id: 'land', text: 'Concept planning & vacant land' },
                  { id: 'approvals', text: 'Blueprints & safety approvals are currently needed' },
                  { id: 'construction', text: 'Under active construction / casting slab phase' },
                  { id: 'audit', text: 'Structure is finished, ready for occupancy certification' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('stage', opt.id)}
                    style={{
                      padding: '14px 20px',
                      borderRadius: '12px',
                      border: '2px solid',
                      borderColor: answers.stage === opt.id ? 'var(--clr-primary-400)' : 'var(--clr-neutral-300)',
                      backgroundColor: answers.stage === opt.id ? 'var(--clr-primary-100)' : 'var(--clr-neutral-200)',
                      color: 'var(--clr-neutral-800)',
                      textAlign: 'left',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handlePrev} style={{ background: 'none', border: 'none', color: 'var(--clr-primary-700)', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={handleNext} disabled={!answers.stage} className="btn" style={{ padding: '10px 24px', opacity: answers.stage ? 1 : 0.6, cursor: answers.stage ? 'pointer' : 'not-allowed' }}>
                  Next Step <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CONCERN */}
          {step === 3 && (
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '20px', color: 'var(--clr-primary-700)' }}>What is your primary engineering concern?</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {[
                  { id: 'architectural', text: 'Space layouts, modern elevations, & structural beauty' },
                  { id: 'structural', text: 'Building stability, steel detailing, & safety load checks' },
                  { id: 'supervision', text: 'Supervising the builders, checking concrete grades & materials' },
                  { id: 'complete', text: 'Comprehensive full-service management (End-to-End)' }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect('concern', opt.id)}
                    style={{
                      padding: '14px 20px',
                      borderRadius: '12px',
                      border: '2px solid',
                      borderColor: answers.concern === opt.id ? 'var(--clr-primary-400)' : 'var(--clr-neutral-300)',
                      backgroundColor: answers.concern === opt.id ? 'var(--clr-primary-100)' : 'var(--clr-neutral-200)',
                      color: 'var(--clr-neutral-800)',
                      textAlign: 'left',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'var(--transition-fast)'
                    }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={handlePrev} style={{ background: 'none', border: 'none', color: 'var(--clr-primary-700)', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={handleCalculate} disabled={!answers.concern} className="btn" style={{ padding: '10px 28px', opacity: answers.concern ? 1 : 0.6, cursor: answers.concern ? 'pointer' : 'not-allowed' }}>
                  Get Recommendation <Lightbulb size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: RECOMMENDATION */}
          {step === 4 && recommendation && (
            <div style={{ animation: 'fadeIn 0.5s ease-out' }}>
              <div style={{
                backgroundColor: 'rgba(82, 183, 136, 0.12)',
                border: '1px solid var(--clr-primary-400)',
                borderRadius: '16px',
                padding: '25px',
                marginBottom: '25px'
              }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--clr-primary-600)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  ★ ENGINEER SUGGESTION:
                </span>
                <h4 style={{ fontSize: '1.35rem', color: 'var(--clr-primary-800)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={20} style={{ color: 'var(--clr-primary-500)' }} /> {recommendation.title}
                </h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--clr-neutral-600)', lineHeight: '1.7', marginBottom: '15px' }}>
                  {recommendation.description}
                </p>
                <div style={{ fontSize: '0.98rem', fontWeight: '700', color: 'var(--clr-primary-700)' }}>
                  Estimated Consultation Rate: <span style={{ color: 'var(--clr-primary-800)', fontSize: '1.1rem' }}>{recommendation.rate}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <button 
                  onClick={handleReset}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '30px',
                    border: '1px solid var(--clr-neutral-400)',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    fontFamily: 'var(--ff-headings)',
                    fontWeight: '600',
                    color: 'var(--clr-neutral-600)'
                  }}
                >
                  Restart Wizard
                </button>
                
                <button 
                  onClick={handleApplyWizard}
                  className="btn"
                  style={{
                    padding: '10px 24px',
                    boxShadow: '0 4px 12px rgba(82, 183, 136, 0.35)'
                  }}
                >
                  Use Recommendation to Book Appointment <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
