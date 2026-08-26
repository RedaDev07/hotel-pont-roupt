import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

import logoBlanc from '../../assets/logo-blanc.png'; 
import menuImage from '../../assets/hero-1.webp'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'fr';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLangMenu = () => setIsLangMenuOpen(!isLangMenuOpen);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
        
        {/* --- CÔTÉ GAUCHE : Bouton Menu + Icône Langue --- */}
        <div className={styles.headerLeft}>
          <button onClick={toggleMenu} className={styles.menuBtn}>MENU</button>
          
          <div className={styles.langDropdownContainer}>
            <button 
              className={styles.langIconBtn} 
              onClick={toggleLangMenu}
            >
              <svg className={styles.globeIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span className={styles.currentLangText}>{currentLang.toUpperCase()}</span>
            </button>

            {isLangMenuOpen && (
              <div className={styles.langDropdown}>
                <span 
                  onClick={() => changeLang('fr')} 
                  className={currentLang.startsWith('fr') ? styles.langActive : ''}
                >
                  FR - Français
                </span>
                <span 
                  onClick={() => changeLang('en')} 
                  className={currentLang.startsWith('en') ? styles.langActive : ''}
                >
                  EN - English
                </span>
                <span 
                  onClick={() => changeLang('es')} 
                  className={currentLang.startsWith('es') ? styles.langActive : ''}
                >
                  ES - Español
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* --- CENTRE : Logo --- */}
        <div className={styles.logoCenter}>
          <Link to="/">
            <img src={logoBlanc} alt="Logo Hôtel du Pont Roupt" className={styles.logoImage} />
          </Link>
        </div>

        {/* --- CÔTÉ DROIT : Boutons de réservation --- */}
        <div className={styles.headerRight}>
          <a 
            href="https://www.theoriginalshotels.com/fidelite" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.loyaltyBtnTop}
          >
            {/* TRADUCTION AJOUTÉE ICI */}
            {t('menu.fidelite')} <br />
            <span>{t('menu.club')}</span>
          </a>

          <a 
            href="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende/book/dates-of-stay?_gl=1*2naxht*_ga*MTA0MTgwOTA2MC4xNzYyMjc1MTMw*_ga_3R5SJEDWK4*czE3NzkyMTk2NjQkbzgkZzEkdDE3NzkyMTk3NTIkajU5JGwwJGgw*_fplc*aFoxYUVXTUNuT1J0TTJvVWZiaGVDdFNranpCNHE0JTJCQVV4ZEZYV2FJSExKcklmTG5XajA0d2VtYjVoOFVmTWFxSmNGbVRzNUclMkJ2eVpmQ21mRSUyRnNCM2cwdmJ2aSUyQmpBWkV0MmI2YWQyWEczR25CZ1NsMHlsNktyNmhrUUJVNUElM0QlM0Q.*_gcl_au*NzQyMTMwMDg1LjE3NzY4Nzc2MTc.*_ga_995P0KWECH*czE3NzkyMDY1NDkkbzYkZzEkdDE3NzkyMTk3NTMkajU3JGwwJGgxNzczMTMxMzYw&adults=1&domain=www.theoriginalshotels.com&HotelId=106037&languageid=3&rooms=1&subchan=SITE-TheOriginals" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.reserverBtnTop}
          >
            {/* TRADUCTION AJOUTÉE ICI */}
            {t('menu.reserver')} <br />
            <span>{t('menu.bestPrice')}</span>
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
        {/* TRADUCTION AJOUTÉE ICI */}
        {t('menu.reserver')} — {t('menu.bestPrice')}
      </a>

      {/* Le Menu Overlay */}
      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
        
        <div className={styles.menuTopBar}>
          <div></div> 
          <button onClick={toggleMenu} className={styles.closeBtn}>✕</button>
        </div>

        <div className={styles.menuBody}>
          <div className={styles.menuLeft}>
            <div className={styles.menuLinksGrid}>
              <div className={styles.linksCol}>
                <Link to="/" onClick={toggleMenu} className={styles.serifLink}>{t('menu.maison')}</Link>
                <Link to="/chambres" onClick={toggleMenu} className={styles.serifLink}>{t('menu.chambres')}</Link>
                <Link to="/bar" onClick={toggleMenu} className={styles.serifLink}>{t('menu.bistrot')}</Link>
                <Link to="/seminaire" onClick={toggleMenu} className={styles.serifLink}>{t('menu.seminaire')}</Link>
              </div>
              <div className={styles.linksCol}>
                <Link to="/spa" onClick={toggleMenu} className={styles.serifLink}>{t('menu.spa')}</Link>
                <Link to="/bons-cadeaux" onClick={toggleMenu} className={styles.serifLink}>{t('menu.cadeaux')}</Link>
                <Link to="/contact" onClick={toggleMenu} className={styles.serifLink}>{t('menu.acces')}</Link>
              </div>
            </div>

            <div className={styles.menuActionButtons}>
              <Link to="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende/book/..." className={styles.whiteRectBtn} onClick={toggleMenu}>{t('menu.reserver')}</Link>
              <Link to="/contact" className={styles.whiteRectBtn} onClick={toggleMenu}>{t('menu.contacter')}</Link>
            </div>

            <a href="https://www.theoriginalshotels.com/fidelite" target="_blank" rel="noopener noreferrer" className={styles.loyaltyBtnMobileMenu}>
              {/* TRADUCTION AJOUTÉE ICI */}
              {t('menu.fidelite')} <br/><span>{t('menu.club')}</span>
            </a>

            <div className={styles.menuFooterLeft}>
              <p className={styles.footerItalic}>{t('menu.decouvrez')}</p>
              <p className={styles.footerCities}>{t('menu.villeRegion')}</p>
            </div>
          </div>

          <div className={styles.menuRight}>
            <div className={styles.imageContainer}>
              <img src={menuImage} alt="Hôtel Pont Roupt Façade" className={styles.menuPhoto} />
            </div>
            <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={styles.instaLink}>
              Suivez-nous sur Facebook <span>📷</span>
            </a>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;