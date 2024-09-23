import React, { useState } from "react";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const MobileNavbar = () => {
    const links = ["home", "shop", "about", "contact"];
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-[50%] flex justify-between items-center ml-6">
            <img
                src={hamburger}
                alt="hamburger"
                className=" "
                onClick={() => setIsOpen(!isOpen)}
            />
            <img src={logo} alt="logo" className="" />

            {isOpen && (
                <div className="bg-white fixed top-0 left-0 w-full h-[110px] z-50">
                    <div className="h-full items-center flex px-6 justify-between">
                        <img
                            src={close}
                            alt="close"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                        <div className="flex items-center justify-between gap-8 navLink text-black">
                            {links.map((link, index) => (
                                <a
                                    href="/"
                                    key={index}
                                    className="text-black text-lg"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MobileNavbar;
