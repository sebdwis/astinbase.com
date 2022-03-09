import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faSoundcloud,
  faBandcamp,
  faApple,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import "./LinkIcons.css";

const LinkIcons = ({}) => {
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
          <FontAwesomeIcon icon={icon} size="2x" />
        </a>
      ))}
    </div>
  );
};

export default LinkIcons;
