import styles from './Spa.module.css';

// Remplace par tes vrais chemins dans ton dossier assets
import imgPiscine from '../assets/piscine1.jpg'; // Piscine & Aquabikes
import imgSoins from '../assets/spa-soins.webp';     // Cabine de massage feutrée

function Spa() {
  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>DÉTENTE & RELAXATION</span>
        <h1 className={styles.mainTitle}>Spa & Bien-Être</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          Accordez-vous une parenthèse de sérénité au cœur de Mende. Profitez de notre piscine 
          intérieure chauffée et laissez-vous tenter par un soin relaxant dans notre espace bien-être.
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
            <span className={styles.tag}>ESPACE AQUATIQUE</span>
            <h2 className={styles.rowTitle}>Piscine couverte chauffée & Aquabikes</h2>
            <p className={styles.rowDesc}>
              Baignée de lumière, notre piscine intérieure chauffée vous accueille tout au long de 
              l'année pour un instant de détente absolue. Pour les amateurs de dynamisme, des vélos 
              d'aquabiking sont à votre disposition au bord du bassin pour allier sport et relaxation 
              en toute liberté.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>Piscine chauffée</div>
              <div className={styles.featureBadge}>Accès clients hôtel</div>
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
            <span className={styles.tag}>SOINS & MODELAGES</span>
            <h2 className={styles.rowTitle}>Un univers feutré dédié à votre sérénité</h2>
            <p className={styles.rowDesc}>
              Dans une atmosphère intimiste aux lumières apaisantes, notre cabine de soins vous invite 
              au lâcher-prise. Modelages relaxants, soins du corps ou du visage : nos praticiennes 
              vous proposent un moment de bien-être sur-mesure pour ressourcer votre corps et votre esprit.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>Sur rendez-vous</div>
              <div className={styles.featureBadge}>Soins & Massages</div>
              <div className={styles.featureBadge}>Ambiance zen</div>
            </div>
          </div>
        </article>

      </section>

      {/* 3. GRILLE DES PRESTATIONS INCLUSES */}
      <section className={styles.equipmentSection}>
        <div className={styles.equipmentHeader}>
          <span className={styles.surtitle}>VOS PRIVILÈGES</span>
          <h3 className={styles.equipmentTitle}>Les installations de notre espace détente</h3>
        </div>

        <div className={styles.equipmentGrid}>
          
          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <h4>Eau Chauffée</h4>
            <p>Un bassin à température idéale en toute saison pour vous délasser après vos visites.</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <h4>Soins Sur-Mesure</h4>
            <p>Massages et soins esthétiques dispensés sur réservation par nos professionnelles.</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4>Horaires Souples</h4>
            <p>Un espace pensé pour s'adapter à votre rythme, du matin jusqu'en fin de journée.</p>
          </div>

        </div>
      </section>

      {/* 4. ENCADRÉ DE CONTACT / RÉSERVATION DE SOIN (FOND #2C3E50 + BOUTONS ORANGE) */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <span className={styles.surtitle}>RÉSERVEZ VOTRE MOMENT DE DÉTENTE</span>
          <h3 className={styles.contactTitle}>Envie d'un soin ou d'un modelage ?</h3>
          <p className={styles.contactText}>
            Pour vous garantir la meilleure disponibilité lors de votre séjour, nous vous conseillons 
            de réserver votre séance de soin ou de massage avant votre arrivée.
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