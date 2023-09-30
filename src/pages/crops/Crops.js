import React, {useState} from "react";
import './Crops.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import strawberrie from "../../assets/strawberrie.jpg";
import patato from "../../assets/patato.jpg";
import tomato from "../../assets/tomato.jpg";
import apple from "../../assets/applePic.webp";
import carrot from "../../assets/carrot.jpg";
import herbs from "../../assets/herbs.jpg";
import Blog from "../../components/Blog/Blog";
import {Link} from "react-router-dom";
import Button from "../../components/button/Button";
import {dummieData} from "../../DummieData/DummieData";

function Crops() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const [cropContent, setCropContent] = useState (
      [
          {
              id:1,
              img:strawberrie,
              alt:"strawberrie",
              name:"strawberrie",
              desc:"strawberrie chapstick"
          },
          {
              id:2,
              img:herbs,
              alt:"herbs",
              name:"herbs",
              desc:"durp herb"
          },
          {
              id:3,
              img:patato,
              alt:"patato",
              name:"patato",
              desc:"poteto potato"
          },
          {
              id:4,
              img:strawberrie,
              alt:"strawberrie",
              name:"strawberrie",
              desc:"strawberrie chapstick"
          },
          {
              id:5,
              img:strawberrie,
              alt:"strawberrie",
              name:"strawberrie",
              desc:"strawberrie chapstick"
          },
          {
              id:6,
              img:tomato,
              alt:"tomato",
              name:"tomato",
              desc:"rotten tomato"
          },
          {
              id:7,
              img:apple,
              alt:"apple",
              name:"apple",
              desc:"sweet juicy apple"
          },
          {
              id:8,
              img:carrot,
              alt:"carrot",
              name:"carrot",
              desc:"carrot cake bake"
          },
      ]
    )

    return (
        <>
            <div className="searchbarSection">
                <form className="form-style">
                    <input type="search" id="mySearch" name="q" placeholder="find your crops" />
                    <button>Search</button>
                </form>
            </div>
            <Carousel responsive={responsive} className="carousel">
                {cropContent.map((cropCont)=>{
                 return <div>
                    <Blog img={cropCont.img} alt={cropCont.alt} title={cropCont.name} article={cropCont.desc} buttonTitle="plant in garden"/>
                 </div>
                })}
            </Carousel>
            <div className="buttonSection">
                <Link to="/crops"><Button title="all"/></Link>
                <Link to="/crops"><Button title="fruit"/></Link>
                <Link to="/crops"><Button title="veggies"/></Link>
                <Link to="/crops"><Button title="herbs"/></Link>
            </div>

        </>
    );
}
export default Crops;
