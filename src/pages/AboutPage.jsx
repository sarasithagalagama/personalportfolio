import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FaJava,
  FaPython,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaLinux,
  FaAws,
  FaDraftingCompass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiVercel,
} from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";

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

      {/* START SKILLS DESIGN AREA */}
      <section id="skills" className="skills-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Skills</p>
                  <h2>Technical Proficiency</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="skill-category wow fadeInUp delay-0-2s">
                  <h4>
                    <i className="ri-code-s-slash-line"></i>
                    Languages & Frameworks
                  </h4>
                  <div className="skill-tags">
                    <span className="skill-tag">
                      <FaJava /> Java
                    </span>
                    <span className="skill-tag">
                      <FaPython /> Python
                    </span>
                    <span className="skill-tag">
                      <SiJavascript /> JavaScript
                    </span>
                    <span className="skill-tag">
                      <SiTypescript /> TypeScript
                    </span>
                    <span className="skill-tag">
                      <SiSpringboot /> Spring Boot
                    </span>
                    <span className="skill-tag">
                      <SiNextdotjs /> Next.js
                    </span>
                    <span className="skill-tag">
                      <FaReact /> React
                    </span>
                    <span className="skill-tag">
                      <SiTailwindcss /> Tailwind CSS
                    </span>
                  </div>
                </div>

                <div className="skill-category wow fadeInUp delay-0-3s">
                  <h4>
                    <i className="ri-brush-line"></i>
                    Design & UX
                  </h4>
                  <div className="skill-tags">
                    <span className="skill-tag">
                      <FaFigma /> Figma
                    </span>
                    <span className="skill-tag">
                      <SiAdobephotoshop /> Photoshop
                    </span>
                    <span className="skill-tag">
                      <SiAdobeillustrator /> Illustrator
                    </span>
                    <span className="skill-tag">
                      <SiCanva /> Canva
                    </span>
                    <span className="skill-tag">
                      <MdOutlineDesignServices /> Wireframing
                    </span>
                    <span className="skill-tag">
                      <FaDraftingCompass /> Prototyping
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="skill-category wow fadeInUp delay-0-2s">
                  <h4>
                    <i className="ri-database-2-line"></i>
                    Databases
                  </h4>
                  <div className="skill-tags">
                    <span className="skill-tag">
                      <SiMysql /> MySQL
                    </span>
                    <span className="skill-tag">
                      <SiPostgresql /> PostgreSQL
                    </span>
                    <span className="skill-tag">
                      <SiMongodb /> MongoDB
                    </span>
                    <span className="skill-tag">
                      <SiFirebase /> Firebase
                    </span>
                  </div>
                </div>

                <div className="skill-category wow fadeInUp delay-0-3s">
                  <h4>
                    <i className="ri-server-line"></i>
                    DevOps & Tools
                  </h4>
                  <div className="skill-tags">
                    <span className="skill-tag">
                      <FaGitAlt /> Git
                    </span>
                    <span className="skill-tag">
                      <FaDocker /> Docker
                    </span>
                    <span className="skill-tag">
                      <FaLinux /> Linux
                    </span>
                    <span className="skill-tag">
                      <FaAws /> AWS
                    </span>
                    <span className="skill-tag">
                      <SiVercel /> Vercel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* / END SKILLS DESIGN AREA */}

      {/* START TESTIMONIALS DESIGN AREA */}
      <section className="testimonials-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>Testimonials</p>
                  <h2>What clients say!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="testimonials-wrap">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    className="testimonials-swiper"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                      <SwiperSlide key={num}>
                        <div className="testimonial-item wow fadeInUp delay-0-3s">
                          <div className="testimonial-image">
                            <img
                              src={`/assets/images/testimonials/review${num}.png?v=2`}
                              alt={`Client Review ${num}`}
                              style={{ width: "100%", borderRadius: "10px" }}
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
    </div>
  );
};

export default AboutPage;
