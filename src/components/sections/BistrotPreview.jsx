// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './BistrotPreview.module.css';
import { Link } from 'react-router-dom'; 
import img1 from '../../assets/bistrot-1.jpg'; 
import img2 from '../../assets/bistrot-2.jpg'; 
import img3 from '../../assets/bistrot-3.jpg'; 

function BistrotPreview() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.bistrotSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            {/* --- REMPLACE LE TEXTE --- */}
            <span className={`${styles.subtitle} animate-fade-up`}>{t('accueil.bistrot.subtitle')}</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.bistrot.title')} <span className={styles.titleItalic}>{t('accueil.bistrot.titleItalic')}</span> {t('accueil.bistrot.titlePart2')}
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.bistrot.para1')}
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.bistrot.para2')}
            </p>

            <Link to="/bar" className={`${styles.actionBtn} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.bistrot.button')}
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* --- Colonne de Droite : Galerie Asymétrique à 3 images --- */}
        <div className={styles.galleryColumn}>
          <div className={styles.galleryWrapper}>
            
            {/* Image 1 : Grande photo de fond (Ambiance) */}
            <div className={`${styles.imgMain} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={img1} alt={t('accueil.bistrot.altMain')} className={styles.image} />
            </div>

            {/* Image 2 : Petite photo en bas à gauche (Petit-déjeuner) */}
            <div className={`${styles.imgSmallLeft} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={img2} alt={t('accueil.bistrot.altBreakfast')} className={styles.image} />
            </div>

            {/* Image 3 : Petite photo en haut à droite (Planche) */}
            <div className={`${styles.imgSmallRight} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={img3} alt={t('accueil.bistrot.altPlanche')} className={styles.image} />
            </div>

            {/* Petit élément de décor Orange */}
            <div className={`${styles.decorSquare} animate-fade-up delay-300`}></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default BistrotPreview;