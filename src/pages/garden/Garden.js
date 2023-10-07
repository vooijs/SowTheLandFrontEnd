import React, { useState } from "react";
import './Garden.css';
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import calender from "../../assets/2023-Year-At-A-Glance-Calendar-1024x791.jpg";
import GardenCard from "../../components/gardenCard/GardenCard";
import strawberrie from "../../assets/strawberrie.jpg";
import tomato from "../../assets/tomato.jpg";
import patato from "../../assets/patato.jpg";
import apple from "../../assets/applePic.webp";

function Garden() {
    const [count, setCount] = useState(0)
    const [content, setContent] = useState(
        [
            {
                id:1,
                img: strawberrie,
                alt: "strawberrie",
                name: "Strawberrie",
                sownOn: "10-08-2023",
                harvestOn: "10-10-2023",
                waterRating: 2
            },
            {
                id:2,
                img: tomato,
                alt: "tomato",
                name: "Tomato",
                sownOn: "10-08-2023",
                harvestOn: "10-10-2023",
                waterRating: 5
            },
            {
                id:3,
                img: apple,
                alt: "apple",
                name: "Apple",
                sownOn: "10-08-2023",
                harvestOn: "10-10-2023",
                waterRating: 2
            },
            {
                id:4,
                img: patato,
                alt: "patato",
                name: "Patato",
                desc: "Poteto potato",
                sownOn: "10-08-2023",
                harvestOn: "10-10-2023",
                waterRating: 4
            }
        ]
    )

    return (
        <div className="sectionSideBar">
            <div className="gardenContainer">
                <div className="gardenCards">
                    {
                        content.map((crop, index) => {
                            return (
                                <GardenCard
                                    id={index}
                                    img={crop.img}
                                    alt={crop.alt}
                                    name={crop.name}
                                    quantity={count}
                                    sownOn={crop.sownOn}
                                    harvestOn={crop.harvestOn}
                                    waterRating={crop.waterRating}
                                    handleIncrease={() => setCount(count + 1)}
                                    handleDecrease={() => setCount(count - 1)}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="sideBar">
                <div className="weatherCalenderContainer">
                    <img src={calender} alt="calender" className="calender"/>
                </div>
                <div className="sidebarButtons">
                    <Link to="/garden"><Button title="Go to Garden"/></Link>
                    <Link to="/crops#fruit"><Button title="fruit"/></Link>
                    <Link to="/crops#veggies"><Button title="veggies"/></Link>
                    <Link to="/crops#herbs"><Button title="herbs"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Garden;