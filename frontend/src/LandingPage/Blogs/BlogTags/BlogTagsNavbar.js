import React from 'react'
import whyus_image from "./../../../Assets/9.svg";
import "./../BlogsView/BlogsView.css"
function BlogTagsNavbar() {
  return (
    <div className="blogviewBook_main_div">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
        <div className="main_div_bg_blogview_left" />
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3 col-12">
        <div className="d-flex flex-row">
          {" "}
          <p className="blogview_heading_sky">BLOGS</p>
          <p className="blogview_heading_blue">TAG</p>
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-12">
        <div className="main_div_blogview_image_style">
          <div className="d-flex justify-content-end">
            <img src={whyus_image} className="blogviewiamge" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BlogTagsNavbar
