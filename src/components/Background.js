import { useEffect, useState } from "react";

import "./Background.css"

const Background = () => {
    const getTargetDevice = () => {
        const isMinDesktopWidth = window.innerWidth >= 600;
        const isMinDesktopHeight = window.innerHeight >= 600;
        const isDesktopAspectRatio = (window.innerWidth / window.innerHeight) > .8;
        return isMinDesktopWidth && isMinDesktopHeight && isDesktopAspectRatio;
    }

    const [isDesktopSize, setIsDesktopSize] = useState(() => getTargetDevice());

    const updateDimensions = () => {
        setIsDesktopSize(getTargetDevice());
    };

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <video
            className="background-video"
            src={"http://astinbase.com.s3-website-us-east-1.amazonaws.com/media/Background" +
                (isDesktopSize ? "Desktop" : "Mobile") +
                ".mov"}
            width={isDesktopSize ? "1920" : "1080"}
            height={isDesktopSize ? "1080" : "1920"}
            autoPlay muted loop
        />)
}

export default Background;