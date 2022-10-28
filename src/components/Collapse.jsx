import React, { useState }  from "react";

function Collapse({title, description }) {
  const [isOpen, setIsOpen] = useState(false);


  return !isOpen?
  (
    <div className="collapse">

      <button type="button" className="collapse__button" onClick={() => setIsOpen(true)}>
        {title}
        <p className="collapse__arrow">&lt;</p>
      </button>

      <div className="collapse__description">
        {Array.isArray(description) ? (
          <ul className="collapse__list">
            {description.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{description}</p>
        )}
      </div>
    </div>
  )
  :(
    <div className="collapse">

      <button type="button" className="collapse__button" onClick={() => setIsOpen(false)}>
        {title}
        <p className="collapse__arrow rotate">&lt;</p>
      </button>

      <div className="collapse__description   show">
        {Array.isArray(description) ? (
          <ul className="collapse__list">
            {description.map((equipment, index) => (
              <li key={index} className="collapse__list-element">
                {equipment}
              </li>
            ))}
          </ul>
        ) : (
          <p className="collapse__text">{description}</p>
        )}
      </div>
    </div>

  );
};

export default Collapse;
