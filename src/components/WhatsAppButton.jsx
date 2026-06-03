import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/919120155475?text=Hello%20Evergreen%20Civil%20Consultant,%20I%20need%20consultation.";

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-widget" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
}
