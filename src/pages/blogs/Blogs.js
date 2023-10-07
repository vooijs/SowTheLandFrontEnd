import React, {useState} from "react";
import './Blogs.css';
import Blog from "../../components/Blog/Blog";
import apple from "../../assets/applePic.webp";
import moestuin from "../../assets/moestuin_shutterstock_388332628_lr.jpg"
import logo from "../../assets/logoSowTheLand.jpg";
import devices from "../../assets/promo.png";
import tomato from "../../assets/tomato.jpg";
import seedling from "../../assets/backgrpund.jpg";
import weather from "../../assets/weer.jpg";
import strawberrie from "../../assets/strawberrie.jpg";
import patato from "../../assets/patato.jpg";

function Blogs() {
    const [content, setContent] = useState(
    [
        {   id:1,
            img: logo,
            alt: logo,
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:2,
            img: devices,
            alt: devices,
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        } ,
        {   id:3,
            img: tomato,
            alt: tomato,
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        } ,
        {   id:4,
            img: seedling,
            alt: seedling,
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:5,
            img: weather,
            alt: weather,
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:6,
            img: moestuin,
            alt: "moestuin",
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:7,
            img: apple,
            alt: "apple",
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:8,
            img: strawberrie,
            alt: "strawberrie",
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        },
        {   id:9,
            img: patato,
            alt: "patato",
            title: "how to grow food in your own garden",
            article:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos dolorum, facilis itaque minus obcaecati quia sed ullam unde? Libero, nesciunt?"
        }
    ]);

    return (
        <div className="section">
            <div className="blogContainer">
                <div className="blogsHeading">
                    <span>My recent post</span>
                    <h3>My Blog</h3>
                </div>
                <div className="blogCards">
                    {
                        content.map((cont)=> {
                            return <Blog
                                img={cont.img}
                                alt={cont.alt}
                                title={cont.title}
                                article={cont.article}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Blogs;