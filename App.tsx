import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import InteriorPainting from './pages/services/InteriorPainting';
import ExteriorPainting from './pages/services/ExteriorPainting';
import CabinetRefinishing from './pages/services/CabinetRefinishing';
import CommercialPainting from './pages/services/CommercialPainting';

// ScrollToTop component to ensure pages start at the top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Home page without Layout (no header/footer) */}
        <Route index element={<Home />} />

        {/* All other pages with Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services/interior" element={<InteriorPainting />} />
          <Route path="services/exterior" element={<ExteriorPainting />} />
          <Route path="services/cabinets" element={<CabinetRefinishing />} />
          <Route path="services/commercial" element={<CommercialPainting />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;