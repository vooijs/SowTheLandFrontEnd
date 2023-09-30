import React from "react";
import './Garden.css';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import calender from "../../assets/2023-Year-At-A-Glance-Calendar-1024x791.jpg";





function Garden() {

    return(
        <>
            <div className="outerContainer">
                <div className="buttonContainer">
                    <Link to="/garden"><Button title="Go to Garden"/></Link>
                    <Link to="/crops"><Button title="fruit"/></Link>
                    <Link to="/crops"><Button title="veggies"/></Link>
                    <Link to="/crops"><Button title="herbs"/></Link>
                </div>
                <div className="container">
                    <div className="gardencard">

                    </div>
                    <div className="rightSection">
                        <div className="weatherCalenderContainer">

                            <img src={calender} alt="calender" className="calender"/>
                        </div>
                        <div className="tipSection">
                        <p>card display
                        </p>
                        </div>
                    </div>

                </div>



            </div>
        </>
    );
}
export default Garden;