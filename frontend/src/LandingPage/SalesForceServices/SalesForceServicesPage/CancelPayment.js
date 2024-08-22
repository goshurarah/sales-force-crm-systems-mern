import React from "react";
import { Link } from "react-router-dom";
import paymentsucessicon from "./../../../Assets/money.png";
import "./../SalesForceServicesPage/SalesForceServicesPage.css";
function CancelPayment() {
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <p className="cancel_payment_text">Payment Cancel</p>
      </div>
      <div className="d-flex justify-content-center">
        <img
          className="cancelpaymenticon"
          src={paymentsucessicon}
          alt="cancelpaylogo"
        />
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <p className="got_to_hoempage">Go to Homepage</p>
        </Link>
      </div>
    </div>
  );
}

export default CancelPayment;
