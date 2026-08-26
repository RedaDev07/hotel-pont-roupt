import styles from './Seminaire.module.css';

// Remplace par les bons chemins vers tes images dans ton dossier assets
import imgSalleU from '../assets/sem.jpeg'; // La grande table en U
import imgBanquet1 from '../assets/Hotel Pont Roupt-046.jpg'; // Salle lumineuse avec tables rondes

function Seminaire() {
  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL CHIC */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>AFFAIRES & ÉVÉNEMENTS</span>
        <h1 className={styles.mainTitle}>Séminaires & Réunions</h1>
        <div className={styles.separator}></div>
        
        {/* TA PHRASE AJOUTÉE ICI EN ACCROCHE PRINCIPALE : */}
        <p className={styles.subtitle}>
          Pour organiser vos évènements, nous mettons à votre disposition nos salles de réunion 
          toutes équipées pouvant accueillir jusqu'à 100 personnes. Au cœur de Mende, profitez 
          d'un cadre serein et baigné de lumière naturelle pour vos journées d'étude et réceptions.
        </p>
      </section>

      {/* 2. BLOCS ÉDITORIAUX (DEUX ESPACES, DEUX FONCTIONS BIEN DISTINCTES) */}
      <section className={styles.editorialSection}>
        
        {/* BLOC 01 : LA SALLE PLÉNIÈRE (TRAVAIL & FORMATION) */}
        <article className={styles.editorialRow}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgSalleU} alt="Salle plénière de séminaire" className={styles.editorialImage} fetchPriority="high"/>
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>JOURNÉES D'ÉTUDE & RÉUNIONS</span>
            <h2 className={styles.rowTitle}>La Salle Plénière : pour vos présentations</h2>
            <p className={styles.rowDesc}>
              Conçue pour vos assemblées, formations et comités de direction, notre salle principale 
              accueille jusqu'à 100 personnes. Équipée de matériel de projection haute définition 
              et configurable en « U » ou en théâtre, elle offre un cadre calme et professionnel propice 
              à la concentration.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>Jusqu'à 100 personnes</div>
              <div className={styles.featureBadge}>Vidéoprojecteur & Écran</div>
            </div>
          </div>
        </article>

        {/* BLOC 02 : L'ESPACE RÉCEPTION (NETWORKING & ÉVÉNEMENTS D'ENTREPRISE) */}
        <article className={`${styles.editorialRow} ${styles.reverseRow}`}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <img src={imgBanquet1} alt="Salon de réception pour événements d'entreprise" className={styles.editorialImage} />
            </div>
          </div>
          <div className={styles.textCol}>
            <span className={styles.tag}>RÉCEPTIONS & NETWORKING</span>
            <h2 className={styles.rowTitle}>Un salon lumineux pour vos événements corporates</h2>
            <p className={styles.rowDesc}>
              En complément de vos réunions, profitez de ce second salon aux tables rondes pour vos 
              moments d'échanges, cocktails d'entreprise, showrooms ou réceptions de fin d'année. 
              Un espace élégant, baigné de lumière naturelle, entièrement privatisable pour valoriser 
              l'image de votre société.
            </p>
            <div className={styles.featuresList}>
              <div className={styles.featureBadge}>Cocktails & Réceptions</div>
              <div className={styles.featureBadge}>Showroom d'entreprise</div>
              <div className={styles.featureBadge}>Espace privatisable</div>
            </div>
          </div>
        </article>

      </section>

      {/* 3. GRILLE DES ÉQUIPEMENTS INCLUS */}
      <section className={styles.equipmentSection}>
        <div className={styles.equipmentHeader}>
          <span className={styles.surtitle}>PRESTATIONS INCLUSES</span>
          <h3 className={styles.equipmentTitle}>Tout le confort technique à votre disposition</h3>
        </div>

        <div className={styles.equipmentGrid}>
          
          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z" />
            </svg>
            <h4>WIFI Haut Débit</h4>
            <p>Connexion fibre sécurisée et gratuite dans l'ensemble des salons.</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
            <h4>Vidéoprojecteur & Écran</h4>
            <p>Matériel de projection haute définition et connectique multi-supports.</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25-2.438c0-.424.32-.782.744-.84a15.319 15.319 0 013.512 0c.424.058.744.416.744.84v.75c0 .424-.32.782-.744.84a15.319 15.319 0 01-3.512 0c-.424-.058-.744-.416-.744-.84v-.75zM12 10.5h.008v.008H12V10.5z" />
            </svg>
            <h4>Paperboard & Papeterie</h4>
            <p>Tableaux de conférence, feutres, blocs-notes et eau minérale sur table.</p>
          </div>

          <div className={styles.equipmentCard}>
            <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <h4>Lumière du Jour & Calme</h4>
            <p>De larges fenêtres ouvrant sur l'extérieur pour un environnement apaisant.</p>
          </div>

        </div>
      </section>

      {/* 4. ENCADRÉ DE CONTACT / DEVIS SUR-MESURE */}
      <section className={styles.contactSection}>
        <div className={styles.contactCard}>
          <span className={styles.surtitle}>VOTRE ÉVÉNEMENT SUR-MESURE</span>
          <h3 className={styles.contactTitle}>Organisons votre prochaine journée d'étude</h3>
          <p className={styles.contactText}>
            Journée d'étude, séminaire résidentiel ou location de salle sèche : notre équipe 
            est à votre écoute pour concevoir une proposition adaptée à votre entreprise.
          </p>
          
          <div className={styles.btnGroup}>
            {/* Bouton E-mail avec le vrai mail affiché */}
            <a 
              href="mailto:contact@hotel-pont-roupt.fr?subject=Demande%20de%20devis%20S%C3%A9minaire" 
              className={styles.primaryBtn}
            >
              contact@hotel-pont-roupt.fr
            </a>
            
            {/* Bouton Téléphone avec le vrai numéro affiché */}
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