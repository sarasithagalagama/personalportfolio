import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="inner about">
      <SectionTitle
        subtitle="About Me"
        title="Building scalable solutions with modern technologies"
      />

      {/* Achievements */}
      <div className="content__block grid-block">
        <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">10+</p>
              <p className="achievements__descr">Projects completed</p>
            </div>
          </div>
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">2+</p>
              <p className="achievements__descr">Years of learning</p>
            </div>
          </div>
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">3</p>
              <p className="achievements__descr">Certifications earned</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Data */}
      <div className="content__block grid-block block-large">
        <div className="container-fluid p-0">
          <div className="row g-0 justify-content-between">
            {/* Description */}
            <div className="col-12 col-xl-8 grid-item about-descr">
              <p className="about-descr__text animate-in-up">
                I am an IT undergraduate at SLIIT with a strong focus on
                fullstack development. My experience spans Java, Spring Boot,
                React, and PostgreSQL, where I enjoy architecting and delivering
                scalable solutions.
              </p>
              <p className="about-descr__text animate-in-up">
                I thrive on solving real-world problems and am passionate about
                continuous learning and growth. My projects reflect a commitment
                to clean code, modern best practices, and impactful results.
              </p>
              <div className="btn-group about-descr__btnholder animate-in-up">
                <a
                  className="btn mobile-vertical btn-default btn-hover btn-hover-accent"
                  href="#0"
                >
                  <span className="btn-caption">Download CV</span>
                  <i className="ph-bold ph-download-simple"></i>
                </a>
              </div>
            </div>

            {/* Information */}
            <div className="col-12 col-xl-4 grid-item about-info">
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Name</small>
                  Sarasitha Galagama
                </h6>
              </div>

              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Email</small>
                  <a
                    className="text-link-bold"
                    href="mailto:sarasithagalaga1@gmail.com?subject=Message%20from%20your%20portfolio"
                  >
                    sarasithagalaga1@gmail.com
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Location</small>
                  <span className="text-link-bold">Sri Lanka</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-0 align-items-stretch cards">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
