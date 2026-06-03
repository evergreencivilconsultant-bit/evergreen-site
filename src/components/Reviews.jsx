import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, PenTool, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([
    {
      name: "Rajesh K. Tripathi",
      role: "Managing Director, Apex InfraCorp",
      location: "Varanasi",
      stars: 5,
      text: "The structural audit performed by Evergreen for our commercial hub was exceptionally thorough. Their structural analysis saved us both time and significant steel materials. Highly recommend their consulting team!"
    },
    {
      name: "Sneha Singh",
      role: "Lead Architect, Signature Spaces",
      location: "Noida",
      stars: 5,
      text: "Evergreen Civil Consultant stands out for their architectural precision. Their 3D elevations and space plans are always innovative, modern, and very practical to execute on site."
    },
    {
      name: "Er. Vikramaditya Sen",
      role: "Project Head, Green Valley Group",
      location: "Lucknow",
      stars: 5,
      text: "We contracted their construction supervision service for a multi-story residential housing scheme. Their quality control, concrete audits, and execution oversight were truly flawless."
    }
  ]);

  // Carousel slider active index state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Leave a Review form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [formSuccess, setFormSuccess] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: '',
    location: '',
    stars: 5,
    text: ''
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviewsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviewsList.length) % reviewsList.length);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleStarClick = (rating) => {
    setNewReview(prev => ({ ...prev, stars: rating }));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    // Prepend new review to the local reviews array
    setReviewsList(prev => [newReview, ...prev]);
    setCurrentIndex(0); // Focus on the newly added review immediately!
    setFormSuccess(true);

    // Reset Form fields
    setNewReview({
      name: '',
      role: '',
      location: '',
      stars: 5,
      text: ''
    });

    setTimeout(() => {
      setFormSuccess(false);
      setIsFormOpen(false);
    }, 3000);
  };

  const activeReview = reviewsList[currentIndex];

  return (
    <section className="section-padding" id="reviews" style={{ backgroundColor: 'var(--clr-neutral-200)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header text-center reveal-el active">
          <h2>Client Testimonials</h2>
          <p>Read what our builders and developers say. Add your own review live below!</p>
        </div>

        {/* Carousel & Controls layout */}
        <div style={{ maxWidth: '850px', margin: '0 auto', position: 'relative' }}>
          
          {/* Main Carousel Card Container */}
          <div style={{
            backgroundColor: 'var(--clr-neutral-100)',
            border: '1px solid var(--clr-neutral-300)',
            borderRadius: '24px',
            padding: '50px',
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            minHeight: '340px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'var(--transition-smooth)',
            animation: 'fadeIn 0.5s ease-out'
          }}>
            
            {/* Quote Icon Background mark */}
            <div style={{
              position: 'absolute',
              top: '30px',
              right: '40px',
              opacity: 0.08,
              color: 'var(--clr-primary-500)',
              pointerEvents: 'none'
            }}>
              <Quote size={80} />
            </div>

            <div>
              {/* Stars Indicator */}
              <div style={{ display: 'flex', gap: '6px', marginBottom: '25px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={22} 
                    fill={i < activeReview.stars ? "#ffc107" : "none"} 
                    color={i < activeReview.stars ? "#ffc107" : "#c2cdcb"} 
                  />
                ))}
              </div>

              {/* Review Testimonial text */}
              <p style={{
                color: 'var(--clr-neutral-800)',
                fontSize: '1.2rem',
                lineHeight: '1.8',
                fontStyle: 'italic',
                marginBottom: '40px',
                position: 'relative',
                zIndex: 1
              }}>
                "{activeReview.text}"
              </p>
            </div>

            {/* Profile bottom bar */}
            <div style={{
              borderTop: '1px solid var(--clr-neutral-300)',
              paddingTop: '25px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--clr-primary-400), var(--clr-primary-600))',
                  color: 'var(--clr-neutral-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  fontFamily: 'var(--ff-headings)'
                }}>
                  {activeReview.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--clr-primary-800)', margin: 0 }}>{activeReview.name}</h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--clr-neutral-600)', margin: 0, fontWeight: '500' }}>
                    {activeReview.role} • <span style={{ color: 'var(--clr-primary-500)', fontWeight: '600' }}>{activeReview.location}</span>
                  </p>
                </div>
              </div>

              {/* Slider Next/Prev Arrows */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  onClick={handlePrev}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid var(--clr-neutral-300)',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--clr-primary-800)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--clr-primary-100)';
                    e.currentTarget.style.borderColor = 'var(--clr-primary-300)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--clr-neutral-300)';
                  }}
                  aria-label="Previous review"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={handleNext}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    border: '1px solid var(--clr-neutral-300)',
                    backgroundColor: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--clr-primary-800)',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--clr-primary-100)';
                    e.currentTarget.style.borderColor = 'var(--clr-primary-300)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'var(--clr-neutral-300)';
                  }}
                  aria-label="Next review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            margin: '25px 0'
          }}>
            {reviewsList.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                style={{
                  width: currentIndex === i ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: currentIndex === i ? 'var(--clr-primary-500)' : 'var(--clr-neutral-400)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'var(--transition-smooth)'
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Customer Review Button Panel */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              style={{
                fontFamily: 'var(--ff-headings)',
                fontWeight: '700',
                fontSize: '0.95rem',
                padding: '12px 24px',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: isFormOpen ? 'var(--clr-neutral-800)' : 'var(--clr-primary-500)',
                color: 'var(--clr-neutral-100)',
                boxShadow: 'var(--shadow-sm)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <PenTool size={16} />
              {isFormOpen ? 'Close Form' : 'Write a Review'}
            </button>
          </div>

          {/* Write a Review client Form Panel */}
          {isFormOpen && (
            <div style={{
              backgroundColor: 'var(--clr-neutral-100)',
              border: '2px dashed var(--clr-primary-300)',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: 'var(--shadow-sm)',
              animation: 'fadeIn 0.5s ease-out'
            }}>
              
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--clr-primary-800)' }}>
                Share Your Engineering Experience
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--clr-neutral-600)', marginBottom: '25px' }}>
                Your organic review will instantly be added to our live carousel slider panel above!
              </p>

              {formSuccess && (
                <div style={{
                  backgroundColor: 'rgba(82, 183, 136, 0.15)',
                  border: '1px solid var(--clr-primary-400)',
                  color: 'var(--clr-primary-600)',
                  borderRadius: '12px',
                  padding: '15px',
                  marginBottom: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: '600'
                }}>
                  <CheckCircle size={18} /> Thank you! Your testimonial has been posted live in the active carousel slider card above!
                </div>
              )}

              <form onSubmit={handleReviewSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }} className="admin-form-grid">
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--clr-primary-800)' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={newReview.name}
                      onChange={handleFormChange}
                      placeholder="e.g. Ramesh Chandra"
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '1px solid var(--clr-neutral-300)',
                        backgroundColor: 'var(--clr-neutral-200)',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--clr-primary-800)' }}>
                      Designation / Company *
                    </label>
                    <input
                      type="text"
                      name="role"
                      required
                      value={newReview.role}
                      onChange={handleFormChange}
                      placeholder="e.g. Resident Owner / Architect"
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '1px solid var(--clr-neutral-300)',
                        backgroundColor: 'var(--clr-neutral-200)',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }} className="admin-form-grid">
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--clr-primary-800)' }}>
                      Your Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={newReview.location}
                      onChange={handleFormChange}
                      placeholder="e.g. Varanasi"
                      style={{
                        padding: '12px 15px',
                        borderRadius: '8px',
                        border: '1px solid var(--clr-neutral-300)',
                        backgroundColor: 'var(--clr-neutral-200)',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Dynamic Interactive Stars Selector */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--clr-primary-800)' }}>
                      Overall Star Rating *
                    </label>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center', height: '100%' }}>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          onMouseEnter={() => setHoveredStar(star)}
                          onMouseLeave={() => setHoveredStar(0)}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '4px 0'
                          }}
                        >
                          <Star 
                            size={26}
                            fill={star <= (hoveredStar || newReview.stars) ? "#ffc107" : "none"} 
                            color={star <= (hoveredStar || newReview.stars) ? "#ffc107" : "#c2cdcb"} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '25px' }}>
                  <label style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--clr-primary-800)' }}>
                    Testimonial Message *
                  </label>
                  <textarea
                    name="text"
                    required
                    value={newReview.text}
                    onChange={handleFormChange}
                    placeholder="Describe how Evergreen assisted you with blueprint approvals, load calculations, supervisions, or structural safety..."
                    style={{
                      padding: '12px 15px',
                      borderRadius: '8px',
                      border: '1px solid var(--clr-neutral-300)',
                      backgroundColor: 'var(--clr-neutral-200)',
                      fontSize: '0.92rem',
                      height: '90px',
                      resize: 'vertical',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      padding: '10px 24px',
                      fontSize: '0.92rem',
                      boxShadow: 'none'
                    }}
                  >
                    Publish Review
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
