import styles from './RoomsPreview.module.css';
import roomImg from '../../assets/chambre-preview.jpg'; 

function RoomsPreview() {
  return (
    <section className={styles.roomsSection}>
      <div className={styles.container}>
        
        {/* --- En-tête de la section --- */}
        <div className={styles.sectionHeader}>
          <span className={`${styles.subtitle} animate-fade-up`}>VOTRE REPOS</span>
          <h2 className={`${styles.title} animate-fade-up delay-100`}>
            Chambres <span className={styles.titleItalic}>&</span> Suites
          </h2>
        </div>

        {/* --- Le bloc principal (Image + Carte de texte superposée) --- */}
        <div className={styles.showcaseWrapper}>
          
          {/* L'image de la chambre */}
          <div className={`${styles.imageContainer} animate-fade-up delay-200`}>
            <img src={roomImg} alt="Chambre Hôtel du Pont Roupt" className={styles.roomImage} />
          </div>

          {/* La carte d'information qui chevauche l'image */}
          <div className={`${styles.infoCard} animate-fade-up delay-400`}>
            <h3 className={styles.cardTitle}>Élégance & Confort</h3>
            <p className={styles.cardText}>
              Découvrez nos 25 chambres pensées pour votre bien-être. 
              Baignées de lumière naturelle, elles offrent un cadre apaisant alliant 
              mobilier contemporain et touches de caractère.
            </p>
            
            {/* Liste des équipements (style minimaliste) */}
            <ul className={styles.amenitiesList}>
              <li>Climatisation intégrale</li>
              <li>Accès ascenseur</li>
              <li>Plateau de courtoisie</li>
              <li>Literie haut de gamme</li>
            </ul>

            <button className={styles.actionBtn}>
              VOIR TOUTES LES CHAMBRES
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default RoomsPreview;