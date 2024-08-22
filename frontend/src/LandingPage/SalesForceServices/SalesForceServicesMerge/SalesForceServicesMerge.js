import React, { useEffect, useState } from "react";
import "./../SalesForceServicesMerge/SalesForceServicesMerge.css";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import Footer from "../../HomePage/Footer/Footer";
import FAQS from "../../HomePage/FAQS/FAQS";
import SalesForceServicesPage from "../SalesForceServicesPage/SalesForceServicesPage";
import Navbar from "../../HomePage/Navbar/Navbar";
import SalesForceServicesNavbar from "../SalesForceServicesNavbar/SalesForceServicesNavbar";
function SalesForceServicesMerge() {
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
      <SalesForceServicesNavbar />
      <SalesForceServicesPage />
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

export default SalesForceServicesMerge;
