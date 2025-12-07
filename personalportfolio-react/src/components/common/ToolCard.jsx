import React from "react";

const ToolCard = ({ tool }) => {
  return (
    <div className="tools-cards__item d-flex grid-item-s animate-card-5">
      <div className="tools-cards__card">
        <img
          className="tools-cards__icon animate-in-up"
          src={tool.icon}
          alt={`${tool.name} Icon`}
        />
        <h6 className="tools-cards__caption animate-in-up">{tool.name}</h6>
      </div>
    </div>
  );
};

export default ToolCard;
