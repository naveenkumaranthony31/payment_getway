import "./App.css";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Lottie from "lottie-react";
import animation from"./animation.json";
function App() {
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("please enter amount");
    } else {
      var options = {
        key: "rzp_test_tjBh9RaSuU0UWu",
        key_secret: "kMgHcYa3Ao2RDDxRhRnN0YND",
        amount: amount * 100,
        currency: "INR",
        name: "STARTUP_PROJECTS",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Naveen kumar",
          email: "naveenthiwary20@gmail.com",
          contact: "7982989893",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6"> <Lottie className="animation" animationData={animation}/></div>
        <div className="col-lg-6">
          <img src="../img/razorpay1.avif" alt="...." width="200" height="150"/>
          <br />
          <input
          className="textbox"
            type="text"
            placeholder="$ 0"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
          />
          <br />
          <br />
          <button className="btn btn-primary" onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
