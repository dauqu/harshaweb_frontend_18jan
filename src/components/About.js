import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import collage11 from "./images/collage11.jpg";
import collage12 from "./images/collage12.jpg";
import collage13 from "./images/collage13.jpg";

import blog_list1 from "./images/blog_list1.jpg";
import blog_list2 from "./images/blog_list2.jpg";
import blog_list3 from "./images/blog_list3.jpg";

import rishu_singh from "./images/rishu_singh.jpeg";
import harsh_singh from "./images/harsh_singh.jpeg";

import { Swiper, SwiperSlide } from 'swiper/react';

function About() {
  return (
    <div>
        <div><Header/></div>
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">About Us</h1>
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
                      <a href="/">&nbsp;About Us</a>
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
        We have to a tendency to believe that , the smart looking website is the effictive first impression for both user's as well as admin. Consequently , we are able to provide your dream website with low cost and high efficiency.
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
 {/* What we Do */}
 <div className="w-full relative lg:top-0 mb-0">
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
          {/* <div className="wrapper">
            <div className="carousel1 owl-carousel w-full">
              <div className="p-[40px] lg:pl-[40px]">
                <div className="h-[100px] w-[100px]">
                  <img
                    src={what_we_do1}
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
                  Karlo Morgan
                </p>
                <p className="font-semibold text-[14px] leading-[26px] text-white italic">
                  -Founder
                </p>
              </div>
              <div className="p-[40px] lg:pl-[40px]">
                <div className="h-[100px] w-[100px]">
                  <img
                    src={what_we_do2}
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
                  Margaret Lawson
                </p>
                <p className="font-semibold text-[14px] leading-[26px] text-white italic">
                  -Founder
                </p>
              </div>
            </div>
          </div> */}
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
  {/* <div className="w-full">
    <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1200px] float-right">
      <div className="wrapper bg-[#0d0f33] flex_ic p-[40px]">
      <Swiper spaceBetween={50} slidesPerView={6} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi1} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi2} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi3} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi4} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi5} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi6} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi7} alt="some desc" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="">
                  <img src={raqsi8} alt="some desc" />
                </div>
              </SwiperSlide>
      </Swiper>
        
      </div>
    </div>
  </div> */}
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
                document.getElementsByClassName("blink")[1].style.width= "32px";
                document.getElementsByClassName("blink")[1].style.transition = "0.4s";
              }} 
              onMouseOut={function(){
                document.getElementsByClassName("blink")[1].style.width= "0px";
                document.getElementsByClassName("blink")[1].style.transition = "0.4s";
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
export default About;

