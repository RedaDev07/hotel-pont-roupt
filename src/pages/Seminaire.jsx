import { useTranslation } from 'react-i18next';
import styles from './Seminaire.module.css';

// Remplace par les bons chemins vers tes images dans ton dossier assets
import imgSalleU from '../assets/sem.jpeg'; // La grande table en U
import imgBanquet1 from '../assets/Hotel Pont Roupt-046.jpg'; // Salle lumineuse avec tables rondes

function Seminaire() {
  const { t } = useTranslation();

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('seminairePage.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('seminairePage.mainTitle')}</h1>
        <div className={styles.separator}></div>
        
        <p className={styles.subtitle}>
          {t('seminairePage.subtitle')}
        </p>
      </section>

      {/* 2. BLOCS ÉDITORIAUX */}
      <section className={styles.editorialSection}>
        
        {/* BLOC 01 : LA SALLE PLÉNIÈRE */}
        <article className={styles.editorialRow}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgSalleU} alt="Salle plénière de séminaire" className={styles.editorialImage} fetchPriority="high"/>
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('seminairePage.pleniereTag')}</span>
            <h2 className={styles.rowTitle}>{t('seminairePage.pleniereTitle')}</h2>
            <p className={styles.rowDesc}>
              {t('seminairePage.pleniereDesc')}
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('seminairePage.badgeCapacite')}</div>
              <div className={styles.featureBadge}>{t('seminairePage.badgeProjecteur')}</div>
            </div>
          </div>
        </article>

        {/* BLOC 02 : L'ESPACE RÉCEPTION */}
        <article className={`${styles.editorialRow} ${styles.reverseRow}`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgBanquet1} alt="Salon de réception pour événements d'entreprise" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>{t('seminairePage.receptionTag')}</span>
            <h2 className={styles.rowTitle}>{t('seminairePage.receptionTitle')}</h2>
            <p className={styles.rowDesc}>
              {t('seminairePage.receptionDesc')}
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>{t('seminairePage.badgeCocktail')}</div>
              <div className={styles.featureBadge}>{t('seminairePage.badgeShowroom')}</div>
              <div className={styles.featureBadge}>{t('seminairePage.badgePrive')}</div>
            </div>
          </div>
        </article>

      </section>

      {/* 3. GRILLE DES ÉQUIPEMENTS INCLUS */}
      <section className={styles.equipmentSection}>
        <div className={styles.equipmentHeader}>
          <span className={styles.surtitle}>{t('seminairePage.equipSurtitle')}</span>
          <h3 className={styles.equipmentTitle}>{t('seminairePage.equipTitle')}</h3>
        </div>

        <div className={styles.equipmentGrid}>
          
          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z" />
            </svg>
            <h4>{t('seminairePage.equip1Title')}</h4>
            <p>{t('seminairePage.equip1Desc')}</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
            <h4>{t('seminairePage.equip2Title')}</h4>
            <p>{t('seminairePage.equip2Desc')}</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25-2.438c0-.424.32-.782.744-.84a15.319 15.319 0 013.512 0c.424.058.744.416.744.84v.75c0 .424-.32.782-.744.84a15.319 15.319 0 01-3.512 0c-.424-.058-.744-.416-.744-.84v-.75zM12 10.5h.008v.008H12V10.5z" />
            </svg>
            <h4>{t('seminairePage.equip3Title')}</h4>
            <p>{t('seminairePage.equip3Desc')}</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <h4>{t('seminairePage.equip4Title')}</h4>
            <p>{t('seminairePage.equip4Desc')}</p>
          </div>

        </div>
      </section>

      {/* 4. ENCADRÉ DE CONTACT / DEVIS SUR-MESURE */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <span className={styles.surtitle}>{t('seminairePage.contactSurtitle')}</span>
          <h3 className={styles.contactTitle}>{t('seminairePage.contactTitle')}</h3>
          <p className={styles.contactText}>
            {t('seminairePage.contactText')}
          </p>
          
          <div className={styles.btnGroup}>
            <a 
              href="mailto:contact@hotel-pont-roupt.fr?subject=Demande%20de%20devis%20S%C3%A9minaire" 
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

export default Seminaire;