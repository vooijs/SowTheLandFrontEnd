import React from "react";
import "./Home.css";
import devices from "../../assets/promo.png";
import apple from "../../assets/applePic.webp";
import cherry from "../../assets/cherry.jpg";
import peach from "../../assets/peach.jpg";
import Button from "../../components/button/Button";
import Blog from "../../components/Blog/Blog";

function Home () {

    return (
       <div className="section-container">
            <div className="section">
               <div className= "seasonSection">
                   <h1>This is the season for:</h1>
                    <div className="blogCards">
                        <Blog
                            img={apple}
                            alt="apple"
                            subtitle="23 September 2023 / web development"
                            title="Apple"
                            teaser="Sweet and juicy apple"
                            blog="lorem"
                            redirect="/blogpost"
                        />
                        <Blog
                            img={cherry}
                            alt="cherry"
                            subtitle="23 September 2023 / web development"
                            title="Cherry"
                            teaser="Pop my cherry"
                            blog="lorem"
                            redirect="/blogpost"
                        />
                        <Blog
                            img={peach}
                            alt="peach"
                            subtitle="23 September 2023 / web development"
                            title="Peach"
                            teaser="I can eat a peach for hours"
                            blog="lorem"
                            redirect="/blogpost"
                        />
                    </div>
                </div>
            </div>
           <div className="section">
               <div className="textAndImageContainer">
                    <div className="devicesPicContainer">
                        <img src={devices} alt="devices" className="devicesPic"/>
                    </div>
                   <article className="textAndImage">
                       <h2>Sow The Land</h2>
                       <h4>The app that will help you grow your food</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda repellat, sint. Assumenda aut deserunt dicta dignissimos dolore eligendi, esse, expedita impedit incidunt iusto porro quia reprehenderit soluta tempore vero voluptas.</p>

                       <Button title="read more"/>
                   </article>
               </div>
            </div>
       </div>
    );
}

export default Home;