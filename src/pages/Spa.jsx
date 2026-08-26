import { useTranslation } from 'react-i18next';
import styles from './Spa.module.css';

// Remplace par tes vrais chemins dans ton dossier assets
import imgPiscine from '../assets/piscine1.jpg'; // Piscine 
import imgSoins from '../assets/spa-soins.webp';     // Cabine de massage feutrée

function Spa() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('spaPage.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('spaPage.title')}</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          {t('spaPage.subtitle')}
        </p>
      </section>

      {/* 2. BLOCS ÉDITORIAUX (PISCINE & CABINE DE SOIN) */}
      <section className={styles.editorialSection}>
        
        {/* BLOC 01 : LA PISCINE INTÉRIEURE CHAUFFÉE */}
        <article className={styles.editorialRow}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgPiscine} alt="Piscine intérieure chauffée et espace détente" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('spaPage.piscineTag')}</span>
            <h2 className={styles.rowTitle}>{t('spaPage.piscineTitle')}</h2>
            <p className={styles.rowDesc}>
              {t('spaPage.piscineDesc')}
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('spaPage.badgeChauffee')}</div>
              <div className={styles.featureBadge}>{t('spaPage.badgeHotel')}</div>
            </div>
          </div>
        </article>

        {/* BLOC 02 : CABINE DE SOINS & MODELAGES (EFFET MIROIR) */}
        <article className={`${styles.editorialRow} ${styles.reverseRow}`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgSoins} alt="Cabine de soins et modelages" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('spaPage.soinsTag')}</span>
            <h2 className={styles.rowTitle}>{t('spaPage.soinsTitle')}</h2>
            <p className={styles.rowDesc}>
              {t('spaPage.soinsDesc')}
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('spaPage.badgeRdv')}</div>
              <div className={styles.featureBadge}>{t('spaPage.badgeMassages')}</div>
              <div className={styles.featureBadge}>{t('spaPage.badgeZen')}</div>
            </div>
          </div>
        </article>

      </section>

      {/* 3. GRILLE DES PRESTATIONS INCLUSES */}
      <section className={styles.equipmentSection}>
        <div className={styles.equipmentHeader}>
          <span className={styles.surtitle}>{t('spaPage.equipSurtitle')}</span>
          <h3 className={styles.equipmentTitle}>{t('spaPage.equipTitle')}</h3>
        </div>

        <div className={styles.equipmentGrid}>
          
          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <h4>{t('spaPage.equip1Title')}</h4>
            <p>{t('spaPage.equip1Desc')}</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <h4>{t('spaPage.equip2Title')}</h4>
            <p>{t('spaPage.equip2Desc')}</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4>{t('spaPage.equip3Title')}</h4>
            <p>{t('spaPage.equip3Desc')}</p>
          </div>

        </div>
      </section>

      {/* 4. ENCADRÉ DE CONTACT / RÉSERVATION DE SOIN */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <span className={styles.surtitle}>{t('spaPage.contactSurtitle')}</span>
          <h3 className={styles.contactTitle}>{t('spaPage.contactTitle')}</h3>
          <p className={styles.contactText}>
            {t('spaPage.contactText')}
          </p>
          
          <div className={styles.btnGroup}>
            <a 
              href="mailto:contact@hotel-pont-roupt.fr?subject=R%C3%A9servation%20Soin%20Spa" 
              className={styles.primaryBtn}
            >
              contact@hotel-pont-roupt.fr
            </a>
            <a 
              href="tel:+33466650143" 
              className={styles.secondaryBtn}
            >
              04 66 65 01 43
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Spa;