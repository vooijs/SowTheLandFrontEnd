import React, {useState} from "react";
import './Crops.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import strawberry from "../../assets/strawberrie.jpg";
import patato from "../../assets/patato.jpg";
import tomato from "../../assets/tomato.jpg";
import apple from "../../assets/applePic.webp";
import carrot from "../../assets/carrot.jpg";
import mint from "../../assets/mint.jpg";
import Blog from "../../components/Blog/Blog";
import search from "../../assets/search.png";
import {cropsData} from "../../cropsData";

function Crops() {
    const [inputText, setInputText] = useState("")

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

    const [populairCrop, setPopulairCrop] = useState (
      [
          {
                id:1,
                type: "fruit",
                img: strawberry,
                alt:"strawberry",
                title:"Strawberry",
                desc:"Tasty summer wrens",
                buttonTitle: "Add to garden"
          },
          {
                id:2,
                type: "herb",
                img: mint,
                alt: "mint",
                title: "Mint",
                desc:"Make minthy thea",
                buttonTitle: "Add to garden"
          },
          {
                id:3,
                type: "Veggie",
                img: patato,
                alt:"patato",
                title:"patato",
                desc:"Typical Dutch dish",
                buttonTitle: "Add to garden"
          },
          {
                id:4,
                type: "fruit",
                img: strawberry,
                alt:"strawberrie",
                title:"strawberrie",
                desc:"strawberrie chapstick",
                buttonTitle: "Add to garden"
          },
          {
                id:5,
                type: "fruit",
                img:strawberry,
                alt:"strawberrie",
                title:"strawberrie",
                desc:"strawberrie chapstick",
                buttonTitle: "Add to garden"
          },
          {
                id:6,
                type: "Veggie",
                img: tomato,
                alt: "tomato",
                title: "tomato",
                desc: "Fresh tomato's from your garden",
                buttonTitle: "Add to garden"
          },
          {
                id: 7,
                img: apple,
                type: "fruit",
                alt:"apple",
                title:"apple",
                desc:"Tatse this sweet juicy apples",
                buttonTitle: "Add to garden"
          },
          {
                id: 8,
                img: carrot,
                type: "Veggie",
                alt: "carrot",
                title: "carrot",
                desc: "Perfect for your carrot cake bake",
                buttonTitle: "Add to garden"
          },
      ]
    );

    function inputHandler(e) {
      var lowerCase = e.target.value.toLowerCase()
      setInputText(lowerCase)
    };

    const filteredData = cropsData.filter((el) => {
        if (inputText === '') {
            return el;
        }
        else {
            return el.title.toLowerCase().includes(inputText)
        }
    })

    return (
        <>
            <div className="section-small">
               <h1>Populair corps</h1>
            </div>
            <Carousel responsive={responsive} className="carousel">
                {populairCrop.map((crop)=>{
                    return <div>
                        <Blog
                            img={crop.img}
                            alt={crop.alt}
                            title={crop.title}
                            subtitle={crop.type}
                            buttonTitle={crop.buttonTitle}
                            article={crop.desc}
                        />
                    </div>
                })}
            </Carousel>
            <div className="section-small">
                <div className="heading">
                    <h1>Find new crops for your garden</h1>
                </div>
            </div>
            <div className="searchContainer">
                <form className="searchBar">
                    <input
                        type="search"
                        id="search"
                        name="q"
                        className="input"
                        placeholder="find new crops"
                        onChange={inputHandler}
                    />
                    <button type="submit" className="searchButton"><img src={search} alt="search" /></button>
                </form>
            </div>
            <div className="cropCards">
                {filteredData.map((crop) => {
                    return <Blog
                        img={crop.img}
                        alt={crop.alt}
                        title={crop.title}
                        subtitle={crop.type}
                        buttonTitle={crop.buttonTitle}
                    />
                })}
            </div>
        </>
    );
}

export default Crops;