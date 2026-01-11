import React from "react";
import "./WhatsAppBtn.css";

const WhatsAppBtn = () => {
  return (
    <a
      href="https://wa.me/94712175244"
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppBtn;
