import React, { useEffect, useState } from "react";
import "./../HomepageMerge/HomepageMerge.css";
import Navbar from "../Navbar/Navbar";
import StartSuite from "../StartSuite/StartSuite";
import SalesForceProducts from "../SalesForceProducts/SalesForceProducts";
import BookCleaningServicesToday from "../BookCleaningServicesToday/BookCleaningServicesToday";
import Companies from "../Companies/Companies";
import ValueableSkill from "../ValueableSkill/ValueableSkill";
import WhatOurCustomerSay from "../WhatOurCustomerSay/WhatOurCustomerSay";
import GetInTouchForm from "../GetInTouchForm/GetInTouchForm";
import FAQS from "../FAQS/FAQS";
import Footer from "../Footer/Footer";
import FooterEnd from "../FooterEnd/FooterEnd";
function HomepageMerge() {
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
    <>
      <div className="div_combine_nav_start_suite">
        <Navbar />
        <StartSuite />
        <SalesForceProducts />
        <BookCleaningServicesToday />
        <Companies />
        <ValueableSkill />
        <WhatOurCustomerSay />
        <GetInTouchForm />
        <FAQS />
        <Footer />
        <FooterEnd />
      </div>

      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
    </>
  );
}

export default HomepageMerge;
