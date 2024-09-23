import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <section id="contact" className="contact-section">
    <h2 className="contact-title">Get In Touch</h2>
    <p className="contact-desc">Feel free to contact me via email or phone, and follow me on my social media channels below.</p>
    
    <div className="contact-details">
      <div className="contact-item">
        <p>Email: jeffline.djaya@binus.ac.id</p>
      </div>

      <div className="contact-item">
        <p>Phone: +6281386634181 </p>
      </div>

      <div className="contact-item">
        <p>LinkedIn: <a href="https://www.linkedin.com/in/jeffline-kristian-d-31a5a3272/" target="_blank" rel="noopener noreferrer">LinkedIn/JefflineKristianD</a></p>
      </div>

      <div className="contact-item">
        <p>Instagram: <a href="https://www.instagram.com/jefflinekd/" target="_blank" rel="noopener noreferrer">@jefflinekd</a></p>
      </div>

      <div className="contact-item">
        <p>Spotify: <a href="https://open.spotify.com/user/wtilimuueyyn3sb81daxwp0x0?si=xOr-saxpSzW3R10NmX50JA" target="_blank" rel="noopener noreferrer">My Spotify</a></p>
      </div>

      <div className="contact-item">
        <p>GitHub: <a href="https://github.com/JefflineKristianD" target="_blank" rel="noopener noreferrer">github.com/JefflineKristianD</a></p>
      </div>
    </div>
  </section>
);
};

export default contact;