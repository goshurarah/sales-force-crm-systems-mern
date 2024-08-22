import React from "react";
import "./../../AboutUs/AboutUsPage/AboutUsPage.css";
import whyus_image from "./../../../Assets/9.svg";
function IntegrationDetailNavbar() {
  return (
    <div className="AboutUsBook_main_div">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <div className="main_div_bg_aboutus_left" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
          <div className="d-flex flex-row">
            <p className="aboutus_heading_sky">Integration</p>
            {/* <p className="aboutus_heading_blue">Detail</p> */}
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <div className="main_div_about_us_image_style">
            <div className="d-flex justify-content-end">
              <img src={whyus_image} className="aboutusiamge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntegrationDetailNavbar;
