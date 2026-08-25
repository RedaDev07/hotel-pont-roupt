import styles from './SpaPreview.module.css';
import { Link } from 'react-router-dom'; // 1. IMPORT DU COMPOSANT LINK

import imgPiscine from '../../assets/insta-3.jpg';
import imgSauna from '../../assets/spa-sauna.webp';
import imgSoins from '../../assets/spa-soins.webp';

function SpaPreview() {
  return (
    <section className={styles.spaSection}>
      <div className={styles.container}>
        
        {/* --- Colonne de Gauche : Le Cluster d'Images --- */}
        <div className={styles.galleryColumn}>
          <div className={styles.galleryWrapper}>
            
            {/* Le bloc Beige de fond pour lier les images */}
            <div className={`${styles.decorBlock} animate-fade-up`}></div>

            {/* Image 1 : La Piscine (Grande, à gauche) */}
            <div className={`${styles.imgMain} animate-fade-up delay-200`}>
              <img src={imgPiscine} alt="Piscine intérieure chauffée" className={styles.image} />
            </div>

            {/* Image 2 : Le Sauna (Petite, en haut à droite) */}
            <div className={`${styles.imgTopRight} animate-fade-up delay-400`}>
              <img src={imgSauna} alt="Espace Sauna" className={styles.image} />
            </div>

            {/* Image 3 : Les Soins (Petite, en bas à droite) */}
            <div className={`${styles.imgBottomRight} animate-fade-up delay-500`}>
              <img src={imgSoins} alt="Cabine de soins et modelages" className={styles.image} />
            </div>

          </div>
        </div>

        {/* --- Colonne de Droite : Textes --- */}
        <div className={styles.textColumn}>
          <div className={styles.contentWrapper}>
            <span className={`${styles.subtitle} animate-fade-up`}>ESPACE BIEN-ÊTRE</span>
            
            <h2 className={`${styles.title} animate-fade-up delay-100`}>
              Détente <span className={styles.titleItalic}>&</span> Soins
            </h2>

            <p className={`${styles.paragraph} animate-fade-up delay-200`}>
              Plongez dans un véritable havre de paix. Notre vaste espace détente a été entièrement conçu pour vous offrir une parenthèse hors du temps, loin de l'effervescence du quotidien.
            </p>

            <p className={`${styles.paragraph} animate-fade-up delay-300`}>
              Laissez-vous porter par la douceur de notre piscine intérieure chauffée, libérez vos tensions dans le sauna, ou abandonnez-vous aux mains expertes de nos praticiennes dans nos cabines de soins du corps et du visage.
            </p>

            {/* Petite liste élégante des installations */}
            <ul className={`${styles.spaList} animate-fade-up delay-400`}>
              <li>Piscine intérieure chauffée</li>
              <li>Sauna</li>
              <li>Modelages & Soins sur-mesure</li>
            </ul>

            {/* 2. ON REMPLACE LE <button> PAR UN <Link to="/spa"> */}
            <Link to="/spa" className={`${styles.actionBtn} animate-fade-up delay-500`}>
              DÉCOUVRIR LE SPA
              <span className={styles.btnArrow}>→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SpaPreview;