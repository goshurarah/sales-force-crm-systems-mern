import React, { useEffect, useState } from "react";
import "./../BlogCategory/BlogCategory.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import slugify from "slugify";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import Loader from "../../HomePage/Loader/Loader";
import Navbar from "../../HomePage/Navbar/Navbar";
import BlogCategoryNavbar from "./BlogCategoryNavbar";

function BlogCategory() {
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

  const { id } = useParams();
  const [relatedcategory, setRelatedCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    getRelatedCategoryData();
  }, [id, currentPage]);

  const getRelatedCategoryData = () => {
    axios
      .get(`api/blogs/category/${id}`)
      .then((res) => {
        setRelatedCategory(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching category posts:", error);
      });
  };

  const extractDateFromUpdatedAt = (updatedAt) => {
    if (updatedAt) {
      const datePart = updatedAt.split("T")[0];
      return datePart;
    } else {
      return "N/A"; // or any other appropriate value or behavior
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop();
  };

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = relatedcategory.slice(indexOfFirstPost, indexOfLastPost);

  
  return (
    <div>
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
      <div className="div_combine_nav_start_suite">
        <Navbar />
        <BlogCategoryNavbar />
      </div>

      <div className="main_div_blog_new">
        <div className="container">
          <div className="row">
            {relatedcategory.length === 0 ? (
              <div className="d-flex justify-content-center">
                <p className="no_data_available">No data found.</p>
              </div>
            ) : (
              currentPosts.map((data, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="blog_picture_div">
                    <Link
                      to={`/blogs/${data._id}/${slugify(data.title, {
                        lower: true,
                      })}`}
                    >
                      <img
                       src={data.picture}
                        className="blog_image_new"
                        alt="continuelogo"
                      />
                    </Link>
                  </div>
                  <Link
                    to={`/blogs/${data._id}/${slugify(data.title, {
                      lower: true,
                    })}`}
                  >
                    <p className="para_heading_in_blog_new">{data?.title}</p>
                  </Link>
                  <p className="date_in_blog_new">
                    {data?.created_at
                      ? extractDateFromUpdatedAt(data?.created_at)
                      : null}
                  </p>
                  <p
                    className="para_in_blog_new"
                    dangerouslySetInnerHTML={{
                      __html: data?.description
                        ? data.description.split(" ").slice(0, 20).join(" ") +
                          (data.description.split(" ").length > 20 ? "..." : "")
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
            )}
          </div>
        </div>
      </div>

      {relatedcategory.length > itemsPerPage && (
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="pagination_blogs">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={relatedcategory.length}
                onChange={handlePageChange}
                itemClass="page-item"
                linkClass="page-link"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
      <FooterEnd />
    </div>
  );
}

export default BlogCategory;
