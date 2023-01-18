import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API } from "./Constant";

function Header() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    axios.get(`${API}/user_login/check_valid_token`, {withCredentials: true}).then((res) =>{
      setIsLogin(res.data);
    });
  }, [])




return (
    <div>
        <nav className="w-full static z-10">
  <div className="hidden sm:flex w-full h-[35px] bg-[#0d0f33]  justify-between lg:hidden uppernav">
    <div className="flex h-full text-white">
      <div className="flex items-center px-4 border-r border-[#ffffff1a] cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-house-door fill-[#fb3b3c]" viewBox="0 0 16 16">
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
        <p className="font-nunito font-medium text-[13px] pb-0">
          &nbsp;&nbsp;Welcome to Our IT Company
        </p>
      </div>
      <div className="flex items-center px-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="currentColor"
          className="bi bi-envelope-paper fill-[#fb3b3c]"
          viewBox="0 0 16 16"
        >
          <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
        </svg>
        <p className="font-nunito font-medium text-[13px] hover:text-[#0049d0] transition-colors">
          &nbsp;&nbsp;info@harshaweb.com
        </p>
      </div>
    </div>
    <div className="hidden  h-full md:flex items-center">
      <ul className="flex items-center">
        <li className="px-4 border-r border-[#ffffff1a]">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-facebook fill-white hover:animate-rotateY"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </li>
        <li className="px-4 border-r border-[#ffffff1a]">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-twitter fill-white hover:animate-rotateY"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        </li>
        <li className="px-4 border-r border-[#ffffff1a]">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-instagram fill-white hover:animate-rotateY"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </li>
        <li className="px-4 border-r border-[#ffffff1a]">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-fan fill-white hover:animate-rotateY"
              viewBox="0 0 16 16"
            >
              <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
            </svg>
          </a>
        </li>
        <li className="px-4 border-r border-[#ffffff1a]">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              fill="currentColor"
              className="bi bi-linkedin fill-white hover:animate-rotateY"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="h-[57px] flex  lg:h-[92px] nav_div">
    <div className="h-[57px] lg:h-[92px] bg-white logo flex items-center px-[25px]">
      <p className="font-nunito font-medium  leading-[56px] text-[30px] md:text-[40px] text-[#0049d0]">
        .Harsha
      </p>
      <p className="font-nunito font-medium  leading-[56px] text-[30px] md:text-[40px] text-black">
        Web
      </p>
    </div>
    <div className="h-[57px] w-full lg:h-[92px] nav_div">
      <div className="hidden w-full h-[35px] lg:flex justify-between uppernav bg-[#0d0f33]">
        <div className="flex text-white">
          <div className="flex items-center px-4 border-r border-[#ffffff1a] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              className="bi bi-house-door fill-[#fb3b3c]"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </svg>
            <p className="font-nunito font-medium text-[13px] pb-0">
              &nbsp;&nbsp;Welcome to Our IT Company
            </p>
          </div>
          <div className="flex items-center px-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-envelope-paper fill-[#fb3b3c]"
              viewBox="0 0 16 16"
            >
              <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
            </svg>
            <p className="font-nunito font-medium text-[13px] hover:text-[#0049d0] transition-colors">
              &nbsp;&nbsp;info@harshaweb.com
            </p>
          </div>
        </div>
        <div className="h-full pr-[25px]">
          <ul className="h-full flex items-center">
            <li className="px-4 border-r border-[#ffffff1a]">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="currentColor"
                  className="bi bi-facebook fill-white hover:animate-rotateY"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
            </li>
            <li className="px-4 border-r border-[#ffffff1a]">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="currentColor"
                  className="bi bi-twitter fill-white hover:animate-rotateY"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </li>
            <li className="px-4 border-r border-[#ffffff1a]">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="currentColor"
                  className="bi bi-instagram fill-white hover:animate-rotateY"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
            </li>
            <li className="px-4 border-r border-[#ffffff1a]">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="currentColor"
                  className="bi bi-fan fill-white hover:animate-rotateY"
                  viewBox="0 0 16 16"
                >
                  <path d="M10 3c0 1.313-.304 2.508-.8 3.4a1.991 1.991 0 0 0-1.484-.38c-.28-.982-.91-2.04-1.838-2.969a8.368 8.368 0 0 0-.491-.454A5.976 5.976 0 0 1 8 2c.691 0 1.355.117 1.973.332.018.219.027.442.027.668Zm0 5c0 .073-.004.146-.012.217 1.018-.019 2.2-.353 3.331-1.006a8.39 8.39 0 0 0 .57-.361 6.004 6.004 0 0 0-2.53-3.823 9.02 9.02 0 0 1-.145.64c-.34 1.269-.944 2.346-1.656 3.079.277.343.442.78.442 1.254Zm-.137.728a2.007 2.007 0 0 1-1.07 1.109c.525.87 1.405 1.725 2.535 2.377.2.116.402.222.605.317a5.986 5.986 0 0 0 2.053-4.111c-.208.073-.421.14-.641.199-1.264.339-2.493.356-3.482.11ZM8 10c-.45 0-.866-.149-1.2-.4-.494.89-.796 2.082-.796 3.391 0 .23.01.457.027.678A5.99 5.99 0 0 0 8 14c.94 0 1.83-.216 2.623-.602a8.359 8.359 0 0 1-.497-.458c-.925-.926-1.555-1.981-1.836-2.96-.094.013-.191.02-.29.02ZM6 8c0-.08.005-.16.014-.239-1.02.017-2.205.351-3.34 1.007a8.366 8.366 0 0 0-.568.359 6.003 6.003 0 0 0 2.525 3.839 8.37 8.37 0 0 1 .148-.653c.34-1.267.94-2.342 1.65-3.075A1.988 1.988 0 0 1 6 8Zm-3.347-.632c1.267-.34 2.498-.355 3.488-.107.196-.494.583-.89 1.07-1.1-.524-.874-1.406-1.733-2.541-2.388a8.363 8.363 0 0 0-.594-.312 5.987 5.987 0 0 0-2.06 4.106c.206-.074.418-.14.637-.199ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16Z" />
                </svg>
              </a>
            </li>
            <li className="px-4">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  fill="currentColor"
                  className="bi bi-linkedin fill-white hover:animate-rotateY"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-[57px] flex justify-between lowernav">
        <div className="hidden lg:flex">
          <ul className="flex items-center text-white">
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[0].style.display = "none";
              document.getElementsByClassName("minus")[0].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[0].style.display = "block";
              document.getElementsByClassName("minus")[0].style.display = "none";
            }}>
              <Link to="/" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Home</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">&nbsp;-</p>
              </Link>
            </li>
            {/* <li className="px-[9px] li"
             onMouseOver={function(){
              document.getElementsByClassName("plus")[1].style.display = "none";
              document.getElementsByClassName("minus")[1].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[1].style.display = "block";
              document.getElementsByClassName("minus")[1].style.display = "none";
            }}>
              <Link to="/Shop" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Shop</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">&nbsp;-</p>
              </Link>
            </li> */}
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[1].style.display = "none";
              document.getElementsByClassName("minus")[1].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[1].style.display = "block";
              document.getElementsByClassName("minus")[1].style.display = "none";
            }}>
              <Link to="/about" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Company</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">
                  &nbsp;-
                </p>
              </Link>
            </li>
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[2].style.display = "none";
              document.getElementsByClassName("minus")[2].style.display = "block";
              document.getElementById("dropdown_it_solution").style.display = "block";
              if(window.scrollY > 0){
                document.getElementById("dropdown_it_solution").style.top = "30px";
              }
              else{
                document.getElementById("dropdown_it_solution").style.top = "75px";
              }
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[2].style.display = "block";
              document.getElementsByClassName("minus")[2].style.display = "none";
              document.getElementById("dropdown_it_solution").style.display = "none";
            }}>
              <Link to="/it-solution" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>IT Solutions</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">
                  &nbsp;-
                </p>
              </Link>
            </li>
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[3].style.display = "none";
              document.getElementsByClassName("minus")[3].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[3].style.display = "block";
              document.getElementsByClassName("minus")[3].style.display = "none";
            }}>
              <Link to="/blog" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Blog</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">
                  &nbsp;-
                </p>
              </Link>
            </li>
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[4].style.display = "none";
              document.getElementsByClassName("minus")[4].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[4].style.display = "block";
              document.getElementsByClassName("minus")[4].style.display = "none";
            }}>
              <Link to="/contact" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Contact Us</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">
                  &nbsp;-
                </p>
              </Link>
            </li>
            <li className="px-[9px] li" 
            onMouseOver={function(){
              document.getElementsByClassName("plus")[5].style.display = "none";
              document.getElementsByClassName("minus")[5].style.display = "block";
            }} 
            onMouseOut={function(){
              document.getElementsByClassName("plus")[5].style.display = "block";
              document.getElementsByClassName("minus")[5].style.display = "none";
            }}>
              <Link to="/reviews" className="flex font-nunito font-semibold hover:text-[#fb3b3c] text-[15px]"
              >
                <p>Reviews</p>
                <p className="plus">&nbsp;+</p>
                <p className="hidden minus text-[19px] leading-[20px]">
                  &nbsp;-
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-end md:justify-center md:items-center mr-3 menu_icon cursor-pointer lg:hidden" onClick={function(){
          if(document.getElementsByClassName("mobile_menu")[0].style.height == "0px")
          {
              document.getElementsByClassName("mobile_menu")[0].style.height = "100%";
              document.getElementsByClassName("mobile_menu")[0].style.transition = "0.8s";
          }
          else
          {
              document.getElementsByClassName("mobile_menu")[0].style.height = "0px";
          }
        }}>
          <div className="w-[30px] h-full flex items-center lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              fill="currentColor"
              className="bi bi-list fill-white"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
        </div>
        <div className="flex">
          <div className=" hidden items-center mr-3 xl:flex text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-telephone fill-[#fb3b3c]"
              viewBox="0 0 16 16"
            >
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
            <a href="" className="hover:underline">
              &nbsp;+919369390970
            </a>
          </div>
          {
                isLogin === true ? (<Link to="/user-admin">
                  <div className="hidden md:flex w-[163px] bg-[#0049d0] blinkdiv cursor-pointer text-white h-[57px]"          
                  onMouseOver={function(){
            document.getElementsByClassName("blink")[0].style.width= "32px";
            document.getElementsByClassName("blink")[0].style.transition = "0.4s";
          }} 
          onMouseOut={function(){
            document.getElementsByClassName("blink")[0].style.width= "0px";
            document.getElementsByClassName("blink")[0].style.transition = "0.4s";
          }}
          >
            <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
              <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite] " />
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="font-nunito font-bold text-[16px]">
              Profile
              </div>
            </div>
          </div>
                </Link>):(<Link to="/user-login">
                  <div className="hidden md:flex w-[163px] bg-[#0049d0] blinkdiv cursor-pointer text-white h-[57px]"          
                  onMouseOver={function(){
            document.getElementsByClassName("blink")[0].style.width= "32px";
            document.getElementsByClassName("blink")[0].style.transition = "0.4s";
          }} 
          onMouseOut={function(){
            document.getElementsByClassName("blink")[0].style.width= "0px";
            document.getElementsByClassName("blink")[0].style.transition = "0.4s";
          }}
          >
            <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
              <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite] " />
            </div>
            <div className="h-full w-full flex items-center justify-center">
              <div className="font-nunito font-bold text-[16px]">
              Login
              </div>
            </div>
          </div>
                </Link>)
                }
        </div>
      </div>
    </div>
  </div>
  <div className="fixed bg-white mobile_menu h-0 overflow-hidden lg:hidden w-full">
    <ul className="">
      <li className="li">
        <Link to="/" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3" >
          <p>Home</p>
          <p className="plus">+</p>
        </Link>
      </li>
      {/* <li className="li">
        <Link to="/Shop" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3" >
          <p>Shop</p>
          <p className="plus">+</p>
        </Link>
      </li> */}
      <li className="li">
        <Link to="/about" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>Company</p>
          <p className="plus">+</p>
        </Link>
      </li>
      <li className="li dropdown_mobile_li cursor-pointer" 
      // onClick={function(){
      //   if(document.getElementsByClassName("dropdown_mobile_content")[0].style.height == "0px")
      //   {
      //     document.getElementsByClassName("dropdown_mobile_content")[0].style.height = "100%";
      //     document.getElementsByClassName("dropdown_mobile_content")[0].transition = "0.3s";
          
      //   }
      //   else
      //   {
      //     document.getElementsByClassName("dropdown_mobile_content")[0].style.height = "0px";
      //   }  
      // }}
      >
        <Link to="/it-solution" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>IT Solutions</p>
          <p className="plus">+</p>
        </Link>
      </li>
      <li className=" overflow-hidden pl-6" >
        <ul>
          <li className="mt-2 nav_links">
            <Link to="/website-development" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>Website Development</p>
            </Link>
          </li>
          <li className="mt-2 nav_links">
            <Link to="/application-development" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>Application Development</p>
            </Link>
          </li>
          {/* <li className="mt-2 nav_links">
            <a href="" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>IT Consultancy</p>
            </a>
          </li>
          <li className="mt-2 nav_links">
            <a href="" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>Industries IT</p>
            </a>
          </li>
          <li className="mt-2 nav_links">
            <a href="" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>Digital Services</p>
            </a>
          </li>
          <li className="mt-2 nav_links">
            <a href="" className="nav_links_a">
              <div className="nav_links_a_div nav_blink_div" />
              <p>Business Solutions</p>
            </a>
          </li> */}
        </ul>
      </li>
      <li className="li">
        <Link to="/blog" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3" >
          <p>Blog</p>
          <p className="plus">+</p>
        </Link>
      </li>
      <li className="li">
        <Link to="/contact" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>Contact Us</p>
          <p className="plus">+</p>
        </Link>
      </li>
      <li className="li">
        <Link to="/reviews" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>Reviews</p>
          <p className="plus">+</p>
        </Link>
      </li>
      <li className="li">
        {
          isLogin ? (<Link to={"/user-admin"} className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>Profile</p>
          <p className="plus">+</p>
        </Link>) : (<Link to="/user-login" className="flex font-nunito font-semibold text-[#0d2c13] hover:text-[#0049d0] hover:font-normal text-[15px] justify-between hover:bg-[#fb3b3c1a] px-2 py-3">
          <p>Login</p>
          <p className="plus">+</p>
        </Link>
        )
        }
        
      </li>
    </ul>
  </div>
  <div id="dropdown_it_solution" className="absolute left-[400px] top-[75px]  hidden p-6"
    onMouseOver={function(){
      document.getElementById("dropdown_it_solution").style.display = "block";
    }} 
    onMouseOut={function(){
      document.getElementById("dropdown_it_solution").style.display = "none";
    }}
    >
    <div className="bg-white rounded-md shadow-xl w-[200px] p-4">
      <ul>
        <li className="mt-2 nav_links">
          <Link to="/website-development" className="nav_links_a">
            <div className="nav_links_a_div nav_blink_div h-[5px] bg-[#0049d0] animate-blink" />
            <p>Web Development</p>
          </Link>
        </li>
        <li className="mt-2 nav_links">
          <Link to="/application-development" className="nav_links_a">
            <div className="nav_links_a_div nav_blink_div" />
            <p>App Development</p>
          </Link>
        </li>
        {/* <li className="mt-2 nav_links">
          <a href="" className="nav_links_a">
            <div className="nav_links_a_div nav_blink_div" />
            <p>IT Consultancy</p>
          </a>
        </li>
        <li className="mt-2 nav_links">
          <a href="" className="nav_links_a">
            <div className="nav_links_a_div nav_blink_div" />
            <p>Industries IT</p>
          </a>
        </li>
        <li className="mt-2 nav_links">
          <a href="" className="nav_links_a">
            <div className="nav_links_a_div nav_blink_div" />
            <p>Digital Services</p>
          </a>
        </li>
        <li className="mt-2">
          <a href="" className="">
            <div className="ml-2">
              <p>Business Solutions</p>
            </div>
          </a>
        </li> */}
      </ul>
    </div>
  </div>
        </nav>
    </div>
  );
}
export default Header;

