import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile nav menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    document.body.classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  };

  // Close the menu when a nav link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu(); // Close the menu when any link is clicked
    }
  };

  useEffect(() => {
    // Add event listeners to navmenu links
    const navmenuLinks = document.querySelectorAll('#navmenu a');
    navmenuLinks.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup event listeners on component unmount
    return () => {
      navmenuLinks.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, [isMenuOpen]); // Re-run effect when isMenuOpen changes

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">prabhath.Online</h1>
        </NavLink>

        <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active" onClick={handleLinkClick}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="active" onClick={handleLinkClick}>
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="active" onClick={handleLinkClick}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active" onClick={handleLinkClick}>
                Contact
              </NavLink>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMenu}
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;