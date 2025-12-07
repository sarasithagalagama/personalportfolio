import React, { useState } from "react";
import SectionTitle from "../common/SectionTitle";
import GalleryItem from "../common/GalleryItem";
import { portfolioItems } from "../../data/portfolioData";

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    // Simple lightbox - you can enhance this with PhotoSwipe later
    setSelectedItem(item);
  };

  return (
    <section id="portfolio" className="inner inner-first portfolio">
      <SectionTitle
        subtitle="Portfolio"
        title="Check out my featured projects"
      />

      {/* Works Gallery */}
      <div className="content__block grid-block">
        <div className="container-fluid px-0 inner__gallery">
          <div
            className="row gx-0 my-gallery"
            itemScope
            itemType="http://schema.org/ImageGallery"
          >
            {portfolioItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={handleItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
