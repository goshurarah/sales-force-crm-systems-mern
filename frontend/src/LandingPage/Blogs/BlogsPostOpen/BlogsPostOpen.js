import React, { useEffect, useState } from "react";
import "./../BlogsPostOpen/BlogsPostOpen.css";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import dummypic from "./../../../Assets/greyellipse.png";
import slugify from "slugify";
import NotificationDisplay from "../../HomePage/NotificationDisplay/NotificationDisplay";
import Footer from "../../HomePage/Footer/Footer";
import FooterEnd from "../../HomePage/FooterEnd/FooterEnd";
import Loader from "../../HomePage/Loader/Loader";
import BlogsPostOpenNavbar from "./BlogsPostOpenNavbar";
import Navbar from "../../HomePage/Navbar/Navbar";

function BlogsPostOpen() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Show the scroll-to-top button when the user has scrolled down
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

  const [postUrl, setpostUrl] = useState("");
  useEffect(() => {
    setpostUrl(window.location.href);
  }, []);

  // Get the 'id' parameter from the route
  const { id } = useParams();


  // Initialize the state to store the blog post data
  const [blogsdata, setblogsdata] = useState(null);

  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getblogsdata();
  }, [id]);

  // Fetch blog post data from the API
  const getblogsdata = () => {
    axios
      .get(`api/blogs/${id}`)
      .then((res) => {
        setblogsdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs post:", error);
      });
  };
  const [relatedpostdata, setrelatedpostdata] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRelatedPostData, setFilteredRelatedPostData] = useState(null);
  // Fetch the blog post data when the component mounts
  useEffect(() => {
    getrelatedpostdata();
  }, []);

  // Fetch blog post data from the API
  const getrelatedpostdata = () => {
    axios
      .get(`/api/blogs`)
      .then((res) => {
        setrelatedpostdata(res.data);
        setFilteredRelatedPostData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching related post:", error);
      });
  };

  const handleRelatedPostClick = (postId, postTitle) => {
    const slug = slugify(postTitle, { lower: true });
    navigate(`/blogs/${postId}/${slug}`);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter related post data based on the search query
    const filteredData = relatedpostdata.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredRelatedPostData(filteredData);
  };

  //   const blogsdata = blogsdata?.find(post => post.id === Number(id));
  const extractDateFromUpdatedAt = (updated_at) => {
    if (updated_at) {
      const datePart = updated_at.split("T")[0];
      return datePart;
    } else {
      // Handle the case when updated_at is undefined
      return "N/A"; // or any other appropriate value or behavior
    }
  };

  const [tagsdata, settagsdata] = useState("");
  useEffect(() => {
    gettagsdata();
  }, []);

  const gettagsdata = () => {
    axios
      .get(`/api/tags`)
      .then((res) => {
        settagsdata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  };

  const [Categorydata, setCategorydata] = useState("");
  useEffect(() => {
    getCategorydata();
  }, []);

  const getCategorydata = () => {
    axios
      .get(`/api/categories`)
      .then((res) => {
        setCategorydata(res.data);
      })
      .catch((error) => {
        console.error("Error fetching category post:", error);
      });
  };


  const handleDateFormat = (date) => {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toISOString().split("T")[0];
    return formattedDate;
  };

  const [notificationMessage, setNotificationMessage] = useState(null);
  const [notificationMessageRed, setnotificationMessageRed] = useState(null);

  let firstParagraph, remainingContent;

  if (blogsdata && blogsdata.description) {
    const firstPeriodIndex = blogsdata.description.indexOf(".");

    if (firstPeriodIndex !== -1) {
      // Extract the first paragraph up to the first period (including the period)
      firstParagraph = blogsdata.description.substring(0, firstPeriodIndex + 1);
      // The remaining content starts after the first period
      remainingContent = blogsdata.description.substring(firstPeriodIndex + 1);
    } else {
      // If there is no period found, treat the whole content as the first paragraph
      firstParagraph = blogsdata.description;
      remainingContent = "";
    }
  } else {
    firstParagraph = "";
    remainingContent = "";
  }

  return (
    <>
      <>
        {notificationMessage && (
          <NotificationDisplay message={notificationMessage} />
        )}
      </>
      <>
        {notificationMessageRed && (
          <NotificationDisplay message={notificationMessageRed} />
        )}
      </>
      <>
        <div className="div_combine_nav_start_suite">
          <Navbar />
          <BlogsPostOpenNavbar />
        </div>
      </>

      <div className="container blogs_content_main_div">
        <div className="row">
          <div className=" col-lg-8">
            <div className="main_div_blogopen_conatainer">
              <img
                src={blogsdata ? blogsdata?.picture : <Loader />}
                className="blog_image_style"
              />

              <div className="main_div_background_color">
                <div className="d-flex justify-content-start">
                  <i className="fa-solid fa-user icon_colour_style_content"></i>
                  <p className="content_text">By Admin</p>
                  <i className="fa-solid fa-calendar-days icon_colour_style_content"></i>
                  <p>
                    {blogsdata?.create_at
                      ? extractDateFromUpdatedAt(blogsdata?.create_at)
                      : null}
                  </p>
                </div>

                <p className="heading_content_right">
                  {blogsdata ? blogsdata?.title : null}
                </p>
                <p className="para_centent_right">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: firstParagraph ? firstParagraph : null,
                    }}
                  />
                </p>
                <div className="quote_main_div">
                  <p className="para_quote">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blogsdata ? blogsdata?.quote : null,
                      }}
                    />
                  </p>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: remainingContent ? remainingContent : null,
                  }}
                />
              </div>

              <div className="row m-0 p-0">
                <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
                  <div className="main_div_tags_social_media m-0 p-0">
                    <div className="col-lg-12 col-md-12 col-12 m-0 p-0">
                      <p className="Tag_heading_blog m-0 p-0 mt-4 mb-3">
                        Related Tags:{" "}
                      </p>
                      <div className="main_div_tag_name ">
                        {tagsdata
                          ? tagsdata?.map((data, index) => (
                              <>
                                <Link to={`/blogs/tag/${data._id}`}>
                                  <div className="button_tags_name">
                                    {data.name}
                                  </div>
                                </Link>
                              </>
                            ))
                          : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 m-0 p-0">
                  <div className="d-flex justify-content-end m-0 p-0">
                    <p className="Tag_heading_blog m-0 p-0 mt-4 mb-3">
                      Social Share:
                    </p>
                  </div>
                  <div className="d-flex justify-content-end m-0 p-0">
                    <div className="d-flex justify-content-start m-0 p-0">
                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>

                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </div>

                      <div className="main_div_icon_blog_left">
                        <a
                          href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                            postUrl
                          )}`}
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="blog_content_left_main_div">
              <div className="input_div_search_div">
                <div className="d-flex justify-content-between">
                  <input
                    className="input_style_serach"
                    placeholder="Search here"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button className="blue_button_search_blog"></button>
                </div>
              </div>
            </div>

            <div className="blog_content_left_main_div">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Related Posts</p>
              </div>

              <div className="related_post_main_div">
                {filteredRelatedPostData ? (
                  filteredRelatedPostData.length > 0 ? (
                    filteredRelatedPostData.map((data, index) => (
                      <div className="related_post_div" key={data.id}>
                        <Link
                          onClick={() =>
                            handleRelatedPostClick(data._id, data.title)
                          }
                          to={`/blogs/${data._id}/${slugify(data.title, {
                            lower: true,
                          })}`}
                        >
                          <div className="row">
                            <div className="col-lg-4 col-md-2 col-4">
                              <img
                                className="image_related_post"
                                src={data?.picture}
                                alt="blog"
                              />
                            </div>
                            <div className="col-lg-8 col-md-10 col-8">
                              <p className="desp_related_post">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                ></i>
                                {data?.create_at
                                  ? extractDateFromUpdatedAt(data?.create_at)
                                  : null}
                              </p>
                              <p className="heading_related_post">
                                {data?.title}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))
                  ) : null
                ) : (
                  <Loader />
                )}
              </div>
            </div>

            <div className="blog_content_left_main_div">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Categories</p>
              </div>
              <div className="category_div_below">
                <ul>
                  {Categorydata
                    ? Categorydata?.map((data, index) => (
                        <>
                          <Link to={`/blogs/category/${data._id}`}>
                            <li className="category_name">{data.name}</li>
                            <div className="dotted-line"></div>
                          </Link>
                        </>
                      ))
                    : null}
                </ul>
              </div>
            </div>

            <div className="blog_content_left_main_div margin_bottom_class_add">
              <div className="d-flex justify-content-start">
                <div className="hr_tag_blue" />
                <p className="related_post_text">Tags</p>
              </div>
              <div className="main_div_tag">
                {tagsdata
                  ? tagsdata?.map((data, index) => (
                      <>
                        <Link to={`/blogs/tag/${data._id}`}>
                          <div className="button_tags">{data.name}</div>
                        </Link>
                      </>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      <></>
      <></>
      <div className="mt-5">
        <div className="mt-5">
          <div className="mt-5">
            {" "}
            <Footer />
          </div>
        </div>
      </div>
      <>
        {isVisible && (
          <button onClick={scrollToTop} className="scroll-to-top-button">
            <span>&uarr;</span>
          </button>
        )}
      </>
      <FooterEnd />
    </>
  );
}

export default BlogsPostOpen;
