// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './SpaPreview.module.css';
import { Link } from 'react-router-dom'; 

import imgPiscine from '../../assets/insta-3.jpg';
import imgSauna from '../../assets/spa-sauna.webp';
import imgSoins from '../../assets/spa-soins.webp';

function SpaPreview() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.spaSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Le Cluster d'Images --- */}
        <div className={styles.galleryColumn}>
          <div className={styles.galleryWrapper}>
            
            {/* Le bloc Beige de fond pour lier les images */}
            <div className={`${styles.decorBlock} animate-fade-up`}></div>

            {/* Image 1 : La Piscine (Grande, à gauche) */}
            <div className={`${styles.imgMain} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={imgPiscine} alt={t('accueil.spa.altPool')} className={styles.image} />
            </div>

            {/* Image 2 : Le Sauna (Petite, en haut à droite) */}
            <div className={`${styles.imgTopRight} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={imgSauna} alt={t('accueil.spa.altSauna')} className={styles.image} />
            </div>

            {/* Image 3 : Les Soins (Petite, en bas à droite) */}
            <div className={`${styles.imgBottomRight} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={imgSoins} alt={t('accueil.spa.altSoins')} className={styles.image} />
            </div>

          </div>
        </div>

        {/* --- Colonne de Droite : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            {/* --- REMPLACE LE TEXTE --- */}
            <span className={`${styles.subtitle} animate-fade-up`}>{t('accueil.spa.subtitle')}</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.spa.title')} <span className={styles.titleItalic}>{t('accueil.spa.titleItalic')}</span> {t('accueil.spa.titlePart2')}
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.spa.para1')}
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.spa.para2')}
            </p>

            {/* Petite liste élégante des installations */}
            <ul className={`${styles.spaList} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE --- */}
              <li>{t('accueil.spa.list1')}</li>
              <li>{t('accueil.spa.list2')}</li>
              <li>{t('accueil.spa.list3')}</li>
            </ul>

            <Link to="/spa" className={`${styles.actionBtn} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.spa.button')}
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SpaPreview;