import React from "react";

function HomeBanner({ image, title }) {
  return (
    <div className="homeBanner">
      <img src={image} alt="" className="homeBanner__image-cover" />
      <div className="homeBanner__overlay"></div>
      {title ? <h2 className="homeBanner__title">{title}</h2> : null}
    </div>
  );
};

export default HomeBanner;
