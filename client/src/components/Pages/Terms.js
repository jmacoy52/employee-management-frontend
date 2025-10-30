import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      <Header />
      <main className="terms-content">
        <div className="container">
          <NavLink to="/" className="back-home-link">← Back to Home</NavLink>
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleDateString()}</p>

          <section>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using the Employee Management System, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2>Use License</h2>
            <p>Permission is granted to temporarily access the materials (information or software) on our system for personal, non-commercial transitory viewing only.</p>
          </section>

          <section>
            <h2>User Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and current information</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2>Prohibited Uses</h2>
            <p>You may not use our services:</p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
            </ul>
          </section>

          <section>
            <h2>Service Availability</h2>
            <p>We strive to provide continuous service but do not guarantee that the service will be uninterrupted or error-free. We reserve the right to modify or discontinue the service at any time.</p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.</p>
          </section>

          <section>
            <h2>Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us:</p>
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

export default Terms;
