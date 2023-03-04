import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../images/logo-s.png'
import LogoSubtitle from '../../images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Aldova-dev" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aldova-dev">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /> 
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/aldova-dev">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e' /> 
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/yunomiplay">
                <FontAwesomeIcon icon={faTwitter} color='#4d4d4e' /> 
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/aldovadev/">
                <FontAwesomeIcon icon={faInstagram} color='#4d4d4e' /> 
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar