import styles from './Welcome.module.css';
import mainImg from '../../assets/hotel.jpg'; 
// Prépare une 2ème photo de détail (ex: un zoom sur un élément du salon, un verre, etc.)
import detailImg from '../../assets/maison-detail.jpg'; 

function Welcome() {
  return (
    <section className={styles.luxeSection}>
      <div className={styles.container}>

        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textCol}>
          <div className={styles.contentWrapper}>
            <div className={`${styles.badge} animate-fade-up`}>
              <span className={styles.badgeLine}></span>
              <span className={styles.badgeText}>LA MAISON</span>
            </div>

            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              L'art de recevoir <br />
              <span className={styles.titleItalic}>depuis 4 générations.</span>
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              Voilà 4 générations que la famille Gerbail veille à la bonne destinée du Pont Roupt, Mende. À l’origine, l’endroit était un dancing. Transformé en hôtel-restaurant après guerre, l’établissement n’a eu de cesse de se mettre au goût du jour au fil des générations afin de s’adapter aux attentes de la clientèle.
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              « Notre maison a une grande tradition d’accueil », explique Alexandre, propriétaire de cet établissement familial. Générosité, chaleur humaine, votre halte au The Originals Boutique Hôtel du Pont Roupt, Mende vous laissera une impression de simplicité et d’authenticité à l’image de la région.
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-400`}>
              L'hôtel propose 25 chambres confortables et bien équipées (la plupart sont climatisées et accessibles avec ascenseur), un bistrot bar à vin pour des moments de convivialité, des salles de réunion et un vaste espace de détente avec piscine intérieure, sauna, jacuzzi, cabines de soins.
            </p>

            <button className={`${styles.actionBtn} animate-fade-up delay-500`}>
              DÉCOUVRIR L'HÔTEL
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </div>

        {/* --- Colonne de Droite : La Double Image Spectaculaire --- */}
        <div className={styles.galleryCol}>
          <div className={styles.galleryWrapper}>
            {/* L'image principale (Grande) */}
            <div className={`${styles.mainImageWrapper} animate-fade-up delay-200`}>
              <img src={mainImg} alt="Ambiance Pont Roupt" className={styles.mainImage} />
            </div>
            
            {/* L'image de détail (Petite, superposée par-dessus) */}
            <div className={`${styles.detailImageWrapper} animate-fade-up delay-500`}>
              <img src={detailImg} alt="Détail Pont Roupt" className={styles.detailImage} />
            </div>

            {/* Le bloc carré décoratif Beige Zen */}
            <div className={`${styles.decorBlock} animate-fade-up delay-300`}></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Welcome;