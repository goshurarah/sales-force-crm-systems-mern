import React, { useEffect, useState } from "react";
import "./../IntegrationPage/Integration.css";
import ticksymbol from "./../../../Assets/tickSymbol.png";
import ticksymbol1 from "./../../../Assets/ticksymbol2.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Integration() {
  const [integrations, setIntegrations] = useState([]);

  useEffect(() => {
    getIntegrationData();
  }, []);

  const getIntegrationData = () => {
    axios
      .get(`api/integration`)
      .then((res) => {
        console.log(res, "integration");
        setIntegrations(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      });
  };

  return (
    <div className="main_div_integration">
      <div className="row">
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
        <div className="col-lg-10 col-md-10 col-sm-10 col-10">
          <p className="para_integration">
            What Salesforce and its integrations has to offer?
          </p>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              {integrations
                .slice(0, Math.ceil(integrations.length / 2))
                .map((data, index) => (
                  <div className="link_main_div" key={index}>
                    <Link
                      to={`/integration/${data.id}`}
                      className="integration-link"
                    >
                      <div className="d-flex bd-highlight">
                        <div className="">
                          <img
                            src={ticksymbol}
                            alt="tick"
                            className="symboltickstyle"
                          />
                        </div>
                        <div className="">
                          <p className="int_link_para">{data.name}</p>
                        </div>
                        <div className="ms-auto">
                          <img
                            src={ticksymbol1}
                            alt="tick"
                            className="symboltickstyle"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-6">
              {integrations
                .slice(Math.ceil(integrations.length / 2))
                .map((data, index) => (
                  <div className="link_main_div" key={index}>
                    <Link
                      to={`/integration/${data.id}`}
                      className="integration-link"
                    >
                      <div className="d-flex bd-highlight">
                        <div className="">
                          <img
                            src={ticksymbol}
                            alt="tick"
                            className="symboltickstyle"
                          />
                        </div>
                        <div className="">
                          <p className="int_link_para">{data.name}</p>
                        </div>
                        <div className="ms-auto">
                          <img
                            src={ticksymbol1}
                            alt="tick"
                            className="symboltickstyle"
                          />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
      </div>
    </div>
  );
}

export default Integration;
