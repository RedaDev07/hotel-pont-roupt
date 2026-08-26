// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './SocialWall.module.css';

import insta1 from '../../assets/insta-1.jpg'; 
import insta2 from '../../assets/insta-2.jpg'; 
import insta3 from '../../assets/insta-3.jpg'; 
import insta4 from '../../assets/insta-4.jpg'; 

function SocialWall() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.socialSection}>
      <div className={styles.container}>
        
        {/* --- En-tête de la section --- */}
        <div className={styles.socialHeader}>
          <div className={styles.titleWrapper}>
            {/* --- REMPLACE LE TEXTE --- */}
            <span className={`${styles.subtitle} animate-fade-up`}>{t('accueil.social.subtitle')}</span>
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.social.title')} <span className={styles.titleItalic}>{t('accueil.social.titleItalic')}</span>
            </h2>
          </div>
          
          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.instaBtn} animate-fade-up delay-200`}>
            {/* --- REMPLACE LE TEXTE --- */}
            {t('accueil.social.button')}
            <span className={styles.btnLine}></span>
          </a>
        </div>

        {/* --- Grille d'images asymétrique --- */}
        <div className={styles.grid}>
          
          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item1} animate-fade-up delay-200`}>
            {/* --- REMPLACE LE TEXTE ALT --- */}
            <img src={insta1} alt={t('accueil.social.alt1')} className={styles.image} />
            {/* --- REMPLACE LE TEXTE --- */}
            <div className={styles.overlay}><span>{t('accueil.social.overlay')}</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item2} animate-fade-up delay-300`}>
            {/* --- REMPLACE LE TEXTE ALT --- */}
            <img src={insta2} alt={t('accueil.social.alt2')} className={styles.image} />
            {/* --- REMPLACE LE TEXTE --- */}
            <div className={styles.overlay}><span>{t('accueil.social.overlay')}</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item3} animate-fade-up delay-400`}>
            {/* --- REMPLACE LE TEXTE ALT --- */}
            <img src={insta3} alt={t('accueil.social.alt3')} className={styles.image} />
            {/* --- REMPLACE LE TEXTE --- */}
            <div className={styles.overlay}><span>{t('accueil.social.overlay')}</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item4} animate-fade-up delay-500`}>
            {/* --- REMPLACE LE TEXTE ALT --- */}
            <img src={insta4} alt={t('accueil.social.alt4')} className={styles.image} />
            {/* --- REMPLACE LE TEXTE --- */}
            <div className={styles.overlay}><span>{t('accueil.social.overlay')}</span></div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default SocialWall;