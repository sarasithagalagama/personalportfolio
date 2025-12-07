import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="col-12 col-md-6 cards__item grid-item animate-card-2">
      <div className="cards__card d-flex flex-column">
        <div className="cards__descr">
          <h4
            className="cards__title animate-in-up"
            dangerouslySetInnerHTML={{
              __html: service.title.replace(" ", "<br>"),
            }}
          ></h4>
          <div className="cards__tags d-flex flex-wrap animate-in-up">
            {service.tags.map((tag, index) => (
              <span key={index} className="rounded-tag tag-outline">
                {tag}
              </span>
            ))}
          </div>
          <p className="small cards__text animate-in-up">
            {service.description}
          </p>
        </div>
        <div className="cards__image d-flex animate-in-up">
          <img src={service.image} alt="Service/Feature Image" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
