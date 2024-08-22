import React from "react";
import "./../BookCleaningServicesToday/BookCleaningServicesToday.css";
import cleaning_image from "./../../../Assets/bookcleanings_image.png";
function BookCleaningServicesToday() {
  return (
    <div className="main_div_BookCleaningServicesToday">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-1 col-12"></div>
        <div className="col-lg-3 col-md-12 col-3 col-12">
          <div className="cleaning_image_style"></div>
        </div>
        <div className="col-lg-7 col-md-12 col-7 col-12">
          <div className="d-flex flex-row">
            <p className="sky_heading_book">BOOK</p>
            <p className="blue_heading_book">A Cleaning</p>
          </div>
          <p className="blue_heading_book1">Service Today</p>
          <p className="para_desp_book">
          Ready to take your business to the next level? Book a consultation with our experts today and discover how our comprehensive services can help you achieve your goals.
          </p>
          <div className="d-flex justify-content-between">
            <button className="btn_book">Book Now</button>
            <div className="round_img_sky_book"></div>
          </div>
        </div>
        <div className="col-lg-1 col-md-12 col-1 col-12"></div>
      </div>
    </div>
  );
}

export default BookCleaningServicesToday;
