import HomepageMerge from "./LandingPage/HomePage/HomepageMerge/HomepageMerge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhyUsMerge from "./LandingPage/WhyUs/WhyUsMerge/WhyUsMerge";
import AboutUsMerge from "./LandingPage/AboutUs/AboutUsMerge/AboutUsMerge";
import Addblogs from "./BlogDashboard/Addblogs/Addblogs";
import BlogsView from "./LandingPage/Blogs/BlogsView/BlogsView";
import BlogsPostOpen from "./LandingPage/Blogs/BlogsPostOpen/BlogsPostOpen";
import BlogCategory from "./LandingPage/Blogs/BlogCategory/BlogCategory";
import BlogTags from "./LandingPage/Blogs/BlogTags/BlogTags";
import IntegrationMerge from "./LandingPage/Integration/IntegrationMerge/IntegrationMerge";
import IntegrationDetailMerge from "./LandingPage/IntegrationDetail/IntegrationDetailMerge/IntegrationDetailMerge";
import SalesForceServicesMerge from "./LandingPage/SalesForceServices/SalesForceServicesMerge/SalesForceServicesMerge";
import SuccessfulPayment from "./LandingPage/SalesForceServices/SalesForceServicesPage/SuccessfulPayment";
import CancelPayment from "./LandingPage/SalesForceServices/SalesForceServicesPage/CancelPayment";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageMerge />} />
          <Route path="/whyus" element={<WhyUsMerge />} />
          <Route path="/aboutus" element={<AboutUsMerge />} />

          <Route path="/integration" element={<IntegrationMerge />} />
          <Route path="/integration/:id" element={<IntegrationDetailMerge />} />
          <Route path="/salesforce/services" element={<SalesForceServicesMerge />} />
          <Route path="/payment/success" element={<SuccessfulPayment />} />
          <Route path="/payment/cancel" element={<CancelPayment />} />

          <Route path="/addblogs" element={<Addblogs />} />
          <Route path="/blogs" element={<BlogsView />} />
          <Route path="/blogs/:id/:title" element={<BlogsPostOpen />} />

          <Route path="/blogs/category/:id" element={<BlogCategory />} />
          <Route path="/blogs/tag/:id" element={<BlogTags />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
