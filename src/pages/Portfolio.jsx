import React, { useEffect } from 'react';
import GLightbox from 'glightbox'; // Assuming you have the GLightbox library imported
import Isotope from 'isotope-layout'; // Assuming you have the Isotope library imported
import imagesLoaded from 'imagesloaded'; // Assuming you have the imagesLoaded library imported
import PageTitle from '../components/PageTitle';

function Portfolio() {
  useEffect(() => {
    // Initialize GLightbox
    const glightbox = GLightbox({
      selector: '.glightbox'
    });

    // Initialize Isotope layout and filters
    const isotopeItems = document.querySelectorAll('.isotope-layout');
    isotopeItems.forEach((isotopeItem) => {
      const layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
      const filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
      const sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

      let initIsotope;
      imagesLoaded(isotopeItem.querySelector('.isotope-container'), () => {
        initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        });
      });

      isotopeItem.querySelectorAll('.isotope-filters li').forEach((filters) => {
        filters.addEventListener('click', () => {
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          filters.classList.add('filter-active');
          initIsotope.arrange({
            filter: filters.getAttribute('data-filter'),
          });
          // If you are using AOS (Animate On Scroll) library, initialize it here
          if (typeof aosInit === 'function') {
            aosInit();
          }
        });
      });
    });

    // Cleanup (if necessary)
    return () => {
      // If you need to cleanup GLightbox or Isotope when the component is unmounted, do it here
      glightbox.destroy();
    };
  }, []);

  return (
    <>      <PageTitle title="Portfolio" />

    
    <section id="portfolio" className="portfolio section">
      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-web">Websites</li>
            <li data-filter=".filter-uiux">UI/UX</li>
            <li data-filter=".filter-graphic">Graphics</li>
            <li data-filter=".filter-code">Coding</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>My Portfolio Website</h4>
              <p>
                Built using Bootstrap 5, HTML, CSS, and JavaScript, these projects highlight my ability to create responsive,
                user-friendly designs and interactive interfaces.
              </p>
              <a href="assets/img/portfolio/app-1.jpg" title="Prabhath Kaluarachchi Portfolio Website"
                data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://prabhath.online/" target="_blank" title="Prabhath Kaluarachchi Portfolio Website"
                className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/medi.png" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Medical Appointment System - MediMate</h4>
              <p>
                A web-based medical appointment system that optimizes the scheduling workflow for both healthcare providers and patients. Built using Node Js, Express Js, Ejs, Bootstrap, and MongoDB.
              </p>
              <a href="assets/img/portfolio/medi.png" title="MediMate Medical Appointment Booking System"
                data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://github.com/MediMateBooking/MediMateProject" target="_blank" title="MediMate Medical Appointment Booking System"
                className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-uiux">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/lolc.jpeg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>LOLC Real Time App UI/UX</h4>
              <p>
                Prototyping and designing responsive screens in Figma, focusing on and fixing bad experiences of the existing app.
              </p>
              <a href="assets/img/portfolio/lolc.jpeg" title="Redesigned LOLC Real Time App UI/UX"
                data-gallery="portfolio-gallery-uiux" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://www.figma.com/proto/szuSRSTYeDgw3kBai6fPg0/LOLC-Real-Time-APP" target="_blank"
                title="Redesigned LOLC Real Time App UI/UX" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>Radee Shop - Ecommerce Website</h4>
              <p>
                Fully functional E-commerce website. Includes order management, user management, contact forms, a secure payment gateway, and seamless WooCommerce product management.
              </p>
              <a href="assets/img/portfolio/app-2.jpg" title="Radee Online Shopping Website - WordPress"
                data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://radeeshop.wuaze.com/" target="_blank"
                title="Radee Online Shopping Website - WordPress" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-uiux">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/lms.jpeg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>LMS App UI/UX</h4>
              <p>
                Designed a responsive LMS app prototype in Figma, focused on delivering an intuitive and seamless user experience for learners and educators.
              </p>
              <a href="assets/img/portfolio/lms.jpeg" title="Responsive LMS app prototype in Figma"
                data-gallery="portfolio-gallery-uiux" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://www.figma.com/proto/kOQ4prEbDoL6WTDFGkvQ72/LMS-APP---Prabhath-Kaluarachchi"
                target="_blank" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
          <div className="portfolio-content h-100">
            <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
            <div className="portfolio-info">
              <h4>SL Stamps Collection</h4>
              <p>
                A website showcasing an extensive collection of Sri Lankan stamps! Dive into a visually engaging display that highlights the unique designs and historical significance of each stamp.
              </p>
              <a href="assets/img/portfolio/app-3.jpg" title="Responsive SL Stamps Collection Website"
                data-gallery="portfolio-gallery-web" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
              <a href="https://prabhathkaluarachchi.github.io/slstamps/" target="_blank" title="More Details"
                className="details-link"><i className="bi bi-link-45deg"></i></a>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </section>    </>
  );
}

export default Portfolio;



















