import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import contact_banner from "./images/contact_banner.png";

import { MdOutlineDeleteOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";
import { API } from "./Constant";

function User_admin() {
  const [webRequest, setWebRequest] = useState([]);
  const [appRequest, setAppRequest] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [user, setUser] = useState({});

  const getWebRequest = () => {
    axios.get(`${API}/website_request`).then((response) => {
      setWebRequest(response.data.all_files);
    });
  };

  const getAppRequest = () => {
    axios.get(`${API}/app_request`).then((response) => {
      setAppRequest(response.data.all_files);
    });
  };

  const getQuotes = () => {
    axios.get(`${API}/request_quote`).then((response) => {
      setQuotes(response.data);
    });
  };

  const getContacts = () => {
    axios.get(`${API}/contact`).then((response) => {
      setContacts(response.data);
    });
  };
  useEffect(() => {
    getWebRequest();
    getAppRequest();
    getQuotes();
    getContacts();
  }, []);

  // LOGOUT function
  async function Handlelogout() {
    const response = axios
      .get(`${API}/user_logout`)
      .then((res) => {
        console.log(response);
        window.location.href = "user-login";
      })
      .catch((error) => {
        console.log(error);
        alert("Logout Failed");
      });
  }

  const deleteWebRequest = (id) => {
    Axios.delete(`${API}/website_request/${id}`).then((response) => {
      setWebRequest(
        webRequest.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const deleteAppRequest = (id) => {
    Axios.delete(`${API}/app_request/${id}`).then((response) => {
      setAppRequest(
        appRequest.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  //  console.log(setUser.length);
  async function GetUsers() {
    try {
      const response = await axios
        .get(`${API}/user_profile`, {
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

  const [isLogin, setIsLogin] = useState(false);
  async function CheckLogin() {
    axios
      .get(`${API}/user_login/check_valid_token`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLogin(res.data);
        console.log();
      });
  }

  useEffect(() => {
    GetUsers();
    CheckLogin();
  }, []);

  const gotoLogin = () => {
    window.location.href = "user-login";
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]"
        style={{ backgroundImage: `url(${contact_banner})` }}
      >
        <div className="text-center text-white">
          <h1 className="font-bold text-[50px] leading-[60px]">User</h1>
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
              <a>&nbsp;Home&nbsp;</a>
            </div>
            <div>
              <a>&nbsp;&gt;&nbsp;</a>
            </div>
            <div className="text-[#fb3b3c] cursor-pointer">
              <a>&nbsp;User</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isLogin === true ? (
          <div>
            {
              <>
                <h1 className="text-[24px] font-semibold text-center">
                  Profile
                </h1>
                <div className="overflow-x-scroll">
                  <table className="w-[1000px] mx-auto mt-[40px]">
                    <thead>
                      <tr className="text-left">
                        <th className="p-3 border">Id</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Username</th>
                        <th className="p-3 border">Email</th>
                        <th className="p-3 border">Phone Number</th>
                        <th className="p-3 border">Address</th>
                        <th className="p-3 border">Age</th>
                      </tr>
                    </thead>
                    <tr className="w-full">
                      <td className="p-3 border">{user.name}</td>
                      <td className="p-3 border">{user.name}</td>
                      <td className="p-3 border">{user.username}</td>
                      <td className="p-3 border">{user.email}</td>
                      <td className="p-3 border">{user.phone}</td>
                      <td className="p-3 border">{user.address}</td>
                      <td className="p-3 border">{user.age}</td>
                    </tr>
                  </table>
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
                      document.getElementsByClassName(
                        "quotes"
                      )[0].style.display = "block";
                      document.getElementsByClassName(
                        "application_request"
                      )[0].style.display = "none";
                      document.getElementsByClassName(
                        "website_request"
                      )[0].style.display = "none";
                      document.getElementsByClassName(
                        "contacts"
                      )[0].style.display = "none";
                    }}
                  >
                    Get Quotes
                  </button>
                  <button
                    className="border-2 m-3 px-3 py-1 rounded-sm hover:bg-slate-100 block"
                    type="button"
                    onClick={function () {
                      document.getElementsByClassName(
                        "contacts"
                      )[0].style.display = "block";
                      document.getElementsByClassName(
                        "application_request"
                      )[0].style.display = "none";
                      document.getElementsByClassName(
                        "website_request"
                      )[0].style.display = "none";
                      document.getElementsByClassName(
                        "quotes"
                      )[0].style.display = "none";
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
                  <h1 className="text-center my-6 text-[30px] font-semibold">
                    Application Request
                  </h1>
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
                        {appRequest.length > 0 &&
                          appRequest.map((val, key) => {
                            return val.email === user.email ? (
                              <tr
                                className="text-left text-[#272727] text-[14px] h-[45px]"
                                key={key}
                              >
                                <td className="px-4 py-2 border text-[#008eff]">
                                  {val.name}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.email}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.phonenumber}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.message}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.app_tech}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.app_type}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.number_of_pages}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.estimated_cost}
                                </td>
                                <td className="px-4 py-2 border">
                                  <div className="flex items-center justify-center">
                                    {/* <FiEdit className="text-[17px] mr-1 cursor-pointer" /> */}
                                    <button
                                      onClick={() => deleteAppRequest(val.id)}
                                    >
                                      <MdOutlineDeleteOutline className="text-[19px] cursor-pointer" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ) : null;
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 website_request hidden">
                  <h1 className="text-center my-6 text-[30px] font-semibold">
                    Website Request
                  </h1>
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
                        {webRequest.length > 0 &&
                          webRequest.map((val, key) => {
                            return val.email === user.email ? (
                              <>
                                <tr
                                  className="text-left text-[#272727] text-[14px] h-[45px]"
                                  key={key}
                                >
                                  <td className="px-4 py-2 border text-[#008eff]">
                                    {val.name}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.email}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.phone}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.message}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.frontend}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.backend}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.database_tech}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.web_type}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.number_of_pages}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    {val.estimated_cost}
                                  </td>
                                  <td className="px-4 py-2 border">
                                    <div className="flex items-center justify-center">
                                      {/* <FiEdit className="text-[17px] mr-1 cursor-pointer" /> */}
                                      <MdOutlineDeleteOutline
                                        className="text-[19px] cursor-pointer"
                                        onClick={() => {
                                          deleteWebRequest(val.id);
                                        }}
                                      />
                                    </div>
                                  </td>
                                </tr>
                              </>
                            ) : null;
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 quotes hidden">
                  <h1 className="text-center my-6 text-[30px] font-semibold">
                    Quotes
                  </h1>
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
                        {quotes.length > 0 &&
                          quotes.map((val, key) => {
                            return val.email === user.email ? (
                              <tr
                                className="text-left text-[#272727] text-[14px] h-[45px]"
                                key={key}
                              >
                                <td className="px-4 py-2 border text-[#008eff]">
                                  {val.name}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.email}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.subject}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.message}
                                </td>
                              </tr>
                            ) : null;
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="xl:w-[1250px] lg:w-[1000px] md:w-[700px] sm:w-[500px] w-full mx-auto my-10 contacts hidden">
                  <h1 className="text-center my-6 text-[30px] font-semibold">
                    Contacts
                  </h1>
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
                        {contacts.length > 0 &&
                          contacts.map((val, key) => {
                            return val.email === user.email ? (
                              <tr
                                className="text-left text-[#272727] text-[14px] h-[45px]"
                                key={key}
                              >
                                <td className="px-4 py-2 border text-[#008eff]">
                                  {val.fname}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.lname}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.email}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.phone}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.service}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.subject}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.message}
                                </td>
                                <td className="px-4 py-2 border">
                                  {val.datetime}
                                </td>
                              </tr>
                            ) : null;
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            }
          </div>
        ) : (
          <Link to="/user-login" className="w-full flex justify-center">
            <button className="text-white text-[12px] px-5 py-1 bg-black rounded-sm text-center">
              Please Login
            </button>
          </Link>
        )}
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
export default User_admin;
