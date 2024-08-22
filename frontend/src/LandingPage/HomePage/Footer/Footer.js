import React from "react";
import "./../Footer/Footer.css";
import youtube from "./../../../Assets/youtubeLink.png";
import fb from "./../../../Assets/fbLink.png";
import insta from "./../../../Assets/instaLink.png";
import send_email_btn from "./../../../Assets/send_email_icon.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="main_div_footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-7 col-sm-7 col-12">
            <p className="heading_aboutus_footer">About Us</p>
            <div className="hr_tag_footer"></div>
            <p className="para_aboutus_footer">
              Busines Consulting is optimize standing manufactured products and
              installation synergy. Professionally predominat why professional
              business
            </p>
            <img src={youtube} className="social_links_footer" />
            <img src={fb} className="social_links_footer" />
            <img src={insta} className="social_links_footer" />
          </div>
          <div className="col-lg-2 col-md-5 col-sm-5 col-12">
            <p className="heading_aboutus_footer">Company</p>
            <div className="hr_tag_footer"></div>
            <Link to="/">
              <p className="para_company_footer">Home</p>
            </Link>
            <Link to="/aboutus">
              <p className="para_company_footer1">About Us</p>
            </Link>

            <Link to="/whyus">
              <p className="para_company_footer1">Why Us</p>
            </Link>
            <Link to="/blogs">
              <p className="para_company_footer1">Blogs</p>
            </Link>
            <Link to="/integration">
              <p className="para_company_footer1">Integration</p>
            </Link>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <p className="heading_aboutus_footer">Services</p>
            <div className="hr_tag_footer"></div>
            <p className="para_company_footer">Strategy & Planing</p>
            <p className="para_company_footer1">Consumer Market</p>
            <p className="para_company_footer1">Data Analysis</p>
            <p className="para_company_footer1">Corporate Finance</p>
            <p className="para_company_footer1">Market Research</p>
          </div>
          <div className="col-lg-1 col-md-1 col-sm-1 col-12"></div>
          <div className="col-lg-3 col-md-5 col-sm-5 col-12">
            <p className="heading_aboutus_footer">Popular Posts</p>
            <div className="hr_tag_footer"></div>
            <div className="d-flex flex-row">
              <input
                className="input_company_footer"
                placeholder="Enter E-Mail"
              />
              <button className="btn_send_email">
                <img src={send_email_btn} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
