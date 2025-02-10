import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Import Helmet

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Structured Data with Helmet */}
        <Helmet>
          <title>Prabhath Kaluarachchi</title>
          <meta
            name="description"
            content="Official website of Prabhath Kaluarachchi, a software engineering undergraduate showcasing projects, skills, and professional experience."
          />
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Prabhath Kaluarachchi",
                "url": "https://prabhath.me",
                "sameAs": [
                  "https://www.linkedin.com/in/prabhathkaluarachchi/",
                  "https://github.com/prabhathkaluarachchi"
                ],
                "jobTitle": "Software Engineer | Frontend Developer",
              }
            `}
          </script>
        </Helmet>

        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;




























// import React from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Portfolio from './pages/Portfolio';
// import Contact from './pages/Contact';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/resume" element={<Resume />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;







