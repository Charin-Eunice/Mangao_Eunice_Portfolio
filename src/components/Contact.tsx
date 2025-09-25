import React from 'react';
import './Contact.css';
import facebookIcon from '../assets/fb.png'; 
import emailIcon from '../assets/email.png';
import callIcon from '../assets/call.png';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact <span className="highlight">Me</span></h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            I'm always open to new opportunities and collaborations. Feel free to reach out to me via the form or my social links below.
          </p>
          {/* Email Link */}
          <a href="mailto:eunicetamayo@gmail.com" className="info-item-link">
            <div className="info-item">
              <div className="icon-container">
                <img src={emailIcon} alt="Email" className="contact-icon" />
              </div>
              <p>eunicetamayo@gmail.com</p>
            </div>
          </a>

          {/* Facebook Link */}
          <a href="https://www.facebook.com/eunice.mangao.3" target="_blank" rel="noopener noreferrer" className="info-item-link">
            <div className="info-item">
              <div className="icon-container">
                <img src={facebookIcon} alt="Facebook" className="contact-icon" />
              </div>
              <p>Eunice Tamayo</p>
            </div>
          </a>

          {/* Phone Number Link */}
          <a href="tel:+0909090909090" className="info-item-link">
            <div className="info-item">
              <div className="icon-container">
                <img src={callIcon} alt="Call" className="contact-icon" />
              </div>
              <p>0909090909090</p>
            </div>
          </a>
        </div>
        <form className="contact-form" action="#" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows={6} placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;