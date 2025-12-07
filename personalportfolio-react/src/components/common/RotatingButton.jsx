import React from "react";

const RotatingButton = () => {
  return (
    <div className="rotating-btn">
      <a href="#portfolio" className="rotating-btn__link slide-down">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 120 120"
          style={{ enableBackground: "new 0 0 120 120" }}
          xmlSpace="preserve"
          className="animate-rotation"
          data-value="360"
        >
          <defs>
            <path
              id="textPath"
              d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"
            />
          </defs>
          <g>
            <use xlinkHref="#textPath" fill="none"></use>
            <text>
              <textPath xlinkHref="#textPath">
                Scroll for More * Scroll for More *{" "}
              </textPath>
            </text>
          </g>
        </svg>
        <i className="ph-bold ph-arrow-down"></i>
      </a>
    </div>
  );
};

export default RotatingButton;
