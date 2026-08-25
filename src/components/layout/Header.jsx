import { useState, useEffect } from 'react'; // Ajout de useEffect
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 1. AJOUT DE L'IMPORT ICI
import styles from './Header.module.css';

import logoBlanc from '../../assets/logo-blanc.png'; 
import menuImage from '../../assets/hero-1.webp'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Nouvel état pour le scroll

  // 2. INITIALISATION DU HOOK DE TRADUCTION
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // 3. FONCTION DE CHANGEMENT DE LANGUE
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Le détecteur de défilement (Scroll)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // On a scrollé vers le bas
      } else {
        setIsScrolled(false); // On est tout en haut
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. La Barre de navigation fixe */}
      <header className={`
        ${styles.header} 
        ${isMenuOpen ? styles.headerHidden : ''} 
        ${isScrolled ? styles.headerScrolled : ''}
      `}>
        <button onClick={toggleMenu} className={styles.menuBtn}>MENU</button>
        
        <div className={styles.logoCenter}>
          <Link to="/">
            <img src={logoBlanc} alt="Logo Hôtel du Pont Roupt" className={styles.logoImage} />
          </Link>
        </div>

        {/* --- Le groupe de boutons à droite --- */}
        <div className={styles.headerRight}>
          
          {/* NOUVEAU TEXTE : Sur deux lignes avec le span pour accentuer le Club */}
          <a 
            href="https://www.theoriginalshotels.com/fidelite" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.loyaltyBtnTop}
          >
            Fidélité <br />
            <span>ORIGINALS CLUB</span>
          </a>

          {/* Bouton Réserver : Sur deux lignes avec "Meilleur Prix Garanti" */}
          <a 
            href="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende/book/dates-of-stay?_gl=1*2naxht*_ga*MTA0MTgwOTA2MC4xNzYyMjc1MTMw*_ga_3R5SJEDWK4*czE3NzkyMTk2NjQkbzgkZzEkdDE3NzkyMTk3NTIkajU5JGwwJGgw*_fplc*aFoxYUVXTUNuT1J0TTJvVWZiaGVDdFNranpCNHE0JTJCQVV4ZEZYV2FJSExKcklmTG5XajA0d2VtYjVoOFVmTWFxSmNGbVRzNUclMkJ2eVpmQ21mRSUyRnNCM2cwdmJ2aSUyQmpBWkV0MmI2YWQyWEczR25CZ1NsMHlsNktyNmhrUUJVNUElM0QlM0Q.*_gcl_au*NzQyMTMwMDg1LjE3NzY4Nzc2MTc.*_ga_995P0KWECH*czE3NzkyMDY1NDkkbzYkZzEkdDE3NzkyMTk3NTMkajU3JGwwJGgxNzczMTMxMzYw&adults=1&domain=www.theoriginalshotels.com&HotelId=106037&languageid=3&rooms=1&subchan=SITE-TheOriginals" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.reserverBtnTop}
          >
            Réservez <br />
            <span>Meilleur Prix Garanti</span>
          </a>
          
        </div>
      </header>

      {/* Barre de Réservation Mobile */}
      <a 
        href="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende/book/dates-of-stay?_gl=1*2naxht*_ga*MTA0MTgwOTA2MC4xNzYyMjc1MTMw*_ga_3R5SJEDWK4*czE3NzkyMTk2NjQkbzgkZzEkdDE3NzkyMTk3NTIkajU5JGwwJGgw*_fplc*aFoxYUVXTUNuT1J0TTJvVWZiaGVDdFNranpCNHE0JTJCQVV4ZEZYV2FJSExKcklmTG5XajA0d2VtYjVoOFVmTWFxSmNGbVRzNUclMkJ2eVpmQ21mRSUyRnNCM2cwdmJ2aSUyQmpBWkV0MmI2YWQyWEczR25CZ1NsMHlsNktyNmhrUUJVNUElM0QlM0Q.*_gcl_au*NzQyMTMwMDg1LjE3NzY4Nzc2MTc.*_ga_995P0KWECH*czE3NzkyMDY1NDkkbzYkZzEkdDE3NzkyMTk3NTMkajU3JGwwJGgxNzczMTMxMzYw&adults=1&domain=www.theoriginalshotels.com&HotelId=106037&languageid=3&rooms=1&subchan=SITE-TheOriginals" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.mobileBottomBookBtn}
      >
        Réservez — Meilleur Prix Garanti
      </a>

      {/* Le Menu Overlay */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
        
        {/* Ligne du haut : Langues et bouton Fermer */}
        <div className={styles.menuTopBar}>
          
          {/* 4. SÉLECTEUR DE LANGUE DYNAMIQUE AU CLIC */}
          <div className={styles.langSelector}>
            <span 
              onClick={() => changeLang('fr')} 
              className={currentLang.startsWith('fr') ? styles.langActive : styles.langLink}
              style={{ cursor: 'pointer' }}
            >
              FR
            </span>
            <span 
              onClick={() => changeLang('en')} 
              className={currentLang.startsWith('en') ? styles.langActive : styles.langLink}
              style={{ cursor: 'pointer' }}
            >
              EN
            </span>
            <span 
              onClick={() => changeLang('es')} 
              className={currentLang.startsWith('es') ? styles.langActive : styles.langLink}
              style={{ cursor: 'pointer' }}
            >
              ES
            </span>
          </div>

          <button onClick={toggleMenu} className={styles.closeBtn}>✕</button>
        </div>

        {/* Le corps principal du menu */}
        <div className={styles.menuBody}>
          
          {/* Côté Gauche : Liens, Boutons et Textes */}
          <div className={styles.menuLeft}>
            
            {/* 5. GRILLE DE LIENS TRADUITS AVEC t('menu...') */}
            <div className={styles.menuLinksGrid}>
              
              {/* Colonne 1 : Primaire */}
              <div className={styles.linksCol}>
                <Link to="/" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.maison')}
                </Link>
                <Link to="/chambres" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.chambres')}
                </Link>
                <Link to="/bar" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.bistrot')}
                </Link>
                <Link to="/seminaire" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.seminaire')}
                </Link>
              </div>
              
              {/* Colonne 2 : Secondaire */}
              <div className={styles.linksCol}>
                <Link to="/spa" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.spa')}
                </Link>
                <Link to="/bons-cadeaux" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.cadeaux')}
                </Link>
                <Link to="/contact" onClick={toggleMenu} className={styles.serifLink}>
                  {t('menu.acces')}
                </Link>
              </div>

            </div>

            {/* Les deux boutons blancs rectangulaires */}
            <div className={styles.menuActionButtons}>
              <Link 
                to="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende/book/dates-of-stay?_gl=1*2naxht*_ga*MTA0MTgwOTA2MC4xNzYyMjc1MTMw*_ga_3R5SJEDWK4*czE3NzkyMTk2NjQkbzgkZzEkdDE3NzkyMTk3NTIkajU5JGwwJGgw*_fplc*aFoxYUVXTUNuT1J0TTJvVWZiaGVDdFNranpCNHE0JTJCQVV4ZEZYV2FJSExKcklmTG5XajA0d2VtYjVoOFVmTWFxSmNGbVRzNUclMkJ2eVpmQ21mRSUyRnNCM2cwdmJ2aSUyQmpBWkV0MmI2YWQyWEczR25CZ1NsMHlsNktyNmhrUUJVNUElM0QlM0Q.*_gcl_au*NzQyMTMwMDg1LjE3NzY4Nzc2MTc.*_ga_995P0KWECH*czE3NzkyMDY1NDkkbzYkZzEkdDE3NzkyMTk3NTMkajU3JGwwJGgxNzczMTMxMzYw&adults=1&domain=www.theoriginalshotels.com&HotelId=106037&languageid=3&rooms=1&subchan=SITE-TheOriginals" 
                className={styles.whiteRectBtn} 
                onClick={toggleMenu}
              >
                {t('menu.reserver')}
              </Link>
              <Link to="/contact" className={styles.whiteRectBtn} onClick={toggleMenu}>
                {t('menu.contacter')}
              </Link>
            </div>

            {/* Bouton Fidélité (Visible QUE sur mobile) */}
            <a 
              href="https://www.theoriginalshotels.com/fidelite" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.loyaltyBtnMobileMenu}
            >
              Fidélité <br/>
              <span>ORIGINALS CLUB</span>
            </a>

            {/* Le petit texte de bas de page à gauche */}
            <div className={styles.menuFooterLeft}>
              <p className={styles.footerItalic}>{t('menu.decouvrez')}</p>
              <p className={styles.footerCities}>MENDE • LOZÈRE • OCCITANIE</p>
            </div>
          </div>

          {/* Côté Droit : L'Image et le lien Facebook */}
          <div className={styles.menuRight}>
            <div className={styles.imageContainer}>
              <img src={menuImage} alt="Hôtel Pont Roupt Façade" className={styles.menuPhoto} />
            </div>
            <a 
              href="https://www.facebook.com/theoriginalsboutiquemende" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.instaLink}
            >
              Suivez-nous sur Facebook <span>📷</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;