import React from "react";
import "./../WhyUsBook/WhyUsBook.css";
import whyus_image from "./../../../Assets/9.svg";
import withothers_image from "./../../../Assets/bookcleanings_image.svg";
function WhyUsBook() {




    
  return (
    <div className="WhyUsBook_main_div">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <div className="main_div_bg_whyus_left" />
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-12">
          <div className="d-flex flex-row">
            {" "}
            <p className="whyus_heading_sky">WHY</p>
            <p className="whyus_heading_blue">US?</p>
          </div>

          <img src={withothers_image} className="withothers_image" />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-12">
          <div className="main_div_why_us_image_style">
            <div className="d-flex justify-content-end">
              <img src={whyus_image} className="whyusiamge" />
            </div>
          </div>

          <div className="d-flex flex-row">
            <p className="sky_heading_book">BOOK </p>
            <p className="blue_heading_book"> A Cleaning</p>
          </div>
          <p className="blue_heading_book1">Service Today</p>
          <p className="para_detail_book_whyus">
          Ready to take your business to the next level? Book a consultation with our experts today and discover how our comprehensive services can help you achieve your goals.
          </p>
          <div className="d-flex justify-content-between">
          <button className="btn_book_now_whyus">Book Now</button>
          <div className="round_sky_div_booknow" />
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default WhyUsBook;
