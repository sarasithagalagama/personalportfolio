import React from "react";
import { Link } from "react-router-dom";

const ServicePage = () => {
  return (
    <div>
      {/* START SERVICE DESIGN AREA */}
      <section id="services" className="services-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Services</p>
                  <h2>Quality services for modern brands</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-brush-line"></i>
                  <h4>Creative & Brand Design</h4>
                  <p>
                    Crafting posters, album covers, thumbnails, and social media
                    visuals that are bold, consistent, and platform‑ready.
                  </p>
                </div>
              </div>
              {/* / END SINGLE SERVICE DESIGN AREA */}
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-layout-line"></i>
                  <h4>UI/UX & Web Design</h4>
                  <p>
                    Designing clean, responsive interfaces for landing pages,
                    dashboards, and web apps, with a focus on clarity and
                    usability.
                  </p>
                </div>
              </div>
              {/* / END SINGLE SERVICE DESIGN AREA */}
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-code-s-slash-line"></i>
                  <h4>Full‑Stack & Data‑Driven Apps</h4>
                  <p>
                    Building and deploying web apps and AI‑driven tools, from
                    APIs and databases to dashboards and simple ML integrations.
                  </p>
                </div>
              </div>
              {/* / END SINGLE SERVICE DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* / END SERVICE DESIGN AREA */}

      {/* START PRICING DESIGN AREA */}
      <section className="pricing-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Pricing</p>
                  <h2>Flexible engagement options</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-2s">
                  <div className="pricing-header">
                    <h4 className="title">Starter</h4>
                    <p className="save-percent">
                      Best for: Single poster, thumbnail, or small design task.
                    </p>
                  </div>
                  <div className="pricing-details">
                    <p
                      style={{
                        marginBottom: "10px",
                        color: "var(--main-color)",
                      }}
                    >
                      Includes:
                    </p>
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>1–2 design
                        concepts
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Basic revisions
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Web‑ready exports
                      </li>
                    </ul>
                    <Link to="/contact" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PRICING DESIGN AREA */}
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Design & UI</h4>
                    <p className="save-percent">
                      Best for: A full set of visuals or a small website/landing
                      page.
                    </p>
                  </div>
                  <div className="pricing-details">
                    <p
                      style={{
                        marginBottom: "10px",
                        color: "var(--main-color)",
                      }}
                    >
                      Includes:
                    </p>
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>Brand kit or page
                        UI
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Component‑based
                        design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Responsive
                        layouts
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Asset hand‑off
                      </li>
                    </ul>
                    <Link to="/contact" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PRICING DESIGN AREA */}
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Product & Dev</h4>
                    <p className="save-percent">
                      Best for: End‑to‑end mini‑projects (site + backend or
                      dashboard + data).
                    </p>
                  </div>
                  <div className="pricing-details">
                    <p
                      style={{
                        marginBottom: "10px",
                        color: "var(--main-color)",
                      }}
                    >
                      Includes:
                    </p>
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>UI/UX
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Front‑end
                        implementation
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Simple
                        backend/API
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Basic
                        deployment/support
                      </li>
                    </ul>
                    <Link to="/contact" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PRICING DESIGN AREA */}
            </div>
          </div>
        </div>
      </section>
      {/* / END PRICING DESIGN AREA */}

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

export default ServicePage;
