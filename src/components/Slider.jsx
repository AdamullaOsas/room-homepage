import React from "react";

import leftArrow from "../images/icon-angle-left.svg";
import rightArrow from "../images/icon-angle-right.svg";

const Slider = ({ nextImage, prevImage }) => {
    return (
        <div className="w-full h-full flex">
            <button
                className="flex-1 flex items-center justify-center"
                onClick={prevImage}
            >
                <img src={leftArrow} alt="leftArrow" />
            </button>
            <button
                className="flex-1 flex items-center justify-center"
                onClick={nextImage}
            >
                <img src={rightArrow} alt="rightArrow" />
            </button>
        </div>
    );
};

export default Slider;
