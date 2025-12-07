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

        {/* Data Caption #1 */}
        <div className="avatar__block">
          <h6>
            <small className="top">Specialization:</small>
            UI/UX designer
            <br />
            and frontend developer
          </h6>
        </div>

        {/* Data Caption #2 */}
        <div className="avatar__block">
          <h6>
            <small className="top">Based in:</small>
            Odesa, Ukraine
          </h6>
        </div>

        {/* Socials and CTA Button */}
        <div className="avatar__block">
          <div className="avatar__socials">
            <ul className="socials-square d-flex justify-content-between">
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://dribbble.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-dribbble-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.behance.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-behance-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-instagram-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.twitch.tv/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-twitch-logo"></i>
                </a>
              </li>
              <li className="socials-square__item">
                <a
                  className="socials-square__link btn"
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph-bold ph-pinterest-logo"></i>
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
