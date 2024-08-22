import React from "react";
import "./../FAQS/FAQS.css";
import faqleft from "./../../../Assets/faq_left.svg";
function FAQS() {
  return (
    <div className="main_div_faqs">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1">
            <img src={faqleft} className="faqleft_style" />
        </div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-10">
          <p className="heading_faqs">Frequently Asked Questions</p>

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                 1. I'm interested in Salesforce, but I'm not sure where to start. What services do you offer to help businesses like mine get on board?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                We understand that navigating the Salesforce platform can be overwhelming. That's why we offer a range of services to get you started. We can provide initial consultations to assess your needs, followed by custom Salesforce development tailored to your specific business processes. We can also provide ongoing support and training to ensure your team gets the most out of the platform.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
      2. Can you customize Salesforce solutions to fit my industry's specific needs?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                Absolutely! Our team of experienced developers is well-versed in creating industry-specific solutions on the Salesforce platform. Whether you're in healthcare, finance, or any other sector, we can tailor Salesforce functionalities to streamline your workflows and optimize your CRM system for your unique requirements.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                 3. What are the benefits of using your Salesforce development services compared to doing it in-house?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                Our team of Salesforce experts brings a wealth of experience and knowledge to the table. We can develop and implement your CRM system faster and more efficiently than building an in-house team. Additionally, we stay up-to-date on the latest Salesforce features and best practices, ensuring your system is always optimized for performance.
                </div>
              </div>
            </div>




            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
               4. How do you ensure the security of our data when developing a Salesforce CRM system?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                Data security is our top priority. We follow industry best practices and utilize secure development methodologies to safeguard your sensitive information. Our team is well-versed in Salesforce security features, ensuring your data remains protected throughout the development process and ongoing use of the CRM system.
                </div>
              </div>
            </div>



          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
      </div>
    </div>
  );
}

export default FAQS;
