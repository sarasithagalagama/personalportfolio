import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioItems } from "../data";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = portfolioItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <section className="inner portfolio">
        <div className="content__block">
          <h2>Project not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="btn btn-default btn-hover btn-hover-accent"
          >
            <i className="ph-bold ph-arrow-left"></i>
            <span className="btn-caption">Go Back</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="inner portfolio">
      {/* Back Button */}
      <div className="content__block">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-default btn-hover btn-hover-accent"
          style={{ marginBottom: "2rem" }}
        >
          <i className="ph-bold ph-arrow-left"></i>
          <span className="btn-caption">Back</span>
        </button>
      </div>

      {/* Project Header */}
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
          <span>{project.category}</span>
        </p>
        <h1
          className="h2__title animate-in-up"
          style={{ fontSize: "4rem", marginBottom: "2rem" }}
        >
          {project.title}
        </h1>
        <p className="h2__text animate-in-up" style={{ fontSize: "1.8rem" }}>
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        {project.tags && (
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                style={{
                  padding: "0.8rem 1.5rem",
                  background: "var(--accent)",
                  color: "var(--t-opp-bright)",
                  borderRadius: "0.8rem",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Project Links */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default btn-hover btn-hover-accent"
            >
              <span className="btn-caption">View Live Project</span>
              <i className="ph-bold ph-arrow-square-out"></i>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-default btn-hover btn-hover-accent"
            >
              <i className="ph-bold ph-github-logo"></i>
              <span className="btn-caption">View on GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Project Image */}
      {project.fullImage && (
        <div className="content__block">
          <img
            src={project.fullImage}
            alt={project.title}
            style={{
              width: "100%",
              borderRadius: "1.5rem",
              marginBottom: "4rem",
            }}
          />
        </div>
      )}

      {/* Detailed Description */}
      {project.detailedDescription && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Overview
          </h3>
          <div
            style={{
              fontSize: "1.6rem",
              lineHeight: "1.8",
              color: "var(--t-medium)",
            }}
            dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
          />
        </div>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Features
          </h3>
          <ul
            style={{
              fontSize: "1.6rem",
              lineHeight: "2",
              color: "var(--t-medium)",
              paddingLeft: "2rem",
            }}
          >
            {project.features.map((feature, i) => (
              <li key={i} style={{ marginBottom: "1rem" }}>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tech Stack Details */}
      {project.techStack && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Tech Stack
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {Object.entries(project.techStack).map(
              ([category, technologies]) => (
                <div
                  key={category}
                  style={{
                    background: "var(--bg-card)",
                    padding: "2rem",
                    borderRadius: "1rem",
                    border: "1px solid var(--stroke-elements)",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "1.4rem",
                      marginBottom: "1rem",
                      color: "var(--t-accent)",
                    }}
                  >
                    {category}
                  </h5>
                  <p
                    style={{
                      fontSize: "1.4rem",
                      color: "var(--t-medium)",
                      lineHeight: "1.8",
                    }}
                  >
                    {technologies}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Screenshots
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {project.screenshots.map((screenshot, i) => (
              <img
                key={i}
                src={screenshot}
                alt={`${project.title} screenshot ${i + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "1rem",
                  border: "1px solid var(--stroke-elements)",
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Challenges & Solutions */}
      {project.challenges && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Challenges & Solutions
          </h3>
          <div
            style={{
              fontSize: "1.6rem",
              lineHeight: "1.8",
              color: "var(--t-medium)",
            }}
            dangerouslySetInnerHTML={{ __html: project.challenges }}
          />
        </div>
      )}

      {/* Credits */}
      {project.credits && (
        <div className="content__block block-large">
          <h3 className="h3__title" style={{ marginBottom: "2rem" }}>
            Credits
          </h3>
          <p
            style={{
              fontSize: "1.6rem",
              color: "var(--t-medium)",
              lineHeight: "1.8",
            }}
          >
            {project.credits}
          </p>
        </div>
      )}
    </section>
  );
};

export default ProjectDetail;
