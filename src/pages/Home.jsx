import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
                  I enjoy turning ideas into pixels and code, and on good days
                  both the designs and the servers cooperate, turning problems
                  into clean interfaces and working features.
                </h2>
                <div className="adress-field">
                  <ul>
                    <li>
                      <i className="ri-circle-fill"></i>Available for
                      Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <Link to="/contact" className="theme-btn">
                    Download CV <i className="ri-download-line"></i>
                  </Link>
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
              <li data-filter="*" className="current">
                Show All
              </li>
              <li data-filter=".design-branding">Design & Branding</li>
              <li data-filter=".ui-ux">UI/UX & Web</li>
              <li data-filter=".full-stack">Full‑Stack Apps</li>
              <li data-filter=".ai-ml">AI & ML Projects</li>
              <li data-filter=".dashboards">Dashboards & Data</li>
            </ul>
            <div className="row project-masonry-active">
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design-branding">
                <div className="project-item style-two wow fadeInUp delay-0-3s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work1.jpg"
                      alt="Project"
                    />
                    <Link to="/single-project" className="details-btn">
                      <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              {/* START PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item ui-ux">
                <div className="project-item style-two wow fadeInUp delay-0-4s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work2.jpg"
                      alt="Project"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
                      className="details-btn popup-youtube"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Makeup Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design-branding">
                <div className="project-item style-two wow fadeInUp delay-0-5s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work3.jpg"
                      alt="Project"
                    />
                    <a
                      href="/assets/images/projects/work3.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Graphics</span>
                    <h3>Brand Identity and Motion Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item ui-ux">
                <div className="project-item style-two wow fadeInUp delay-0-6s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work4.jpg"
                      alt="Project"
                    />
                    <a
                      href="/assets/images/projects/work4.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Game</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item full-stack">
                <div className="project-item style-two wow fadeInUp delay-0-7s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work5.jpg"
                      alt="Project"
                    />
                    <a
                      href="/assets/images/projects/work5.jpg"
                      className="details-btn work-popup"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Application Design</h3>
                  </div>
                </div>
              </div>
              {/* START PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item full-stack">
                <div className="project-item style-two wow fadeInUp delay-0-8s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work6.jpg"
                      alt="Project"
                    />
                    <a
                      href="https://www.youtube.com/watch?v=qZEPs3vmYB4"
                      className="details-btn popup-youtube"
                    >
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Design</span>
                    <h3>Website Development</h3>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PORTFOLIO DESIGN AREA */}
            </div>
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
    </>
  );
};

export default Home;
