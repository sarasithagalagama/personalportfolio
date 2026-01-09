import React from "react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div>
      {/* START CONTACT DESIGN AREA */}
      <section id="contact" className="contact-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <span className="subtitle">Contact</span>
                  <h2>Get in Touch with Me!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-content-part  wow fadeInUp delay-0-2s">
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="contact-icon">
                      <i className="ri-map-pin-line"></i>
                    </div>
                    <div className="contact-text">
                      <h2>Location:</h2>
                      <p>Kottawa, Sri Lanka</p>
                    </div>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="contact-icon">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div className="contact-text">
                      <h2>Contact Number:</h2>
                      <p>
                        <a
                          href="https://wa.me/94712175244"
                          target="_blank"
                          rel="noreferrer"
                        >
                          +94 71 217 5244
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                  {/* START CONTACT SINGLEDESIGN AREA */}
                  <div
                    className="single-contact wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="contact-icon">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div className="contact-text">
                      <h2>Email Me:</h2>
                      <p>
                        <a href="mailto:sarasithagalagama@gmail.com">
                          sarasithagalagama@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* / END CONTACT SINGLEDESIGN AREA */}
                </div>
              </div>
              {/* START CONTACT FORM DESIGN AREA */}
              <div className="col-lg-8">
                <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                  <form
                    id="contactForm"
                    className="contactForm"
                    name="contactForm"
                    action="https://formspree.io/f/mvzgopvk"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            placeholder="Your Name"
                            required=""
                            data-error="Please enter your Name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            required=""
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="message">Your Message</label>
                          <textarea
                            name="message"
                            id="message"
                            className="form-control"
                            rows="4"
                            placeholder="How can I help you?"
                            required=""
                            data-error="Please Write your Message"
                          ></textarea>
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <button type="submit" className="theme-btn">
                            Send Message <i className="ri-mail-line"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* / END CONTACT FORM DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* / END CONTACT DESIGN AREA */}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="about-content-part call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>Ready to kickstart something awesome?</h2>
                <p>
                  Let’s turn your ideas into clean visuals and working
                  products—from brand graphics to thoughtful UI/UX and full web
                  experiences. I’m open to freelance, part‑time, and full‑time
                  roles where I can blend creative design, UI/UX, and full‑stack
                  development to build things that actually work for users and
                  businesses.
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Let's Talk <i className="ri-chat-3-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/*  // END CALL TO ACTION DESIGN AREA */}
    </div>
  );
};

export default ContactPage;
