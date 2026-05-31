import styles from './SocialWall.module.css';

import insta1 from '../../assets/insta-1.jpg'; // Format Portrait (ex: façade ou chambre)
import insta2 from '../../assets/insta-2.jpg'; // Format Paysage (ex: détail restaurant)
import insta3 from '../../assets/insta-3.jpg'; // Format Carré/Paysage (ex: détail spa)
import insta4 from '../../assets/insta-4.jpg'; // Format Portrait (ex: verre de vin)

function SocialWall() {
  return (
    <section className={styles.socialSection}>
      <div className={styles.container}>
        
        {/* --- En-tête de la section --- */}
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={`${styles.subtitle} animate-fade-up`}>REJOIGNEZ-NOUS</span>
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              L'Hôtel <span className={styles.titleItalic}>en images</span>
            </h2>
          </div>
          
          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.instaBtn} animate-fade-up delay-200`}>
            @HOTELPONTROUPT
            <span className={styles.btnLine}></span>
          </a>
        </div>

        {/* --- Grille d'images asymétrique --- */}
        <div className={styles.grid}>
          
          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item1} animate-fade-up delay-200`}>
            <img src={insta1} alt="Instagram Hôtel Pont Roupt 1" className={styles.image} />
            <div className={styles.overlay}><span>Voir sur Facebook</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item2} animate-fade-up delay-300`}>
            <img src={insta2} alt="Instagram Hôtel Pont Roupt 2" className={styles.image} />
            <div className={styles.overlay}><span>Voir sur Facebook</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item3} animate-fade-up delay-400`}>
            <img src={insta3} alt="Instagram Hôtel Pont Roupt 3" className={styles.image} />
            <div className={styles.overlay}><span>Voir sur Facebook</span></div>
          </a>

          <a href="https://www.facebook.com/theoriginalsboutiquemende" target="_blank" rel="noopener noreferrer" className={`${styles.gridItem} ${styles.item4} animate-fade-up delay-500`}>
            <img src={insta4} alt="Instagram Hôtel Pont Roupt 4" className={styles.image} />
            <div className={styles.overlay}><span>Voir sur Facebook</span></div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default SocialWall;