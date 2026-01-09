import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const SingleProjectPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container pt-100 pb-100 text-center">
        <h2>Project Not Found</h2>
        <Link to="/works" className="theme-btn mt-20">
          Back to Works
        </Link>
      </div>
    );
  }

  // Find next project index to cycle through
  const currentIndex = projectsData.findIndex((p) => p.id === id);
  const nextProjectIndex = (currentIndex + 1) % projectsData.length;
  const nextProject = projectsData[nextProjectIndex];

  return (
    <>
      {/* 1. SPLIT HERO SECTION */}
      <section className="single-project-hero-area innerpage-single-area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row align-items-center">
                {/* Left Content */}
                <div className="col-lg-6">
                  <div className="project-hero-content wow fadeInUp delay-0-2s">
                    <span
                      className="sub-title mb-15"
                      style={{
                        color: "var(--primary-color)",
                        fontSize: "16px",
                        fontWeight: "600",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                        display: "block",
                      }}
                    >
                      {project.category}
                    </span>
                    <h1
                      className="mb-30"
                      style={{
                        fontSize: "52px",
                        lineHeight: "1.1",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                      }}
                    >
                      {project.title}
                    </h1>
                    <p
                      className="mb-40"
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        color: "var(--subtitle-color)",
                        maxWidth: "90%",
                      }}
                    >
                      {project.description ||
                        `${project.subTitle} - A comprehensive ${project.category} built with modern technologies.`}
                    </p>

                    {/* Project Stats (Mini Grid) */}
                    <div className="project-stats mb-40 d-flex gap-5">
                      <div>
                        <span
                          className="d-block text-uppercase"
                          style={{
                            fontSize: "12px",
                            letterSpacing: "1px",
                            color: "gray",
                          }}
                        >
                          Client
                        </span>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          {project.client}
                        </span>
                      </div>
                      <div>
                        <span
                          className="d-block text-uppercase"
                          style={{
                            fontSize: "12px",
                            letterSpacing: "1px",
                            color: "gray",
                          }}
                        >
                          Duration
                        </span>
                        <span style={{ fontWeight: "600", color: "#fff" }}>
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="project-btns d-flex gap-3">
                      {project.preview && (
                        <a
                          href={project.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn"
                        >
                          Live Preview <i className="ri-external-link-line"></i>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-btn"
                        >
                          GitHub Repo <i className="ri-github-fill"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="col-lg-6">
                  <div className="project-hero-image wow fadeInUp delay-0-4s mt-50 mt-lg-0">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="img-fluid rounded-4"
                      style={{
                        boxShadow: "-20px 20px 50px rgba(0,0,0,0.5)",
                        border: "1px solid var(--border-color)",
                        transform: "perspective(1000px) rotateY(-5deg)",
                        transition: "transform 0.5s ease",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(0deg)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform =
                          "perspective(1000px) rotateY(-5deg)")
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="single-project-content-area pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {/* Tech Stack Bar */}
              {/* Tech Stack Bar (Conditional) */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="tech-stack-bar mb-80 p-4 border border-dark rounded-3 bg-dark bg-opacity-10 wow fadeInUp delay-0-2s">
                  <h6
                    className="text-center mb-3 text-uppercase text-muted"
                    style={{ fontSize: "12px", letterSpacing: "2px" }}
                  >
                    Tools & Technologies
                  </h6>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="badge bg-transparent border border-secondary text-light px-3 py-2 fw-normal"
                        style={{ fontSize: "14px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dynamic Sections */}
              <div className="project-details-content wow fadeInUp delay-0-3s">
                {project.projectSections.map((section, index) => (
                  <div key={index} className="section-block mb-60">
                    <h3
                      className="mb-30"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "10px",
                        }}
                      >
                        #
                      </span>
                      {section.title}
                    </h3>

                    <div
                      className="section-body pl-20"
                      style={{
                        borderLeft: "1px solid rgba(255,255,255,0.1)",
                        paddingLeft: "30px",
                      }}
                    >
                      {Array.isArray(section.content) ? (
                        section.content.map((block, bIndex) => {
                          if (
                            typeof block === "string" ||
                            block.type === "paragraph"
                          ) {
                            return (
                              <p
                                key={bIndex}
                                className="mb-20"
                                style={{
                                  fontSize: "18px",
                                  lineHeight: "1.8",
                                  color: "#a0a0a0",
                                }}
                              >
                                {block.text || block}
                              </p>
                            );
                          }
                          if (block.type === "blockquote") {
                            return (
                              <blockquote
                                key={bIndex}
                                className="p-4 my-4 rounded"
                                style={{
                                  background:
                                    "linear-gradient(90deg, rgba(var(--primary-rgb), 0.1) 0%, transparent 100%)", // approximate gradient
                                  borderLeft: "4px solid var(--primary-color)",
                                }}
                              >
                                <p
                                  className="mb-0 fst-italic text-light"
                                  style={{ fontSize: "18px" }}
                                >
                                  "{block.text}"
                                </p>
                              </blockquote>
                            );
                          }
                          if (block.type === "list") {
                            return (
                              <ul key={bIndex} className="list-unstyled mb-30">
                                {block.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="mb-15 d-flex align-items-start"
                                    style={{ fontSize: "18px", color: "#ccc" }}
                                  >
                                    <i
                                      className="ri-arrow-right-s-line me-2"
                                      style={{
                                        color: "var(--primary-color)",
                                        marginTop: "3px",
                                      }}
                                    ></i>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            );
                          }
                          if (block.type === "code") {
                            return (
                              <div
                                key={bIndex}
                                className="code-block p-4 rounded-3 mb-30 bg-black border border-dark"
                              >
                                <pre
                                  className="m-0 text-success text-opacity-75 font-monospace"
                                  style={{ fontSize: "14px" }}
                                >
                                  <code>{block.code}</code>
                                </pre>
                              </div>
                            );
                          }
                          return null;
                        })
                      ) : (
                        <p
                          style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            color: "#a0a0a0",
                          }}
                        >
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Project Gallery */}
                {project.images && project.images.length > 0 && (
                  <div className="project-gallery mb-60 wow fadeInUp delay-0-2s">
                    <h3
                      className="mb-30"
                      style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        color: "var(--heading-color)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-color)",
                          marginRight: "10px",
                        }}
                      >
                        #
                      </span>
                      Project Gallery
                    </h3>
                    <div className="row g-4">
                      {project.images.map((imgSrc, index) => (
                        <div key={index} className="col-md-6">
                          <div className="gallery-item rounded-3 overflow-hidden border border-dark">
                            <img
                              src={imgSrc}
                              alt={`Gallery ${index + 1}`}
                              className="img-fluid d-block mx-auto"
                              style={{
                                transition: "transform 0.5s ease",
                                cursor: "pointer",
                              }}
                              onMouseOver={(e) =>
                                (e.currentTarget.style.transform =
                                  "scale(1.05)")
                              }
                              onMouseOut={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share This Project */}
                <div className="project-share pt-60 border-top border-dark mt-60 wow fadeInUp delay-0-2s">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <span className="text-white fw-bold d-block mb-3 mb-lg-0 text-center text-lg-start">
                        Share This Project :
                      </span>
                    </div>
                    <div className="col-lg-6">
                      <div className="social-style-one d-flex gap-3 justify-content-center justify-content-lg-end">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-facebook-fill"></i>
                        </a>
                        <a
                          href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-twitter-x-line"></i>
                        </a>
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-linkedin-fill"></i>
                        </a>
                        <a
                          href={`https://wa.me/?text=${window.location.href}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            width: "45px",
                            height: "45px",
                            borderRadius: "50%",
                            background: "#111",
                            border: "1px solid #333",
                            color: "#fff",
                          }}
                        >
                          <i className="ri-whatsapp-line"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT NAV */}
      <section className="next-project-area pb-100 text-center">
        <div className="container">
          <hr className="mb-80 opacity-25" />
          <span
            className="sub-title mb-15 d-block"
            style={{ color: "var(--primary-color)" }}
          >
            Next Project
          </span>
          <h2 className="mb-40 text-white">{nextProject.title}</h2>
          <Link to={`/single-project/${nextProject.id}`} className="theme-btn">
            View Case Study <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export default SingleProjectPage;
