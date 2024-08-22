import React from "react";
import "./../StartSuite/StartSuite.css";
import rightsuite from "./../../../Assets/main_div_right_suite.svg";
import playbtn from "./../../../Assets/playnutton.svg";
function StartSuite() {
  return (
    <div className="main_div_start_suite">
      <div className="row">
        <div className="col-lg-1 col-md-2 col-sm-2 col-12">
          <div className="main_div_bg_suite_start_left"></div>
        </div>
        <div className="col-lg-5 col-md-5 col-sm-5 col-12">
          <p className="heading_start_suite">Try Salesforce</p>
          <p className="heading_start_suite1">Starter Suite</p>
          <p className="heading_start_suite2">for free.</p>

          <div className="row">
            <div className="col-lg-1 col-md-2 col-2">
              <div className="hr_line_blue" />
            </div>
            <div className="col-lg-11 col-md-10 col-10">
              <p className="desp_start_suite">
                Unite marketing, sales, and service in a single app. Try
                Salesforce Starter Suite today. There's nothing to install. No
                credit card required.
              </p>
            </div>
          </div>

          <button className="discover_more_btn">Discover More</button>
        </div>
        <div className="col-lg-6 col-md-5 col-sm-5 col-12">
          <div className="d-flex justify-content-end">
            <img src={rightsuite} className="main_div_bg_suite_start" />
          </div>

          <img
            src={playbtn}
            className="playbtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          />

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg"> 
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">
          SalesForce
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/yo7NNM690cA" allowfullscreen></iframe>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
          Close
        </button>
     
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default StartSuite;
