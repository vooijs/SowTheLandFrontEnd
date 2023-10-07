import React from "react";
import "./BlogPost.css";
import apple from "../../assets/applePic.webp"

function BlogPost() {
    return(
        <div className="outerBlogContainer">
            <div className="leftBlog">
            <img src={apple} alt="apple"/>
            <div className="quote">
           <span></span>
            </div>
            </div>
        </div>
    )
}
export default BlogPost;