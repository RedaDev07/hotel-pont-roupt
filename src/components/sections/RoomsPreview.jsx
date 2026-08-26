// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './RoomsPreview.module.css';
import roomImg from '../../assets/chambre-preview.jpg'; 
import { Link } from 'react-router-dom'; 

function RoomsPreview() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.roomsSection}>
      <div className={styles.container}>
        
        {/* --- En-tête de la section --- */}
        <div className={styles.sectionHeader}>
          {/* --- REMPLACE LE TEXTE --- */}
          <span className={`${styles.subtitle} animate-fade-up`}>{t('accueil.rooms.subtitle')}</span>
          <h2 className={`${styles.title} animate-fade-up delay-100`}>
            {/* --- REMPLACE LE TEXTE --- */}
            {t('accueil.rooms.title')}
          </h2>
        </div>

        {/* --- Le bloc principal (Image + Carte de texte superposée) --- */}
        <div className={styles.showcaseWrapper}>
          
          {/* L'image de la chambre */}
          <div className={`${styles.imageContainer} animate-fade-up delay-200`}>
            {/* --- REMPLACE LE TEXTE ALT --- */}
            <img src={roomImg} alt={t('accueil.rooms.alt')} className={styles.roomImage} />
          </div>

          {/* La carte d'information qui chevauche l'image */}
          <div className={`${styles.infoCard} animate-fade-up delay-400`}>
            {/* --- REMPLACE LE TEXTE --- */}
            <h3 className={styles.cardTitle}>{t('accueil.rooms.cardTitle')}</h3>
            <p className={styles.cardText}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.rooms.cardText')}
            </p>
            
            {/* Liste des équipements (style minimaliste) */}
            <ul className={styles.amenitiesList}>
              {/* --- REMPLACE LE TEXTE --- */}
              <li>{t('accueil.rooms.amenity1')} </li>
              <li>{t('accueil.rooms.amenity2')}</li>
              <li>{t('accueil.rooms.amenity3')}</li>
            </ul>

            <Link to="/chambres" className={styles.actionBtn}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.rooms.button')}
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default RoomsPreview;