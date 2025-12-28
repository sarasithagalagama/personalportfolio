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
                  <h2>Quality Services</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-2s">
                  <i className="ri-global-fill"></i>
                  <h4>Brand Identity Design</h4>
                  <p>
                    Bentos gives you the blocks & kits you need to create a true
                    website within minutes.
                  </p>
                </div>
              </div>
              {/* / END SINGLE SERVICE DESIGN AREA */}
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-4s">
                  <i className="ri-quill-pen-line"></i>
                  <h4>Website Design</h4>
                  <p>
                    Bentos gives you the blocks & kits you need to create a true
                    website within minutes.
                  </p>
                </div>
              </div>
              {/* / END SINGLE SERVICE DESIGN AREA */}
              {/* START SINGLE SERVICE DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="service-item wow fadeInUp delay-0-6s">
                  <i className="ri-pantone-fill"></i>
                  <h4>Application Design</h4>
                  <p>
                    Bentos gives you the blocks & kits you need to create a true
                    website within minutes.
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
                  <h2>Flexible Pricing Plan</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-2s">
                  <div className="pricing-header">
                    <h4 className="title">Basic</h4>
                    <p className="save-percent">
                      Have design ready to build? <br />
                      or small budget
                    </p>
                    <span className="price">15</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>Need your
                        wireframe
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Design with
                        Figma, Framer
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Product Design
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line"></i>Digital Marketing
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line"></i>Custom Support
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PRICING DESIGN AREA */}
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Standard</h4>
                    <p className="save-percent">
                      Not have any design? <br />
                      Leave its for me
                    </p>
                    <span className="price">59</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>Website Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Mobile Apps
                        Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Product Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Digital Marketing
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line"></i>Custom Support
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* / END SINGLE PRICING DESIGN AREA */}
              {/* START SINGLE PRICING DESIGN AREA */}
              <div className="col-lg-4 col-md-6">
                <div className="pricing-item wow fadeInUp delay-0-4s">
                  <div className="pricing-header">
                    <h4 className="title">Standard</h4>
                    <p className="save-percent">
                      Not have any design? <br />
                      Leave its for me
                    </p>
                    <span className="price">59</span>
                  </div>
                  <div className="pricing-details">
                    <ul>
                      <li>
                        <i className="ri-arrow-right-line"></i>Website Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Mobile Apps
                        Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Product Design
                      </li>
                      <li>
                        <i className="ri-arrow-right-line"></i>Digital Marketing
                      </li>
                      <li className="unable">
                        <i className="ri-arrow-right-line"></i>Custom Support
                      </li>
                    </ul>
                    <a href="#" className="theme-btn">
                      Order Now <i className="ri-shopping-basket-line"></i>
                    </a>
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
    </div>
  );
};

export default ServicePage;
