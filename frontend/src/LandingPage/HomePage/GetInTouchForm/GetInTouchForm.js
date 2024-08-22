import React, { useState } from "react";
import axios from "axios";
import "./../GetInTouchForm/GetInTouchForm.css";
import homeicon from "./../../../Assets/home-3--home-house-roof-shelter.png";
import phoneicon from "./../../../Assets/phone--android-phone-mobile-device-smartphone-iphone.png";
import supporticon from "./../../../Assets/calendar-add--add-calendar-date-day-month.png";
import NotificationDisplay from "../NotificationDisplay/NotificationDisplay";
import Loader from "../Loader/Loader";

function GetInTouchForm() {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    howcanwehelpyou: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/getintouch", formData);
      setLoading(false);
      setNotificationMessage("Added Successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        howcanwehelpyou: "",
      });
      setTimeout(() => {
        setNotificationMessage("");
      }, 2000);
      // Add any further logic or state updates after successful submission
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      // Handle error state or display error message
    }
  };

  return (
    <div className="row">
      <div className="col-lg-7 col-md-12 col-sm-12 col-12 p-0 m-0">
        <div className="main_div_form">
          <p className="heading_GetInTouchForm">GET IN TOUCH</p>
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-6 col-12">
              <div className="d-flex flex-row">
                <div className="vertical_line_blue"></div>

                <div>
                  <p className="Headquaters_heading">
                    <img className="homeicon" src={homeicon} /> Headquaters
                  </p>
                  <p className="Headquaters_desp">
                    744 New York Ave, Brooklyn, Kings,New York 10224
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <div className="d-flex flex-row">
                <div className="vertical_line_blue"></div>

                <div>
                  <p className="Headquaters_heading">
                    <img className="homeicon" src={phoneicon} /> Phone
                  </p>
                  <p className="Headquaters_desp">+880 636 524 265,</p>
                  <p className="Headquaters_desp">+880 636 524 265,</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="d-flex flex-row">
                <div className="vertical_line_blue"></div>

                <div>
                  <p className="Headquaters_heading">
                    <img className="homeicon" src={supporticon} /> Support
                  </p>
                  <p className="Headquaters_desp">yourinfo@gmail.com</p>
                  <p className="Headquaters_desp">yourmail@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <form className="main_div_form_getintouch" onSubmit={handleSubmit}> 
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input
                  className="input_style_getintouch"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input
                  className="input_style_getintouch"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input
                  className="input_style_getintouch"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <input
                  className="input_style_getintouch"
                  placeholder="Website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>
            </div>

            <textarea
              className="textarea_style_getintouch"
              placeholder="How can we help you?"
              name="howcanwehelpyou"
              value={formData.howcanwehelpyou}
              onChange={handleChange}
              required
            />

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="Send_Message_btn"
                disabled={loading}
              >
                {loading ? <Loader /> : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-5 col-md-12 col-sm-12 col-12 p-0 m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2018527719247!2d74.25805527623903!3d31.40856425265624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901a4df466703%3A0xa9ba717b98084f51!2s360SynergyTech%20(Pvt.)%20Ltd!5e0!3m2!1sen!2s!4v1704355694100!5m2!1sen!2s"
          width="100%"
          height="476"
          className="map_setting_style"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.9322694175667!2d174.77831039999998!3d-36.86804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4876cb032351%3A0x28f87b4e3c895fb7!2s160%2F160%20Broadway%2C%20Newmarket%2C%20Auckland%201023%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1704355753284!5m2!1sen!2s"
          width="100%"
          height="476"
          className="map_setting_style"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <NotificationDisplay message={notificationMessage} />
    </div>
  );
}

export default GetInTouchForm;
