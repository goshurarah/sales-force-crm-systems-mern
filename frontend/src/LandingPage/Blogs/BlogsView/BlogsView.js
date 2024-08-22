import React, { useEffect, useState } from "react";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import "./../BlogsView/BlogsView.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "react-js-pagination";
import slugify from "slugify";
import Loader from "../../HomePage/Loader/Loader.js";

import Navbar from "../../HomePage/Navbar/Navbar.js";
import BlogsviewNavbar from "./BlogsviewNavbar.js";

function BlogsView() {
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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRelatedPostData, setFilteredRelatedPostData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Change this to set items per page

  useEffect(() => {
    getBlogsData();
  }, []);

  const getBlogsData = () => {
    axios
      .get(`/api/blogs`, { mode: "no-cors" })
      .then((res) => {
        setBlogsData(res.data);
        setFilteredRelatedPostData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredData = blogsData.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRelatedPostData(filteredData);
  };

  const extractDateFromUpdatedAt = (updated_at) => {
    if (updated_at) {
      const datePart = updated_at.split("T")[0];
      return datePart;
    }
    return null;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = filteredRelatedPostData.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  return (
    <>
      <div classNames="div_not_flow_data">
        {" "}
        <div className="div_combine_nav_start_suite">
          <Navbar />
          <BlogsviewNavbar />
        </div>
        <div className="main_div_blog_new">
          <div className="container">
            <div className="row">
              {currentPosts.length > 0 ? (
                currentPosts.map((data, index) => (
                  <div className="col-lg-4 col-md-6 col-12" key={index}>
                    <div className="blog_picture_div">
                      <img
                        src={data.picture}
                        className="blog_image_new"
                        alt="Blog Image"
                      />
                    </div>
                    <p className="para_heading_in_blog_new">
                      {data && data.title
                        ? data.title.split(" ").slice(0, 10).join(" ") +
                          (data.title.split(" ").length > 10 ? "..." : "")
                        : ""}
                    </p>
                    <p className="date_in_blog_new">
                      {" "}
                      {data?.created_at
                        ? extractDateFromUpdatedAt(data?.created_at)
                        : null}
                    </p>
                    <p
                      className="para_in_blog_new"
                      dangerouslySetInnerHTML={{
                        __html:
                          data && data.description
                            ? data.description
                                .split(" ")
                                .slice(0, 10)
                                .join(" ") +
                              (data.description.split(" ").length > 10
                                ? "..."
                                : "")
                            : "",
                      }}
                    ></p>
                    <Link
                      to={`/blogs/${data._id}/${slugify(data.title, {
                        lower: true,
                      })}`}
                    >
                      <p className="read_more_para">Read More</p>
                    </Link>
                  </div>
                ))
              ) : (
                <div className="loader_div">
                  <Loader />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="pagination_blogs">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={filteredRelatedPostData.length}
                pageRangeDisplayed={5} // Change this as needed
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
        <Footer />
        <FooterEnd />
      </div>
    </>
  );
}

export default BlogsView;
