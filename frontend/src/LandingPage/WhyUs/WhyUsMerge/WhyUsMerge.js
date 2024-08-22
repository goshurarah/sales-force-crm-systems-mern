import React, { useEffect, useState } from "react";
import Navbar from "../../HomePage/Navbar/Navbar";
import WhyUsBook from "../WhyUsBook/WhyUsBook";
import "./../WhyUsMerge/WhyUsMerge.css";
import Companies from "../../HomePage/Companies/Companies";
import ValueableSkill from "../../HomePage/ValueableSkill/ValueableSkill";
import WhatOurCustomerSay from "../../HomePage/WhatOurCustomerSay/WhatOurCustomerSay";
import GetInTouchForm from "../../HomePage/GetInTouchForm/GetInTouchForm";
import FAQS from "../../HomePage/FAQS/FAQS";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
function WhyUsMerge() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    scrollToTop();
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

 
  return (
    <div className="div_combine_whyus">
      <Navbar />
      <WhyUsBook />
      <Companies />
      <ValueableSkill />
      <WhatOurCustomerSay />
      <GetInTouchForm />
      <FAQS />
      <Footer />
      <FooterEnd />
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </div>
  );
}

export default WhyUsMerge;
