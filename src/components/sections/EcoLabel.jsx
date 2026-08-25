import styles from './EcoLabel.module.css';
import clefVerteLogo from '../../assets/clef-verte.webp'; 

function EcoLabel() {
  return (
    <section className={styles.ecoSection}>
      <div className={styles.card}>
        
        {/* GAUCHE : LOGO AVEC ANIMATION FLOTTANTE ET HALO */}
        <div className={styles.logoSide}>
          <div className={styles.logoGlow}></div>
          <img 
            src={clefVerteLogo} 
            alt="Label Clef Verte - Tourisme Durable" 
            className={styles.logo} 
          />
          <span className={styles.badgeYear}>Certifié Clef Verte</span>
        </div>

        {/* DROITE : CONTENU ÉDITORIAL & BADGES INTERACTIFS */}
        <div className={styles.contentSide}>
          
          <div className={styles.headerRow}>
            <span className={styles.tag}>TOURISME DURABLE & ENGAGÉ</span>
            <span className={styles.pulseContainer}>
              <span className={styles.pulseDot}></span>
              <span className={styles.pulseText}>Engagement actif</span>
            </span>
          </div>
          
          <h2 className={styles.title}>L’Élégance d'un Séjour Éco-Responsable</h2>
          
          <p className={styles.description}>
            Soucieux de préserver notre exceptionnel terroir de Lozère, l'Hôtel du Pont Roupt 
            s'engage quotidiennement dans une démarche respectueuse de l'environnement, 
            certifiée par le prestigieux label international <strong>Clef Verte</strong>.
          </p>

          {/* PILULES INTERACTIVES ANIMÉES AU SURVOL */}
          <div className={styles.pillsGrid}>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>🌱</span>
              <span>Gastronomie en Circuit Court</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>💧</span>
              <span>Gestion Raisonnée de l'Eau</span>
            </div>
            <div className={styles.pill}>
              <span className={styles.pillIcon}>⚡</span>
              <span>Énergie Propre & Durable</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default EcoLabel;