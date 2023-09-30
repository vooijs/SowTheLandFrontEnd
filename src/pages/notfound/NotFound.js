import React from "react";
import './NotFound.css';
import {Link} from "react-router-dom";

function NotFound() {
    return(
        <>
            <h1>NOTFOUND</h1>
            <p>get back to your profile click <Link to="/">here</Link></p>
        </>

    );
}
export default NotFound;