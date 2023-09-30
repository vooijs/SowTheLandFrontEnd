import React from "react";

import devices from "../../assets/promo.png"
import apple from "../../assets/applePic.webp"
import Button from "../../components/button/Button";
import Blog from "../../components/Blog/Blog";

function Home () {

    return (
       <div className="section-container">
           <div className="section-small">
               <div className="searchBar">
                   <form className="form-style">
                       <input type="search" id="mySearch" name="q" placeholder="find your crops" />
                       <button>Search</button>
                   </form>
               </div>

           </div>
           <div className="section">
               <div className= "seasonSection">
                   <h1>This is the season for:</h1>
                   <div className="seasonCrop">
                 <p>carddisplay</p>
                   </div>
               </div>
           </div>
           <div className="section">
               <div className="blogpost">
                   <img src={devices} alt="devices" className="devicesPic"/>
                   <article className="blog">
                       <h2>Sow The Land</h2>
                       <h4>The app that will help you grow your food</h4>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda repellat, sint. Assumenda aut deserunt dicta dignissimos dolore eligendi, esse, expedita impedit incidunt iusto porro quia reprehenderit soluta tempore vero voluptas.</p>

                       <Button title="read more"/>
                   </article>
               </div>
           </div>
           <div className="section">
               <Blog
                   img={apple}
                   alt="apple"
                   title="apple"
                   teaser="sweet and juicy apple"
                   blog="lorem"
               />
           </div>
       </div>
    );
}
export default Home;