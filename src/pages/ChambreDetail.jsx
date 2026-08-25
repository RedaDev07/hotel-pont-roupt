import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './ChambreDetail.module.css';

// Tes images
import imgChambre1 from '../assets/Hotel Pont Roupt-072.jpg'; 
import imgChambre2 from '../assets/Hotel Pont Roupt-016.jpg';
import imgChambre3 from '../assets/Hotel Pont Roupt-015.jpg';

function ChambreDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const roomsData = [
    {
      id: "1",
      name: t('chambres.r1_name'),
      description: t('chambresDetail.r1_descLong'),
      size: t('chambresDetail.r1_size'),
      capacity: t('chambresDetail.r1_cap'),
      bed: t('chambresDetail.r1_bedLong'),
      wifi: t('chambresDetail.wifiFree'),
      images: [imgChambre1, imgChambre2, imgChambre3], 
    },
    {
      id: "2",
      name: t('chambres.r2_name'),
      description: t('chambresDetail.r2_descLong'),
      size: t('chambresDetail.r2_size'),
      capacity: t('chambresDetail.r2_cap'),
      bed: t('chambresDetail.r2_bedLong'),
      wifi: t('chambresDetail.wifiFreeHigh'),
      images: [imgChambre2, imgChambre1, imgChambre3],
    },
    {
      id: "3",
      name: t('chambres.r3_name'),
      description: t('chambresDetail.r3_descLong'),
      size: t('chambresDetail.r3_size'),
      capacity: t('chambresDetail.r3_cap'),
      bed: t('chambresDetail.r3_bedLong'),
      wifi: t('chambresDetail.wifiMinibar'),
      images: [imgChambre3, imgChambre2, imgChambre1],
    }
  ];

  const room = roomsData.find((r) => r.id === id);

  if (!room) {
    return (
      <div className={styles.notFound}>
        <h2>{t('chambresDetail.notFoundTitle')}</h2>
        <Link to="/chambres">{t('chambresDetail.notFoundLink')}</Link>
      </div>
    );
  }

  const openGallery = () => setIsGalleryOpen(true);
  const closeGallery = () => setIsGalleryOpen(false);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === room.images.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev === 0 ? room.images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className={styles.splitContainer}>
        
        {/* MOITIÉ GAUCHE : L'IMAGE */}
        <div className={styles.imageSide} onClick={openGallery}>
          <img src={room.images[currentImgIndex]} alt={room.name} className={styles.mainImage} />
          <div className={styles.imageOverlay}>
            <span className={styles.plusIcon}>+</span>
            <span className={styles.galleryText}>{t('chambresDetail.viewGallery')}</span>
          </div>
        </div>

        {/* MOITIÉ DROITE : LE CONTENU ÉDITORIAL */}
        <div className={styles.contentSide}>
          <div className={styles.contentInner}>
            
            <h1 className={styles.roomName}>{room.name}</h1>
            <p className={styles.roomDesc}>{room.description}</p>
            
            <h3 className={styles.detailsTitle}>{t('chambresDetail.detailsTitle')}</h3>
            
            <div className={styles.detailsGrid}>
              
              {/* 1. Capacité (Personnes) */}
              <div className={styles.detailItem}>
                <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                <span>{room.capacity}</span>
              </div>

              {/* 2. Superficie (Carré) */}
              <div className={styles.detailItem}>
                <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="5" width="14" height="14" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="5" cy="5" r="1.5" fill="currentColor"/>
                  <circle cx="19" cy="5" r="1.5" fill="currentColor"/>
                  <circle cx="5" cy="19" r="1.5" fill="currentColor"/>
                  <circle cx="19" cy="19" r="1.5" fill="currentColor"/>
                </svg>
                <span>{room.size}</span>
              </div>

              {/* 3. Literie (Lit) */}
              <div className={styles.detailItem}>
                <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10M3 14h18m0-7v10m-18-7h18M6 10h3v4H6z" />
                </svg>
                <span>{room.bed}</span>
              </div>

              {/* 4. Wifi (Onde) */}
              <div className={styles.detailItem}>
                <svg className={styles.customIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75h.008v.008H12v-.008z" />
                </svg>
                <span>{room.wifi}</span>
              </div>

            </div>

            <div className={styles.actionLinks}>
              <Link to="/chambres" className={styles.backLink}>
                {t('chambresDetail.backLink')}
              </Link>
              <a 
                href="https://www.theoriginalshotels.com/hotels/du-pont-roupt-mende" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.bookLink}
              >
                {t('chambresDetail.bookLink')}
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* LA MODALE DU CARROUSEL */}
      {isGalleryOpen && (
        <div className={styles.galleryModal} onClick={closeGallery}>
          <button className={styles.closeBtn} onClick={closeGallery}>✕</button>
          
          <button className={styles.navBtn} onClick={prevImage}>&#10094;</button>
          
          <div className={styles.modalImageContainer}>
            <img 
              key={currentImgIndex} 
              src={room.images[currentImgIndex]} 
              alt="Galerie" 
              className={styles.modalImage} 
              onClick={(e) => e.stopPropagation()} 
            />
            <div className={styles.imageCounter}>
              0{currentImgIndex + 1} / 0{room.images.length}
            </div>
          </div>
          
          <button className={styles.navBtn} onClick={nextImage}>&#10095;</button>
        </div>
      )}
    </>
  );
}

export default ChambreDetail;