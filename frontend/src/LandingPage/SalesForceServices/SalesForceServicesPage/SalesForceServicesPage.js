import React, { useEffect, useState } from "react";
import axios from "axios";
import creditpay from "./../../../Assets/creditpay.png";
import "./../SalesForceServicesPage/SalesForceServicesPage.css";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51PMOIOESrFhOapS1RUKaJprd8FrWXJsv97VlmR3f4Y42ZEirhBsrLQpeR4RhacxPvY1Fov2maEMXpzJ4zNuxQA3I00cmDsfmtE");

function SalesForceServicesPage() {
  const [salesforceServices, setSalesforceServices] = useState([]);
  const [error, setError] = useState(null);
  const [selectedIntegrationIds, setSelectedIntegrationIds] = useState([]);
  const [selectedIntegrationNames, setSelectedIntegrationNames] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const token = localStorage.getItem("token");

  useEffect(() => {
   
    getsalesforceServicesData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [selectedIntegrationIds]);

  const getsalesforceServicesData = () => {
    axios
      .get(`api/integration`, {
        headers: {
          "ngrok-skip-browser-warning": "true",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setSalesforceServices(res.data);

      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
        setError("Error fetching services data");
      });
  };

  const handleCheckboxChange = (integrationId, integrationName, price, e) => {
    if (e.target.checked) {
      const newSelectedIds = [...selectedIntegrationIds, integrationId];
      const newSelectedNames = [...selectedIntegrationNames, integrationName];
      setSelectedIntegrationIds(newSelectedIds);
      setSelectedIntegrationNames(newSelectedNames);
      localStorage.setItem("integration_id", JSON.stringify(newSelectedIds));
      localStorage.setItem("integration_name", JSON.stringify(newSelectedNames));
    } else {
      const newSelectedIds = selectedIntegrationIds.filter((id) => id !== integrationId);
      const newSelectedNames = selectedIntegrationNames.filter((name) => name !== integrationName);
      setSelectedIntegrationIds(newSelectedIds);
      setSelectedIntegrationNames(newSelectedNames);
      localStorage.setItem("integration_id", JSON.stringify(newSelectedIds));
      localStorage.setItem("integration_name", JSON.stringify(newSelectedNames));
    }
  };

  const isSelectedIntegration = (integrationId) => {
    return selectedIntegrationIds.includes(integrationId);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    selectedIntegrationIds.forEach((id) => {
      const service = salesforceServices.find((service) => service.id === id);
      if (service) {
        total += service.price;
      }
    });
    setTotalPrice(total);
    localStorage.setItem("totalPrice", total);
    localStorage.setItem("selectedIntegrationNames", JSON.stringify(selectedIntegrationNames));
  };

  const handlePayment = async () => {
    const payload = {
      price: totalPrice,
      name: selectedIntegrationNames,
    };

    try {
      const response = await axios.post('/api/create-checkout-session', payload);
      const sessionId = response.data.id;

      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
    }
  };

  return (
    <div>
      <div className="main_div_table_astable">
        <div className="container">
          <div className="main_div_tablestriped_astable">
            <div className="d-flex justify-content-between">
              <p className="heading_table_striped_astable">Salesforce Integrations</p>
              <p className="price_standardplan_astable">Total: ${totalPrice}</p>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">No.</th>
                  <th scope="col">Integration</th>
                  <th scope="col">Price</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {salesforceServices.map((data, index) => (
                  <tr key={index}>
                    <td></td>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>${data.price}</td>
                    <td>
                      <input
                        type="checkbox"
                        id={`service_${index}`}
                        name="standardservicescharges"
                        value={data.price}
                        className="styled-checkbox"
                        onChange={(e) => handleCheckboxChange(data.id, data.name, data.price, e)}
                        checked={isSelectedIntegration(data.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-end">
            <button className="totalpaystyle" onClick={handlePayment}>
              <img src={creditpay} className="creditpaystyleicon" alt="paylogo" />
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesForceServicesPage;
