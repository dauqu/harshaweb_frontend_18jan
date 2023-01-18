import Razorpaybtn from "./images/Razorpay.png";

export default function Razorpay() {
    var amount = localStorage.getItem("amount");
    localStorage.removeItem("amount");
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    var options = {
      key: "rzp_live_Sz1UXNRoPKuW6u", // Enter the Key ID generated from the Dashboard
      amount: amount*100*80,
      currency: "INR",
      description: "Acme Corp",
      image: "https://avatars.githubusercontent.com/u/95732637?v=4",
      prefill: {
        email: "gaurav.kumar@example.com",
        contact: +919900000000,
      },
      handler: function (response) {
        alert(response.razorpay_payment_id);
        localStorage.setItem("razorpay_payment_id", response.razorpay_payment_id);
        console.log(response.razorpay_payment_id);
        window.location.href = "/razorpay-success";
      },
      modal: {
        ondismiss: function () {
          if (alert("Are you sure, you want to close the form?")) {
            var txt = "You pressed OK!";
            console.log("Checkout form closed by the user");
            window.location.href="/razorpay-failure";
          } else {
            txt = "You pressed Cancel!";
            console.log("Complete the Payment");
            window.location.href="/razorpay-failure";
          }
        },
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="App">
      <header className="App-header">
        <button className="App-link h-[40px] rounded-full bg-cover bg-center w-[250px]" onClick={displayRazorpay} style={{ backgroundImage: `url(${Razorpaybtn})` }}></button>
      </header>
    </div>
  );
}
