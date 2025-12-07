import React from "react";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="inner about">
      <SectionTitle
        subtitle="About Me"
        title="Turning complex problems into simple design"
      />

      {/* Achievements */}
      <div className="content__block grid-block">
        <div className="achievements d-flex flex-column flex-md-row align-items-md-stretch">
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">40+</p>
              <p className="achievements__descr">Happy clients</p>
            </div>
          </div>
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">2+</p>
              <p className="achievements__descr">Years of experience</p>
            </div>
          </div>
          <div className="achievements__item d-flex flex-column grid-item animate-card-3">
            <div className="achievements__card">
              <p className="achievements__number">50+</p>
              <p className="achievements__descr">Projects done</p>
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
                I wonder if I've been changed in the night? Let me think. Was I
                the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I'm not the same,
                the
                <a href="#0" className="text-link">
                  {" "}
                  next question
                </a>{" "}
                is 'Who in the world am I?' Ah, that's the great puzzle!
              </p>
              <p className="about-descr__text animate-in-up">
                Be what you would seem to be - or, if you'd like it put more
                simply - never imagine yourself not to be otherwise than what it
                might appear to others that what you were or
                <a href="#0" className="text-link">
                  {" "}
                  might have been
                </a>{" "}
                was not otherwise than what you had been would have appeared to
                them to be otherwise.
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
                  <small className="top">Phone</small>
                  <a className="text-link-bold" href="tel:+12127089400">
                    +1 212-708-9400
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Email</small>
                  <a
                    className="text-link-bold"
                    href="mailto:example@example.com?subject=Message%20from%20your%20site"
                  >
                    hello@yourdomain.com
                  </a>
                </h6>
              </div>
              <div className="about-info__item animate-in-up">
                <h6>
                  <small className="top">Location</small>
                  <a
                    className="text-link-bold"
                    href="https://maps.app.goo.gl/xMJXTEUeHkv6kYRQ6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Odesa, Ukraine
                  </a>
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
