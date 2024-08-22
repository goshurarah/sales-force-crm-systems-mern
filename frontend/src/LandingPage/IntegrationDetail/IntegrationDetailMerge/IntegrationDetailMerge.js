import React, { useEffect, useState } from "react";
import Navbar from "../../HomePage/Navbar/Navbar";
import IntegrationDetailNavbar from "../IntegrationDetailNavbar/IntegrationDetailNavbar";
import SalesForceProducts from "../../HomePage/SalesForceProducts/SalesForceProducts";
import FAQS from "../../HomePage/FAQS/FAQS";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import IntegrationDetailPage from "../IntegrationDetailPage/IntegrationDetailPage";

function IntegrationDetailMerge() {
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
      <IntegrationDetailNavbar />
      <IntegrationDetailPage />

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

export default IntegrationDetailMerge;
