import React, { useState } from 'react';
import { Eye, Info, X } from 'lucide-react';

export default function BlueprintHotspots() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  const hotspots = [
    {
      id: 'roof',
      title: "Roof Truss Systems",
      x: "50%",
      y: "22%",
      text: "Triangular framed structural members carrying roof and wind loads. Proper load calculations allow for wide, beautiful column-free spans while keeping structural deflections near zero.",
      code: "IS 875 (Part 3) Compliance"
    },
    {
      id: 'beams',
      title: "Reinforced Concrete Beams",
      x: "70%",
      y: "45%",
      text: "Horizontal framing beams carrying bending loads from the ceiling slab straight to columns. Precising tension reinforcement spacing prevents slab sagging and structural concrete cracking.",
      code: "IS 456:2000 Concrete Detailing"
    },
    {
      id: 'columns',
      title: "Concrete Columns (Pillars)",
      x: "28%",
      y: "55%",
      text: "Vertical columns supporting the entire load of multi-story structures. Balancing axial force, steel sizing, and compression tolerances guarantees the structural system never buckles.",
      code: "Bending Moment & Shear Math"
    },
    {
      id: 'foundation',
      title: "Seismic Soil Foundation",
      x: "50%",
      y: "88%",
      text: "Anchored base concrete pads transferring the entire building weight safely to solid underground load-bearing soil strata. Proper sizing prevents sinking, tilting, and structural cracking.",
      code: "Soil Stratum Load Distribution"
    }
  ];

  return (
    <div style={{
      backgroundColor: 'var(--clr-neutral-200)',
      border: '1px solid var(--clr-neutral-300)',
      borderRadius: '24px',
      padding: '35px',
      boxShadow: 'var(--shadow-sm)',
      marginTop: '40px'
    }}>
      
      {/* Title */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <Eye style={{ color: 'var(--clr-primary-500)' }} size={20} />
        <h4 style={{ fontSize: '1.25rem', color: 'var(--clr-primary-800)', margin: 0 }}>Interactive Blueprint Anatomy</h4>
      </div>
      <p style={{ fontSize: '0.88rem', color: 'var(--clr-neutral-600)', marginBottom: '30px' }}>
        💡 Click on the glowing green pulsing hotspots on our architectural vector blueprint to explore how we engineer core safety coordinates.
      </p>

      {/* Blueprint Visual Frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        backgroundColor: 'var(--clr-primary-900)',
        backgroundImage: 'radial-gradient(rgba(82, 183, 136, 0.15) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        border: '3px solid var(--clr-primary-600)',
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        
        {/* Simple, sleek vector architectural house blueprint layout */}
        <svg width="260" height="260" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.25 }}>
          {/* Ground level */}
          <line x1="10" y1="85" x2="90" y2="85" stroke="#52b788" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Foundation */}
          <rect x="20" y="80" width="12" height="5" stroke="#52b788" strokeWidth="1.5" />
          <rect x="68" y="80" width="12" height="5" stroke="#52b788" strokeWidth="1.5" />
          
          {/* Columns */}
          <line x1="26" y1="40" x2="26" y2="80" stroke="#52b788" strokeWidth="2.5" />
          <line x1="74" y1="40" x2="74" y2="80" stroke="#52b788" strokeWidth="2.5" />
          <line x1="50" y1="40" x2="50" y2="80" stroke="#52b788" strokeWidth="2.5" strokeDasharray="3 3" />
          
          {/* Beams */}
          <line x1="20" y1="40" x2="80" y2="40" stroke="#52b788" strokeWidth="2.5" />
          <line x1="20" y1="60" x2="80" y2="60" stroke="#52b788" strokeWidth="2" />
          
          {/* Roof Truss */}
          <polygon points="50,10 15,40 85,40" stroke="#52b788" strokeWidth="2" />
          <line x1="50" y1="10" x2="50" y2="40" stroke="#52b788" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="32.5" y2="40" stroke="#52b788" strokeWidth="1.5" />
          <line x1="50" y1="10" x2="67.5" y2="40" stroke="#52b788" strokeWidth="1.5" />
        </svg>

        {/* Pulsing Hotspots Map */}
        {hotspots.map((spot) => (
          <button
            key={spot.id}
            onClick={() => setActiveHotspot(spot)}
            style={{
              position: 'absolute',
              top: spot.y,
              left: spot.x,
              transform: 'translate(-50%, -50%)',
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              backgroundColor: 'var(--clr-primary-400)',
              border: '4px solid var(--clr-neutral-100)',
              cursor: 'pointer',
              boxShadow: '0 0 0 8px rgba(82, 183, 136, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              outline: 'none',
              zIndex: 8,
              transition: 'var(--transition-fast)'
            }}
            className={`hotspot-dot ${activeHotspot?.id === spot.id ? 'active' : ''}`}
            title={`Analyse ${spot.title}`}
          >
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--clr-neutral-900)'
            }} />
          </button>
        ))}

        {/* Floating details popup inside vector frame */}
        {activeHotspot && (
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            right: '15px',
            backgroundColor: 'rgba(28, 39, 37, 0.95)',
            border: '1px solid var(--clr-primary-500)',
            borderRadius: '12px',
            padding: '16px 20px',
            color: 'var(--clr-neutral-100)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            zIndex: 10,
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <button
              onClick={() => setActiveHotspot(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'none',
                border: 'none',
                color: 'var(--clr-primary-300)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <X size={16} />
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Info size={16} style={{ color: 'var(--clr-primary-300)' }} />
              <h5 style={{ color: 'var(--clr-primary-300)', fontSize: '0.98rem', fontWeight: '700', margin: 0 }}>
                {activeHotspot.title}
              </h5>
              <span style={{ fontSize: '0.7rem', color: 'var(--clr-neutral-400)', border: '1px solid rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px', marginLeft: 'auto', fontWeight: '600' }}>
                {activeHotspot.code}
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--clr-neutral-300)', margin: 0, lineHeight: '1.6' }}>
              {activeHotspot.text}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
