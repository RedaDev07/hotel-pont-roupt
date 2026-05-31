import styles from './SeminairePreview.module.css';
import seminaireImage from '../../assets/seminaire-preview.jpeg';

function SeminairePreview() {
  return (
    <section className={styles.seminaireSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            <span className={`${styles.subtitle} animate-fade-up`}>VOS ÉVÉNEMENTS</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              Séminaires <span className={styles.titleItalic}>&</span> Réceptions
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              Organisez vos réunions, journées d'étude ou événements privés dans un cadre propice à la réflexion et à la convivialité, en plein cœur de la Lozère.
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              L'Hôtel du Pont Roupt met à votre disposition des salles modulables et baignées de lumière naturelle. Nous vous accompagnons de A à Z avec des offres sur-mesure incluant pauses gourmandes, déjeuners au Bistrot et hébergement.
            </p>

            {/* Liste des avantages business */}
            <ul className={`${styles.businessList} animate-fade-up delay-400`}>
              <li>Salles équipées (Écrans, Wi-Fi très haut débit)</li>
              <li>Capacité adaptable selon vos besoins</li>
              <li>Formules résidentielles ou semi-résidentielles</li>
            </ul>

            <button className={`${styles.actionBtn} animate-fade-up delay-500`}>
              DÉCOUVRIR NOS ESPACES
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </div>

        {/* --- Colonne de Droite : Image unique avec Cadre Décalé --- */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            
            {/* Le bloc décoratif (Cadre décalé) en Anthracite */}
            <div className={`${styles.decorFrame} animate-fade-up`}></div>

            {/* L'image principale */}
            <div className={`${styles.imageContainer} animate-fade-up delay-200`}>
              <img src={seminaireImage} alt="Salle de séminaire Hôtel Pont Roupt" className={styles.image} />
            </div>
            
            {/* Petit badge "Sur-mesure" superposé */}
            <div className={`${styles.badge} animate-fade-up delay-400`}>
              Service<br/>Sur-mesure
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default SeminairePreview;