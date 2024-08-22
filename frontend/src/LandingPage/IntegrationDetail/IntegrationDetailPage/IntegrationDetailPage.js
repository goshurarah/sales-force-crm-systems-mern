import React, { useEffect, useState } from "react";
import "./../IntegrationDetailPage/IntegrationDetailPage.css";
import axios from "axios";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import arrowblueintegration from "./../../../Assets/arrowblue integration.png";
import checkouticon from "./../../../Assets/checkout_icon.png";

function IntegrationDetailPage() {
  const { id } = useParams();

  const [integration, setIntegration] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getIntegrationData(id);
  }, [id]);

  const getIntegrationData = (id) => {
    axios
      .get(`api/integration/${id}`)
      .then((res) => {
        console.log(res.data, "integration");
        setIntegration(res.data);
      })
      .catch((error) => {
        console.error("Error fetching integration:", error);
      });
  };

  const handleCheckout = (price, id, name) => {
    // Assuming you want to store id in localStorage
    localStorage.setItem("totalPrice", price);
    localStorage.setItem("integration_id", id);
    localStorage.setItem("integration_name", JSON.stringify(name));
    // Navigate to the /salesforce/services route
    navigate("/salesforce/services");
  };

  const renderDescription = () => {
    if (!integration || !integration.description) return null;

    // Split description into sentences using period as delimiter
    const sentences = integration.description.split(". ");

    // Render each sentence as a separate paragraph
    return sentences.map((sentence, index) => <p key={index}>{sentence}</p>);
  };

  return (
    <div className="main_div_integration_detail">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-0 col-md-10 col-sm-10 col-10">
          <div className="d-flex justify-content-center">
            <img
              src={
                integration?.picture
                  ? `${process.env.REACT_APP_BASE_URL}public/images/${integration?.picture}`
                  : null
              }
              className="img_pic_int"
            />
          </div>
          <div className="description_para_int">{renderDescription()}</div>

          <div className="checkout_div">
            <div className=" row">
              <div className="col-lg-7 col-md-7 col-12">
                <div className="d-flex flex-content-row">
                  <p className="heading_quote_integrationdetail">
                    Click Here to
                  </p>

                  <p className="heading_quote_integrationdetail_orange">
                    Check Out
                  </p>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="d-flex justify-content-end">
                  <img src={arrowblueintegration} className="blue_arrow_int" />
                  <button
                    className="checkout_button_int"
                    onClick={() => {
                      handleCheckout(integration?.price, integration?.id, integration?.name);
                    }}
                  >
                    <img src={checkouticon} className="img_checkout_icon" />{" "}
                    Checkout
                  </button>
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

export default IntegrationDetailPage;
