// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './EcoLabel.module.css';
import clefVerteLogo from '../../assets/clef-verte.webp'; 

function EcoLabel() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.ecoSection}>
      <div className={styles.card}>
        
        {/* GAUCHE : LOGO AVEC ANIMATION FLOTTANTE ET HALO */}
        <div className={styles.logoSide}>
          <div className={styles.logoGlow}></div>
          {/* --- REMPLACE LE TEXTE ALT --- */}
          <img 
            src={clefVerteLogo} 
            alt={t('accueil.eco.alt')} 
            className={styles.logo} 
          />
          {/* --- REMPLACE LE TEXTE --- */}
          <span className={styles.badgeYear}>{t('accueil.eco.certified')}</span>
        </div>

        {/* DROITE : CONTENU ÉDITORIAL & BADGES INTERACTIFS */}
        <div className={styles.contentSide}>
          
          <div className={styles.headerRow}>
            {/* --- REMPLACE LE TEXTE --- */}
            <span className={styles.tag}>{t('accueil.eco.tag')}</span>
            <span className={styles.pulseContainer}>
              <span className={styles.pulseDot}></span>
              {/* --- REMPLACE LE TEXTE --- */}
              <span className={styles.pulseText}>{t('accueil.eco.status')}</span>
            </span>
          </div>
          
          {/* --- REMPLACE LE TEXTE --- */}
          <h2 className={styles.title}>{t('accueil.eco.title')}</h2>
          
          <p className={styles.description}>
            {/* --- REMPLACE LE TEXTE (Partie 1) --- */}
            {t('accueil.eco.descPart1')} 
            {/* --- REMPLACE LE TEXTE STRONG --- */}
            <strong>{t('accueil.eco.descLabel')}</strong>.
          </p>

          {/* PILULES INTERACTIVES ANIMÉES AU SURVOL */}
          <div className={styles.pillsGrid}>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>🌱</span>
              {/* --- REMPLACE LE TEXTE --- */}
              <span>{t('accueil.eco.pill1')}</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>💧</span>
              {/* --- REMPLACE LE TEXTE --- */}
              <span>{t('accueil.eco.pill2')}</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>⚡</span>
              {/* --- REMPLACE LE TEXTE --- */}
              <span>{t('accueil.eco.pill3')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EcoLabel;