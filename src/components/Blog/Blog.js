import React from "react";
import "./Blog.css";
import {Link} from "react-router-dom";

function Blog(props) {
    return(
        <>
            <div className="blogBox">
                <div className="blogImg">
                    <img src={props.img} alt={props.alt}/>
                </div>
                <div className="blogText">
                    {props.subtitle && <span className="blogSubtitle">{props.subtitle}</span>}
                    {
                        props.redirect ? <Link to={props.redirect} className="blogTitle">{props.title}</Link>
                        : <div className="blogTitle">{props.title}</div>
                    }
                    {props.teaser && <p className="blogArticle">{props.teaser}</p>}
                    {props.article && <p className="blogArticle">{props.article}</p>}
                    {props.buttonTitle && <Link to={props.redirect} className="button">{props.buttonTitle}</Link>}
                </div>
            </div>
        </>
    );
}

export default Blog;