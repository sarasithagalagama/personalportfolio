import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset showAll when filter changes
  useEffect(() => {
    setShowAll(false);
  }, [activeFilter]);

  const filteredProjects =
    activeFilter === "*"
      ? projectsData
      : projectsData.filter((project) =>
          Array.isArray(project.filterCategory)
            ? project.filterCategory.includes(activeFilter)
            : project.filterCategory === activeFilter
        );

  const initialCount = isMobile ? 2 : 6;
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, initialCount);

  useEffect(() => {
    // Animation or other side effects can go here if needed in the future
  }, []);

  return (
    <>
      {/* START ABOUT DESIGN AREA */}
      <section id="about" className="about-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT IMAGE DESIGN AREA */}
            <div className="col-lg-4">
              <div className="about-image-part wow fadeInUp delay-0-3s">
                <img
                  src="/assets/images/about/profile-pic2.png"
                  alt="About Me"
                />
                <h2>Sarasitha Galagama</h2>
                <p>
                  Creative designer & full‑stack developer based in Kottawa, Sri
                  Lanka.
                </p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/sarasitha-galagama"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/sarasitha_galagama/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/sarasithagalagama"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-github-line"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/94712175244"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-whatsapp-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="hero-btns d-flex flex-wrap justify-content-center gap-3 mt-30 mb-10">
                  <a
                    href="https://www.fiverr.com/graphyourworld"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn fiverr-btn"
                  >
                    Hire Me on Fiverr <i className="ri-arrow-right-up-line"></i>
                  </a>
                  <a
                    href="https://www.behance.net/sarasithagalagama"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn behance-btn"
                  >
                    Behance <i className="ri-behance-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>Hello! I’m Sarasitha Galagama,</p>
                <h2>
                  A creative designer and full-stack developer focused on
                  building intuitive interfaces and reliable, data-driven
                  applications.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li>
                      <i className="ri-circle-fill"></i>Available for
                      Freelancing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-content-part-bottom wow fadeInUp delay-0-2s">
                <h2>Quick Stats</h2>
                <div className="quick-stats-grid">
                  <div className="stat-item">
                    <div className="stat-box">4+</div>
                    <p className="stat-label">years freelance experience</p>
                  </div>
                  <div className="stat-item">
                    <div className="stat-box">700+</div>
                    <p className="stat-label">projects delivered</p>
                  </div>
                  <div className="stat-item">
                    <div className="stat-box">4.7★</div>
                    <p className="stat-label">average client satisfaction</p>
                  </div>
                  <div className="stat-item">
                    <div className="stat-box">IT</div>
                    <p className="stat-label">undergraduate @ SLIIT</p>
                  </div>
                </div>
              </div>
            </div>
            {/* / END ABOUT TEXT DESIGN AREA */}
          </div>
        </div>
      </section>
      {/* / END ABOUT DESIGN AREA */}

      {/* START SERVICE DESIGN AREA */}
      <section id="services" className="services-area">
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

      {/* START PORTFOLIO DESIGN AREA */}
      <section id="portfolio" className="projects-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <h2>Works & Projects</h2>
                  <p>
                    Explore a selection of my design and development projects,
                    crafted with care and a focus on clear visuals, solid UX,
                    and real‑world impact.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li
                onClick={() => setActiveFilter("*")}
                className={activeFilter === "*" ? "current" : ""}
              >
                Show All
              </li>
              <li
                onClick={() => setActiveFilter("design-branding")}
                className={activeFilter === "design-branding" ? "current" : ""}
              >
                Design & Branding
              </li>
              <li
                onClick={() => setActiveFilter("ui-ux")}
                className={activeFilter === "ui-ux" ? "current" : ""}
              >
                UI/UX & Web
              </li>
              <li
                onClick={() => setActiveFilter("full-stack")}
                className={activeFilter === "full-stack" ? "current" : ""}
              >
                Full‑Stack Apps
              </li>
              <li
                onClick={() => setActiveFilter("ai-ml")}
                className={activeFilter === "ai-ml" ? "current" : ""}
              >
                AI & ML Projects
              </li>
              <li
                onClick={() => setActiveFilter("dashboards")}
                className={activeFilter === "dashboards" ? "current" : ""}
              >
                Dashboards & Data
              </li>
            </ul>
            <div className="row g-4">
              {displayedProjects.length > 0 ? (
                displayedProjects.map((project) => (
                  <div key={project.id} className="col-lg-4 col-md-6 item">
                    <div className="project-item style-two">
                      <div className="project-image">
                        <Link
                          to={`/single-project/${project.id}`}
                          style={{
                            display: "block",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <img
                            src={project.img}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                          />
                        </Link>
                        <Link
                          to={`/single-project/${project.id}`}
                          className="details-btn"
                        >
                          <i className="ri-arrow-right-up-line"></i>
                        </Link>
                      </div>
                      <div className="project-content">
                        <Link
                          to={`/single-project/${project.id}`}
                          style={{ textDecoration: "none", color: "inherit" }}
                        >
                          <span className="sub-title">{project.subTitle}</span>
                          <h3>{project.title}</h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="col-lg-12 text-center"
                  style={{ padding: "60px 20px" }}
                >
                  <h3
                    style={{
                      color: "var(--heading-color)",
                      marginBottom: "10px",
                    }}
                  >
                    No projects found
                  </h3>
                  <p style={{ color: "var(--text-color)", opacity: 0.8 }}>
                    Try selecting a different category to see more projects.
                  </p>
                </div>
              )}
            </div>
            {filteredProjects.length > initialCount && (
              <div className="row">
                <div className="col-lg-12 text-center mt-60">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="theme-btn"
                  >
                    {showAll ? "Show Less" : "Load More"}{" "}
                    <i
                      className={
                        showAll ? "ri-arrow-up-line" : "ri-arrow-down-line"
                      }
                    ></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* // END PORTFOLIO DESIGN AREA */}

      {/* START FIVERR STRIP AREA */}
      <section className="fiverr-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-part text-center wow fadeInUp delay-0-2s">
                <h2>Work with me on Fiverr</h2>
                <p>
                  Prefer a structured freelance workflow? I’ve been designing
                  for clients on Fiverr for 5+ years, delivering posters,
                  covers, thumbnails, and web visuals with clear communication
                  and on‑time delivery.
                </p>
                <div className="hero-btns mt-40">
                  <a
                    href="https://www.fiverr.com/graphyourworld"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn"
                  >
                    View Fiverr Profile{" "}
                    <i className="ri-arrow-right-up-line"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END FIVERR STRIP AREA */}

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
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
    </>
  );
};

export default Home;
