import React from "react";
import "./../ValueableSkill/ValueableSkill.css";
import valueable_img from "./../../../Assets/valueableskill_img.svg";
import img1 from "./../../../Assets/salesforce_values.png";
import img2 from "./../../../Assets/salesforce_crm.png";
import img3 from "./../../../Assets/salescloudbasic.png";
function ValueableSkill() {
  return (
    <div className="main_div_valueableskill">
        <p className="heading_valueable_skill">Learn valuable skills for free, with Trailhead.</p>
      <div className="row">
        <div className="col-lg-1 col-md-12 col-sm-12 col-12"></div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12">
          <img src={valueable_img} className="valueable_img_style" />
        </div>
        <div className="col-lg-5 col-md-12 col-sm-12 col-12">

         
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-3 col-3">
              <img className="img_salesforce_values" src={img1} />
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-8">
              <p className="heading_salesforce_values">Salesforce values</p>
              <p className="para_salesforce_values">
              Learn how Salesforce helps your business build stronger relationships with your customers.
              </p>
            </div>
          </div>

          <div className="row margitopstyle">
            <div className="col-lg-2 col-md-3 col-sm-3 col-3">
              <img className="img_salesforce_values" src={img2} />
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-8">
              <p className="heading_salesforce_values">Salesforce CRM</p>
              <p className="para_salesforce_values">
              Learn how to use customer relationship management (CRM) software to grow your business.
              </p>
            </div>
          </div>

          <div className="row margitopstyle">
            <div className="col-lg-2 col-md-3 col-sm-3 col-3">
              <img className="img_salesforce_values" src={img3} />
            </div>
            <div className="col-lg-10 col-md-8 col-sm-8 col-8">
              <p className="heading_salesforce_values">Sales cloud basics</p>
              <p className="para_salesforce_values">
              Grow your business, boost productivity, and make smart decisions with Sales Cloud.
              </p>
            </div>
          </div>
       
        </div>
        <div className="col-lg-1 col-md-1 col-sm-12 col-12"></div>
      </div>
    </div>
  );
}

export default ValueableSkill;
