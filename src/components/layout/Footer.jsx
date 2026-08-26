import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logoBlanc from '../../assets/logo-blanc 1.png'; // Ton logo en blanc

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* --- Partie Principale du Footer (3 Colonnes) --- */}
        <div className={styles.topSection}>
          
          {/* Colonne 1 : Marque & Coordonnées */}
          <div className={styles.brandCol}>
            <Link to="/">
              <img src={logoBlanc} alt="Hôtel du Pont Roupt Mende" className={styles.logo} />
            </Link>
            <p className={styles.address}>
              2 Avenue du 11 Novembre<br />
              48000 Mende, France
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Colonne 2 : Navigation Rapide */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>La Maison</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/chambres">Chambres</Link></li>
              <li><Link to="/bistrot">Bistrot Bar à Vin</Link></li>
              <li><Link to="/spa">Spa & Détente</Link></li>
              <li><Link to="/seminaires">Séminaires & Événements</Link></li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Réservation */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Nous contacter</h4>
            <p className={styles.contactInfo}>+33 (0)4 66 65 01 43</p>
            <p className={styles.contactInfo}>contact@hotel-pont-roupt.com</p>
            
            <Link to="/contact" className={styles.bookBtn}>
              RÉSERVER EN DIRECT
            </Link>
          </div>

        </div>

        {/* --- Partie Basse : Copyright & Mentions Légales --- */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Hôtel du Pont Roupt. Tous droits réservés.
          </p>
          <p className={styles.affiliation}>
            The Originals Boutique, Hôtel du Pont Roupt, Mende
          </p>
          <div className={styles.legalLinks}>
            <Link to="/mentions-legales">Mentions Légales</Link>
            <Link to="/cgv">CGV</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;