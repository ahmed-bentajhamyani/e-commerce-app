import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props: { children?: React.ReactNode }) => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props?.children}</>;
};

export default ScrollToTop;
