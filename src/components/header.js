import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

class Header extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    return (
      <header>
        <nav className={menuActive}>
          <div id="menuToggle" className="menu-toggle" onClick={this.toggleMenu}>
            <div className="lines"></div>
          </div>
          <ul>
            <li><AniLink fade duration={0.2} to="/" onClick={this.toggleMenu}>Home</AniLink></li>
            <li><AniLink fade duration={0.2} to="/about" onClick={this.toggleMenu}>About</AniLink></li>
            <li><AniLink fade duration={0.2} to="/contact" onClick={this.toggleMenu}>Contact</AniLink></li>
            <li><a href="https://www.facebook.com/takeshapestudio/" alt="Facebook" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://www.instagram.com/takeshapestudio/" alt="Instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </nav>
      </header>
    )
  }
};

export default Header;