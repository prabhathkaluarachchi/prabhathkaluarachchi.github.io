// // Disable right-click with custom message
// document.addEventListener("contextmenu", function (event) {
//   event.preventDefault();
//   alert("Right Click was disabled by Administrator Prabhath Kaluarachchi");
// });

/**
 * Apply .scrolled class to the HTML root as the page is scrolled down
 */
let scrollTimeout;

function toggleScrolled() {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const selectRoot = document.documentElement;
    const selectHeader = document.querySelector('#header');
    
    if (!selectHeader || !selectRoot) return; // Exit if elements don't exist
    
    // Only proceed if header has a sticky class (modify as needed)
    if (!selectHeader.classList.contains('scroll-up-sticky') && 
        !selectHeader.classList.contains('sticky-top') && 
        !selectHeader.classList.contains('fixed-top')) {
      return;
    }
    
    window.scrollY > 100 
      ? selectRoot.classList.add('scrolled') 
      : selectRoot.classList.remove('scrolled');
  }, 50);
}

// Attach event listeners
document.addEventListener('scroll', toggleScrolled);
window.addEventListener('load', toggleScrolled);


  /**
   * Init typed.js
   */
  const selectTyped = document.querySelector('.typed');
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Animate the skills items on reveal
   */
  let skillsAnimation = document.querySelectorAll('.skills-animation');
  skillsAnimation.forEach((item) => {
    new Waypoint({
      element: item,
      offset: '80%',
      handler: function(direction) {
        let progress = item.querySelectorAll('.progress .progress-bar');
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);


