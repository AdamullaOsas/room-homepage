import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
    const links = ["home", "shop", "about", "contact"];
    return (
        <div className="flex justify-between items-center gap-14">
            <img src={logo} alt="logo" />
            <nav className="flex gap-8 navLink">
                {links.map((link, index) => (
                    <a key={index} href="/" className="group relative">
                        {link}
                        <span className="absolute left-1/2 -bottom-2 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-6"></span>
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
