import { useState } from "react";
import {useParams } from "react-router-dom";
import Location from "../datas/logements.json";

import leftArrow from "../assets/arrowLeft.svg";
import rightArrow from "../assets/arrowRight.svg";

function Slideshow() {

  const { locationId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const pict = Location.map((location) => {
    if((location.id === locationId )){
      return location.pictures;
    } else{ return []}   
  });
  const pictures = pict.find((pic) => pic.length !== 0)
  const lengthPic = pictures.length

  const nextIndex = () => {
    if (currentIndex === lengthPic - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const PreviousIndex = () => {
    if (currentIndex === 0) {
      setCurrentIndex(lengthPic - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slidershow">
      {pictures.map((picture, index) => {
        return (
          <div key={index}
            className={ index === currentIndex
                ? "slide slidershow__active"
                : "slide slidershow__inactive"
            }
          >
          {index === currentIndex && (
            <img src={picture} alt="" className="slidershow__picture" />

          )}
          </div>
          
        );

      })}

      {
        (lengthPic !== 1) ? (

          <>
          <div className="slidershow__previous" onClick={PreviousIndex}>
            <img src={leftArrow} alt="" className="slidershow__leftArrow-icon" />
          </div>
          <div className="slidershow__next" onClick={nextIndex}>
            <img src={rightArrow} alt="" className="slidershow__rightArrow-icon" />
          </div>
          {pictures.map((picture, index) => {
            return(
            <div key={index} className="slidershow__counter">
              {index === currentIndex && ((index+1) + " / " + lengthPic)}
            </div>
            );})
          }
          </>
   
        ): null
      }
      </div>
  )


}

export default Slideshow;