import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    // Initialize scroller animation
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        // Only initialize if not already animated
        if (!scroller.getAttribute("data-animated")) {
          scroller.setAttribute("data-animated", true);

          const scrollerInner = scroller.querySelector(".scroller__inner");
          const scrollerContent = Array.from(scrollerInner.children);

          // Clone each item for infinite scroll effect
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
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
                <img src="/assets/images/about/profile.jpg" alt="About Me" />
                <h2>Sarasitha Galagama</h2>
                <p>I am a Web Designer based in san francisco.</p>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a href="">
                        <i className="ri-facebook-circle-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-twitter-x-line"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-linkedin-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="ri-github-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* / END ABOUT IMAGE DESIGN AREA */}
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-8">
              <div className="about-content-part wow fadeInUp delay-0-2s">
                <p>Hello There!</p>
                <h2>
                  My name is Sarasitha Galagama, I am a advertising agent, I am
                  also engaged in design.
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
                <h2>Company I Worked With</h2>
                <div className="company-list">
                  <div
                    className="scroller"
                    data-direction="left"
                    data-speed="slow"
                  >
                    <div className="scroller__inner">
                      <img
                        src="/assets/images/client-logos/partner1.png"
                        alt=""
                      />
                      <img
                        src="/assets/images/client-logos/partner2.png"
                        alt=""
                      />
                      <img
                        src="/assets/images/client-logos/partner3.png"
                        alt=""
                      />
                      <img
                        src="/assets/images/client-logos/partner4.png"
                        alt=""
                      />
                      <img
                        src="/assets/images/client-logos/partner5.png"
                        alt=""
                      />
                      <img
                        src="/assets/images/client-logos/partner1.png"
                        alt=""
                      />
                    </div>
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
                    Check out some of my design projects, meticulously crafted
                    with love and dedication, each one reflecting the passion
                    and soul I poured into every detail.
                  </p>
                </div>
              </div>
            </div>
            <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
              <li data-filter="*" className="current">
                Show All
              </li>
              <li data-filter=".design">Design</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".marketing">Marketing</li>
              <li data-filter=".game">Game</li>
            </ul>
            <div className="row project-masonry-active">
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item branding game">
                <div className="project-item style-two wow fadeInUp delay-0-3s">
                  <div className="project-image">
                    <img
                      src="/assets/images/projects/work1.jpg"
                      alt="Project"
                    />
                    <a href="single-project.html" className="details-btn">
                      <i className="ri-arrow-right-up-line"></i>
                    </a>
                  </div>
                  <div className="project-content">
                    <span className="sub-title">Branding</span>
                    <h3>Mobile Application Design</h3>
                  </div>
                </div>
              </div>
              {/* START PORTFOLIO DESIGN AREA */}
              {/* START SINGLE PORTFOLIO DESIGN AREA */}
              <div className="col-lg-4 col-md-6 item design marketing graphics">
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
              <div className="col-lg-4 col-md-6 item game graphics">
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
              <div className="col-lg-4 col-md-6 item design game">
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
              <div className="col-lg-4 col-md-6 item branding game">
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
              <div className="col-lg-4 col-md-6 item design marketing graphics">
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

      {/* START CALL TO ACTION DESIGN AREA */}
      <section className="call-to-action-area">
        <div className="container">
          <div className="row">
            {/* START ABOUT TEXT DESIGN AREA */}
            <div className="col-lg-12">
              <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                <h2>
                  Are You Ready to kickstart your project with a touch of magic?
                </h2>
                <p>
                  Reach out and let's make it happen ✨. I'm also available for
                  full-time or Part-time opportunities to push the boundaries of
                  design and deliver exceptional work.
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
