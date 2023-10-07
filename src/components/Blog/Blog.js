import React from "react";
import "./Blog.css";
import {Link} from "react-router-dom";

function Blog  (props) {
    return(
        <>
            <div className="blogBox">
                <div className="blogImg">
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className="blogText">
                    <span>23 September 2023 / web development</span>
                    <Link to="/blogpost" className="blogTitle">
                        {props.title}
                    </Link>
                    {
                        props.teaser &&
                        <p className="blogArticle">{props.teaser}</p>
                    }
                    {
                        props.article &&
                        <p className="blogArticle">{props.article}</p>
                    }
                    <Link to="/blogpost" className="readMore">{props.buttonTitle }</Link>
                </div>

            </div>
        </>
    );
}

export default Blog;