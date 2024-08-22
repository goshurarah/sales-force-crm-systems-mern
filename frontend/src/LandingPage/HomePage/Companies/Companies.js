import React from "react";
import "./../Companies/Companies.css";
import left_img from "./../../../Assets/left_companies_img.svg";
import right_img from "./../../../Assets/right_company_img.svg";
import logos from "./../../../Assets/companies_logo.svg";
function Companies() {
  return (
    <div className="main_div_companies">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <img src={left_img} className="left_img_style" />
        </div>
        <div className="col-lg-5 col-md-11 col-sm-11 col-11">
          <div className="main_div_heading_sky_blue">
            <div className="d-flex flex-row">
              <p className="sky_heading_companies">OVER 150,000 </p>
              <p className="blue_heading_companies">companies,</p>
            </div>
            <p className="blue_heading_companies1">
              both big and small, are growing their business with Salesforce.
            </p>
            <p className="desp_companies">
            Imagine the power of joining a thriving community of successful businesses! Thousands of companies worldwide have chosen Salesforce to streamline operations and unlock significant growth. See how our solutions can empower your team and fuel your company's ascent to the top. Explore real-world customer stories and discover the transformative power of Salesforce for yourself!
            </p>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
            <img src={logos}  className="companies_logo_style"/>
        </div>
        <div className="col-lg-1 col-md-12 col-sm-12 col-12">
            <img src={right_img} className="right_company_style" />
        </div>
      </div>
    </div>
  );
}

export default Companies;
