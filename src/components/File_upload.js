import { Link, useNavigate } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import contact_banner from "./images/contact_banner.png";


import Axios from "axios";

import { API } from "./Constant";

function File_upload() {

  
 
  const [file, setFile] = useState("");


  const file_upload = () => {
    Axios.post(`${API}/file_upload`, {
      file: file,
    }).then(() => {
      console.log("success");
    });
  };


  return (
    <div>
        
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
                <div className="text-center text-white">
                    <h1 className="font-bold text-[50px] leading-[60px]">File Upload</h1>
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
                            <a href="/">&nbsp;File Upload</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white py-[80px] flex justify-center">
                <div className="max-w-[1250px] m-auto">
                    <div className="flex items-center flex-wrap justify-evenly">
                      <div className="div">
                        
                      </div>
                      <div className="div">
                        
                      </div>
                    </div>
                    <div>
                      <div className="flex items-end flex-wrap justify-evenly max-w-[850px] m-auto">
                        <div className="p-6 md:w-[400px] w-full">
                          <label htmlFor="" className="text-[#272727] text-[17px] font-semibold">Application Technology Chosen</label>
                          <input type="file" className="w-full outline-none border border-[#d33847] h-[40px] app_tech_chosen text-[#272727] px-3 rounded-sm" onInput={(event) => {setFile(event.target.value)}}/>
                        </div>
                        
                      </div>
                      <div className="flex items-end flex-wrap justify-evenly">
                        
                        <div className="p-6 md:w-[400px] div w-full">
                          <div className="w-full md:flex justify-center items-stretch flex-wrap">
                            <div className="w-full flex justify-center items-stretch flex-wrap">
                              <div className="w-full">
                                <label htmlFor="" className="text-[#272727] text-[17px] font-semibold">Estimated Development Cost</label>
                                <div className="estimated_development_cost_div">
                                  <input type="text"  className="w-full outline-none border border-[#d33847] h-[40px] estimated_development_cost_input text-[#272727] px-3 rounded-sm" defaultValue="" readOnly=""/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end flex-wrap justify-evenly">
                        
                        <div className="md:w-[400px] div w-full p-6" onClick={file_upload}>
                          <button className="text-[20px] py-[4px] w-full text-center border bg-[#d33847] text-white">Checkout</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  );
}
export default File_upload;

