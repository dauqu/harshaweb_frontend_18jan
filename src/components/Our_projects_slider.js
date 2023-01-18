import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Axios from "axios";

import React, { Component, useEffect } from "react";
import Slider from "react-slick";

import { useState } from "react";
import what_we_do1 from "./images/what_we_do1.jpg";
import loan_project from "./images/loan_project.png";
import aster from "./images/aster.png";
import cocucoin from "./images/cocucoin.png";

const Responsive = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1256,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className="">
      <Slider {...settings}>
        <div>
            <a href="https://www.my24loan.in">
                <div className="h-[150px] w-[300px] hover:scale-110 hover:transition-all cursor-pointer">
                    <img src={loan_project} alt="w-full" />
                </div>
            </a>
        </div>
        <div>
            <a href="https://www.my24loan.in">
                <div className="h-[150px] w-[300px] hover:scale-110 hover:transition-all cursor-pointer">
                    <img src={aster} alt="w-full" />
                </div>
            </a>
        </div>
        <div>
            <a href="https://cocucoin.com">
                <div className="h-[150px] w-[300px] hover:scale-110 hover:transition-all cursor-pointer">
                    <img src={cocucoin} alt="w-full" />
                </div>
            </a>
        </div>
        <div>
            <a href="https://my24loan.in">
                <div className="h-[150px] w-[300px] hover:scale-110 hover:transition-all cursor-pointer">
                    <img src={loan_project} alt="w-full" />
                </div>
            </a>
        </div>
      </Slider>
    </div>
  );
};

export default Responsive;

