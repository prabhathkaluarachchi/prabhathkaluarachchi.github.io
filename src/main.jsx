import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import this

// Initialize AOS
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> {/* ✅ Wrap App with HelmetProvider */}
      <App />
    </HelmetProvider>
  </StrictMode>
);
