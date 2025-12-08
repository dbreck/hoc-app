import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InteriorPaintingPage } from './pages/InteriorPaintingPage';
import { ExteriorPaintingPage } from './pages/ExteriorPaintingPage';
import { CabinetRefinishingPage } from './pages/CabinetRefinishingPage';
import { CommercialPaintingPage } from './pages/CommercialPaintingPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/interior-painting" element={<InteriorPaintingPage />} />
              <Route path="/services/exterior-painting" element={<ExteriorPaintingPage />} />
              <Route path="/services/cabinet-refinishing" element={<CabinetRefinishingPage />} />
              <Route path="/services/commercial-painting" element={<CommercialPaintingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
