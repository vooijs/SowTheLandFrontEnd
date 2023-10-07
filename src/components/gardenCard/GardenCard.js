import React from "react";
import "./GardenCard.css";
import waterDrop from "../../assets/waterdrop.png";

function GardenCard({
    id,
    img,
    alt,
    name,
    quantity,
    sownOn,
    harvestOn,
    waterRating,
    handleIncrease,
    handleDecrease
}) {
    return (
        <div id={id} className="cardContainer">
            <div className="imageContainer">
                <img className="image" src={img} alt={alt} />
            </div>
            <div className="textContainer">
                <div className="textHeading">
                    <h1>{name}</h1>
                    <div className="buttonContainer">
                        <button disabled={quantity < 1} onClick={handleDecrease}>-</button>
                        <button onClick={handleIncrease}>+</button>
                    </div>
                </div>
                <div>
                    <p>Quantity: {quantity}</p>
                    <p>Sown on: {sownOn}</p>
                    <p>Harvest on: {harvestOn}</p>
                </div>
                <div className="rating">
                    <p>Watering quantity:</p>
                    <div className="waterDropContainer">
                    {
                        [...Array(waterRating)].map((rating, index) => {
                            return <img src={waterDrop} alt="waterDrop" className="waterDrop" key={rating + index} />
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default GardenCard