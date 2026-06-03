import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Calendar } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: 'morning',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://formspree.io/f/xlgvrgva', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({
          name: '',
          email: '',
          phone: '',
          appointmentDate: '',
          appointmentTime: 'morning',
          message: ''
        });
      } else {
        const data = await response.json();
        setStatus({
          loading: false,
          success: false,
          error: data.error || 'Failed to submit enquiry. Please try again.'
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: 'A connection error occurred. Please check your internet network.'
      });
    }
  };

  return (
    <section className="section-padding" id="contact">
      <div className="container">
        <div className="section-header text-center reveal-el active">
          <h2>Schedule an Appointment</h2>
          <p>Book a consultation, site inspection, or project brief. Use the calendar below to pick a convenient slot.</p>
        </div>

        <div className="contact-layout">
          {/* Info Panels */}
          <div className="contact-info-panel reveal-el active">
            <div className="info-card">
              <div className="info-icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-details">
                <h4>Office Address</h4>
                <p>
                  B Block Ganpati Residency Manduadih<br />
                  Varanasi, Uttar Pradesh - 221002
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <Phone size={24} />
              </div>
              <div className="info-details">
                <h4>Call Us</h4>
                <p>+91 9120155475</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon-box">
                <Mail size={24} />
              </div>
              <div className="info-details">
                <h4>Email Support</h4>
                <p>evergreencivilconsultant@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Form Panel */}
          <div className="form-panel reveal-el active" style={{ animationDelay: '150ms' }}>
            {status.success && (
              <div className="form-success-alert">
                ✓ Thank you! Your engineering consultation appointment has been successfully scheduled. We will reach out shortly.
              </div>
            )}
            
            {status.error && (
              <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '12px', padding: '20px', color: '#dc2626', marginBottom: '25px', textAlign: 'center', fontWeight: '600' }}>
                ✗ {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Row 1: Name & Email */}
              <div className="form-grid">
                <div className="form-group-field">
                  <label htmlFor="form-name">Your Name</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="form-input-text"
                  />
                </div>

                <div className="form-group-field">
                  <label htmlFor="form-email">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="form-input-text"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Datepicker */}
              <div className="form-grid">
                <div className="form-group-field">
                  <label htmlFor="form-phone">Phone Number</label>
                  <input
                    id="form-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="form-input-text"
                  />
                </div>

                <div className="form-group-field">
                  <label htmlFor="form-date" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={16} /> Preferred Appointment Date
                  </label>
                  <input
                    id="form-date"
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    className="form-input-text"
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Row 3: Time Slot */}
              <div className="form-row">
                <div className="form-group-field">
                  <label htmlFor="form-time">Preferred Time Slot</label>
                  <select
                    id="form-time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="form-input-text"
                    style={{ cursor: 'pointer' }}
                  >
                    <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="form-row">
                <div className="form-group-field">
                  <label htmlFor="form-message">Project &amp; Appointment Details</label>
                  <textarea
                    id="form-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project, or type your custom structural requirements here..."
                    className="form-textarea"
                  ></textarea>
                </div>
              </div>

              <div className="submit-btn-container">
                <button 
                  type="submit" 
                  className="btn" 
                  disabled={status.loading}
                  style={{ opacity: status.loading ? 0.7 : 1, cursor: status.loading ? 'not-allowed' : 'pointer' }}
                >
                  {status.loading ? 'Scheduling...' : 'Schedule Appointment'} <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
