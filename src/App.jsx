import React, { useEffect, useState } from "react";

import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";

const App = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return width > 1345 ? <Desktop /> : <Mobile />;
};

export default App;
