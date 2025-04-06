import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="credits">  {/* Changed from class to className */}
        &copy; {new Date().getFullYear()} <a href="/">Prabhath Kaluarachchi</a> | All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;