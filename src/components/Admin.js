import { Link } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import { MdOutlineDeleteOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";
import { API } from "./Constant";

function Admin() {
  const [webRequest, setWebRequest] = useState([]);
  const [appRequest, setAppRequest] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState("");

  const getWebRequest = () => {
    axios.get(`${API}/website_request`).then((response) => {
      // console.log(response);header
      setWebRequest(response.data.all_files);
    });
  };

  const getAppRequest = () => {
    axios.get(`${API}/app_request`).then((response) => {
      // console.log(response);
      setAppRequest(response.data.all_files);
    });
  };
  
  const getQuotes = () => {
    axios.get(`${API}/request_quote`).then((response) => {
      // console.log(response);
      setQuotes(response.data);
    });
  };
  
  const getContacts = () => {
    axios.get(`${API}/contact`).then((response) => {
      // console.log(response);
      setContacts(response.data);
    });
  };

  getWebRequest();
  getAppRequest();
  getQuotes();
  getContacts();

  // LOGOUT function
  
  async function Handlelogout() {
    const response = axios
      .get(`${API}/logout`)
      .then((res) => {
        console.log(response);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
        alert("Logout Failed");
      });
  }

  const deleteWebRequest = (id) => {
    // console.log(id);
    Axios.delete(`${API}/website_request/${id}`).then(
      (response) => {
        setWebRequest(
          webRequest.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  const deleteAppRequest = (id) => {
    Axios.delete(`${API}/app_request/${id}`).then(
      (response) => {
        setAppRequest(
          appRequest.filter((val) => {
            return val.id !== id;
          })
        );
      }
    );
  };

  //  console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios
        .get(`${API}/admin_profile`, {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }

  }
  
  const [isLogin, setIsLogin] = useState([])
  async function CheckLogin() {
    axios.get(`${API}/login/check_valid_token`).then((res) =>{
      setIsLogin(res.data);
    })
  }

  useEffect(() => {
    GetUsers();
    CheckLogin();
  }, []);

  const gotoLogin = () => {
      window.location.href = "/login";
  }
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {
            isLogin === true ? (<div>
            <div
              className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]"
              style={{ backgroundImage: `url(${contact_banner})` }}
            >
              <div className="text-center text-white">
                <h1 className="font-bold text-[50px] leading-[60px]">Admin</h1>
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
                    <a href="/">&nbsp;Admin</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-wrap w-full">
              <button 
                className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block w-[200px]"
                type="button"
                onClick={function () {
                  document.getElementsByClassName(
                    "website_request"
                  )[0].style.display = "block";
                  document.getElementsByClassName(
                    "application_request"
                  )[0].style.display = "none";
                }}
              >
                Get Website Enquiries
              </button>
              <button
                className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block"
                onClick={function () {
                  document.getElementsByClassName(
                    "website_request"
                  )[0].style.display = "none";
                  document.getElementsByClassName(
                    "application_request"
                  )[0].style.display = "block";
                }}
                type="button"
              >
                Get Application Enquiries
              </button>
              <button
                className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block"
                type="button"
                onClick={function () {
                  document.getElementsByClassName("quotes")[0].style.display =
                    "block";
                  document.getElementsByClassName(
                    "application_request"
                  )[0].style.display = "none";
                  document.getElementsByClassName(
                    "website_request"
                  )[0].style.display = "none";
                  document.getElementsByClassName("contacts")[0].style.display =
                    "none";
                }}
              >
                Get Quotes
              </button>
              <button
                className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block"
                type="button"
                onClick={function () {
                  document.getElementsByClassName("contacts")[0].style.display =
                    "block";
                  document.getElementsByClassName(
                    "application_request"
                  )[0].style.display = "none";
                  document.getElementsByClassName(
                    "website_request"
                  )[0].style.display = "none";
                  document.getElementsByClassName("quotes")[0].style.display =
                    "none";
                }}
              >
                Get Contacts
              </button>
              <button
                className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block"
                type="button"
                onClick={() => Handlelogout()}
              >
                Logout
              </button>
            </div>
            <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 application_request hidden">
              <h1 className="text-center my-6 text-[30px] font-semibold">Application Request</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone No.</th>
                      <th className="px-4 py-2 border">Message</th>
                      <th className="px-4 py-2 border">Application Technology</th>
                      <th className="px-4 py-2 border">Application Type</th>
                      <th className="px-4 py-2 border">Pages</th>
                      <th className="px-4 py-2 border">Est. Cost</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {appRequest.length > 0 && appRequest.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">{val.name}</td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.phoneNumber}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                            <td className="px-4 py-2 border">{val.appTech}</td>
                            <td className="px-4 py-2 border">{val.appType}</td>
                            <td className="px-4 py-2 border">{val.numberOfPages}</td>
                            <td className="px-4 py-2 border">{val.totalEstimate}</td>
                            <td className="px-4 py-2 border">
                              <div className="flex items-center justify-center">
                                {/* <FiEdit className="text-[17px] mr-1 cursor-pointer" /> */}
                                <button onClick={() => deleteAppRequest(val._id)}>
                                  <MdOutlineDeleteOutline className="text-[19px] cursor-pointer" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 website_request hidden">
              <h1 className="text-center my-6 text-[30px] font-semibold">Website Request</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone No.</th>
                      <th className="px-4 py-2 border">Message</th>
                      <th className="px-4 py-2 border">Frontend</th>
                      <th className="px-4 py-2 border">Backend</th>
                      <th className="px-4 py-2 border">Database</th>
                      <th className="px-4 py-2 border">Type</th>
                      <th className="px-4 py-2 border">Pages</th>
                      <th className="px-4 py-2 border">Est. Cost</th>
                      <th className="px-4 py-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {webRequest.length>0 && webRequest.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">{val.name}</td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.phoneNumber}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                            <td className="px-4 py-2 border">{val.frontend}</td>
                            <td className="px-4 py-2 border">{val.backend}</td>
                            <td className="px-4 py-2 border">{val.database}</td>
                            <td className="px-4 py-2 border">{val.webType}</td>
                            <td className="px-4 py-2 border">{val.numberOfPages}</td>
                            <td className="px-4 py-2 border">{val.totalEstimate}</td>
                            <td className="px-4 py-2 border">
                              <div className="flex items-center justify-center">
                                {/* <FiEdit className="text-[17px] mr-1 cursor-pointer" /> */}
                                <MdOutlineDeleteOutline
                                  className="text-[19px] cursor-pointer"
                                  onClick={() => {
                                    deleteWebRequest(val._id);
                                  }}
                                />
                              </div>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 quotes hidden">
              <h1 className="text-center my-6 text-[30px] font-semibold">Quotes</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Subject</th>
                      <th className="px-4 py-2 border">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.length > 0 && quotes.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">
                              {val.name}
                            </td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.subject}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 contacts hidden">
              <h1 className="text-center my-6 text-[30px] font-semibold">Contacts</h1>
              <div className="overflow-x-scroll">
                <table className="w-full">
                  <thead className="w-full h-[50px]">
                    <tr className="w-full text-left text-[#464A53]">
                      <th className="px-4 py-2 border">First Name</th>
                      <th className="px-4 py-2 border">Last Name</th>
                      <th className="px-4 py-2 border">Email</th>
                      <th className="px-4 py-2 border">Phone</th>
                      <th className="px-4 py-2 border">Service</th>
                      <th className="px-4 py-2 border">Subject</th>
                      <th className="px-4 py-2 border">Message</th>
                      <th className="px-4 py-2 border">Date-Time</th>
                      {/* <th className="px-4 py-2 border">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.length > 0 && contacts.map((val, key) => {
                      return (
                        <>
                          <tr className="text-left text-[#272727] text-[14px] h-[45px]">
                            <td className="px-4 py-2 border text-[#008eff]">
                              {val.fname}
                            </td>
                            <td className="px-4 py-2 border">{val.lname}</td>
                            <td className="px-4 py-2 border">{val.email}</td>
                            <td className="px-4 py-2 border">{val.phone}</td>
                            <td className="px-4 py-2 border">{val.service}</td>
                            <td className="px-4 py-2 border">{val.subject}</td>
                            <td className="px-4 py-2 border">{val.message}</td>
                            <td className="px-4 py-2 border">{val.datetime}</td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (<div className="w-[150px] h-[36px] text-white bg-black text-center leading-[36px] m-auto rounded-md"><Link to="/login">Please Login</Link></div>)
        }

        
      </div>
      <div><Footer /></div>
    </div>
  );
}
export default Admin;
