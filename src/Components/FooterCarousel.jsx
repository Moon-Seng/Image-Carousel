import React, { useState } from "react";
import Slider from "react-slick";
import FooterCarouselStyle from "../Styles/FooterCarousel.module.sass";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

//Import Image
import Img1 from "../Images/01.jpg";
import Img2 from "../Images/02.jpg";
import Img3 from "../Images/03.jpg";
import Img4 from "../Images/04.jpg";
import Img5 from "../Images/05.jpg";
import Img6 from "../Images/06.jpg";
import Img7 from "../Images/07.jpg";
import Img8 from "../Images/08.jpg";
import Img9 from "../Images/09.jpg";
import Img10 from "../Images/10.jpg";

//Create image arrays for looping
let Images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

// Setting and Responsive for Slider
export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [toggleArrow, SetToggleArrow] = useState(Boolean);

  // Custom Arrow
  function SampleNextArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.nextArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        } `}
      >
        <MdOutlineKeyboardArrowRight
          onClick={onClick}
        ></MdOutlineKeyboardArrowRight>
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div
        onMouseEnter={() => SetToggleArrow(true)}
        onMouseLeave={() => SetToggleArrow(false)}
        className={`${FooterCarouselStyle.prevArrow} ${
          toggleArrow ? "" : FooterCarouselStyle.hidden
        }`}
      >
        <MdOutlineKeyboardArrowLeft
          onClick={onClick}
        ></MdOutlineKeyboardArrowLeft>
      </div>
    );
  }

  return (
    <div>
      <h2 className={FooterCarouselStyle.greet}>
        Hey Guys! This is my React Footer Carousel
      </h2>

      <div className={FooterCarouselStyle.slider}>
        <Slider {...settings} className={FooterCarouselStyle.carouselBox}>
          {/* The UI */}
          {Images.map((image) => (
            <div key={image} className={FooterCarouselStyle.imgDiv}>
              <img
                className={FooterCarouselStyle.carouselImg}
                onMouseEnter={() => SetToggleArrow(true)}
                onMouseLeave={() => SetToggleArrow(false)}
                src={image}
                alt=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
