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

  const contactInfo = [
    {
      icon: "ph-bold ph-envelope",
      title: "Email",
      value: "sarasithagalagama@gmail.com",
      link: "mailto:sarasithagalagama@gmail.com",
    },
    {
      icon: "ph-bold ph-map-pin",
      title: "Location",
      value: "Sri Lanka",
      link: null,
    },
    {
      icon: "ph-bold ph-phone",
      title: "Phone",
      value: "+94 71 217 5244",
      link: "tel:+94712175244",
    },
  ];

  const socialLinks = [
    {
      icon: "ph-bold ph-linkedin-logo",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/sarasitha-galagama/",
      color: "#0077B5",
    },
    {
      icon: "ph-bold ph-github-logo",
      label: "GitHub",
      link: "https://github.com/sarasithagalagama",
      color: "#333",
    },
    {
      icon: "ph-bold ph-behance-logo",
      label: "Behance",
      link: "https://www.behance.net/sarasithagalagama",
      color: "#1769FF",
    },
    {
      icon: "ph-bold ph-instagram-logo",
      label: "Instagram",
      link: "https://www.instagram.com/sarasitha.galagama/",
      color: "#E4405F",
    },
  ];

  return (
    <section id="contact" className="inner contact">
      <SectionTitle subtitle="Contact" title="Let's work together!" />

      <div
        className="content__block section-grid-title"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-12 col-lg-4">
            <div style={{ position: "sticky", top: "2rem" }}>
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.25rem" }}>
                Get in Touch
              </h3>
              <p
                style={{
                  opacity: 0.8,
                  marginBottom: "2rem",
                  lineHeight: "1.7",
                }}
              >
                Feel free to reach out for collaborations, freelance work, or
                just a friendly chat!
              </p>

              {/* Contact Info Cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    style={{
                      padding: "1.25rem",
                      background: "var(--base-tint)",
                      borderRadius: "var(--_radius-m)",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "var(--_radius-s)",
                        background: "linear-gradient(135deg, #764ba2, #667eea)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <i
                        className={info.icon}
                        style={{ fontSize: "1.5rem", color: "#fff" }}
                      ></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <small
                        style={{
                          opacity: 0.6,
                          display: "block",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {info.title}
                      </small>
                      {info.link ? (
                        <a
                          href={info.link}
                          style={{
                            fontWeight: "500",
                            color: "var(--text-color)",
                            textDecoration: "none",
                            wordBreak: "break-all",
                          }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <strong style={{ wordBreak: "break-word" }}>
                          {info.value}
                        </strong>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ marginBottom: "1rem", fontSize: "1rem" }}>
                  Follow Me
                </h4>
                <div
                  style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
                >
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "var(--_radius-s)",
                        background: "var(--base-tint)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent-color)",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#667eea";
                        e.currentTarget.style.color = "#ffffff";
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 12px rgba(102, 126, 234, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "var(--base-tint)";
                        e.currentTarget.style.color = "var(--accent-color)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <i
                        className={social.icon}
                        style={{ fontSize: "1.25rem" }}
                      ></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-12 col-lg-8">
            <div
              style={{
                background: "var(--base-tint)",
                borderRadius: "var(--_radius-m)",
                padding: "2.5rem",
              }}
            >
              <h3 style={{ marginBottom: "1.5rem", fontSize: "1.25rem" }}>
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12 col-md-6">
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "0.875rem 1.25rem",
                        borderRadius: "var(--_radius-s)",
                        border: "1px solid var(--stroke-elements)",
                        background: "var(--base-shade)",
                        color: "var(--text-color)",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "0.875rem 1.25rem",
                        borderRadius: "var(--_radius-s)",
                        border: "1px solid var(--stroke-elements)",
                        background: "var(--base-shade)",
                        color: "var(--text-color)",
                        fontSize: "1rem",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="col-12">
                    <label
                      style={{
                        display: "block",
                        marginBottom: "0.5rem",
                        fontSize: "0.95rem",
                        fontWeight: "500",
                      }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        padding: "0.875rem 1.25rem",
                        borderRadius: "var(--_radius-s)",
                        border: "1px solid var(--stroke-elements)",
                        background: "var(--base-shade)",
                        color: "var(--text-color)",
                        fontSize: "1rem",
                        width: "100%",
                        resize: "vertical",
                      }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      style={{
                        padding: "1rem 2.5rem",
                        background: "#667eea",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "var(--_radius-m)",
                        fontSize: "1rem",
                        fontWeight: "500",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(-2px) scale(1.02)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 20px rgba(102, 126, 234, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform =
                          "translateY(0) scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <span>Send Message</span>
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
