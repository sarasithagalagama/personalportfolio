import React from "react";
import { blogArticles } from "../../data";

const Blog = () => {
  return (
    <section id="blog" className="inner blog">
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
          <span>Blog</span>
        </p>
        <h2 className="h2__title animate-in-up">Latest Articles</h2>
        <p className="h2__text animate-in-up">
          Thoughts, tutorials, and insights on web development, design, and
          technology.
        </p>
      </div>

      <div className="content__block grid-block">
        <div className="container-fluid p-0">
          <div className="row g-4">
            {blogArticles.map((article) => (
              <div key={article.id} className="col-12 col-md-6 animate-card-2">
                <a
                  href={article.link}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      background: "var(--base-tint)",
                      borderRadius: "var(--_radius-m)",
                      border: "1px solid var(--stroke-elements)",
                      overflow: "hidden",
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
                        width: "100%",
                        height: "200px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div style={{ padding: "2rem" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.875rem",
                            padding: "0.25rem 0.75rem",
                            background: "var(--accent-color)",
                            color: "var(--base-color)",
                            borderRadius: "var(--_radius-s)",
                            fontWeight: "500",
                          }}
                        >
                          {article.category}
                        </span>
                        <span
                          style={{
                            fontSize: "0.875rem",
                            opacity: 0.6,
                          }}
                        >
                          {article.date}
                        </span>
                        <span
                          style={{
                            fontSize: "0.875rem",
                            opacity: 0.6,
                          }}
                        >
                          • {article.readTime}
                        </span>
                      </div>
                      <h4
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "600",
                          marginBottom: "0.75rem",
                          color: "var(--text-color)",
                          lineHeight: "1.4",
                        }}
                      >
                        {article.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                          opacity: 0.75,
                          marginBottom: "1rem",
                        }}
                      >
                        {article.excerpt}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.5rem",
                        }}
                      >
                        {article.tags.map((tag, index) => (
                          <span
                            key={index}
                            style={{
                              fontSize: "0.8125rem",
                              padding: "0.25rem 0.75rem",
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid var(--stroke-elements)",
                              borderRadius: "var(--_radius-s)",
                              opacity: 0.7,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Blog;
