import React from "react";
import "./../WhatOurCustomerSay/WhatOurCustomerSay.css";
import left from "./../../../Assets/left_sales_product_image.svg";
import righticon from "./../../../Assets/right_clent_say.svg";
import reviewlogo from "./../../../Assets/reviewlogo.png";
import review_client_img from "./../../../Assets/div.testimonial-thumb.png";
import Slider from "react-slick";

import leftarrow from "./../../../Assets/leftarrow.png";
import rightarrow from "./../../../Assets/right_arrow.png";

import tst1 from "./../../../Assets/tst2-1.png";
import tst2 from "./../../../Assets/tst3-1.png";
import tst3 from "./../../../Assets/tst1-1.png";
function WhatOurCustomerSay() {
  var settings = {
    
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img className="brands_arrow" src={rightarrow} />,
    prevArrow: <img className="brands_arrow" src={leftarrow} />,
  };


  return (
    <div className="main_div_WhatOurCustomerSay">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <div className="blue_circle_customersay"></div>
          <img className="righticon_clientsay" src={left} />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-10">
          <div className="main_div_automation_running">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <p className="number_running_automation">957</p>
                <p className="heading_running_automation">Automation Running</p>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <p className="number_running_automation">2,300+</p>
                <p className="heading_running_automation">
                  Annual Hours Saved By Automation
                </p>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <p className="number_running_automation">85+</p>
                <p className="heading_running_automation">
                  Platforms Integrated
                </p>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                <p className="number_running_automation">7,994</p>
                <p className="heading_running_automation">
                  Shots of Espresso Per Year
                </p>
              </div>
            </div>
          </div>

          <p className="what_our_customer_say_heading">
            What Our Customers Say?
          </p>

          <div className="main_div_client_Say">
            <div className="d-flex justify-content-center">
              <img src={reviewlogo} className="review_logo" />
            </div>

            <Slider {...settings}>
              <div>
                <p className="para_review_customersay">
                  Choosing 360SynergyTech was a game-changer for our small
                  business. As a boutique retail store, we didn't have a tech
                  background, and ...
                </p>

                <p className="review_heading_custumersay">Maria Rodriguez</p>
                <p className="review_heading_below_custumersay">
                  OWNER, CHIC BOUTIQUE
                </p>

                <div className="d-flex justify-content-center">
                  <img src={tst1} className="review_client_img" />
                </div>
              </div>
              <div>
                <p className="para_review_customersay">
                  We stumbled upon 360SynergyTech when looking for a tech
                  partner that could adapt to our unique requirements. Their
                  team proved to ...
                </p>

                <p className="review_heading_custumersay">Alan Turner</p>
                <p className="review_heading_below_custumersay">
                  FOUNDER, ARTISAN SWEETS
                </p>

                <div className="d-flex justify-content-center">
                  <img src={tst2} className="review_client_img" />
                </div>
              </div>

              <div>
                <p className="para_review_customersay">
                  360SynergyTech has been a hidden gem for our organization.
                  Coming from a background unrelated to IT, we were in dire need
                  of a technology partner ...
                </p>

                <p className="review_heading_custumersay">Jonathan Foster</p>
                <p className="review_heading_below_custumersay">
                  P. MANAGER OF PRECISION LTD
                </p>

                <div className="d-flex justify-content-center">
                  <img src={tst3} className="review_client_img" />
                </div>
              </div>
            </Slider>
          </div>
          <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
            <div className="col-lg-10 col-md-10 col-sm-10 col-10"></div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
          <div className="sky_round_circle"></div>
          <div className="d-flex justify-content-end">
            <img src={righticon} className="right_icon_style" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatOurCustomerSay;
