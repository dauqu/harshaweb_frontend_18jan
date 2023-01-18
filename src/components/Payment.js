import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './Header';
import Razorpay from './Razorpay';
import contact_banner from "./images/contact_banner.png";

import Axios from "axios";
import { API } from "./Constant";

export default function Payment(){
    const location = useLocation();
    console.log(location, "useLocation Hook");
    const [amount, setAmount] = useState(location.state?.data);


    const projectType = localStorage.getItem("projectType");
    const req_id = localStorage.getItem("req_id");

    const setRazorpayGateway = () => {
        if(projectType == "Application")
        {
            Axios.put(`${API}/payment_gateway_app/${req_id}`, 
            {
                payment_gateway: "Razorpay",
                // req_id: req_id,
            }).then(() => {console.log("Payment Gateway Updated");});
        }
        else
        {
            console.log("Web");
            Axios.put(`${API}/payment_gateway_web/${req_id}`, 
            {
                payment_gateway: "Razorpay",
                // req_id: req_id,
            }).then(() => {console.log("Payment Gateway Updated");});
        }
      };

    const setPaypalGateway = () => {
        if(projectType == "Application")
        {
            Axios.put(`${API}/payment_gateway_app/${req_id}`, 
            {
                payment_gateway: "Paypal",
                // req_id: req_id,
            }).then(() => {console.log("Payment Gateway Updated");});
        }
        else
        {
            Axios.put(`${API}/payment_gateway_web/${req_id}`, 
            {
                payment_gateway: "Paypal",
                // req_id: req_id,
            }).then(() => {console.log("Payment Gateway Updated");});
        }
      };

    

    const paypal = useRef();

    useEffect(() => {
        if(amount && !isNaN(Number(amount)))
        window.paypal.Buttons(
            {
            createOrder: (data, actions, err) => 
            {
                return actions.order.create(
                    {
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "HarshaWeb Services",
                            amount: {
                                currency_code: "USD", 
                                value: Number(amount),
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order  = await actions.order.capture()
                console.log("Succesful order:" + order);
                window.location.href = "Paypal-success";
            },
            onError: (err) => {
                console.log(err);
                window.location.href = "Paypal-failure";
            }
        }).render(paypal.current);
    }, [])
    
    return(
        <div>
            <Header />
            <div className="flex_jc_ic h-[350px] relative top-[-57px] bg-cover bg-fixed z-[-1]" style={{backgroundImage:`url(${contact_banner})`}}>
                <div className="text-center text-white">
                    <h1 className="font-bold text-[50px] leading-[60px]">Payment</h1>
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
                            <a href="/">&nbsp;Payment</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <div className='w-[250px]'>
                    <div className='mb-5' onClick={setRazorpayGateway}><Razorpay /></div>
                    <div ref={paypal} className="max-w-[300px]" onClick={setPaypalGateway}></div>
                </div>
            </div>
        </div>
    )
}
