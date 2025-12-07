import React from "react";

const GalleryItem = ({ item, onClick }) => {
  return (
    <figure
      className="col-12 col-md-6 gallery__item grid-item animate-card-2"
      itemProp="associatedMedia"
      itemScope
      itemType="http://schema.org/ImageObject"
    >
      <a
        href={item.fullImage}
        data-image={item.image}
        className="gallery__link"
        itemProp="contentUrl"
        data-size="1400x1400"
        onClick={(e) => {
          e.preventDefault();
          onClick(item);
        }}
      >
        <div
          className="picture"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <img
          src={item.image}
          className="gallery__image"
          itemProp="thumbnail"
          alt={item.title}
        />
      </a>
      <figcaption
        className={`gallery__descr ${item.descriptionClass}`}
        itemProp="caption description"
      >
        <h5 className={item.descriptionClass}>{item.title}</h5>
        <div className="card__tags d-flex flex-wrap">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded-tag ${
                item.descriptionClass ? "" : "opposite"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="small">{item.description}</p>
      </figcaption>
    </figure>
  );
};

export default GalleryItem;
