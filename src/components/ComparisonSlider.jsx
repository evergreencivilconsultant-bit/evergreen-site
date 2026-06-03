import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function ComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  };

  const handleMouseMove = (e) => {
    // Check if mouse button is pressed (or we can just let it move on hover/touch)
    if (e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  // Support clicking/tapping to move the slider instantly
  const handleContainerClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--clr-neutral-100)' }}>
      <div className="container">
        <div className="section-header text-center reveal-el active">
          <h2>Blueprint to Construction Reality</h2>
          <p>
            Drag or click the slider below to see how our structural designs and architectural plans 
            translate directly into completed, state-of-the-art building infrastructure.
          </p>
        </div>

        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={handleContainerClick}
          style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            cursor: 'ew-resize',
            userSelect: 'none'
          }}
        >
          {/* After Layer (Base Image - Completed Building) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop')",
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}>
            {/* After Label */}
            <div style={{
              position: 'absolute',
              bottom: '25px',
              right: '25px',
              backgroundColor: 'rgba(27, 67, 50, 0.85)',
              color: 'var(--clr-neutral-100)',
              fontFamily: 'var(--ff-headings)',
              fontWeight: '700',
              fontSize: '0.82rem',
              padding: '6px 14px',
              borderRadius: '20px',
              letterSpacing: '1px',
              zIndex: 5
            }}>
              COMPLETED REALITY
            </div>
          </div>

          {/* Before Layer (Top Image - Structural Concrete Framework) */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}>
            {/* Before Label */}
            <div style={{
              position: 'absolute',
              bottom: '25px',
              left: '25px',
              backgroundColor: 'var(--clr-primary-400)',
              color: 'var(--clr-neutral-900)',
              fontFamily: 'var(--ff-headings)',
              fontWeight: '700',
              fontSize: '0.82rem',
              padding: '6px 14px',
              borderRadius: '20px',
              letterSpacing: '1px',
              zIndex: 5
            }}>
              STRUCTURAL Blueprints &amp; FRAME
            </div>
          </div>

          {/* Slider Line Divider */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '4px',
            backgroundColor: 'var(--clr-neutral-100)',
            zIndex: 10,
            transform: 'translateX(-50%)',
            pointerEvents: 'none'
          }}>
            
            {/* Interactive Slider Circular Button Handle */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '54px',
              height: '54px',
              borderRadius: '50%',
              backgroundColor: 'var(--clr-neutral-100)',
              border: '4px solid var(--clr-primary-500)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--clr-primary-600)',
              cursor: 'ew-resize'
            }}>
              <ArrowLeftRight size={20} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
