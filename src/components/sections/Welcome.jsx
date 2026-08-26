// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import mainImg from '../../assets/hotel.jpg'; 
import detailImg from '../../assets/maison-detail.jpg'; 

function Welcome() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.luxeSection}>
      <div className={styles.container}>

        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textCol}>
          <div className={styles.contentWrapper}>
            <div className={`${styles.badge} animate-fade-up`}>
              <span className={styles.badgeLine}></span>
              {/* --- REMPLACE LE TEXTE --- */}
              <span className={styles.badgeText}>{t('accueil.welcome.badge')}</span>
            </div>

            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.welcome.titlePart1')} <br />
              {/* --- REMPLACE LE TEXTE --- */}
              <span className={styles.titleItalic}>{t('accueil.welcome.titlePart2')}</span>
            </h2>

            {/* --- REMPLACE LE TEXTE --- */}
            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              {t('accueil.welcome.para1')}
            </p>

            {/* --- REMPLACE LE TEXTE --- */}
            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              {t('accueil.welcome.para2')}
            </p>

            {/* --- REMPLACE LE TEXTE --- */}
            <p className={`${styles.paragraph} animate-fade-up delay-400`}>
              {t('accueil.welcome.para3')}
            </p>

            <Link to="/chambres" className={`${styles.actionBtn} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.welcome.button')}
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* --- Colonne de Droite : La Double Image Spectaculaire --- */}
        <div className={styles.galleryCol}>
          <div className={styles.galleryWrapper}>
            {/* L'image principale (Grande) */}
            <div className={`${styles.mainImageWrapper} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={mainImg} alt={t('accueil.welcome.altMain')} className={styles.mainImage} />
            </div>
            
            {/* L'image de détail (Petite, superposée par-dessus) */}
            <div className={`${styles.detailImageWrapper} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={detailImg} alt={t('accueil.welcome.altDetail')} className={styles.detailImage} />
            </div>

            {/* Le bloc carré décoratif Beige Zen */}
            <div className={`${styles.decorBlock} animate-fade-up delay-300`}></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Welcome;