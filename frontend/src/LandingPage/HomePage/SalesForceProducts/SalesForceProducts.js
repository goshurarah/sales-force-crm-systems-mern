import React, { useState } from "react";
import "./../SalesForceProducts/SalesForceProducts.css";
import leftimage from "./../../../Assets/left_sales_product_image.svg";
import Slider from "react-slick";
import white_small_busines from "./../../../Assets/small_business_white.png";
import services_cloud_white from "./../../../Assets/servicecloud_white.png";
import marketing_cloud_white from "./../../../Assets/m_cloud_white.png";
import sales_cloud_blue from "./../../../Assets/cloud_blue.png";

import blue_small_busines from "./../../../Assets/small_business_blue.png";
import services_cloud_blue from "./../../../Assets/services_cloud_blue.png";
import marketing_cloud_blue from "./../../../Assets/marketing_cloud_blue.png";
import sales_cloud_white from "./../../../Assets/sales_cloud_white.png";

import blue_round from "./../../../Assets/blue_round.png";
import white_arrow from "./../../../Assets//white_arrow.png";

function SalesForceProducts() {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 2000,

    beforeChange: (current, next) => setActiveSlide(next),

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,

          beforeChange: (current, next) => setActiveSlide(next),
        },
      },

      {
        breakpoint: 991,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,

          beforeChange: (current, next) => setActiveSlide(next),
        },
      },

      {
        breakpoint: 425,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,

          beforeChange: (current, next) => setActiveSlide(next),
        },
      },
    ],
  };

  return (
    <div className="main_div_SalesForceProducts">
      <div className="hr_row_line"></div>
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-2 col-2">
          <img src={leftimage} className="left_image_style_productsales" />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-10 col-10">
          <p className=" sky_heading_salesproduct">Services</p>
          <p className="blue_heading_salesproduct">SALESFORCE PRODUCTS</p>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
          <div className="main_div_cards_slick">
            <p className="desp_card_slick">
              Cras mattis consectetur purus sit amet fermentum. Aenean lacinia
              bibendum nulla sed consectetur.
            </p>
            <Slider {...settings}>
              {activeSlide === 0 ? (
                <div className={` ${activeSlide === 0 ? "main_div_card" : ""}`}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={blue_small_busines}
                      className="icon_card"
                      alt="White Small Business"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Small Business</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="para_in_card">
                      Sales, service, and email outreach tools in a single app.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="blue_div_in_card">
                      <img src={white_arrow} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <img src={white_small_busines} className="icon_card" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Small Business</p>
                  </div>
                </div>
              )}

              {activeSlide === 1 ? (
                <div className={` ${activeSlide === 1 ? "main_div_card" : ""}`}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={sales_cloud_blue}
                      className="icon_card"
                      alt="White Small Business"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Sales Cloud</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="para_in_card">
                      Close more deals and speed up growth with the #1 CRM.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="blue_div_in_card">
                      <img src={white_arrow} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <img src={sales_cloud_white} className="icon_card" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Sales Cloud</p>
                  </div>
                </div>
              )}

              {activeSlide === 2 ? (
                <div className={` ${activeSlide === 2 ? "main_div_card" : ""}`}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={services_cloud_blue}
                      className="icon_card"
                      alt="White Small Business"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Service Cloud</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="para_in_card">
                      Make customers happy faster and build loyalty with Service
                      Cloud.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="blue_div_in_card">
                      <img src={white_arrow} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <img src={services_cloud_white} className="icon_card" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Service Cloud</p>
                  </div>
                </div>
              )}

              {activeSlide === 3 ? (
                <div className={` ${activeSlide === 3 ? "main_div_card" : ""}`}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={marketing_cloud_blue}
                      className="icon_card"
                      alt="White Small Business"
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Marketing Cloud</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="para_in_card">
                      Build customer relationships for life with data-first
                      digital marketing.
                    </p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <div className="blue_div_in_card">
                      <img src={white_arrow} />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="d-flex justify-content-center">
                    <img src={marketing_cloud_white} className="icon_card" />
                  </div>
                  <div className="d-flex justify-content-center">
                    <p className="heading_card">Marketing Cloud</p>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-12 col-12"></div>
      </div>
    </div>
  );
}

export default SalesForceProducts;
