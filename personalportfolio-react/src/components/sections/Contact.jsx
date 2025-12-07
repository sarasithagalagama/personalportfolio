import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! (This is a demo)");
  };

  return (
    <section id="contact" className="inner contact">
      <SectionTitle subtitle="Contact" title="Let's work together!" />

      <div className="content__block grid-block block-large">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 col-lg-8">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-default btn-hover btn-hover-accent"
                    >
                      <span className="btn-caption">Send Message</span>
                      <i className="ph-bold ph-paper-plane-tilt"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
