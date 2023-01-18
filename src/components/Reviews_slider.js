import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Axios from "axios";

import React, { Component, useEffect } from "react";
import Slider from "react-slick";

import { useState } from "react";
import what_we_do1 from "./images/what_we_do1.jpg";
import profile_review from "./images/profile_review.png";
import star from "./images/star.png";
import { API } from "./Constant";

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
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [dbReview, setDbReview] = useState([]);
  useEffect(() => {
    const getReview = () => {
      Axios.get(`${API}/review`).then((response) => {
        setDbReview(response.data);
        console.log(response.data);
      });
    };
    getReview();
  }, []);

  return (
    <div className="">
      <Slider {...settings}>
        {dbReview.map((val, key) => {
          return (
            <>
              <div className="p-6 bg-[#0d0f33] rounded-[2px] min-w-[250px] text-center m-5">
                <div className="w-[100px] h-[100px] m-auto">
                  <img
                    src={profile_review}
                    alt="some desc"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="font-semibold text-[18px] leading-[30px] text-white mt-5 italic">
                  {val.name}
                </p>
                <p className="font-semibold text-[20px] leading-[26px] text-[#fb3b3c] mt-5">
                  {val.review}
                </p>
                {
                  // code to display star rating by number of stars
                  val.rating === 1 ? (
                    <div className="flex justify-center mt-5">
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                    </div>
                  ) : val.rating === 2 ? (
                    <div className="flex justify-center mt-5">
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                    </div>
                  ) : val.rating === 3 ? (
                    <div className="flex justify-center mt-5">
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                    </div>
                  ) : val.rating === 4 ? (
                    <div className="flex justify-center mt-5">
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                    </div>
                  ) : val.rating === 5 ? (
                    <div className="flex justify-center mt-5">
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                      <img src={star} alt className="w-[20px] h-[20px] mr-[10px]" />
                    </div>
                  ) : null
                }
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Responsive;
