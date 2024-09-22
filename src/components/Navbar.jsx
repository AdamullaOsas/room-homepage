import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
    const links = ["home", "shop", "about", "contact"];
    return (
        <div className="flex justify-between items-center gap-14">
            <img src={logo} alt="logo" />
            <nav className="flex gap-8 navLink">
                {links.map((link, index) => (
                    <a key={index} href="/">
                        {link}
                    </a>
                ))}
            </nav>
        </div>
    );
};

export default Navbar;
