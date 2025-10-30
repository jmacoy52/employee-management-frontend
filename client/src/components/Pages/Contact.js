import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />
      <main className="contact-content">
        <div className="container">
          <NavLink to="/" className="back-home-link">← Back to Home</NavLink>
          <h1>Contact Us</h1>
          <p className="intro">We'd love to hear from you. Get in touch with us!</p>

          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:josephmacoy52@gmail.com">josephmacoy52@gmail.com</a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+23354801476">+233 54801476</a>
                  </p>
                  <p>
                    <a href="tel:+233203915093">+233 203915093</a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3>LinkedIn</h3>
                  <p>
                    <a href="https://www.linkedin.com/in/joseph-migbodzi-a92b19249/" target="_blank" rel="noopener noreferrer">
                      Joseph Migbodzi
                    </a>
                  </p>
                </div>

                <div className="contact-item">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                  <p>Saturday: 10:00 AM - 4:00 PM GMT</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>

          <div className="additional-info">
            <h2>Support</h2>
            <p>For technical support or questions about the Employee Management System, please use the contact information above. We'll get back to you as soon as possible.</p>

            <h2>Feedback</h2>
            <p>Your feedback is valuable to us. If you have suggestions for improving our system or services, we'd love to hear them!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
