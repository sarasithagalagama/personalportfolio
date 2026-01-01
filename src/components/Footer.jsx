import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer footer-minimal">
      <div className="container">
        <div className="footer-wrapper">
          {/* Left Section: Brand + Copyright */}
          <div className="footer-left">
            <div className="footer-brand-text">
              <span className="name">SARASITHA GALAGAMA</span>
              <span className="separator">|</span>
              <span className="year">2026</span>
            </div>

            <div className="footer-divider"></div>
          </div>

          {/* Center Section: Copyright */}
          <div className="footer-center">
            <p>Copyright @2026, All Rights Reserved.</p>
          </div>

          {/* Right Section: Social Links */}
          <div className="footer-right">
            <ul className="social-minimal">
              <li>
                <a
                  href="https://www.linkedin.com/in/sarasitha-galagama"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sarasithagalagama"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <i className="ri-github-line"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/sarasitha_galagama/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
