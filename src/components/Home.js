import { Link } from "react-router-dom";
// import "./header.css";
import Header_index from "./Header_index";
import Footer from "./Footer";

import { Swiper, SwiperSlide } from 'swiper/react';

import bg1home_banner from "./images/bg1home_banner.jpg";

import play_btn_20 from "./images/play_btn_20.png";
import play_btn_40 from "./images/play_btn_40.png";
import play_btn_60 from "./images/play_btn_60.png";
import play_btn_80 from "./images/play_btn_80.png";
import play_btn_100 from "./images/play_btn_100.png";

import collage11 from "./images/collage11.jpg";
import collage12 from "./images/collage12.jpg";
import collage13 from "./images/collage13.jpg";

import what_we_offer_image from "./images/04.jpg";

import what_we_do1 from "./images/what_we_do1.jpg";
import what_we_do2 from "./images/what_we_do2.jpg";

import our_work1 from "./images/our_work1.jpg";
import our_work2 from "./images/our_work2.jpg";
import our_work3 from "./images/our_work3.jpg";
import our_work4 from "./images/our_work4.jpg";
import our_work5 from "./images/our_work5.jpg";

import contact_section_bg from "./images/contact_section_bg.jpg";

import loan_project from "./images/loan_project.png";
import aster from "./images/aster.png";
import cocucoin from "./images/cocucoin.png";
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
import school_website_project from "./images/school-website-project.webp";

import { useState } from 'react';
import Axios from 'axios';

import Our_projects_slider from "./Our_projects_slider";

import 'swiper/css';
import { API } from "./Constant";

function Home() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const requestAQuote = () => {
    Axios.post(`${API}/request_quote`, {
      name: name,
      email: email,
      subject: subject, 
      message: message,
    }).then(()=>{
      console.log("success");
      window.location.href = "/";
    })
  }


  return (
    <div>
        <div><Header_index/></div>
        <div>
        <>
  {/* Background Banners   */}
  <div className="relative top-[-57px] bg-cover h-full lg:h-[112vh] overflow-hidden w-full z-[-1]">
    <div className="w-full bg-cover bg-center h-[112vh]" style={{backgroundImage:`url(${bg1home_banner})`}}></div>
  </div>
  {/* Total Solution Here */}
  <div className="min-h-full lg:min-h-[80vh] max-h-full w-full flex justify-center items-center absolute top-[15vh] z-[-1]">
    <div className="w-[1100px] lg:flex p-6">
      <div className=" lg:w-1/2 animate-disappear">
        <div className="overflow-hidden">
          <p className="font-nunito font-semibold text-[18px] leading-[28px]  lg:text-[20px] lg:leading-[26px] text-white mb-2 z-2 relative top-[30px] animate-banner_text1">
            Total Solution Here
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="relative top-[160px] animate-banner_text2">
            <div className="flex overflow-hidden">
              <p className="font-nunito font-bold text-4xl sm:text-[60px] sm:leading-[70px]  lg:text-[70px] lg:leading-[80px] text-white">
                Best
              </p>
              <p className="font-nunito font-black text-4xl sm:text-[60px] sm:leading-[70px] lg:text-[70px] lg:leading-[80px] text-[#fb3b3c]">
                IT Solution
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="font-nunito font-bold text-4xl sm:text-[60px] sm:leading-[70px] lg:text-[70px] lg:leading-[80px] text-white relative top-[80px] animate-banner_text2">
                Company
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <p className="font-nunito font-normal text-[16px] leading-[30px] text-white mt-7 relative top-[90px] animate-banner_text3">
            We have a tendency to believe thes that smart looking website is
            first impression, businesses including many of the world's.
          </p>
        </div>
        <div className="sm:flex mt-4 lg:mt-8 overflow-hidden">
          <div className="flex w-[220px]  h-[57px] bg-[#0049d0] cursor-pointer text-white z-3 relative top-[126px] animate-banner_div"
          >
            <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center">
              <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="font-nunito font-bold text-[16px]">
                Discuss Your Project
              </div>
            </div>
          </div>
          <div
            className="mt-3 sm:mt-0 flex w-[160px]  h-[57px] bg-white cursor-pointer text-[#0d2c13] z-3
    relative top-[57px] animate-banner_div sm:ml-6"
          >
            <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center">
              <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="font-nunito font-bold text-[16px]">
                Our Services
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[200px] lg:min-h-[80vh] lg:w-1/2 flex justify-center items-center">
        <div className="h-[160px] w-[160px] rounded-full flex justify-center items-center" style={{backgroundImage:`url(${play_btn_20})`}}>
          <div className="h-[130px] w-[130px] rounded-full flex justify-center items-center" style={{backgroundImage:`url(${play_btn_40})`}}>
            <div className="h-[100px] w-[100px] rounded-full flex justify-center items-center" style={{backgroundImage:`url(${play_btn_60})`}}>
              <div className="h-[70px] w-[70px] rounded-full flex justify-center items-center" style={{backgroundImage:`url(${play_btn_80})`}}>
                <div className="h-[70px] w-[70px] rounded-full flex justify-center items-center" style={{backgroundImage:`url(${play_btn_100})`}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    className="bi bi-triangle fill-[#0049d0] rotate-90 hover:scale-50"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Us  */}
  <div className="px-3 py-12 flex justify-center min-w-[100%]">
    <div className="sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1100px] lg:flex">
      <div className="lg:hidden">
        <div className="flex">
          <div className="w-1/2 mr-[10px]">
            <img src={collage11} alt="some desc" className="w-full" />
          </div>
          <div className="w-1/2 ml-[10px]">
            <img src={collage12} alt="some desc" className="w-full" />
          </div>
        </div>
        <div className="flex items-center justify-between relative top-[-80px] z-[0]">
          <div className="py-1 sm:py-1 md:py-2 bg-white mt-[20%] xs:mt-0 w-[60%] sm:w-[60%] md:w-[55%]">
            <div className="lg:flex bg-[#0049d0] text-white font-nunito px-4 py-7 sm:px-5 sm:py-8  md:px-5 md:py-8">
              <p className="text-[40px] leading-1 sm:text-[80px] sm:leading-[80px] md:text-[100px] md:leading-[100px] font-black">
                6
              </p>
              <p className=" text-[18px] leading-[28px] font-semibold">
                Years Experience of IT Solution
              </p>
            </div>
          </div>
          <div className="bg-white w-[35%] p-2">
            <img src={collage13} alt="some desc" className="w-full" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 font-nunito">
        <p className="font-semibold text-[16px] md:text-[17px] lg:text-[18px] leading-[26px] text-[#fb3b3c]">
          ABOUT US
        </p>
        <div className="font-semibold text-[28px] leading-[36px] text-[#0d2c13] mt-1 sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px]">
          <p className="inline">Specialist</p>
          <div className="inline font-black text-[#0049d0] underline ml-3">
          Web & App Development
          </div>
          <p className="">with 6 years of experience</p>
        </div>
        <p className="font-semibold text-[16px] leading-[30px] text-[#7a7a7a] mt-3">
          We have to a tendency to believe thes that smart looking website is
          the first impression. Web designing in a powerful way of just not an
          only professions, how in a passion for our company.
        </p>
        <div className="flex items-center mt-10">
          <div className="w-[60px] h-[60px] mr-3 flex items-center justify-center bg-[#fb3b3c] text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-telephone"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
          </div>
          <div>
            <p className="font-normal text-[15px] leading-[26px]">
              Call to ask any question:
            </p>
            <p className="font-bold text-[17px] leading-[26px] text-[#0049d0]">
            +919369390970
            </p>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex">
            <div className="mt-[6px] border border-[#0049d0] flex justify-center items-center w-[15px] h-[15px] rounded-full">
              <div className="w-[7px] h-[7px] bg-[#fb3b3c] animate-blink rounded-full" />
            </div>
            <p className="pl-2 font-normal text-[15px] leading-[26px]">
            Web Development with latest technology
            </p>
          </div>
          <div className="flex mt-1">
            <div className="mt-[6px] border border-[#0049d0] flex justify-center items-center w-[15px] h-[15px] rounded-full">
              <div className="w-[7px] h-[7px] bg-[#fb3b3c] animate-blink rounded-full" />
            </div>
            <p className="pl-2 font-normal text-[15px] leading-[26px]">
            Android & IOS App Development in low cost
            </p>
          </div>
          <div className="flex mt-1">
            <div className="mt-[6px] border border-[#0049d0] flex justify-center items-center w-[15px] h-[15px] rounded-full">
              <div className="w-[7px] h-[7px] bg-[#fb3b3c] animate-blink rounded-full" />
            </div>
            <p className="pl-2 font-normal text-[15px] leading-[26px]">
            Highly experienced developers team
            </p>
          </div>
          <div className="flex mt-1">
            <div className="mt-[6px] border border-[#0049d0] flex justify-center items-center w-[15px] h-[15px] rounded-full">
              <div className="w-[7px] h-[7px] bg-[#fb3b3c] animate-blink rounded-full" />
            </div>
            <p className="pl-2 font-normal text-[15px] leading-[26px]">
            24/7 Support for your website & App
            </p>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 lg:block">
        <div className="flex">
          <div className="w-1/2 mr-[10px]">
            <img src={collage11} alt="some desc" className="w-full" />
          </div>
          <div className="w-1/2 ml-[10px]">
            <img src={collage12} alt="some desc" className="w-full" />
          </div>
        </div>
        <div className="flex items-center justify-between relative top-[-80px] z-[0]">
          <div className="py-1 sm:py-1 md:py-2 bg-white mt-[20%] xs:mt-0 w-[60%] sm:w-[60%] md:w-[55%]">
            <div className="lg:flex bg-[#0049d0] text-white font-nunito px-4 py-7 sm:px-5 sm:py-8  md:px-5 md:py-8">
              <p className="text-[40px] leading-1 sm:text-[80px] sm:leading-[80px] md:text-[100px] md:leading-[100px] font-black">
                6
              </p>
              <p className=" text-[18px] leading-[28px] font-semibold">
                Years Experience of IT Solution
              </p>
            </div>
          </div>
          <div className="bg-white w-[35%] p-2">
            <img src={collage13} alt="some desc" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* What we OFFER */}
  <div className="flex justify-center py-12 w-full">
    <div className="w-full sm:w-[500px] md:w-[700px] lg:w-full">
      <div className="lg:flex items-center w-full">
        <div className="w-full lg:w-1/2">
          <img src={school_website_project} className="w-full" />
        </div>
        <div className="w-full lg:w-1/2 p-12 font-nunito font-semibold">
          <div className="sm:flex w-full justify-center">
            {/* <div className="w-1/2 p-2">
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
              <p className="text-[40px] leading-1 text-[#0d2c13]">1280+</p>
              <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
                Account Number
              </p>
            </div> */}
            <div className="w-1/2 p-2">
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
                Finished Projects
              </p>
            </div>
          </div>
          <div className="sm:flex mt-12 w-full justify-center">
            {/* <div className="w-1/2 p-2">
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
              <p className="text-[40px] leading-1 text-[#0d2c13]">880+</p>
              <p className="text-[20px] leading-[24px] text-[#7a7a7a]">
                Win Awards
              </p>
            </div> */}
            <div className="w-1/2 p-2">
              <div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    height={40}
                    fill="currentColor"
                    className="bi bi-people fill-[#0049d0]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
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
      <div className="font-nunito font-semibold float-right lg:mr-[100px] lg:w-[60%] p-12 bg-white relative top-[-50px]">
        <p className="text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
          WHAT WE OFFER
        </p>
        <p className="text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-2">
        Not only we create a website and app's but also, we build a good relationship with our clients.
          {/* <b className="text-[#0049d0] underline">IT Services</b> */}
        </p>
        <p className="font-normal text-[16px] leading-[27px] text-[#7a7a7a] mt-4">
        By delivering the best quality of work, we have been able to make a good bond of friendship with our Clients from different parts of the world 🌍 like , <i className="text-red-400">Dubai</i> , <i className="text-red-400">Canada</i> , <i className="text-red-400">U.K</i> , <i className="text-red-400">Nigeria</i> , <i className="text-red-400">America</i> .  Moreover, being an <i className="text-red-400">Indian</i> we really love to work with our Indian clients. Apart from this, we have successfuly delivered all projects to our clients.
        </p>
      </div>
    </div>
    <div></div>
  </div>
  <div className="w-full px-3 pb-[100px] flex justify-center">
    <div className="wrapper w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] bg-white z-1">
      <div className="carousel owl-carousel w-full bg-white">
        <div className="bg-[#fafafa] rounded-xl border-[#ececec]">
          <div className="what_we_offer hover:bg-white hover:shadow-md p-6 m-2">
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
        </div>
        <div className="bg-[#fafafa] rounded-xl border-[#ececec]">
          <div className="what_we_offer hover:bg-white hover:shadow-md p-6 m-2">
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
        </div>
        <div className="bg-[#fafafa] rounded-xl border-[#ececec]">
          <div className="what_we_offer hover:bg-white hover:shadow-md p-6 m-2">
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
        </div>
        <div className="bg-[#fafafa] rounded-xl border-[#ececec]">
          <div className="what_we_offer hover:bg-white hover:shadow-md p-6 m-2">
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
        </div>
        <div className="bg-[#fafafa] rounded-xl border-[#ececec]">
          <div className="what_we_offer hover:bg-white hover:shadow-md p-6 m-2">
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
        </div>
      </div>
    </div>
  </div>
  {/* What we Do */}
  <div className="w-full relative lg:top-[-200px]">
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
                  <b className="font-normal">"The fundamental model of our company is to provide the </b><i className="text-red-400">Quality Services</i> <b className="font-normal">which will help you to enhance your business with maximum profit"</b>
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
  {/* Our Work */}
  <div className="flex justify-center bg-[#fdfdfd] px-4 py-[70px]">
    <div className="w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1100px]">
      <div className="m-auto md:w-[550px] text-center">
        <p className="font-semibold text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
          OUR WORK
        </p>
        <p className="font-semibold text-[28px] leading-[36px] sm:text-[34] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] mt-4">
          We Have Done Lot of Business latest{" "}
          <b className="font-black underline text-[#0049d0]">Case Studies</b>
        </p>
      </div>
      <div className="mt-10">
        <div className="hidden lg:block">
          <div className="flex">
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work5} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[75px] px-[10px]">
                    Business
                  </p>
                  <a className="font-bold text-[24px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Financial Solution
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work2} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[75px] px-[10px]">
                    Business
                  </p>
                  <a className="font-bold text-[24px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    IT Counsultancy
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work3} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[90px] px-[10px]">
                    Technology
                  </p>
                  <a className="font-bold text-[24px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Analysis of Security
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work4} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[65px] px-[10px]">
                    Design
                  </p>
                  <a className="font-bold text-[24px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Social Media App
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work5} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[47px] px-[10px]">
                    Idea
                  </p>
                  <a className="font-bold text-[22px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    IT Growth Strategies
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work3} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[100px] px-[10px]">
                    Development
                  </p>
                  <a className="font-bold text-[24px] leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Data Management
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="sm:flex">
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work1} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold  text-[13px] leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[75px] px-[10px]">
                    Business
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Financial Solution
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work2} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold sm:text-[13px] sm:leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[75px] px-[10px]">
                    Business
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    IT Counsultancy
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work3} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold sm:text-[13px] sm:leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[90px] px-[10px]">
                    Technology
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Analysis of Security
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work4} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold sm:text-[13px] sm:leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[65px] px-[10px]">
                    Design
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Social Media App
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work4} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold sm:text-[13px] sm:leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[47px] px-[10px]">
                    Idea
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    IT Growth Strategies
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white m-6 sm:w-1/2">
              <div className="bg-[#0d0f33]">
                <div className="relative top-[-15px] left-[-15px] h-full overflow-hidden">
                  <img src={our_work3} alt="some desc" className="" />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4 mx-6">
                <div className="">
                  <p className="font-bold sm:text-[13px] sm:leading-[26px] text-[#0049d0] bg-[#ffebeb] w-[100px] px-[10px]">
                    Development
                  </p>
                  <a className="font-bold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                    Data Management
                  </a>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={30}
                    height={30}
                    fill="currentColor"
                    className="bi bi-award fill-[#0049d0] hover:fill-[#fb3b3c]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* REQUEST A QUOTE */}
  <div className="mt-12">
    <div className="w-full lg:flex">
      <div className="lg:h-[120vh] min-h-[400px] max-h-[800px] lg:w-1/2 bg-cover" style={{backgroundImage:`url(${contact_section_bg})`}}>
        <div className="lg:w-[550px]" />
      </div>
      <div className="lg:w-1/2 lg:h-[120vh] max-h-[800px]">
        <div className="lg:w-[450px] xl:w-[550px] text-white bg-[#0049d0] px-3  py-[60px] lg:p-[60px] h-full">
          <p className="text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] font-semibold">
            REQUEST A QUOTE
          </p>
          <p className="text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] font-semibold mt-2">
            If you have any questions{" "}
            <b className="underline font-black">contact with us</b>
          </p>
            <div className="mt-5 w-full h-[50px]">
              <input type="text" placeholder="Your Name" className="bg-[#0049d0] border border-[#2664d7] p-2 placeholder:text-white w-full h-[50px]"  onChange={(event) =>{setName(event.target.value);}}/>
            </div>
            <div className="mt-5">
              <input type="email" placeholder="Email Address" className="bg-[#0049d0] border border-[#2664d7] p-2 placeholder:text-white placeholder:font-medium w-full h-[50px]" onChange={(event) =>{setEmail(event.target.value);}}/>
            </div>
            <div className="mt-5">
              <input type="text" placeholder="Subject" className="bg-[#0049d0] border border-[#2664d7] p-2 placeholder:text-white w-full h-[50px]"  onChange={(event) =>{setSubject(event.target.value);}}/>
            </div>
            <div className="mt-5">
              <textarea name="" id="" cols={30} rows={4} placeholder="Type Message"
                className="bg-[#0049d0] border border-[#2664d7] p-2 placeholder:text-white w-full"
                  onChange={(event) =>{setMessage(event.target.value);}}
              />
            </div>
            <button className="mt-[78px]" onClick={requestAQuote}>
              <div className="flex w-[163px] bg-white blinkdiv cursor-pointer text-white"
              onMouseOver={function(){
                document.getElementsByClassName("blink")[1].style.width= "32px";
                document.getElementsByClassName("blink")[1].style.transition = "0.4s";
             }}
             onMouseOut={function(){
               document.getElementsByClassName("blink")[1].style.width= "0px";
                document.getElementsByClassName("blink")[1].style.transition = "0.4s";
             }}>
                <div className="h-[50px] w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                  <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]"></div>
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="font-nunito font-bold text-[16px] text-[#0d2c13] leading-[50px] hover:text-[#fb3b3c] h-[50px]">Submit Now</div>
                </div>
              </div>
            </button>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full">
    <div className="w-full">
      <div className="text-black text-[40px] font-semibold text-center my-4">Our Projects</div>
      <div className="wrapper bg-[#0d0f33] p-[40px]">
        <Our_projects_slider />
      
      </div>
    </div>
  </div>
  {/* Blog List */}
  <div className="bg-[#fcfcfd] p-3 mt-[100px]">
    <div>
      <div />
      <div className="sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] m-auto mt-[80px]">
        <div className="md:flex justify-between items-center">
          <div>
            <p className="font-semibold text-[17px] leading-[26px] lg:text-[18px] lg:leading-[24px] text-[#fb3b3c]">
              LATEST NEWS
            </p>
            <p className="font-semibold text-[28px] leading-[36px] sm:text-[34px] sm:leading-[40px] md:text-[36px] md:leading-[46px]  lg:text-[40px] lg:leading-[50px] text-[#0d2c13] md:w-[350px] mt-2 mb-6">
              From Our Blog List{" "}
              <b className="font-black text-[#0049d0] underline block xs:inline">
                Latest Feed
              </b>
            </p>
          </div>
          <div>
            <a href="" className="text-white">
              <div className="flex w-[163px] bg-[#0049d0] blinkdiv cursor-pointer text-white h-[57px]"
              onMouseOver={function(){
                document.getElementsByClassName("blink")[2].style.width= "32px";
                document.getElementsByClassName("blink")[2].style.transition = "0.4s";
              }} 
              onMouseOut={function(){
                document.getElementsByClassName("blink")[2].style.width= "0px";
                document.getElementsByClassName("blink")[2].style.transition = "0.4s";
              }}>
                <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                  <div className="w-[10px] h-[10px] bg-white animate-blink" />
                </div>
                <div className="h-full w-full flex items-center justify-center">
                  <div className="font-nunito font-bold text-[16px] ">
                    View All Blog
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="lg:flex justify-center">
          <div className="p-2 m-3 mt-10 lg:mt-0 lg:w-1/3 bg-white text-center">
            <div>
              <img src={blog_list1} alt="some desc" />
            </div>
            <div>
              <p className="font-semibold text-[12px] lg:text-[14px] lg:leading-[26px] bg-[#fb3b3c] text-white w-[120px] float-right">
                AUG 08, 2020
              </p>
              <p className="font-normal text-[12px] lg:text-[15px] lg:leading-[26px]">
                <b className="text-[#0049d0]">By Themeht</b>&nbsp;
                <b className="text-[#fb3b3c]">&nbsp;/&nbsp;</b>
                &nbsp;
                <b className="text-[#7a7a7a]">2 Comments</b>
              </p>
              <a
                href=""
                className="font-semibold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[34px] text-[#0d2c13] hover:text-[#0049d0]"
              >
                <p className="mt-5">How Can Use Powerfull Template That</p>
              </a>
              <div className="flex_jc_ic w-[50px] h-[50px] bg-white hover:bg-[#fb3b3c] rounded-full m-auto relative top-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-arrow-right fil-[#0d2c13] hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-2 m-3 mt-10 lg:mt-0 lg:w-1/3 bg-white text-center">
            <div>
              <img src={blog_list2} alt="some desc" />
            </div>
            <div>
              <p className="font-semibold text-[12px] lg:text-[14px] lg:leading-[26px] bg-[#fb3b3c] text-white w-[120px] float-right">
                AUG 05, 2020
              </p>
              <p className="font-normal text-[12px] lg:text-[15px] lg:leading-[26px]">
                <b className="text-[#0049d0]">By Themeht</b>&nbsp;
                <b className="text-[#fb3b3c]">&nbsp;/&nbsp;</b>
                &nbsp;
                <b className="text-[#7a7a7a]">2 Comments</b>
              </p>
              <a
                href=""
                className="font-semibold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[34px] text-[#0d2c13] hover:text-[#0049d0]"
              >
                <p className="mt-5">
                  In-Depth Industry &amp; Ecosystem Analysis
                </p>
              </a>
              <div className="flex_jc_ic w-[50px] h-[50px] bg-white hover:bg-[#fb3b3c] rounded-full m-auto relative top-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-arrow-right fil-[#0d2c13] hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-2 m-3 mt-10 lg:mt-0 lg:w-1/3 bg-white text-center">
            <div>
              <img src={blog_list3} alt="some desc" />
            </div>
            <div>
              <p className="font-semibold text-[12px] lg:text-[14px] lg:leading-[26px] bg-[#fb3b3c] text-white w-[120px] float-right">
                AUG 08, 2020
              </p>
              <p className="font-normal text-[12px] lg:text-[15px] lg:leading-[26px]">
                <b className="text-[#0049d0]">By Themeht</b>&nbsp;
                <b className="text-[#fb3b3c]">&nbsp;/&nbsp;</b>
                &nbsp;
                <b className="text-[#7a7a7a]">2 Comments</b>
              </p>
              <a
                href=""
                className="font-semibold text-[18px] leading-[26px] sm:text-[20px] lg:text-[24px] lg:leading-[34px] text-[#0d2c13] hover:text-[#0049d0]"
              >
                <p className="mt-5">
                  A Brand For A Company Is Like A Reputation Person.
                </p>
              </a>
              <div className="flex_jc_ic w-[50px] h-[50px] bg-white hover:bg-[#fb3b3c] rounded-full m-auto relative top-[30px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-arrow-right fil-[#0d2c13] hover:fill-white"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</>

        </div>
        <div><Footer/></div>
    </div>
  );
}
export default Home;

