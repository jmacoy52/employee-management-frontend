import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Header />
      <main className="privacy-content">
        <div className="container">
          <NavLink to="/" className="back-home-link">← Back to Home</NavLink>
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
            <ul>
              <li>Personal information (name, email, phone number)</li>
              <li>Account credentials (username, password)</li>
              <li>Professional information (job title, department)</li>
              <li>Usage data and system logs</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage your account</li>
              <li>Communicate with you about our services</li>
              <li>Ensure security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.</p>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access and update your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt out of certain communications</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> josephmacoy52@gmail.com</p>
              <p><strong>Phone:</strong> +233 54801476 / +233 203915093</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/joseph-migbodzi-a92b19249/" target="_blank" rel="noopener noreferrer">Joseph Migbodzi</a></p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
