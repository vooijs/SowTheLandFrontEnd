import React from "react";
import "./Blog.css";
import devices from "../../assets/promo.png";
import Button from "../button/Button";
import apple from "../../assets/applePic.webp";
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
                    <Link to="/blogpost" className="blogTitle">{props.title}</Link>
                    <p className="blogArticle">{props.article}</p>
                    <Link to="/blogpost" className="readMore">{props.buttonTitle }</Link>
                </div>

            </div>
        </>


    );
}
export default Blog;