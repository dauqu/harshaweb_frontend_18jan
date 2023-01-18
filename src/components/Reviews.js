// import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";
import Reviews_slider from "./Reviews_slider";

import contact_banner from "./images/contact_banner.png";
import { Swiper, SwiperSlide } from "swiper/react";

import what_we_do1 from "./images/what_we_do1.jpg";
import what_we_do2 from "./images/what_we_do2.jpg";

import { useState } from "react";
import Axios from "axios";
import raqsi1 from "./images/raqsi1.png";

import React, { Component } from "react";
import Slider from "react-slick";
import { API } from "./Constant";



// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


function Reviews() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const [dbReview, setDbReview] = useState([]);

  const giveReview = () => {
    Axios.post(`${API}/review`, {
      name: name,
      email: email,
      review: review,
      rating: rating,
    }).then(() => {
      console.log("success");
      window.location.href = "/Reviews";
    });
  };

  const getReview = () => {
    Axios.get(`${API}/review`).then((response) => {
      setDbReview(response.data);
    });
  };
  getReview();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div
          className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]"
          style={{ backgroundImage: `url(${contact_banner})` }}
        >
          <div className="text-center text-white">
            <h1 className="font-bold text-[50px] leading-[60px]">Reviews</h1>
            <div className="flex_ic font-bold text-[15px] leading-[26px]">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-house-door hover:fill-[#fb3b3c]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                </svg>
              </div>
              <div className="hover:text-[#fb3b3c] cursor-pointer">
                <a href="/">&nbsp;Home&nbsp;</a>
              </div>
              <div>
                <a href="/">&nbsp;&gt;&nbsp;</a>
              </div>
              <div className="text-[#fb3b3c] cursor-pointer">
                <a href="/">&nbsp;Reviews</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3">
            <div className="w-full m-auto sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]">
              <div className="w-full text-center sm:w-[450px] m-auto">
                <p className="text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
                  OUR CLIENTS REVIEWS
                </p>
                <p className="text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-2">
                  What Our Clients Have To Say
                </p>
              </div>
              
              <Reviews_slider/>
              
              <div className="max-w-[600px] mx-auto  p-10  rounded-[2px] my-12">
                <h1 className="font-semibold text-[28px] leading-[36px] sm:text-[30px] sm:leading-[46px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">Add a Review</h1>
     
                  <div className="my-2">
                    <input type="text" placeholder="Your Name" className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(event) => {setName(event.target.value);}}/>
                  </div>
                  <div className="my-2">
                    <input type="email" placeholder="Your Email" className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(event) => {setEmail(event.target.value);}}/>
                  </div>
                  <div className="my-2 p-3">
                    <label>Your Rating</label>
                    <div className="flex">
                      <div className="mx-1">
                        <input type="radio" name="rating" value="1" onChange={(event) => {setRating(event.target.value);}}/>
                        <label className="ml-1">1</label>
                      </div>
                      <div className="mx-1">
                        <input type="radio" name="rating" value="2" onChange={(event) => {setRating(event.target.value);}}/>
                        <label className="ml-1">2</label>
                      </div>
                      <div className="mx-1">
                        <input type="radio" name="rating" value="3" onChange={(event) => {setRating(event.target.value);}}/>
                        <label className="ml-1">3</label>
                      </div> 
                      <div className="mx-1">
                        <input type="radio" name="rating" value="4" onChange={(event) => {setRating(event.target.value);}}/>
                        <label className="ml-1">4</label>
                      </div>
                      <div className="mx-1">
                        <input type="radio" name="rating" value="5" onChange={(event) => {setRating(event.target.value);}}/>
                        <label className="ml-1">5</label>
                      </div>
                    </div>
                  </div>
                  <div className="my-2">
                    <textarea name="" id="" cols={30} rows={5} placeholder="Your Review" className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(event) => {setReview(event.target.value);}} />
                  </div>
                  
                  <button onClick={giveReview}>
                    <div className="flex w-[163px] h-[50px] bg-[#0049d0] blinkdiv cursor-pointer text-white" onMouseOver={function () {
                        document.getElementsByClassName("blink")[1].style.width = "32px";
                        document.getElementsByClassName("blink")[1].style.transition = "0.4s";
                      }}
                      onMouseOut={function () {
                        document.getElementsByClassName("blink")[1].style.width = "0px";
                        document.getElementsByClassName("blink")[1].style.transition = "0.4s";
                      }}
                    >
                      <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                        <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
                      </div>
                      <div className="h-full w-full flex items-center justify-center">
                        <div className="font-nunito font-bold text-[16px]">Add Review</div>
                      </div>
                    </div>
                  </button>
            
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default Reviews;
