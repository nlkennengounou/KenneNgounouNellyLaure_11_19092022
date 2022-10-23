import React from "react";

function LocationCard ({ image, title }) {
  return (
    <div className="location">
      <img src={image} alt="" className="location__img" />
      <div className="location__overlay"></div>
      <h2 className="location__title">{title}</h2>
    </div>
  );
};

export default LocationCard;