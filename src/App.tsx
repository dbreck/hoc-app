import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { BASE_PATH } from './config/routes';

// Layout components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';

// Pages
import { ComingSoonPage } from './pages/ComingSoonPage';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { InteriorPaintingPage } from './pages/InteriorPaintingPage';
import { ExteriorPaintingPage } from './pages/ExteriorPaintingPage';
import { CabinetRefinishingPage } from './pages/CabinetRefinishingPage';
import { CommercialPaintingPage } from './pages/CommercialPaintingPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

/**
 * Layout wrapper for preview pages (includes Header and Footer)
 */
function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Coming Soon - root level (no header/footer) */}
          <Route path="/" element={<ComingSoonPage />} />

          {/* Preview routes - full site with header/footer */}
          <Route
            path={`${BASE_PATH}`}
            element={
              <PreviewLayout>
                <HomePage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/services`}
            element={
              <PreviewLayout>
                <ServicesPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/services/interior-painting`}
            element={
              <PreviewLayout>
                <InteriorPaintingPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/services/exterior-painting`}
            element={
              <PreviewLayout>
                <ExteriorPaintingPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/services/cabinet-refinishing`}
            element={
              <PreviewLayout>
                <CabinetRefinishingPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/services/commercial-painting`}
            element={
              <PreviewLayout>
                <CommercialPaintingPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/about`}
            element={
              <PreviewLayout>
                <AboutPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/faq`}
            element={
              <PreviewLayout>
                <FAQPage />
              </PreviewLayout>
            }
          />
          <Route
            path={`${BASE_PATH}/contact`}
            element={
              <PreviewLayout>
                <ContactPage />
              </PreviewLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
