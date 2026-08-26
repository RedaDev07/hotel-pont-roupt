// --- AJOUTE CET IMPORT ---
import { useTranslation } from 'react-i18next';

import styles from './SeminairePreview.module.css';
import { Link } from 'react-router-dom'; 
import seminaireImage from '../../assets/sem.jpeg';

function SeminairePreview() {
  // --- ACTIVE LE HOOK ICI ---
  const { t } = useTranslation();

  return (
    <section className={styles.seminaireSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            {/* --- REMPLACE LE TEXTE --- */}
            <span className={`${styles.subtitle} animate-fade-up`}>{t('accueil.seminaire.subtitle')}</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.seminaire.title')} <span className={styles.titleItalic}>{t('accueil.seminaire.titleItalic')}</span> {t('accueil.seminaire.titlePart2')}
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.seminaire.para1')}
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.seminaire.para2')}
            </p>

            {/* Liste des avantages business */}
            <ul className={`${styles.businessList} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE --- */}
              <li>{t('accueil.seminaire.list1')}</li>
              <li>{t('accueil.seminaire.list2')}</li>
              <li>{t('accueil.seminaire.list3')}</li>
            </ul>

            <Link to="/seminaire" className={`${styles.actionBtn} animate-fade-up delay-500`}>
              {/* --- REMPLACE LE TEXTE --- */}
              {t('accueil.seminaire.button')}
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>

        {/* --- Colonne de Droite : Image unique avec Cadre Décalé --- */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            
            {/* Le bloc décoratif (Cadre décalé) en Anthracite */}
            <div className={`${styles.decorFrame} animate-fade-up`}></div>

            {/* L'image principale */}
            <div className={`${styles.imageContainer} animate-fade-up delay-200`}>
              {/* --- REMPLACE LE TEXTE ALT --- */}
              <img src={seminaireImage} alt={t('accueil.seminaire.alt')} className={styles.image} />
            </div>
            
            {/* Petit badge "Sur-mesure" superposé */}
            <div className={`${styles.badge} animate-fade-up delay-400`}>
              {/* --- REMPLACE LE TEXTE AVEC UN <br/> SI BESOIN --- */}
              {/* Pour gérer le retour à la ligne du badge, on peut faire ça : */}
              {t('accueil.seminaire.badge').split(' ').join('<br/>')} 
              {/* Mais c'est plus propre d'utiliser dangerouseLySetInnerHTML pour le badge car il contient un <br/> dans le JSX initial. */}
              {/* Utilisons la méthode du br : */}
              Service<br/>Sur-mesure
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SeminairePreview;