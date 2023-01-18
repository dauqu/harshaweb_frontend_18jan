import { Link } from "react-router-dom";
import "./header.css";
import latest_news_image1 from "./images/01.jpg";
import latest_news_image2 from "./images/02.jpg";
import latest_news_image3 from "./images/03.jpg";
// import Header from "./Header";
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import { AiOutlineDownload } from 'react-icons/ai';
// import { FiDownload } from 'react-icons/fi';
// import { BsChevronDown } from 'react-icons/bs';
// import { FiEdit } from 'react-icons/fi';
// import { MdOutlineDeleteOutline } from 'react-icons/md';
// import { AiOutlineEye } from 'react-icons/ai';
// import { BsDownload } from 'react-icons/bs';
import footer_bg from './images/01.png';

function Footer() {
  return (
    <div>
        {/* Subscribe Now */}
        <div className="bg-[#e4fcfa] p-3">
            <div className="sm:w-[550px] md:w-[700px] lg:flex items-center lg:w-[900px] xl:w-[1100px] m-auto">
                <div className="bg-white lg:w-1/2 sm:flex justify-between p-[15px]">
                    <div>
                        <input type="text" className="placeholder:text-[14px] placeholder:leading-[26px] placeholder:text-[#0d2c13] placeholder:font-normal border border-white hover:border-white hover:border px-4 h-[60px]" placeholder="Enter Email Address"/>
                    </div>
                    <div className="bg-[#0049d0] flex_jc_ic h-[60px] w-[200px] text-white font-semibold">
                    Subscribe Now</div>
                </div>
                <div className="lg:w-1/2 py-12">
                    <ul className="flex lg:float-right">
                        <li className="px-2 hover:animate-rotateY">
                            <a href="/">
                                <div className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#3b5998] flex_jc_ic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-facebook fill-white" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className="px-2 hover:animate-rotateY">
                            <a href="/">
                                <div className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#00aced] flex_jc_ic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-twitter fill-white" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className="px-2 hover:animate-rotateY">
                            <a href="/">
                                <div className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#3f729b] flex_jc_ic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-instagram fill-white" viewBox="0 0 16 16">
                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className="px-2 hover:animate-rotateY">
                            <a href="/">
                                <div className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#ea4c89] flex_jc_ic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-dribbble fill-white" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
                                    </svg>
                                </div>
                            </a>
                        </li>
                        <li className="px-2 hover:animate-rotateY">
                            <a href="/">
                                <div className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] bg-[#007bb6] flex_jc_ic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-linkedin fill-white" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                    </svg>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <footer className="pt-[80px]" style={{backgroundImage: `url(${footer_bg})`}}>
            <div className="flex justify-center">
                <div className="sm:max-w-[575px] md:max-w-[767px] lg:max-w-[1000px] xl:max-w-[1280px] lg:flex">
                    <div className="lg:w-[30%] p-8 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-center items-center h-[57px] w-[220px] bg-white px-[25px] cup lg:h-[92px]">
                            <p className="font-normal text-[50px] leading-[56px] text-[#0049d0]">.Harsha</p>
                            <p className="font-normal text-[50px] leading-[56px] text-black">Web</p>
                        </div>
                        <p className="font-nunito font-normal text-[15px] leading-[26px] text-[#0d2c13]">HarshaWeb - IT Solution and Services Template Is creative, modern HTML5 Template suitable for Your business.</p>
                        <div className="flex mt-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-geo-alt fill-[#0049d0] mr-2" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg>
                            <p className="font-nunito font-normal text-[16px] leading-[27px] text-[#0d2c13]">
                            809, Pearl Best Heights 1, Netaji Subhash Place, Pitampura, Delhi-110034</p>
                        </div>
                        <div className="flex mt-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-envelope-paper fill-[#0049d0] mr-2" viewBox="0 0 16 16">
                                <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
                            </svg>
                            <a href="" className="font-nunito font-normal text-[16px] leading-[27px] text-[#0d2c13] hover:text-[#0049d0] hover:underline transition-all">info@harshaweb.com
                            </a>
                        </div>
                        <div className="flex mt-4 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-telephone fill-[#0049d0] mr-2" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <a href="" className="font-nunito font-normal text-[16px] leading-[27px] text-[#0d2c13] hover:text-[#0049d0] hover:underline transition-all">+919369390970
                            </a>
                        </div>
                    </div>
                    <div className="md:flex lg:w-[70%]">
                        <div className="sm:flex md:w-[60%]">
                            <div className="sm:w-[50%] p-6">
                                <h1 className="flex items-center font-nunito font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                                    <div className="h-[10px] w-[10px] bg-[#0049d0] animate-blink z-[-1]"></div>
                                    <p className="text-[#fb3b3c]">&nbsp;O</p>
                                    <p>ur Services</p>
                                </h1>
                                <ul className="">
                                    <li className="mt-3 footer_links"
                                     onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[0].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[0].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[0].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[0].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>IT Solution</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[1].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[1].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[1].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[1].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Managed it Services</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links" 
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[2].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[2].style.transition = "0.4s";
                                    }} 
                                    onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[2].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[2].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>IT Consultancy</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[3].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[3].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[3].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[3].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Industries IT</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[4].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[4].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[4].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[4].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Digital Services</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[5].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[5].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[5].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[5].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Business Solutions</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="sm:w-[50%] p-6">
                                <h1 className="flex items-center font-nunito font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                                    <div className="h-[10px] w-[10px] bg-[#0049d0] animate-blink z-[-1]"></div>
                                    <p className="text-[#fb3b3c]">&nbsp;Q</p>
                                    <p>uick Link</p>
                                </h1>
                                <ul className="">
                                    <li className="mt-3 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[6].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[6].style.transition = "0.4s";
                                    }} 
                                    onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[6].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[6].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>About Us</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[7].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[7].style.transition = "0.4s";
                                    }} 
                                    onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[7].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[7].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Contact Us</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links" 
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[8].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[8].style.transition = "0.4s";
                                    }} 
                                    onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[8].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[8].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Privacy Policy</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[9].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[9].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[9].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[9].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Terms and Condition</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[10].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[10].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[10].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[10].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Popular Blog</p>
                                        </a>
                                    </li>
                                    <li className="mt-2 footer_links"
                                    onMouseOver={function(){
                                        document.getElementsByClassName("footer_blink_div")[11].style.width = "5px";
                                        document.getElementsByClassName("footer_blink_div")[11].style.transition = "0.4s";
                                    }} 
                                     onMouseOut={function(){
                                        document.getElementsByClassName("footer_blink_div")[11].style.width = "0px";
                                        document.getElementsByClassName("footer_blink_div")[11].style.transition = "0.4s";
                                    }}>
                                        <a href="" className="flex items-center font-nunito font-medium text-[16px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">
                                            <div className="footer_blink_div animate-blink bg-[#0049d0] mr-1 h-[5px]"></div>
                                            <p>Our Team</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-full md:w-[40%] p-8">
                            <h1 className="flex items-center font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                                <div className="h-[10px] w-[10px] bg-[#0049d0] animate-blink z-[-1]"></div>
                                <p className="text-[#fb3b3c]">&nbsp;L</p>
                                <p>atest News</p>
                            </h1>
                            <div className="mt-3 flex">
                                <div className="h-[100px] w-[100px] mr-2">
                                    <img src={latest_news_image1} alt="some desc" className="h-[80px] min-w-[80px]"/>
                                </div>
                                <div>
                                    <p className="font-normal text-[15px] leading-[26px] text-[#0049d0]">
                                    8th Aug, 2022</p>
                                    <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">How can use powerfull template that
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2 flex">
                                <div className="h-[100px] w-[100px] mr-2">
                                    <img src={latest_news_image2} alt="some desc" className="h-[80px] min-w-[80px]" />
                                </div>
                                <div>
                                    <p className="font-nunito font-normal text-[15px] leading-[26px] text-[#0049d0]">5th Aug, 2022</p>
                                    <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">In-Depth Industry &amp; Ecosystem Analysis{" "}</a>
                                </div>
                            </div>
                            <div className="mt-2 flex">
                                <div className="mr-2">
                                    <img src={latest_news_image3} alt="some desc" className="h-[80px] min-w-[80px]" />
                                </div>
                                <div>
                                    <p className="font-nunito font-normal text-[15px] leading-[26px] text-[#0049d0]">8th Aug, 2022</p>
                                    <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">A brand for a company is like reputation person</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center flex justify-center items-center h-[80px] font-semibold text-[16px] leading-[26px] text-[#7a7a7a]">Copyright ©2022 All rights reserved | HarshaWeb
                <div className="h-[40px] w-[40px] flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-suit-heart fill-[#fb3b3c] animate-beat" viewBox="0 0 16 16" >
                        <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                    </svg>
                </div>
                <p className="underline text-[#0049d0] cup pr-4">HarshaWeb</p>
            </div>
        </footer>
    </div>
  );
}
export default Footer;

