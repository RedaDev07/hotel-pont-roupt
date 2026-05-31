import styles from './BistrotPreview.module.css';

import img1 from '../../assets/bistrot-1.jpg'; // La grande photo (ambiance)
import img2 from '../../assets/bistrot-2.jpg'; // Petite photo 1 (petit déjeuner)
import img3 from '../../assets/bistrot-3.jpg'; // Petite photo 2 (planche)

function BistrotPreview() {
  return (
    <section className={styles.bistrotSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            <span className={`${styles.subtitle} animate-fade-up`}>ÉPICURIEN</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              Bistrot <span className={styles.titleItalic}>&</span> Bar à Vin
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              Véritable cœur battant de l'Hôtel du Pont Roupt, notre Bistrot est un espace chaleureux pensé pour se retrouver, échanger et partager des moments de convivialité tout au long de la journée.
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              Dès le réveil, installez-vous pour savourer un petit-déjeuner généreux mettant à l'honneur les produits locaux. En fin de journée, l'ambiance se tamise : détendez-vous autour d'une de nos savoureuses planches de charcuterie et de fromages de la région.
            </p>

            <button className={`${styles.actionBtn} animate-fade-up delay-400`}>
              DÉCOUVRIR NOTRE CARTE
              <span className={styles.btnArrow}>→</span>
            </button>
          </div>
        </div>

        {/* --- Colonne de Droite : Galerie Asymétrique à 3 images --- */}
        <div className={styles.galleryColumn}>
          <div className={styles.galleryWrapper}>
            
            {/* Image 1 : Grande photo de fond (Ambiance) */}
            <div className={`${styles.imgMain} animate-fade-up delay-200`}>
              <img src={img1} alt="Ambiance Bistrot Pont Roupt" className={styles.image} />
            </div>

            {/* Image 2 : Petite photo en bas à gauche (Petit-déjeuner) */}
            <div className={`${styles.imgSmallLeft} animate-fade-up delay-400`}>
              <img src={img2} alt="Petit-déjeuner Pont Roupt" className={styles.image} />
            </div>

            {/* Image 3 : Petite photo en haut à droite (Planche) */}
            <div className={`${styles.imgSmallRight} animate-fade-up delay-500`}>
              <img src={img3} alt="Planche de charcuterie" className={styles.image} />
            </div>

            {/* Petit élément de décor Orange */}
            <div className={`${styles.decorSquare} animate-fade-up delay-300`}></div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default BistrotPreview;