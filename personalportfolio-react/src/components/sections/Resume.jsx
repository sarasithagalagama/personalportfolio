import React from "react";
import SectionTitle from "../common/SectionTitle";
import ToolCard from "../common/ToolCard";
import { education, experience, tools } from "../../data/portfolioData";

const Resume = () => {
  return (
    <section id="resume" className="inner resume">
      {/* Section Title */}
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
          <span>Resume</span>
        </p>
        <h2 className="h2__title animate-in-up">
          Education and practical experience
        </h2>
        <p className="h2__text animate-in-up">
          Be what you would seem to be - or, if you'd like it put more simply -
          never imagine yourself not to be otherwise than what it might appear
          to others that what you were or
          <a href="#0" className="text-link">
            {" "}
            might have been
          </a>{" "}
          was not otherwise than what you had been would have appeared to them
          to be otherwise.
        </p>
      </div>

      {/* Education */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">My education</h3>
        </div>

        <div className="container-fluid p-0 resume-lines">
          {education.map((item) => (
            <div
              key={item.id}
              className="row g-0 resume-lines__item animate-in-up"
            >
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">
                  {item.date}
                </span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">
                  {item.title}
                </h5>
                <p className="resume-lines__source animate-in-up">
                  Course by{" "}
                  <a
                    href={item.sourceLink}
                    className="text-link-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source}
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="content__block block-large">
        <div className="section-h3">
          <h3 className="h3__title animate-in-up">Work experience</h3>
        </div>

        <div className="container-fluid p-0 resume-lines">
          {experience.map((item) => (
            <div
              key={item.id}
              className="row g-0 resume-lines__item animate-in-up"
            >
              <div className="col-12 col-md-2">
                <span className="resume-lines__date animate-in-up">
                  {item.date}
                </span>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="resume-lines__title animate-in-up">
                  {item.title}
                </h5>
                <p className="resume-lines__source animate-in-up">
                  in the{" "}
                  <a
                    href={item.sourceLink}
                    className="text-link-bold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.source}
                  </a>{" "}
                  agency
                </p>
              </div>
              <div className="col-12 col-md-5">
                <p className="small resume-lines__descr animate-in-up">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="content__block">
        <div className="section-h3 section-h3-grid">
          <h3 className="h3__title animate-in-up">My favourite tools</h3>
        </div>
      </div>

      <div className="content__block grid-block block-large">
        <div className="tools-cards d-flex justify-content-start flex-wrap">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* Testimonials Title */}
      <div className="content__block section-title">
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
          <span>Testimonials</span>
        </p>
        <h2 className="h2__title animate-in-up">Clients say about me</h2>
      </div>
    </section>
  );
};

export default Resume;
