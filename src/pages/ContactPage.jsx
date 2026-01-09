import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value.trim()))
          return "Name should only contain letters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10)
          return "Message must be at least 10 characters";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent numbers in name field
    if (name === "name") {
      const filteredValue = value.replace(/[0-9]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));

      // Real-time validation
      if (touched[name]) {
        const error = validateField(name, filteredValue);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Real-time validation
      if (touched[name]) {
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mvzgopvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
        setErrors({});
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contactForm" noValidate>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-control ${
                errors.name && touched.name ? "is-invalid" : ""
              }`}
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <div className="error-message">{errors.name}</div>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-control ${
                errors.email && touched.email ? "is-invalid" : ""
              }`}
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              className={`form-control ${
                errors.message && touched.message ? "is-invalid" : ""
              }`}
              rows="4"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.message && touched.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>
        </div>
        <div className="col-md-12">
          {submitStatus === "success" && (
            <div className="success-message">
              <i className="ri-checkbox-circle-line"></i> Message sent
              successfully! I'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error-message">
              <i className="ri-error-warning-line"></i> Failed to send message.
              Please try again.
            </div>
          )}
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Sending... <i className="ri-loader-4-line"></i>
                </>
              ) : (
                <>
                  Send Message <i className="ri-mail-line"></i>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

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
                  <ContactForm />
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
