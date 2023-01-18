import Axios from "axios";
import { API } from "./Constant";

function Razorpay_failure() {
  const razorpay_payment_id = localStorage.getItem("razorpay_payment_id");
  const projectType = localStorage.getItem("projectType");
  const req_id = localStorage.getItem("req_id");
  
  // localStorage.removeItem("razorpay_payment_id");
  // localStorage.removeItem("req_id");
  // localStorage.removeItem("projectType");
  
    if(projectType == "Application")
    {
        Axios.put(`${API}/payment_id_status_app/${req_id}`, 
        {
            paymentid: razorpay_payment_id,
            payment_status : "Failed",
        }).then(() => {console.log("Payment Id and Status Updated");});
    }
    else
    {
        Axios.put(`${API}/payment_id_status_web/${req_id}`, 
        {
            paymentid: razorpay_payment_id,
            payment_status : "Failed",
        }).then(() => {console.log("Payment Id and Status Updated");});
    }
    return (
      <div>
        <div>
          Payment Failed
          <br />
          <div>
            <b>Payment ID:</b> {razorpay_payment_id}  
          </div>
        </div>
      </div>
    );
  }
  export default Razorpay_failure;
  