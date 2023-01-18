import Axios from "axios";
import { API } from "./Constant";

function Razorpay_success() {
  const razorpay_payment_id= localStorage.getItem("razorpay_payment_id");
  localStorage.removeItem("razorpay_payment_id");

  const projectType = localStorage.getItem("projectType");
    const req_id = localStorage.getItem("req_id");
    localStorage.removeItem("req_id");
    localStorage.removeItem("projectType");
  
    if(projectType == "Application")
    {
        Axios.put(`${API}/payment_id_status_app/${req_id}`, 
        {
            paymentid: razorpay_payment_id,
            payment_status : "Success",
        }).then(() => {console.log("Payment Id Updated");});
    }
    else
    {
        Axios.put(`${API}/payment_id_status_web/${req_id}`, 
        {
            paymentid: razorpay_payment_id,
            payment_status : "Success",
        }).then(() => {console.log("Payment Id Updated");});
    }

    return (
      <div className="min-w-full flex min-h-[100vh] justify-center items-center">
        <div className="text-[24px] w-[250px] h-[250px] flex items-center">
          <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-bag-check m-auto" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
          </svg>
          <p className="mt-3">Payment Succesful</p>
            <p className="mt-3">Payment ID: {razorpay_payment_id}</p>
          </div>
        </div>
      </div>
    );
  }
  export default Razorpay_success;
  