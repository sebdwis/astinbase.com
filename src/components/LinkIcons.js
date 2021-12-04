import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faSoundcloud, faBandcamp, faApple, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './LinkIcons.css';

const LinkIcons = ({ }) => {
    const iconLinks = [
        { icon: faSpotify, href: 'http://localhost:3000' },
        { icon: faSoundcloud, href: 'http://localhost:3000' },
        { icon: faApple, href: 'http://localhost:3000' },
        { icon: faInstagram, href: 'http://localhost:3000' },
        { icon: faTwitter, href: 'http://localhost:3000' }
    ];

    return (
        <div className="link-icons">
            {iconLinks.map(({icon, href}) => 
                <a href={href}>
                    <FontAwesomeIcon icon={icon} size="2x" />
                </a>
            )}
        </div>
    )
}

export default LinkIcons;