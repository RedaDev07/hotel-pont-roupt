import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer"; // Importation du nouveau Footer
import Accueil from "./pages/Accueil";
import Chambres from "./pages/Chambres";
import Spa from "./pages/Spa";
import Bar from "./pages/Bar";
import Seminaire from "./pages/Seminaire";
import BonsCadeaux from "./pages/BonsCadeaux";
import Contact from "./pages/Contact";
import Erreur404 from "./pages/Erreur404";

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/chambres" element={<Chambres />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/seminaire" element={<Seminaire />} />
        <Route path="/bons-cadeaux" element={<BonsCadeaux />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>

      <Footer /> {/* Placé ici, il s'affichera automatiquement en bas de chaque page */}
    </Router>
  );
}

export default App;