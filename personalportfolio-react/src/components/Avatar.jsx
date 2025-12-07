import React from "react";

const Avatar = () => {
  return (
    <div id="avatar" className="avatar">
      <div className="avatar__container d-flex flex-column justify-content-lg-between">
        {/* Image and Logo */}
        <div className="avatar__block">
          <div className="avatar__logo d-flex align-items-center">
            <div
              className="logo__image"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent) 0%, var(--secondary) 100%)",
                WebkitMaskImage: "url(/img/logo-graph.png)",
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskImage: "url(/img/logo-graph.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                width: "85px",
                height: "85px",
              }}
            ></div>
            <div className="logo__caption" style={{ paddingLeft: "15px" }}>
              <p>
                Sarasitha
                <br />
                Galagama
              </p>
            </div>
          </div>
          <div className="avatar__image">
            <img src="/img/profile.jpg" alt="Sarasitha Galagama" />
          </div>
        </div>

        <div className="avatar__block">
          <h6>
            <small className="top">Specialization:</small>
            Creative Designer
            <br />
            and fullstack developer
          </h6>
        </div>

        <div className="avatar__block">
          <h6>
            <small className="top">Based in:</small>
            Kottawa, Sri Lanka
          </h6>
        </div>

        {/* Socials and CTA Button */}
        <div className="avatar__block">
          <div className="avatar__socials">
            <ul className="socials-square d-flex justify-content-between">
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://linkedin.com/in/sarasitha-galagama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-linkedin-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://github.com/sarasithagalagama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-github-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.instagram.com/sarasitha_galagama/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-instagram-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.behance.net/sarasithagalagama"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-behance-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.fiverr.com/sarasithag"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                >
                  fi
                </a>
              </li>
            </ul>
          </div>
          <div className="avatar__btnholder">
            <a
              className="btn btn-default btn-fullwidth btn-hover btn-hover-accent"
              href="#contact"
            >
              <span className="btn-caption">Let's Work Together!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
