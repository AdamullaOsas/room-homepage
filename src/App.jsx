import React, { useState } from "react";
import Navbar from "./components/Navbar";

import bigImage1 from "./images/desktop-image-hero-1.jpg";
import bigImage2 from "./images/desktop-image-hero-2.jpg";
import bigImage3 from "./images/desktop-image-hero-3.jpg";

import darkImage from "./images/image-about-dark.jpg";
import lightImage from "./images/image-about-light.jpg";

import arrow from "./images/icon-arrow.svg";
import Slider from "./components/Slider";

const App = () => {
    const images = [bigImage1, bigImage2, bigImage3];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const prevImage = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    return (
        <div>
            <div className="max-h-[534px] flex relative">
                <div className="absolute top-16 left-16 ">
                    <Navbar />
                </div>
                <img src={images[currentImage]} alt="bigImage" />
                <div className="w-full pt-[120px] px-[100px] relative">
                    <h1 className="title">
                        Discover innovative ways to decorate
                    </h1>
                    <p className="para mt-4">
                        We provide unmatched quality, comfort, and style for
                        property owners across the country. Our experts combine
                        form and function in bringing your vision to life.
                        Create a room in your own style with our collection and
                        make your property a reflection of you and what you
                        love.
                    </p>
                    <button className="flex items-center shopNow gap-7 mt-6">
                        SHOP NOW
                        <img src={arrow} alt="arrow" />
                    </button>

                    <div className="max-w-[160px] max-h-[80px] w-full h-full bg-black absolute bottom-0 left-0">
                        <Slider nextImage={nextImage} prevImage={prevImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
