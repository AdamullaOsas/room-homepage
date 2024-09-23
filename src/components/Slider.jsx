import React from "react";

import leftArrow from "../images/icon-angle-left.svg";
import rightArrow from "../images/icon-angle-right.svg";

const Slider = ({ nextImage, prevImage }) => {
    return (
        <div className="w-full h-full flex">
            <button
                className="flex-1 flex items-center justify-center hover:bg-[#444444] transition-all"
                onClick={prevImage}
            >
                <img src={leftArrow} alt="leftArrow" />
            </button>
            <button
                className="flex-1 flex items-center justify-center hover:bg-[#444444] transition-all"
                onClick={nextImage}
            >
                <img src={rightArrow} alt="rightArrow" />
            </button>
        </div>
    );
};

export default Slider;
