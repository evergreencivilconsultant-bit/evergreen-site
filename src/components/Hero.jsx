import React, { useEffect, useRef } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates tracker
    let mouse = { x: null, y: null };
    
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Listen to mouse events on the hero wrapper section
    const parent = canvas.parentNode;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Render loop for blueprint grid and interactive crosshair nodes
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines (Faint green CAD lines)
      ctx.strokeStyle = 'rgba(82, 183, 136, 0.05)';
      ctx.lineWidth = 1;
      const gridSize = 45;

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw interactive drafting crosshair & glow at mouse coordinate
      if (mouse.x !== null && mouse.y !== null) {
        // Glow radius
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 100, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, 100
        );
        gradient.addColorStop(0, 'rgba(82, 183, 136, 0.12)');
        gradient.addColorStop(1, 'rgba(82, 183, 136, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();

        // Technical Drafting circles & crosshairs
        ctx.strokeStyle = 'rgba(82, 183, 136, 0.2)';
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 35, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 60, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(mouse.x - 75, mouse.y);
        ctx.lineTo(mouse.x + 75, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 75);
        ctx.lineTo(mouse.x, mouse.y + 75);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToServices = (e) => {
    e.preventDefault();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Dynamic Interactive Drafting Canvas Background */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content">
          <span className="hero-tagline">
            Welcome to Evergreen Civil Consultant
          </span>
          <h1>
            Professional Civil Engineering &amp; Structural Solutions
          </h1>
          <p>
            Evergreen Civil Consultant delivers state-of-the-art engineering design,
            architectural planning, heavy structural analysis, and construction supervision
            with extreme precision, safety, and modern design standards.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn" onClick={handleScrollToContact}>
              Schedule a Consultation <Calendar size={18} />
            </a>
            <a href="#services" className="btn btn-secondary" onClick={handleScrollToServices}>
              Explore Services <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
