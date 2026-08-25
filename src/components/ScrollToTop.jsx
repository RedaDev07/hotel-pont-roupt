import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Détecte le chemin de la page actuelle

  useEffect(() => {
    // Remonte tout en haut (X: 0, Y: 0) instantanément à chaque changement d'URL
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant n'affiche rien visuellement
}

export default ScrollToTop;