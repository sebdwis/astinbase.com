import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faApple,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./LinkIcons.css";

const LinkIcons = ({}) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const iconLinks = [
    { icon: faSpotify, href: "#", disabled: true },
    { icon: faSoundcloud, href: "https://soundcloud.com/astinbase" },
    { icon: faApple, href: "#", disabled: true },
    { icon: faInstagram, href: "https://www.instagram.com/astin.base/" },
    { icon: faTwitter, href: "https://twitter.com/AstinBase" },
  ];

  return (
    <div className="link-icons">
      {iconLinks.map(({ icon, href, disabled }) => (
        <a
          href={disabled ? null : href}
          target="_blank"
          className={disabled ? "icon-disabled" : ""}
        >
          <FontAwesomeIcon icon={icon} size={width > 600 ? "3x" : "2x"} />
        </a>
      ))}
    </div>
  );
};

export default LinkIcons;
