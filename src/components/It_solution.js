// import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import collage11 from "./images/collage11.jpg";
import collage12 from "./images/collage12.jpg";
import collage13 from "./images/collage13.jpg";

import what_we_do1 from "./images/what_we_do1.jpg";
import what_we_do2 from "./images/what_we_do2.jpg";

import raqsi1 from "./images/raqsi1.png";
import raqsi2 from "./images/raqsi2.png";
import raqsi3 from "./images/raqsi3.png";
import raqsi4 from "./images/raqsi4.png";
import raqsi5 from "./images/raqsi5.png";
import raqsi6 from "./images/raqsi6.png";
import raqsi7 from "./images/raqsi7.png";
import raqsi8 from "./images/raqsi8.png";

import blog_list1 from "./images/blog_list1.jpg";
import blog_list2 from "./images/blog_list2.jpg";
import blog_list3 from "./images/blog_list3.jpg";

import rishu_singh from "./images/rishu_singh.jpeg";
import harsh_singh from "./images/harsh_singh.jpeg";

import it_solution_history_bg from "./images/it_solution_history_bg.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

function It_solution() {
  return (
    <div>
        <div><Header/></div>
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">It Solution</h1>
                  <div className="flex_ic font-bold text-[15px] leading-[26px]">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-house-door hover:fill-[#fb3b3c]" viewBox="0 0 16 16">
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
                      <a href="/">&nbsp;It Solution</a>
                    </div>
                  </div>
              </div>
            </div>
            <>
  
  {/* What We Offer */}
  <div className="flex_jc px-4">
    <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]">
      <div className="font-nunito font-semibold lg:m-auto lg:w-[60%] p-12 bg-white text-center">
        <p className="text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
          WHAT WE OFFER
        </p>
        <p className="text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-2">
        Not only we create a website and app's but also, we build a good relationship with our clients.
          {/* <b className="text-[#0049d0] underline">IT Services</b> */}
        </p>
      </div>
      <div className="lg:flex">
        <div className="sm:flex lg:w-1/2">
          <div className="what_we_offer sm:w-1/2 hover:bg-white hover:shadow-md p-6 m-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <div className="w-[160px] h-[80px] flex relative left-[-80px] slide_over">
                <div className="w-[80px] h-[80px] bg-[#fb3b3c]" />
                <div className="w-[80px] h-[80px]" />
              </div>
              <div className="w-[80px] h-[80px] relative top-[-80px] flex_jc_ic bg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-lightbulb fill-[#0049d0] slide_over_svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[26px] text-[#0d2c13] mb-[10px]">
              IT Design
            </h1>
            <p className="font-semibold text-[15px] leading-[26px] text-[#7a7a7a]">
              Our firm is expert to create an efficient user interface that.
            </p>
          </div>
          <div className="what_we_offer sm:w-1/2 hover:bg-white hover:shadow-md p-6 m-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <div className="w-[160px] h-[80px] flex relative left-[-80px] slide_over">
                <div className="w-[80px] h-[80px] bg-[#fb3b3c]" />
                <div className="w-[80px] h-[80px]" />
              </div>
              <div className="w-[80px] h-[80px] relative top-[-80px] flex_jc_ic bg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-shield fill-[#0049d0] slide_over_svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                </svg>
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[26px] text-[#0d2c13] mb-[10px]">
              Data Security
            </h1>
            <p className="font-semibold text-[15px] leading-[26px] text-[#7a7a7a]">
              Our firm is expert to create an efficient user interface that.
            </p>
          </div>
        </div>
        <div className="sm:flex lg:w-1/2">
          <div className="what_we_offer sm:w-1/2 hover:bg-white hover:shadow-md p-6 m-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <div className="w-[160px] h-[80px] flex relative left-[-80px] slide_over">
                <div className="w-[80px] h-[80px] bg-[#fb3b3c]" />
                <div className="w-[80px] h-[80px]" />
              </div>
              <div className="w-[80px] h-[80px] relative top-[-80px] flex_jc_ic bg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-lightbulb fill-[#0049d0] slide_over_svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[26px] text-[#0d2c13] mb-[10px]">
              Data Security
            </h1>
            <p className="font-semibold text-[15px] leading-[26px] text-[#7a7a7a]">
              Our firm is expert to create an efficient user interface that.
            </p>
          </div>
          <div className="what_we_offer sm:w-1/2 hover:bg-white hover:shadow-md p-6 m-2">
            <div className="w-[80px] h-[80px] overflow-hidden">
              <div className="w-[160px] h-[80px] flex relative left-[-80px] slide_over">
                <div className="w-[80px] h-[80px] bg-[#fb3b3c]" />
                <div className="w-[80px] h-[80px]" />
              </div>
              <div className="w-[80px] h-[80px] relative top-[-80px] flex_jc_ic bg-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-lightbulb fill-[#0049d0] slide_over_svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                </svg>
              </div>
            </div>
            <h1 className="font-semibold text-[20px] leading-[26px] text-[#0d2c13] mb-[10px]">
              Digital Services
            </h1>
            <p className="font-semibold text-[15px] leading-[26px] text-[#7a7a7a]">
              Our firm is expert to create an efficient user interface that.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <>
  {/* history */}
  <div className="flex_jc px-3 py-[60px]">
    <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] lg:flex">
      <div className="w-full lg:hidden h-[500px]" style={{backgroundImage:`url(${it_solution_history_bg})`}}>
        <div className="bg-white p-[30px] w-[50%] rounded-md shadow-xl float-right relative top-[100px] ">
          <div className="p-2">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-calculator fill-[#0049d0]"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                </svg>
              </div>
              <div className="bg-[#0049d0] opacity-10 w-[30px] h-[30px] rounded-full relative top-[-40px] left-[-8px] animate-bounce_left" />
            </div>
            <p className="text-[40px] leading-1 text-[#0d2c13]">200+</p>
            <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
              Finished Projects
            </p>
          </div>
          <div className="p-2">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-file-earmark fill-[#0049d0]"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </div>
              <div className="bg-[#0049d0] opacity-10 w-[30px] h-[30px] rounded-full relative top-[-40px] left-[-8px] animate-bounce_left" />
            </div>
            <p className="text-[40px] leading-1 text-[#0d2c13]">200+</p>
            <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full lg:w-[55%] mt-[100px] lg:mt-0">
        <p className="text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
          HISTORY
        </p>
        <h1 className="text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-2">
          Specialist{" "}
          <b className="font-black text-[#0049d0] underline">Web & App Development</b>{" "}
          with 6 years of experience
        </h1>
        <p className="font-normal text-[16px] leading-[27px] text-[#7a7a7a] mt-4">
        We have to a tendency to believe that , the smart looking website is the effictive first impression for both user's as well as admin. Consequently , we are able to provide your dream website with low cost and high efficiency.
        </p>
        <div className="mt-[40px]">
          <ul className="flex w-full text-center font-semibold text-[15px] leading-[26px] text-[#0d2c13]">
            <li className="history_li w-1/3 border border-b-2 border-b-[#0049d0] py-3 text-[#0049d0] hover:border-b-2 hover:border-b-[#0049d0] hover:text-[#0049d0]" onClick={function(){
              var history_li = document.getElementsByClassName("history_li");
              var history_div =document.getElementsByClassName("history_div");
          
                history_div[0].style.display = "block";
                history_div[1].style.display = "none";
                history_div[2].style.display = "none";
                history_li[0].style.border = "1px solid #e6e8ec";
                history_li[0].style.borderBottom = "2px solid #0049d0";
                history_li[1].style.border = "none";
                history_li[1].style.borderBottom = "1px solid #e6e8ec";
                history_li[2].style.border = "none";
                history_li[2].style.borderBottom = "1px solid #e6e8ec";
            }}>
              Our Mission
            </li>
            <li className="history_li w-1/3 hover:border  border-b py-3 hover:border-b-2 hover:border-b-[#0049d0] hover:text-[#0049d0]"
            onClick={function(){
              var history_li = document.getElementsByClassName("history_li");
              var history_div =document.getElementsByClassName("history_div");
          
              history_div[0].style.display = "none";
              history_div[1].style.display = "block";
              history_div[2].style.display = "none";
              history_li[0].style.border = "none";
              history_li[0].style.borderBottom = "1px solid #e6e8ec";
              history_li[1].style.border = "1px solid #e6e8ec";
              history_li[1].style.borderBottom = "2px solid #0049d0";
              history_li[2].style.border = "none";
              history_li[2].style.borderBottom = "1px solid #e6e8ec";
            }}>
              Services
            </li>
            <li className="history_li w-1/3 border-b hover:border py-3 hover:border-b-2 hover:border-b-[#0049d0] hover:text-[#0049d0]"
            onClick={function(){
              var history_li = document.getElementsByClassName("history_li");
              var history_div =document.getElementsByClassName("history_div");
          
              history_div[0].style.display = "none";
              history_div[1].style.display = "none";
              history_div[2].style.display = "block";
              history_li[0].style.border = "none";
              history_li[0].style.borderBottom = "1px solid #e6e8ec";
              history_li[1].style.border = "none";
              history_li[1].style.borderBottom = "1px solid #e6e8ec";
              history_li[2].style.border = "1px solid #e6e8ec";
              history_li[2].style.borderBottom = "2px solid #0049d0";
            }}>
              History
            </li>
          </ul>
          <div className="history_div">
            <p className="font-bold text-[16px] leading-[30px] text-black mt-[20px]">
              We are fastest growing digital agency that with strong business
              idea and ethics. Check our info with some awesome numbers.
            </p>
            <p className="font-bold text-[15px] leading-[26px] text-[#7a7a7a] mt-[10px]">
              Fastest Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="history_div hidden">
            <p className="font-bold text-[16px] leading-[30px] text-black mt-[20px]">
              Creative ideas base variations ohf passages of sorem gpsum ilable,
              but the majority have suffered alteration in some form, by ected.
            </p>
            <p className="font-bold text-[15px] leading-[26px] text-[#7a7a7a] mt-[10px]">
              Our Professional Services voluptatem quia voluptas sit aspernatur
              aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi nesciunt.
            </p>
          </div>
          <div className="history_div hidden">
            <p className="font-bold text-[16px] leading-[30px] text-black mt-[20px]">
              You can’t succeed if you just do what others do and follow the
              well-worn path. You need to create a new and original path for
              yourself.
            </p>
            <p className="font-bold text-[15px] leading-[26px] text-[#7a7a7a] mt-[10px]">
              We help to groom your Business voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:w-[45%] lg:block" style={{background:`url(${it_solution_history_bg})`}}>
        <div className="bg-white p-[30px] w-[50%] rounded-md shadow-xl float-right relative top-[100px] left-[50px]">
          <div className="p-2">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-calculator fill-[#0049d0]"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                </svg>
              </div>
              <div className="bg-[#0049d0] opacity-10 w-[30px] h-[30px] rounded-full relative top-[-40px] left-[-8px] animate-bounce_left" />
            </div>
            <p className="text-[40px] leading-1 text-[#0d2c13]">200+</p>
            <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
              Finished Projects
            </p>
          </div>
          <div className="p-2">
            <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  fill="currentColor"
                  className="bi bi-file-earmark fill-[#0049d0]"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                </svg>
              </div>
              <div className="bg-[#0049d0] opacity-10 w-[30px] h-[30px] rounded-full relative top-[-40px] left-[-8px] animate-bounce_left" />
            </div>
            <p className="text-[40px] leading-1 text-[#0d2c13]">200+</p>
            <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* What we Do */}
 <div className="w-full relative">
    <div className="w-full lg:flex items-stretch py-[80px]">
      <div className="w-full h-full lg:w-1/2">
        <div className="px-3 m-auto sm:w-[500px] md:w-[700px] lg:w-[450px] xl:w-[550px] lg:float-right lg:pr-[50px]">
          <p className="font-semibold text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
            WHAT WE DO
          </p>
          <p className="font-semibold text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-1">
          We assists you to grow your Business with our IT Solutions & Services
            {/* <b className="text-[#0049d0] underline">Exponentially</b> */}
          </p>
          <p className="font-normal text-[16px] leading-[27px] text-[#7a7a7a] mt-3">
          We are a team of professionals with a wide range of skills and experience in plethora of programming languages and latest frameworks. Nowaday's , there are various technologies available in the market. We are here to help you to choose the right technology for your business. Which will be definitely proove to be worthwhile for your business.
          </p>
          <div className=" mt-12">
            <div className="flex items-center h-[50px] w-full">
              <div className="font-semibold text-[16px] leading-[34px] text-[#0d2c13] w-[150px]">
                Business
              </div>
              <div className="w-full h-[4px]">
                <div className="h-[4px] w-[85%] bg-[#0049d0]" />
              </div>
              <div className="w-[50px] text-[#fb3b3c]">85%</div>
            </div>
            <div className="flex items-center h-[50px] w-full">
              <div className="font-semibold text-[16px] leading-[34px] text-[#0d2c13] w-[150px]">
                Design
              </div>
              <div className="w-full h-[4px]">
                <div className="h-[4px] w-[75%] bg-[#0049d0]" />
              </div>
              <div className="w-[50px] text-[#fb3b3c]">75%</div>
            </div>
            <div className="flex items-center h-[50px] w-full">
              <div className="font-semibold text-[16px] leading-[34px] text-[#0d2c13] w-[150px]">
                Developing
              </div>
              <div className="w-full h-[4px]">
                <div className="h-[4px] w-[95%] bg-[#0049d0]" />
              </div>
              <div className="w-[50px] text-[#fb3b3c]">95%</div>
            </div>
            <div className="flex items-center h-[50px] w-full">
              <div className="font-semibold text-[16px] leading-[34px] text-[#0d2c13] w-[150px]">
                Consultancy
              </div>
              <div className="w-full h-[4px]">
                <div className="h-[4px] w-[80%] bg-[#0049d0]" />
              </div>
              <div className="w-[50px] text-[#fb3b3c]">80%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#0d0f33] lg:min-h-full lg:w-1/2">
        <div className="sm:w-[500px] md:w-[700px] lg:w-[450px] xl:w-[550px]">
          
          <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
              <div className="p-[40px] lg:pl-[40px] w-full">
                <div className="h-[100px] w-[100px]">
                  <img
                    src={harsh_singh}
                    alt="some desc"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="font-semibold text-[18px] leading-[30px] text-white mt-[40px] italic">
                  "On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment looked up one of the more obscure
                  Latin words"
                </p>
                <p className="font-semibold text-[20px] leading-[26px] text-[#fb3b3c] mt-[30px]">
                  Harsh Singh
                </p>
                <p className="font-semibold text-[14px] leading-[26px] text-white italic">
                  -Founder
                </p>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="p-[40px] lg:pl-[40px]">
                <div className="h-[100px] w-[100px]">
                  <img
                    src={rishu_singh}
                    alt="some desc"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="font-semibold text-[18px] leading-[30px] text-white mt-[40px] italic">
                  "On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment looked up one of the more obscure
                  Latin words"
                </p>
                <p className="font-semibold text-[20px] leading-[26px] text-[#fb3b3c] mt-[30px]">
                  Rishu Singh
                </p>
                <p className="font-semibold text-[14px] leading-[26px] text-white italic">
                  -Founder
                </p>
              </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  {/* Plans */}
  {/* <div className="bg-[#fdfdfd] flex_jc">
    <div className="py-[70px] lg:flex w-full p-3 sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]">
      <div className="lg:w-1/3 bg-white shadow-lg px-6 py-10 m-4">
        <p className="font-semibold text-[24px] leading-[24px] bg-[#fc7576] text-white py-[10px] px-5 rounded-xl w-[85px]">
          Free
        </p>
        <h1 className="font-semibold text-[24px] leading-[34px] text-[#0d2c13] my-[25px]">
          Basic
        </h1>
        <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mb-[25px]">
          All the basic for all business source that are just getting started.
        </p>
        <ul>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              15 Analytics Compaign
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              Unlimited Site licenses
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              1 Database
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              10 Free Optimization
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              24/7 Customer Support
            </p>
          </li>
        </ul>
        <div className="flex w-full h-[57px] border border-[#0d2c13] hover:border-[#0049d0] hover:bg-[#0049d0] blinkdiv cursor-pointer text-[#212529] hover:text-white mt-[40px]"
        onMouseOver={function(){
          document.getElementsByClassName("blink")[1].style.width= "32px";
          document.getElementsByClassName("blink")[1].style.transition = "0.4s";
        }} 
        onMouseOut={function(){
          document.getElementsByClassName("blink")[1].style.width= "0px";
          document.getElementsByClassName("blink")[1].style.transition = "0.4s";
        }}>
          <div className="h-[55px] w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
            <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
          </div>
          <div className="h-[55px] w-full flex items-center justify-center">
            <div className="font-nunito font-bold text-[16px]  ">
              Purchase Now
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 bg-white shadow-lg px-6 py-10 m-4">
        <p className="font-semibold text-[24px] leading-[24px] bg-[#fc7576] text-white py-[10px] px-5 rounded-xl w-[125px]">
          $29/mo
        </p>
        <h1 className="font-semibold text-[24px] leading-[34px] text-[#0d2c13] my-[25px]">
          Standard
        </h1>
        <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mb-[25px]">
          All the basic for all business source that are just getting started.
        </p>
        <ul>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              15 Analytics Compaign
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              Unlimited Site licenses
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              1 Database
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              10 Free Optimization
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              24/7 Customer Support
            </p>
          </li>
        </ul>
        <div className="flex w-full h-[57px] border border-[#0d2c13] hover:border-[#0049d0] hover:bg-[#0049d0] blinkdiv cursor-pointer text-[#212529] hover:text-white mt-[40px]" 
        onMouseOver={function(){
          document.getElementsByClassName("blink")[2].style.width= "32px";
          document.getElementsByClassName("blink")[2].style.transition = "0.4s";
        }} 
        onMouseOut={function(){
          document.getElementsByClassName("blink")[2].style.width= "0px";
          document.getElementsByClassName("blink")[2].style.transition = "0.4s";
        }}>
          <div className="h-[55px] w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
            <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
          </div>
          <div className="h-[55px] w-full flex items-center justify-center">
            <div className="font-nunito font-bold text-[16px]  ">
              Purchase Now
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 bg-white shadow-lg px-6 py-10 m-4">
        <p className="font-semibold text-[24px] leading-[24px] bg-[#fc7576] text-white py-[10px] px-5 rounded-xl w-[125px]">
          $99/mo
        </p>
        <h1 className="font-semibold text-[24px] leading-[34px] text-[#0d2c13] my-[25px]">
          Premium
        </h1>
        <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mb-[25px]">
          All the basic for all business source that are just getting started.
        </p>
        <ul>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              15 Analytics Compaign
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              Unlimited Site licenses
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              1 Database
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              10 Free Optimization
            </p>
          </li>
          <li className="flex mb-[10px]">
            <div className="w-[24px] h-[24px] rounded-full bg-[#ffebeb] flex_jc_ic mr-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
            </div>
            <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">
              24/7 Customer Support
            </p>
          </li>
        </ul>
        <div className="flex w-full h-[57px] border border-[#0d2c13] hover:border-[#0049d0] hover:bg-[#0049d0] blinkdiv cursor-pointer text-[#212529] hover:text-white mt-[40px]"
        onMouseOver={function(){
          document.getElementsByClassName("blink")[3].style.width= "32px";
          document.getElementsByClassName("blink")[3].style.transition = "0.4s";
        }} 
        onMouseOut={function(){
          document.getElementsByClassName("blink")[3].style.width= "0px";
          document.getElementsByClassName("blink")[3].style.transition = "0.4s";
        }}>
          <div className="h-[55px] w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
            <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
          </div>
          <div className="h-[55px] w-full flex items-center justify-center">
            <div className="font-nunito font-bold text-[16px]  ">
              Purchase Now
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</>

</>

        </div>
        <div><Footer/></div>
    </div>
  );
}
export default It_solution;

