import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import img1 from '../../assets/hero-1.webp';
import img2 from '../../assets/hero-2.webp';
import img3 from '../../assets/hero-3.jpg';
import img4 from '../../assets/hero-4.jpg';
import img5 from '../../assets/hero-5.jpg';

const images = [img1, img2, img3, img4, img5];

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
      {/* On a retiré le bloc "scrollDown" ici pour garder un Hero 100% pur */}
    </section>
  );
}

export default Hero;