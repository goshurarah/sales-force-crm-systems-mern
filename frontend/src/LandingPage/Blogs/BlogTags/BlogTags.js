import React, { useEffect, useState } from "react";
import "./../BlogTags/BlogTags.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import slugify from "slugify";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import Loader from "../../HomePage/Loader/Loader";
import BlogTagsNavbar from "./BlogTagsNavbar";
import Navbar from "../../HomePage/Navbar/Navbar";

function BlogTags() {
  const [isVisible, setIsVisible] = useState(false);
  const [relatedTags, setRelatedTags] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  useEffect(() => {
    setIsLoading(true);
    getRelatedTagsData();
  }, [id, currentPage]);

  const getRelatedTagsData = () => {
    axios
      .get(`api/blogs/tag/${id}?page=${currentPage}`)
      .then((res) => {
        setRelatedTags(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      })
      .finally(() => {
        setIsLoading(false);
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
  const currentPosts = relatedTags.slice(indexOfFirstPost, indexOfLastPost);

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
        <BlogTagsNavbar />
      </div>

      <div className="main_div_blog_new">
        <div className="container">
          <div className="row">
            {isLoading ? (
              <div className="loader_div">
                <Loader />
              </div>
            ) : relatedTags.length > 0 ? (
              currentPosts.map((data, index) => (
                <div className="col-lg-4 col-md-6 col-12" key={index}>
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
                      __html: data?.body
                        ? data.body.split(" ").slice(0, 20).join(" ") +
                          (data.body.split(" ").length > 20 ? "..." : "")
                        : "",
                    }}
                  ></p>
                  <Link
                    to={`/blogs/${data._id}/${slugify(data.title, {
                      lower: true,
                    })}`}
                    className="read_more_para"
                  >
                    Read More
                  </Link>
                </div>
              ))
            ) : (
              <div className="d-flex justify-content-center">
                <p className="no_data_available">No data available</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {relatedTags.length > itemsPerPage && (
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="pagination_blogs">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={relatedTags.length}
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

export default BlogTags;
