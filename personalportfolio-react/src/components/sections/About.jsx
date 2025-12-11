import React from "react";
import SectionTitle from "../common/SectionTitle";

const About = () => {
  const infoCardStyle = {
    padding: "2rem 1.5rem",
    background: "rgba(255, 255, 255, 0.02)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    textAlign: "center",
    height: "100%",
    transition: "all 0.3s ease",
  };

  const infoIconStyle = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    display: "block",
    color: "var(--color-accent)",
    opacity: 0.9,
  };

  const infoTitleStyle = {
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "0.75rem",
    opacity: 0.6,
    fontWeight: "600",
  };

  return (
    <section id="about" className="inner about">
      <style>{`
        .about-info-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: var(--color-accent);
          transform: translateY(-4px);
        }
      `}</style>

      <SectionTitle
        subtitle="About Me"
        title="Crafting Digital Experiences with Code & Design"
      />

      {/* Introduction */}
      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 grid-item">
              <div className="about-descr">
                <p className="about-descr__text animate-in-up">
                  I'm a passionate IT undergraduate at SLIIT, specializing in
                  fullstack development and UI/UX design. With expertise in
                  Java, Spring Boot, React, and PostgreSQL, I build scalable web
                  applications that solve real-world problems.
                </p>
                <p className="about-descr__text animate-in-up">
                  My journey combines technical excellence with creative design
                  thinking. As a Level 2 Seller on Fiverr with 523+ completed
                  projects, I've helped 170+ clients bring their digital visions
                  to life while maintaining a 4.7-star rating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="content__block grid-block" style={{ marginTop: "2rem" }}>
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch">
            <div className="col-12 col-md-4 grid-item animate-card-2">
              <div className="about-info-card" style={infoCardStyle}>
                <i className="ph-bold ph-envelope" style={infoIconStyle}></i>
                <h6 style={infoTitleStyle}>Email</h6>
                <a
                  href="mailto:sarasithagalagama@gmail.com"
                  className="text-link-bold"
                >
                  sarasithagalagama@gmail.com
                </a>
              </div>
            </div>
            <div className="col-12 col-md-4 grid-item animate-card-2">
              <div className="about-info-card" style={infoCardStyle}>
                <i className="ph-bold ph-map-pin" style={infoIconStyle}></i>
                <h6 style={infoTitleStyle}>Location</h6>
                <span>Sri Lanka</span>
              </div>
            </div>
            <div className="col-12 col-md-4 grid-item animate-card-2">
              <div className="about-info-card" style={infoCardStyle}>
                <i
                  className="ph-bold ph-graduation-cap"
                  style={infoIconStyle}
                ></i>
                <h6 style={infoTitleStyle}>Education</h6>
                <span>BSc (Hons) IT, SLIIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="content__block grid-block" style={{ marginTop: "2rem" }}>
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-12 grid-item text-center">
              <div className="about-descr__btnholder animate-in-up">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                  href="#0"
                >
                  <span className="btn-caption">Download CV</span>
                  <i className="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
