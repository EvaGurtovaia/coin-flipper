import React, { Component } from "react";
import "./Coin.css";



class Coin extends Component {
    render() {
        let faceImgSrc = `${coinFaceAPI}`;
        let tailImgSrc = `${coinTailAPI}`;
        return (
            <div>
                <img src={faceImgSrc} alt="" />
            </div>
        );
    }
}
export default Coin;
