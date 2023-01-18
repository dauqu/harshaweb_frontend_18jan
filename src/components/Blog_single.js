// import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import blog1 from "./images/blog1.jpg";
import blog2 from "./images/blog2.jpg";
import blog3 from "./images/blog3.jpg";
import blog4 from "./images/blog4.jpg";

import what_we_do2 from "./images/what_we_do2.jpg";
import what_we_do1 from "./images/what_we_do1.jpg";
import comment3 from "./images/comment3.jpg";

import pic01 from "./images/01.jpg";
import pic02 from "./images/02.jpg";
import pic03 from "./images/03.jpg";

function Blog_single() {
  return (
    <div>
        <div><Header/></div>
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">Blog - Single</h1>
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
                      <a href="/">&nbsp;Blog - Single</a>
                    </div>
                  </div>
              </div>
            </div>
            <div className="lg:py-[50px]">
                <div className="w-full m-auto  sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px] lg:flex">
                    <div className="w-full lg:w-2/3">
                        <div className="p-3 mt-10 lg:mt-0  bg-white ">
                            <div><img src={blog1} alt="some desc" /></div>
                            <div>
                              <p className="font-semibold text-[12px] lg:text-[14px] lg:leading-[26px] bg-[#fb3b3c] text-white w-[120px] float-right text-center">AUG 08, 2020</p>
                              <p className="font-normal text-[12px] lg:text-[15px] lg:leading-[26px]">
                                <b className="text-[#0049d0]">By Themeht</b>&nbsp;
                                <b className="text-[#fb3b3c]">&nbsp;/&nbsp;</b>&nbsp;
                                <b className="text-[#7a7a7a]">2 Comments</b>
                              </p>
                              <a href="" className="font-semibold text-[28px] leading-[36px] sm:text-[30px] sm:leading-[46px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">
                                <p className="mt-5">How can use powerfull template that</p>
                              </a>
                              <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mt-3">lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in building innovative technology solutions for enterprises. Our products and services unleash new levels of productivity.</p>
                              <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mt-3">enhance collaboration amongst team members, and streamline large-scale communication. We utilize a powerful mix of exquisite design and innovative technology to resolve the issues that hold back many companies today.</p>
                              <p className="font-normal text-[16px] leading-[30px] bg-[#e4fcfa] px-8 py-5 text-center mt-12">" lights dominion divide years for fourth have don't stars is that saying. serspiciatis unde omnis iste natus error. The expert team at Brightscout specializes in  innovative technology solutions for enterprises. "{" "}<b className="text-[20px] font-medium leading-[24px] text-[#0049d0]">- Marlo Jensen</b></p>
                              <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] mt-12">We Offer a Wide Variety adipiscing elit. Maecenas lobortis quam id lectus aliquet euismod. Ut sagittis et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation ullamco laboris nisi ut aliq uip.eiu smod tempor the incidi dunt ut labore et dolore magna aliqua. Phasellus eget purus id felis dignissim convallis Suspendisse et augue dui gravida Cras ultricies ligula sed magna dictum porta, Sed ut perspiciatis unde omnis iste natus error sit voluptat erci tation </p>
                              <div className="sm:flex items-center p-2 sm:p-8 shadow-md mt-6">
                                <p className="font-normal text-[18px] leading-[24px] text-[#0d2c13] pr-8">Share It:</p>
                                <ul className="flex">
                                  <li className="px-2 hover:animate-rotateY">
                                    <a href="/">
                                        <div className="h-[45px] w-[45px] bg-[#3b5998] flex_jc_ic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-facebook fill-white" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                  <li className="px-2 hover:animate-rotateY">
                                    <a href="/">
                                        <div className="h-[45px] w-[45px] bg-[#00aced] flex_jc_ic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-twitter fill-white" viewBox="0 0 16 16" >
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                  <li className="px-2 hover:animate-rotateY">
                                    <a href="/">
                                        <div className="h-[45px] w-[45px] bg-[#3f729b] flex_jc_ic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-instagram fill-white" viewBox="0 0 16 16" >
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                  <li className="px-2 hover:animate-rotateY">
                                    <a href="/">
                                        <div className="h-[45px] w-[45px] bg-[#ea4c89] flex_jc_ic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-dribbble fill-white" viewBox="0 0 16 16" >
                                                <path fillRule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8zm5.284 3.688a6.802 6.802 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A6.95 6.95 0 0 1 8 1.18zm-2.907.642A43.123 43.123 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.865 6.865 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.817 6.817 0 0 1-1.752-4.564zM8 14.837a6.785 6.785 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.246 28.246 0 0 1 1.457 5.18A6.722 6.722 0 0 1 8 14.837zm3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.774 6.774 0 0 1-2.924 4.573z"/>
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                  <li className="px-2 hover:animate-rotateY">
                                    <a href="/">
                                        <div className="h-[45px] w-[45px] bg-[#007bb6] flex_jc_ic">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-linkedin fill-white" viewBox="0 0 16 16" >
                                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                            </svg>
                                        </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <h1 className="font-semibold text-[28px] leading-[36px] sm:text-[30px] sm:leading-[46px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0] mt-12">All Comments</h1>
                              <div className="mt-6">
                                <div className="sm:flex">
                                  <div className="min-w-[100px] max-w-[100px]">
                                    <img src={what_we_do2} alt="some desc" />
                                    <p className="text-[#0d2c13] hover:text-[#0049d0] flex items-center justify-center my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-dots mr-2" viewBox="0 0 16 16" >
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <a href="" className="font-semibold text-[15px] leading-[26px]" >Reply</a>
                                    </p>
                                  </div>
                                  <div className="px-5">
                                    <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">Creative variations of sunt in culpa qui officia deserunt mollitia , id est laborum et dolorum fuga. Et harum quidem rerum carry more than just is our experience.</p>
                                    <p><b className="font-normal text-[18px] leading-[24px] text-[#0d2c13]">Maria Kearo</b><b className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] italic">- August 05, 2020</b></p>
                                  </div>
                                </div>
                                <div className="sm:flex bg-[#0d0f33] py-2 sm:ml-[65px] mt-10">
                                  <div className="min-w-[100px] max-w-[100px]">
                                    <img src={what_we_do1} alt="some desc"/>
                                    <p className="text-[#0d2c13] hover:text-[#0049d0] flex items-center justify-center bg-white py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-dots mr-2" viewBox="0 0 16 16" >
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <a href="" className="font-semibold text-[15px] leading-[26px]" >Reply</a>
                                    </p>
                                  </div>
                                  <div className="px-5">
                                    <p className="font-normal text-[15px] leading-[26px] text-white">Creative variations of sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum carry more than just is our experience.</p>
                                    <p><b className="font-normal text-[18px] leading-[24px] text-[#fb3b3c]">Maria Kearo</b><b className="font-normal text-[15px] leading-[26px] text-white italic">- August 05, 2020</b></p>
                                  </div>
                                </div>
                                <div className="sm:flex mt-10">
                                  <div className="min-w-[100px] max-w-[100px]">
                                    <img src={comment3} alt="some desc" />
                                    <p className="text-[#0d2c13] hover:text-[#0049d0] flex items-center justify-center my-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-chat-left-dots mr-2" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                        <a href="" className="font-semibold text-[15px] leading-[26px]">Reply</a>
                                    </p>
                                  </div>
                                  <div className="px-5">
                                    <p className="font-normal text-[15px] leading-[26px] text-[#7a7a7a]">Creative variations of sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum carry more than just is our experience.</p>
                                    <p><b className="font-normal text-[18px] leading-[24px] text-[#0d2c13]">Barry Jelvin</b><b className="font-normal text-[15px] leading-[26px] text-[#7a7a7a] italic">- August 05, 2020</b></p>
                                  </div>
                                </div>
                              </div>
                              <div className="mt-12 p-10 shadow-md">
                                <h1 className="font-semibold text-[28px] leading-[36px] sm:text-[30px] sm:leading-[46px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">Leave A Comment</h1>
                                <form action="" className="mt-10">
                                  <div>
                                    <textarea name="" id="" cols={30} rows={5} placeholder="Your Comment" className="border w-full p-3 hover:border-[#fb3b3c]" defaultValue={""} />
                                  </div>
                                  <div className="sm:flex mt-3">
                                    <div className="my-1 sm:mr-3 w-full">
                                        <input type="text" placeholder="Name" className="border w-full p-3 hover:border-[#fb3b3c]"/>
                                    </div>
                                    <div className="my-1 sm:ml-3 w-full">
                                        <input type="email" placeholder="Email" className="border w-full p-3 hover:border-[#fb3b3c]" />
                                    </div>
                                  </div>
                                  <div className="flex w-[163px] h-[55px] bg-[#0049d0] blinkdiv cursor-pointer text-white mt-12">
                                    <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                                        <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
                                    </div>
                                    <div className="h-full w-full flex items-center justify-center">
                                        <div className="font-nunito font-bold text-[16px]">Post Comment</div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3">
                      <div className="p-12 border border-dashed">
                        <input type="text" className="border p-[14px] w-full" placeholder="Search Here"/>
                          <div className="flex w-full h-[55px] bg-[#0049d0] blinkdiv cursor-pointer text-white">
                            <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                              <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
                            </div>
                            <div className="h-full w-full flex items-center justify-center">
                              <div className="font-nunito font-bold text-[16px]">Search Blog</div>
                            </div>
                          </div>
                      </div>
                      <div className="p-6 border border-dashed mt-12">
                        <h1 className="flex items-center font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                          <p>Recent Stories</p>
                        </h1>
                        <div className="mt-3 flex">
                          <div className="h-[100px] w-[100px] mr-2">
                            <img src={pic01} alt="some desc" className="h-[80px] min-w-[80px]" />
                          </div>
                          <div>
                            <p className="font-normal text-[15px] leading-[26px] text-[#0049d0]">8th Aug, 2020
                            </p>
                            <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">How can use powerfull template that</a>
                          </div>
                        </div>
                        <div className="mt-2 flex">
                          <div className="h-[100px] w-[100px] mr-2">
                            <img src={pic02} alt="some desc" className="h-[80px] min-w-[80px]" />
                          </div>
                          <div>
                            <p className="font-nunito font-normal text-[15px] leading-[26px] text-[#0049d0]">5th Aug, 2020</p>
                            <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">In-Depth Industry &amp; Ecosystem Analysis{" "}</a>
                          </div>
                        </div>
                        <div className="mt-2 flex">
                          <div className="mr-2">
                            <img src={pic03} alt="some desc" className="h-[80px] min-w-[80px]" />
                          </div>
                          <div>
                            <p className="font-nunito font-normal text-[15px] leading-[26px] text-[#0049d0]">8th Aug, 2020</p>
                            <a href="" className="font-nunito font-semibold text-[15px] leading-[26px] text-[#0d2c13] hover:text-[#0049d0]">A brand for a company is like reputation person</a>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 border border-dashed mt-12">
                        <h1 className="flex items-center font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                          <p>Recent Stories</p>
                        </h1>
                        <ul>
                          <li className="flex items-center justify-between hover:pl-3 hover:transition-all mb-4">
                            <a className="hover:text-[#0049d0] text-[15px] leading-[29px] text-[#0d2c13]">
                              All</a>
                            <div className="bg-[#fb3b3c33]  h-[30px] w-[30px] flex_jc_ic rounded-full ">74</div>
                          </li>
                          <li className="flex items-center justify-between hover:pl-3 hover:transition-all mb-4">
                            <a className="hover:text-[#0049d0] text-[15px] leading-[29px] text-[#0d2c13]">Arts And Entertainment</a>
                            <div className="bg-[#fb3b3c33] h-[30px] w-[30px] flex_jc_ic rounded-full">
                              23
                            </div>
                          </li>
                          <li className="flex items-center justify-between hover:pl-3 hover:transition-all mb-4">
                            <a className="hover:text-[#0049d0] text-[15px] leading-[29px] text-[#0d2c13]">Featured</a>
                            <div className="bg-[#fb3b3c33]  h-[30px] w-[30px] flex_jc_ic rounded-full">14
                            </div>
                          </li>
                          <li className="flex items-center justify-between hover:pl-3 hover:transition-all mb-4">
                            <a className="hover:text-[#0049d0] text-[15px] leading-[29px] text-[#0d2c13]">Daily News</a>
                            <div className="bg-[#fb3b3c33]  h-[30px] w-[30px] flex_jc_ic rounded-full">48</div>
                          </li>
                          <li className="flex items-center justify-between hover:pl-3 hover:transition-all mb-4">
                            <a className="hover:text-[#0049d0] text-[15px] leading-[29px] text-[#0d2c13]">Blog Post
                            </a>
                            <div className="bg-[#fb3b3c33] h-[30px] w-[30px] flex_jc_ic rounded-full">32</div>
                          </li>
                        </ul>
                      </div>
                      <div className="p-6 border border-dashed mt-12">
                        <h1 className="flex items-center font-semibold text-[24px] leading-[34px] text-[#0d2c13]">
                          <p>Tags</p>
                        </h1>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">Marketing</b>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">It Solution</b>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">Web Design</b>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">Business Solution</b>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">Digital Service</b>
                        <b className="text-[15px] leading-[45px] text-[#0d2c13] font-normal hover:text-white hover:bg-[#0049d0] border m-1 inline-block px-3">Industries</b>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div><Footer/></div>
    </div>
  );
}
export default Blog_single;

