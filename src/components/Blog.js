// import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/blog3.jpg";
import blog4 from "./images/blog4.jpg";

function Blog() {
  return (
    <div>
        <div><Header/></div>
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">Blog</h1>
                  <div className="flex_ic font-bold text-[15px] leading-[26px]">
                  <p className="text-[16px] max-w-[900px]">
                  <i>
                    Here , in our company website you can find that we can work
                    on multiple languages . Furthermore , it is our speciality
                    to deliver the project within given time duration.
                    Additionaly, it's our guarantee that you will not need any
                    revision in our work. But in any scenario , if you need any revision then we
                    will do it easily and quickly .
                  </i>
                </p>
                  </div>
              </div>
            </div>
            <div>
  <div className="w-full m-auto sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] bg-[#fcfcfd] py-12">
    <div className="md:flex">
      <div className="p-2 m-3 mt-10 lg:mt-0 lg:w-1/2 bg-white text-center">
        <div>
          <img src={blog1} alt="some desc" />
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
      <div className="p-2 m-3 mt-10 lg:mt-0 lg:w-1/2 bg-white text-center">
        <div>
          <img src={blog2} alt="some desc" />
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
            <p className="mt-5">In-Depth Industry &amp; Ecosystem Analysis</p>
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
    <div className="md:flex">
      <div className="p-2 m-3 mt-10 lg:mt-12 lg:w-1/2 bg-white text-center">
        <div>
          <img src={blog3} alt="some desc" />
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
      <div className="p-2 m-3 mt-10 lg:mt-12 lg:w-1/2 bg-white text-center">
        <div>
          <img src={blog4} alt="some desc" />
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
        <div><Footer/></div>
    </div>
  );
}
export default Blog;

