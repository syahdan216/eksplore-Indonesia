import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './pages/Home';
import DestinasiWisata from './pages/DestinasiWisata';
import BudayaTradisi from './pages/BudayaTradisi';
import KulinerNusantara from './pages/KulinerNusantara';
import TempatBersejarah from './pages/TempatBersejarah';
import PetaInteraktif from './pages/PetaInteraktif';
import KuisBudaya from './pages/KuisBudaya';
import TentangKami from './pages/TentangKami';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';

/* ScrollToTopOnNavigate: scroll to top whenever route changes */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnNavigate />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinasi" element={<DestinasiWisata />} />
            <Route path="/budaya" element={<BudayaTradisi />} />
            <Route path="/kuliner" element={<KulinerNusantara />} />
            <Route path="/sejarah" element={<TempatBersejarah />} />
            <Route path="/peta" element={<PetaInteraktif />} />
            <Route path="/kuis" element={<KuisBudaya />} />
            <Route path="/tentang" element={<TentangKami />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  );
}

export default App;
