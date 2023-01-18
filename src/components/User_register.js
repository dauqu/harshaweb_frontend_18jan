import { Link } from "react-router-dom";
// import "./header.css";
import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";
import { ToastContainer, toast } from 'react-toastify'
import { useState } from "react";
import axios from "axios";
import { API } from "./Constant";


function Reviews() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  async function Postdata() {
    const response = axios.post(`${API}/new_user_register`, {
        name: name,
        username: username,
        phone: phone,
        address: address,
        email: email,
        password: password,
        age: age
      })
      .then(function (response) {
        if(response.status === 200){
          toast.success("user created successfully");
          setTimeout(() => {
            window.location.href="user-login";
          }, 2000);
        }
      })
      .catch(function (error) {
        if(error.response.data.status === "warning"){
          toast.warn(error.response.data.message);
        }else{
          toast.error(error.response.data.message);
        }
    });
       
  }

  return (
    <div>
      <ToastContainer />
      <div>
        <Header />
      </div>
      <div>
        <div
          className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]"
          style={{ backgroundImage: `url(${contact_banner})` }}
        >
          <div className="text-center text-white">
            <h1 className="font-bold text-[50px] leading-[60px]">User - Register</h1>
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
                <a href="/">&nbsp;User - Register</a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="p-3">
            <div className="w-full m-auto sm:w-[500px] md:w-[700px] lg:w-[900px] xl:w-[1100px]">
              <div className="max-w-[600px] m-auto mt-[50px] p-10  rounded-[2px] my-12">
                <h1 className="font-semibold text-[28px] leading-[36px] sm:text-[30px] sm:leading-[46px] md:text-[36px] md:leading-[46px] lg:text-[40px] lg:leading-[50px] text-[#0d2c13] hover:text-[#0049d0]">Register</h1>
                  <div className="my-2 w-full">
                    <input type="text" placeholder="Your Name" name={name} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="my-2 w-full">
                    <input type="text" placeholder="Your Username" name={username} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setUsername(e.target.value)} />
                  </div>
                  <div className="my-2 w-full">
                    <input type="number" placeholder="Your Phone Number" name={phone} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="my-2 w-full">
                    <input type="text" placeholder="Your Address" name={address} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="my-2 w-full">
                    <input type="email" placeholder="Your Email" name={name} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="my-2 w-full">
                    <input type="password" placeholder="Your Password" name={username} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="my-2 w-full">
                    <input type="text" placeholder="Your Age" name={name} className="border hover:border-[#fb3b3c] p-3 w-full placeholder:text-[#0d2c13]" onChange={(e) => setAge(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button type="submit" name="submit" onClick={() => Postdata()}>
                      <div className="flex w-[113px] h-[50px] bg-[#0049d0] blinkdiv cursor-pointer text-white"
                      onMouseOver={function () {
                        document.getElementsByClassName("blink")[1].style.width = "32px";
                        document.getElementsByClassName("blink")[1].style.transition = "0.4s";
                      }}
                      onMouseOut={function () {
                        document.getElementsByClassName("blink")[1].style.width = "0px";
                        document.getElementsByClassName("blink")[1].style.transition = "0.4s";
                      }}>
                        <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                          <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="font-nunito font-bold text-[16px]">Register</div>
                        </div>
                      </div>
                    </button>
                    <Link to="/user-login">
                      <div className="flex w-[93px] h-[50px] bg-[#0049d0] blinkdiv cursor-pointer text-white"
                      onMouseOver={function () {
                        document.getElementsByClassName("blink")[2].style.width = "32px";
                        document.getElementsByClassName("blink")[2].style.transition = "0.4s";
                      }}
                      onMouseOut={function () {
                        document.getElementsByClassName("blink")[2].style.width = "0px";
                        document.getElementsByClassName("blink")[2].style.transition = "0.4s";
                      }}>
                        <div className="h-full w-[0px] bg-[#fb3b3c] flex justify-center items-center blink">
                          <div className="w-[10px] h-[10px] bg-white animate-[blink_1s_ease-out_infinite]" />
                        </div>
                        <div className="h-full w-full flex items-center justify-center">
                          <div className="font-nunito font-bold text-[16px]">Login</div>
                        </div>
                      </div>
                    </Link>
                  </div>
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
