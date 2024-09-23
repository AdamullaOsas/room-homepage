import React, { useState } from "react";

import bigImage1Mobile from "../images/mobile-image-hero-1.jpg";
import bigImage2Mobile from "../images/mobile-image-hero-2.jpg";
import bigImage3Mobile from "../images/mobile-image-hero-3.jpg";

import darkImage from "../images/image-about-dark.jpg";
import lightImage from "../images/image-about-light.jpg";

import arrow from "../images/icon-arrow.svg";
import Slider from "../components/Slider";
import MobileNavbar from "./MobileNavbar";

const Mobile = () => {
    const slides = [
        {
            title: "Discover innovative ways to decorate",
            para: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
            photo: bigImage1Mobile,
        },
        {
            title: "We are available all across the globe",
            para: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
            photo: bigImage2Mobile,
        },
        {
            title: "Manufactured with the best materials",
            para: "Our modern furniture store provides a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
            photo: bigImage3Mobile,
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const { title, para, photo } = slides[currentSlide];

    return (
        <div className="min-h-screen w-full flex flex-col">
            <div className="w-full flex flex-col relative">
                <div className="absolute w-full top-12 ">
                    <MobileNavbar />
                </div>
                <img src={photo} alt="hero" className="w-auto" />

                <div className="w-full bg-white pt-[60px] px-8 mb-[78px] relative">
                    <h1 className="title">{title}</h1>
                    <p className="para mt-4">{para}</p>
                    <button className="flex items-center shopNow gap-7 mt-6 hover:gap-14 duration-300 ease-in hover:text-[#A0A0A0] transition-all group">
                        SHOP NOW
                        <img
                            src={arrow}
                            alt="arrow"
                            className="transition-all duration-500 group-hover:filter group-hover:saturate-100 group-hover:invert-[88%] group-hover:sepia-[1%] group-hover:hue-rotate-[140deg] group-hover:brightness-[76%] group-hover:contrast-[75%]"
                        />
                    </button>

                    <div className="max-w-[112px] max-h-[56px] w-full h-full bg-black absolute top-[-56px] right-0">
                        <Slider nextImage={nextSlide} prevImage={prevSlide} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <img src={darkImage} alt="darkImage" className="h-[340px]" />
                <div className="flex flex-col px-8 py-[42px] gap-4">
                    <h1 className="titleAbout">ABOUT OUR FURNITURE</h1>
                    <p className="para">
                        Our multifunctional collection blends design and
                        function to suit your individual taste. Make each room
                        unique, or pick a cohesive theme that best expresses
                        your interests and what inspires you. Find the furniture
                        pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are
                        available to help you create your dream space.
                    </p>
                </div>
                <img src={lightImage} alt="lightImage" />
            </div>
        </div>
    );
};

export default Mobile;
