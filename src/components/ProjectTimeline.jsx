import React, { useState } from 'react';
import { Clipboard, HardHat, ShieldAlert, Award } from 'lucide-react';

export default function ProjectTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Soil & Site Audits",
      desc: "Detailed soil boring tests, excavation assessments, and site boundary validations. We determine the bearing strength of the strata before any brick is drawn.",
      checklist: ["Soil Bore Core Sample Checks", "Boundary Mapping Verification", "Bearing Capacity Assessment"],
      icon: <Clipboard size={22} />
    },
    {
      title: "Architectural Concept",
      desc: "Drafting optimized room layouts, circulation spaces, premium 2D blueprints, Vastu compliances, and photorealistic 3D external renders.",
      checklist: ["Vastu Orientation Checks", "Optimal Ventilation Calculations", "Detailed 3D Facade Renderings"],
      icon: <Clipboard size={22} />
    },
    {
      title: "Structural Math",
      desc: "Balancing axial, bending, and shear loads using standard structural engineering codes. Sizing steel rebar diameters, foundations, columns, and beams.",
      checklist: ["IS 456 Structural Concrete Modeling", "Steel Reinforcement Schedules", "Seismic Shear Load Analyses"],
      icon: <ShieldAlert size={22} />
    },
    {
      title: "Approval Blueprints",
      desc: "Compiling blueprint packages, structural calculations, and municipal safety certifications to ensure rapid clearance from local building authorities.",
      checklist: ["Bylaw Compliances Checking", "Structural Stability Certificate Signature", "Clearance Packets Submission"],
      icon: <Clipboard size={22} />
    },
    {
      title: "Supervision Checks",
      desc: "Professional site inspections. Sizing check for column casing rebar, concrete slump testing, rebar spacing validation, and curing quality checks.",
      checklist: ["Concrete Core Crush Test Oversight", "Column Steel Spacing Inspections", "Curing Moisture Checks"],
      icon: <HardHat size={22} />
    },
    {
      title: "Audit & Handover",
      desc: "Conducting dynamic load safety inspections, final concrete strength validations, structural health checking, and officially handing over the keys.",
      checklist: ["Concrete Slump Strength Verifications", "Beam Deflection Verification Audits", "Official Handover Certification"],
      icon: <Award size={22} />
    }
  ];

  return (
    <div style={{
      backgroundColor: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '24px',
      padding: '40px',
      marginTop: '50px',
      backdropFilter: 'blur(8px)'
    }}>
      
      {/* Title */}
      <h3 style={{
        fontSize: '1.5rem',
        color: 'var(--clr-primary-300)',
        marginBottom: '10px',
        textAlign: 'center',
        fontFamily: 'var(--ff-headings)'
      }}>
        Our Engineering Workflow Journey
      </h3>
      <p style={{
        fontSize: '0.9rem',
        color: 'var(--clr-primary-100)',
        opacity: 0.8,
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        💡 Select a phase to explore the critical engineering checks and technical reviews we conduct at each milestone.
      </p>

      {/* Progress Timeline Tracker */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        marginBottom: '40px',
        alignItems: 'center',
        padding: '0 10px'
      }} className="horizontal-timeline-line">
        
        {/* Central connecting line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          transform: 'translateY(-50%)',
          zIndex: 1
        }} />

        {/* Dynamic active filler line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: `${(activeStep / (steps.length - 1)) * 100}%`,
          height: '4px',
          backgroundColor: 'var(--clr-primary-400)',
          transform: 'translateY(-50%)',
          zIndex: 2,
          transition: 'var(--transition-smooth)'
        }} />

        {/* Steps Nodes */}
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            style={{
              position: 'relative',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: index <= activeStep ? 'var(--clr-primary-500)' : 'var(--clr-primary-900)',
              border: '3px solid',
              borderColor: index <= activeStep ? 'var(--clr-primary-300)' : 'rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--clr-neutral-100)',
              zIndex: 3,
              outline: 'none',
              boxShadow: index === activeStep ? '0 0 0 6px rgba(82, 183, 136, 0.3)' : 'none',
              transition: 'var(--transition-smooth)'
            }}
            title={step.title}
          >
            <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{index + 1}</span>
            
            {/* Step Label below node */}
            <span className="timeline-node-label" style={{
              position: 'absolute',
              top: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              fontSize: '0.78rem',
              fontWeight: '600',
              color: index === activeStep ? 'var(--clr-primary-300)' : 'var(--clr-neutral-100)',
              opacity: index <= activeStep ? 1 : 0.65,
              transition: 'var(--transition-fast)'
            }}>
              {step.title}
            </span>
          </button>
        ))}

      </div>

      {/* active details panel */}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        padding: '30px',
        marginTop: '30px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '30px',
        alignItems: 'start',
        animation: 'fadeIn 0.5s ease-out'
      }} className="timeline-panel-grid">
        
        <div>
          <h4 style={{ fontSize: '1.2rem', color: 'var(--clr-primary-300)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {steps[activeStep].icon} Phase {activeStep + 1}: {steps[activeStep].title}
          </h4>
          <p style={{ fontSize: '0.96rem', color: 'var(--clr-primary-100)', opacity: 0.85, lineHeight: '1.75', margin: 0 }}>
            {steps[activeStep].desc}
          </p>
        </div>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '12px',
          padding: '20px 25px'
        }}>
          <h5 style={{ fontSize: '0.88rem', textTransform: 'uppercase', color: 'var(--clr-primary-300)', letterSpacing: '0.5px', marginBottom: '12px', fontWeight: '700' }}>
            Critical Review Checklist:
          </h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {steps[activeStep].checklist.map((item, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--clr-primary-100)', opacity: 0.9 }}>
                <span style={{ color: 'var(--clr-primary-400)', fontWeight: '800' }}>✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}
