import React from "react";
import { Link } from "react-router-dom";
import "./../SalesForceServicesPage/SalesForceServicesPage.css";
import paymentsucessicon from "./../../../Assets/paymentsucess.png";
function SuccessfulPayment() {
  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <p className="successfull_payment_text"> Successfull payment </p>
      </div>
      <div className="d-flex justify-content-center">
        <img className="" src={paymentsucessicon} alt="successogo" />
      </div>
      <div className="d-flex justify-content-center">
        <Link to="/">
          <p className="got_to_hoempage">Go to Homepage</p>
        </Link>
      </div>
    </div>
  );
}

export default SuccessfulPayment;
