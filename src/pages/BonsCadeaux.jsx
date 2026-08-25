import { useTranslation } from 'react-i18next';
import styles from './BonsCadeaux.module.css';

function BonsCadeaux() {
  const { t, i18n } = useTranslation();

  // On récupère la langue actuelle (fr, en, es) pour l'injecter dans l'URL Bonkdo
  const currentLang = i18n.language ? i18n.language.substring(0, 2) : 'fr';

  // L'URL AVEC &hide_header=true AJOUTÉ POUR CACHER LEUR EN-TÊTE
  const iframeUrl = `https://pontroupt.bonkdo.com/${currentLang}/?origin=Mon%2520site%2520web&hide_header=true&hide_main_title_description=false&hide_footer=false&hide_whychooseus=false&hide_create_money_pot=false&hide_group_payment=false&hide_shared_gifts_header=false&hide_whole_shared_gifts=false&hide_giftcards=false&hide_vouchers=false&partner=ed979f4c-61dc-4bd1-8bf0-91117a21312f`;

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. TON EN-TÊTE ÉDITORIAL CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('cadeaux.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('cadeaux.title')}</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>{t('cadeaux.subtitle')}</p>
      </section>

      {/* 2. LA BOUTIQUE EXTERNE INTÉGRÉE SANS LEUR HEADER */}
      <section className={styles.iframeSection}>
        <iframe 
          src={iframeUrl} 
          className={styles.bonkdoIframe}
          title="Boutique de Bons Cadeaux Hôtel du Pont Roupt"
          allowFullScreen
        ></iframe>
      </section>

    </div>
  );
}

export default BonsCadeaux;