import { useTranslation } from 'react-i18next'; // 1. IMPORT DU HOOK ICI
import styles from './Bar.module.css';

// Import de tes vraies images (ajuste les chemins selon ton dossier assets)
import imgPetitDej from '../assets/1-4.jpg'; 
import imgLounge from '../assets/bistrot-1.jpg'; 
import imgPlanches from '../assets/1-24.jpg'; 

function Bar() {
  const { t } = useTranslation(); // 2. INITIALISATION DE LA TRADUCTION ICI

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('bar.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('bar.mainTitle')}</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>{t('bar.subtitle')}</p>
      </section>

      {/* 2. LES BLOCS ÉDITORIAUX */}
      <section className={styles.editorialSection}>
        
        {/* BLOC 01 : LE PETIT-DÉJEUNER */}
        <article className={styles.editorialRow}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgPetitDej} alt="Petit-déjeuner gourmand" className={styles.editorialImage} fetchPriority="high"/>
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('bar.petitDejTag')}</span>
            <h2 className={styles.rowTitle}>{t('bar.petitDejTitle')}</h2>
            <p className={styles.rowDesc}>{t('bar.petitDejDesc')}</p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('bar.badgeTerroir')}</div>
              <div className={styles.featureBadge}>{t('bar.badgeBuffet')}</div>
            </div>
          </div>
        </article>

        {/* BLOC 02 : LE BAR & SALON */}
        <article className={`${styles.editorialRow} ${styles.reverseRow}`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgLounge} alt="Salon et Bar feutré" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('bar.loungeTag')}</span>
            <h2 className={styles.rowTitle}>{t('bar.loungeTitle')}</h2>
            <p className={styles.rowDesc}>{t('bar.loungeDesc')}</p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('bar.badgeLounge1')}</div>
              <div className={styles.featureBadge}>{t('bar.badgeLounge2')}</div>
            </div>
          </div>
        </article>

        {/* BLOC 03 : VINS, BOCAUX & PLANCHES */}
        <article className={styles.editorialRow}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgPlanches} alt="Planche de charcuterie et verres de vin" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('bar.snackTag')}</span>
            <h2 className={styles.rowTitle}>{t('bar.snackTitle')}</h2>
            <p className={styles.rowDesc}>{t('bar.snackDesc')}</p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('bar.badgeSnack1')}</div>
              <div className={styles.featureBadge}>{t('bar.badgeSnack2')}</div>
            </div>
          </div>
        </article>

      </section>

      {/* 3. ENCADRÉ FINALE POUR LA CARTE PDF */}
      <section className={styles.pdfSection}>
        <div className={styles.pdfCard}>
          <span className={styles.surtitle}>{t('bar.pdfSurtitle')}</span>
          <h3 className={styles.pdfTitle}>{t('bar.pdfTitle')}</h3>
          <p className={styles.pdfText}>{t('bar.pdfText')}</p>
          <a 
            href="/Carte-Bar-Pont-Roupt.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.pdfBtn}
          >
            <svg className={styles.pdfIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            <span>{t('bar.pdfBtn')}</span>
          </a>
        </div>
      </section>

    </div>
  );
}

export default Bar;