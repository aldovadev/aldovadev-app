import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faIdCard } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Avatar from 'react-avatar'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Sidebar = () => (
  <header className="nav-bar">
    <nav>
      <div className="menu">
        <NavLink
          data-tooltip-id="menu-tooltip-1"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <Avatar
            src="https://lh3.googleusercontent.com/a/ACg8ocImkIYAYhRnmBJGK1ChnAHmxdG38doZzoc-pSXqZK2pWtU=s576-c-no"
            size="25"
            round={true}
            color="4d4d4e"
          />
        </NavLink>
        <NavLink
          data-tooltip-id="menu-tooltip-2"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="4d4d4e" />
        </NavLink>
        <NavLink
          data-tooltip-id="menu-tooltip-3"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faIdCard} color="4d4d4e" />
        </NavLink>
        <NavLink
          data-tooltip-id="menu-tooltip-4"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
        </NavLink>
      </div>
      <div className="sosial">
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aldovadev"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/aldovadev"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/aldovadev"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/aldovadev/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <ReactTooltip id="menu-tooltip-1" place="bottom" content="Aldovadev" />
    <ReactTooltip id="menu-tooltip-2" place="bottom" content="Home" />
    <ReactTooltip id="menu-tooltip-3" place="bottom" content="About" />
    <ReactTooltip id="menu-tooltip-4" place="bottom" content="Contact" />
  </header>
)

export default Sidebar
