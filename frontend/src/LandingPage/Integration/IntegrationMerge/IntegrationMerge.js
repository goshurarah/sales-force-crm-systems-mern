import React, { useEffect, useState } from "react";
import IntegrationNavbar from "../IntegrationPage/IntegrationNavbar";
import Integration from "../IntegrationPage/Integration";
import FAQS from "../../HomePage/FAQS/FAQS";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import Navbar from "../../HomePage/Navbar/Navbar";
import SalesForceProducts from "../../HomePage/SalesForceProducts/SalesForceProducts";

function IntegrationMerge() {
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
      <IntegrationNavbar />
      <Integration />

      <SalesForceProducts />

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

export default IntegrationMerge;
