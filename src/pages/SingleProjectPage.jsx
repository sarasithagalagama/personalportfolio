import React from "react";
import { Link } from "react-router-dom";

const SingleProjectPage = () => {
  return (
    <>
      {/* START PROJECT HERO AREA */}
      <section
        className="single-project-hero-area"
        style={{ paddingTop: "150px", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-hero-content text-center wow fadeInUp delay-0-2s">
                <span className="sub-title">UI/UX Design</span>
                <h2>Mobile Banking App Reimagined</h2>
                <div className="project-meta">
                  <ul>
                    <li>
                      <span>Client:</span> FinTech Corp
                    </li>
                    <li>
                      <span>Date:</span> Dec 2024
                    </li>
                    <li>
                      <span>Category:</span> UI/UX & App
                    </li>
                    <li>
                      <span>Duration:</span> 4 Weeks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END PROJECT HERO AREA */}

      {/* START PROJECT IMAGE */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-main-image wow fadeInUp delay-0-3s mb-50">
              <img
                src="/assets/images/projects/work1.jpg"
                alt="Project Main"
                className="img-fluid w-100 rounded-3"
              />
            </div>
          </div>
        </div>
      </div>
      {/* END PROJECT IMAGE */}

      {/* START PROJECT CONTENT AREA */}
      <section className="single-project-content-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="project-details-content wow fadeInUp delay-0-2s">
                <h3>The Challenge</h3>
                <p>
                  The main challenge was to simplify complex financial data into
                  an intuitive, user-friendly interface. Users reported feeling
                  overwhelmed by the existing app's cluttered dashboard and
                  hidden transaction features. Our goal was to reduce friction
                  for common tasks like transfers and bill payments while
                  maintaining a secure and professional feel.
                </p>

                <h3>The Solution</h3>
                <p>
                  We adopted a "clean and card-based" design system. Key changes
                  included:
                </p>
                <ul className="list-style-one mb-40">
                  <li>
                    Simplified Navigation: Reduced bottom tabs from 5 to 3.
                  </li>
                  <li>
                    Smart Dashboard: Auto-categorized spending charts on the
                    home screen.
                  </li>
                  <li>
                    Quick Actions: A floating action button for instant
                    transfers.
                  </li>
                  <li>Dark Mode: Fully supported system-wide dark theme.</li>
                </ul>

                <h3>The Result</h3>
                <p>
                  After the redesign, user engagement increased by 40%, and
                  support tickets regarding "how to find X feature" dropped by
                  60%. The app now holds a 4.8-star rating on the App Store.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="project-sidebar wow fadeInUp delay-0-4s">
                <div className="widget widget-services">
                  <h4 className="widget-title">Technologies Used</h4>
                  <ul>
                    <li>
                      <a href="#">Figma</a>
                    </li>
                    <li>
                      <a href="#">React Native</a>
                    </li>
                    <li>
                      <a href="#">Node.js</a>
                    </li>
                    <li>
                      <a href="#">GraphQL</a>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-share mt-40">
                  <h4 className="widget-title">Share</h4>
                  <div className="social-style-one">
                    <a href="#">
                      <i className="ri-facebook-fill"></i>
                    </a>
                    <a href="#">
                      <i className="ri-twitter-fill"></i>
                    </a>
                    <a href="#">
                      <i className="ri-linkedin-fill"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END PROJECT CONTENT AREA */}

      {/* START NEXT PROJECT AREA */}
      <section className="next-project-area pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="next-project-inner text-center wow fadeInUp delay-0-2s">
                <Link to="/single-project" className="theme-btn">
                  Next Project <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END NEXT PROJECT AREA */}
    </>
  );
};

export default SingleProjectPage;
