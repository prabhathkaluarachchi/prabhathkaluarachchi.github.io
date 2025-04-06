import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized toggle function
  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prevState => !prevState);
    document.body.classList.toggle('mobile-nav-active');
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }, []);

  // Memoized link click handler
  const handleLinkClick = useCallback(() => {
    if (isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen, toggleMenu]);

  useEffect(() => {
    const navmenuLinks = document.querySelectorAll('#navmenu a');
    
    const clickHandlers = Array.from(navmenuLinks).map(link => {
      const handler = () => handleLinkClick();
      link.addEventListener('click', handler);
      return { link, handler };
    });

    return () => {
      clickHandlers.forEach(({ link, handler }) => {
        link.removeEventListener('click', handler);
      });
    };
  }, [handleLinkClick]);

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <NavLink to="/" className="logo d-flex align-items-center">
          <h1 className="sitename">prabhath.Online</h1>
        </NavLink>

        <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink 
                to="/" 
                end // Replaces exact={true}
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/resume"
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={handleLinkClick}
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio"
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={handleLinkClick}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  isActive ? 'active' : ''
                }
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <i
            className={`mobile-nav-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          ></i>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;