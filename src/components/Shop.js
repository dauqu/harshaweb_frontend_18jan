// import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";


import contact_banner from "./images/contact_banner.png";
import { Shop2Rounded } from "@mui/icons-material";





function Shop() {
  return (
    <div>
        <div><Header/></div>
        <div>
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]"                  style={{backgroundImage: `url(${contact_banner})`}}>
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">Shop</h1>
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
                      <a href="/">&nbsp;Shop</a>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div><Footer/></div>
    </div>
  );
}
export default Shop;

