import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faApple,
  faInstagram,
  faTiktok,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "./LinkIcons.css";

const LinkIcons = ({ }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const iconLinks = [
    { icon: faSpotify, href: "https://open.spotify.com/artist/03fDMLCW2qZGMhFKM31vRN?si=5yAJGE07R_WqGvuQJZjyUQ" },
    { icon: faYoutube, href: "https://www.youtube.com/channel/UCUUW05oQY9ScxwnYDeHH5sQ" },
    { icon: faSoundcloud, href: "https://soundcloud.com/astinbase" },
    { icon: faApple, href: "https://music.apple.com/us/artist/astin-base/1629735305" },
    { icon: faInstagram, href: "https://www.instagram.com/astin.base/" },
    { icon: faTiktok, href: "https://www.tiktok.com/@astinbase" },
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
