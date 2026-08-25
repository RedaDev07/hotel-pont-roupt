import { useTranslation } from 'react-i18next';
import styles from './Chambres.module.css';
import { Link } from 'react-router-dom';

import imgChambre1 from '../assets/Hotel Pont Roupt-072.jpg'; 
import imgChambre2 from '../assets/Hotel Pont Roupt-016.jpg';
import imgChambre3 from '../assets/Hotel Pont Roupt-015.jpg';

function Chambres() {
  const { t } = useTranslation();

  const roomsData = [
    {
      id: 1,
      name: t('chambres.r1_name'),
      description: t('chambres.r1_desc'),
      size: t('chambres.r1_size'),
      bed: t('chambres.r1_bed'),
      image: imgChambre1,
    },
    {
      id: 2,
      name: t('chambres.r2_name'),
      description: t('chambres.r2_desc'),
      size: t('chambres.r2_size'),
      bed: t('chambres.r2_bed'),
      image: imgChambre2,
    },
    {
      id: 3,
      name: t('chambres.r3_name'),
      description: t('chambres.r3_desc'),
      size: t('chambres.r3_size'),
      bed: t('chambres.r3_bed'),
      image: imgChambre3,
    }
  ];

  return (
    <div className={styles.pageContainer}>
      
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('chambres.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('chambres.title')}</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          {t('chambres.subtitle')}
        </p>
      </section>

      <section className={styles.roomsSection}>
        <div className={styles.roomsGrid}>
          
          {roomsData.map((room, index) => (
            <article key={room.id} className={styles.roomCard}>
              
              <div className={styles.imageContainer}>
                <img src={room.image} alt={room.name} className={styles.roomImage} />
                <div className={styles.imageOverlay}></div>
              </div>
              
              <div className={styles.roomContent}>
                <div className={styles.watermark}>0{index + 1}</div>
                
                <h2 className={styles.roomName}>{room.name}</h2>
                
                <div className={styles.roomFeatures}>
                  <div className={styles.featureBadge}>{room.size}</div>
                  <div className={styles.featureBadge}>{room.bed}</div>
                </div>
                
                <p className={styles.roomDescription}>{room.description}</p>
                
                <div className={styles.cardActions}>
                  <Link to={`/chambres/${room.id}`} className={styles.discoverBtn}>
                    {t('chambres.discoverBtn')}
                  </Link>
                  <a 
                    href="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.bookBtn}
                  >
                    {t('chambres.bookBtn')}
                  </a>
                </div>
              </div>

            </article>
          ))}

        </div>
      </section>

    </div>
  );
}

export default Chambres;