import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      {/* START ABOUT DESIGN AREA */}
      <section id="about" className="about-single-area innerpage-single-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img
                  src="/assets/images/about/profile-pic2.png"
                  alt="About Me"
                />
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <h2>I’m Sarasitha Galagama</h2>
                <p>
                  A creative designer and full‑stack developer with a soft spot
                  for clean interfaces, bold visuals, and well‑behaved code. As
                  an Information Systems Engineering undergraduate at SLIIT and
                  a freelance designer with 4+ years of Fiverr experience, I
                  enjoy moving from UI layouts and prototypes to
                  production‑ready web apps that solve real problems.
                </p>
                <p>
                  When I’m not experimenting with layouts in Figma, you’ll
                  usually find me wiring up APIs, refining front‑end states, or
                  building small AI and data‑driven tools. My journey from
                  Ananda College, Colombo to university and freelance work has
                  shaped me into someone who cares about both the user
                  experience and the engineering behind it.
                </p>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Get In touch<i className="ri-mail-send-line"></i>
                  </Link>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/* / END ABOUT DESIGN AREA */}

      {/* START RESUME EXPERIENCE DESIGN AREA */}
      <section id="resume" className="resume-area">
        <div className="container">
          <div className="resume-items">
            <div className="row">
              {/* START EXPERIENCE RESUME DESIGN AREA */}
              <div className="col-xl-6 col-md-6">
                <div className="single-resume">
                  <h2>Experience</h2>
                  <div className="experience-list">
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-briefcase-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2020 - Present</span>
                        <h4>Freelance Creative Designer</h4>
                        <span className="company">Fiverr & Upwork</span>
                        <p
                          style={{
                            marginTop: "10px",
                            color: "#b0b0b0",
                            fontSize: "14px",
                          }}
                        >
                          Designing movie posters, album covers, thumbnails, and
                          social media creatives for clients worldwide.
                        </p>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-code-s-slash-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2023 - Present</span>
                        <h4>Full‑Stack / UI Developer</h4>
                        <span className="company">
                          Personal & Academic Projects
                        </span>
                        <p
                          style={{
                            marginTop: "10px",
                            color: "#b0b0b0",
                            fontSize: "14px",
                          }}
                        >
                          Building web apps, dashboards, and tools using modern
                          stacks while focusing on clean, usable interfaces.
                        </p>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                  </div>
                </div>
              </div>
              {/* // END EXPERIENCE RESUME DESIGN AREA */}
              {/* START EDUCATION RESUME DESIGN AREA */}
              <div className="col-xl-6 col-md-6">
                <div className="experience-list">
                  <div className="single-resume">
                    <h2>Education</h2>
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-graduation-cap-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2023 - Present</span>
                        <h4>
                          BSc (Hons) in Information Technology Specializing in
                          Information Systems Engineering
                        </h4>
                        <span className="company">SLIIT, Malabe</span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                    {/* START SINGLE RESUME DESIGN AREA */}
                    <div className="resume-item wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="ri-school-line"></i>
                      </div>
                      <div className="content">
                        <span className="years">2009 - 2022</span>
                        <h4>Ananda College, Colombo</h4>
                        <span className="company">
                          Physical Science – Maths stream
                        </span>
                      </div>
                    </div>
                    {/* / END SINGLE RESUME DESIGN AREA */}
                  </div>
                </div>
              </div>
              {/* // END EDUCATION RESUME DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* / END RESUME EXPERIENCE DESIGN AREA */}

      {/* START TESTIMONIALS DESIGN AREA */}
      <section className="testimonials-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Testinomials</p>
                  <h2>What clients say!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials-wrap">
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-3s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      eve plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO & Founder X</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      eve plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-2s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author1.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      eve plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Zonathon Doe</h5>
                      <span>CEO & Founder X</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                  {/* START SINGLE TESTIMONIALS DESIGN AREA */}
                  <div className="testimonial-item wow fadeInUp delay-0-4s">
                    <div className="author">
                      <img
                        src="/assets/images/testimonials/author2.jpg"
                        alt="Author"
                      />
                    </div>
                    <div className="text">
                      Financial planners help people to knowledge in about how
                      to invest and in save their moneye the most efficient way
                      eve plan ners help people tioniio know ledige in about
                      how.
                    </div>
                    <div className="testi-des">
                      <h5>Liana Marie</h5>
                      <span>Lead Designer Meta</span>
                    </div>
                  </div>
                  {/* / END SINGLE TESTIMONIALS DESIGN AREA */}
                </div>
                <div className="slider-arrows wow fadeInUp delay-0-6s text-center pt-40">
                  <button className="testimonial-prev">
                    <i className="ri-arrow-left-s-line"></i>
                  </button>
                  <button className="testimonial-next">
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END TESTIMONIALS DESIGN AREA */}

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
                    Let's Talk <i className="ri-download-line"></i>
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

export default AboutPage;
