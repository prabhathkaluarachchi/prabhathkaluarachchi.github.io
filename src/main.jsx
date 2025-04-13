import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async';
import Swal from 'sweetalert2';

// Initialize AOS
AOS.init();

// Disable right-click with SweetAlert2
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  Swal.fire({
    icon: 'warning',
    title: 'Oops!',
    text: 'Right Click is disabled by Administrator Prabhath Kaluarachchi',
    confirmButtonText: 'OK',
  });
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
