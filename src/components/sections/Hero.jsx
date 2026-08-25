import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import img1 from '../../assets/hero-1.webp';
import img2 from '../../assets/Hotel Pont Roupt-034.jpg';
import img3 from '../../assets/hero-3.jpg';
import img4 from '../../assets/hero-4.jpg';
import img5 from '../../assets/piscine1.jpg';
import img6 from '../../assets/Hotel Pont Roupt-056.jpg';


const images = [img1, img2, img3, img4, img5, img6];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hôtel Pont Roupt vue ${index + 1}`}
          className={`${styles.heroImage} ${index === currentIndex ? styles.active : ''}`}
        />
      ))}
      
      {/* --- La flèche cerclée (Visible uniquement sur mobile grâce au CSS) --- */}
      <div 
        className={styles.heroScrollArrow} 
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
      
    </section>
  );
}

export default Hero;