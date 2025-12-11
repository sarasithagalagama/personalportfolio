import React from "react";
import { certifications } from "../../data";

const Certifications = () => {
  return (
    <section id="certifications" className="inner certifications">
      <div className="content__block block-large">
        <p className="h2__subtitle animate-in-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 13 13"
            fill="currentColor"
          >
            <path
              fill="currentColor"
              d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
              C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
              C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"
            />
          </svg>
          <span>Achievements</span>
        </p>
        <h2 className="h2__title animate-in-up">Certifications & Awards</h2>
        <p className="h2__text animate-in-up">
          Professional certifications and achievements that validate my
          expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="col-12 col-md-6 col-lg-4 animate-card-2"
              >
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      background: "var(--base-tint)",
                      borderRadius: "var(--_radius-m)",
                      padding: "2rem",
                      border: "1px solid var(--stroke-elements)",
                      height: "100%",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "var(--_radius-s)",
                        background: `${cert.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <i
                        className={cert.icon}
                        style={{ fontSize: "2rem", color: cert.color }}
                      ></i>
                    </div>
                    <h4
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                        color: "var(--text-color)",
                      }}
                    >
                      {cert.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        opacity: 0.7,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {cert.issuer} • {cert.date}
                    </p>
                    <p
                      style={{
                        fontSize: "0.95rem",
                        lineHeight: "1.6",
                        opacity: 0.8,
                        margin: 0,
                      }}
                    >
                      {cert.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
