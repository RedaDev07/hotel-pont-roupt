import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // 1. IMPORT DU HOOK
import styles from './Contact.module.css';

function Contact() {
  const { t } = useTranslation(); // 2. INITIALISATION DE LA TRADUCTION

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general', // Utilisation d'une clé neutre au lieu du texte en français
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi du formulaire
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    });
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>{t('contact.surtitle')}</span>
        <h1 className={styles.mainTitle}>{t('contact.title')}</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          {t('contact.subtitle')}
        </p>
      </section>

      {/* 2. SECTION PRINCIPALE (COORDONNÉES + FORMULAIRE) */}
      <section className={styles.mainSection}>
        <div className={styles.gridContainer}>
          
          {/* COLONNE GAUCHE : COORDONNÉES & INFOS PRATIQUES */}
          <div className={styles.infoColumn}>
            <span className={styles.tag}>{t('contact.maisonTag')}</span>
            <h2 className={styles.sectionTitle}>{t('contact.hotelName')}</h2>
            
            <div className={styles.addressBox}>
              <p className={styles.addressLine}>
                <strong>{t('contact.addressLabel')}</strong> {t('contact.addressValue')}
              </p>
              <p className={styles.addressLine}>
                <strong>{t('contact.phoneLabel')}</strong>{' '}
                <a href="tel:+33466650143" className={styles.link}>04 66 65 01 43</a>
              </p>
              <p className={styles.addressLine}>
                <strong>{t('contact.emailLabel')}</strong>{' '}
                <a href="mailto:contact@hotel-pont-roupt.fr" className={styles.link}>contact@hotel-pont-roupt.fr</a>
              </p>
            </div>

            <h3 className={styles.subTitle}>{t('contact.venirTitle')}</h3>
            
            <div className={styles.transportCards}>
              
              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🚗</span>
                <div>
                  <h4>{t('contact.carTitle')}</h4>
                  <p>{t('contact.carDesc')}</p>
                </div>
              </div>

              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🚆</span>
                <div>
                  <h4>{t('contact.trainTitle')}</h4>
                  <p>{t('contact.trainDesc')}</p>
                </div>
              </div>

              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🅿️</span>
                <div>
                  <h4>{t('contact.parkingTitle')}</h4>
                  <p>{t('contact.parkingDesc')}</p>
                </div>
              </div>

            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE DE CONTACT */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>{t('contact.formTitle')}</h3>
              <p className={styles.formSubtitle}>{t('contact.formSubtitle')}</p>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <h4>{t('contact.successTitle')}</h4>
                  <p>{t('contact.successText')}</p>
                  <button 
                    type="button" 
                    onClick={() => setIsSubmitted(false)} 
                    className={styles.resetBtn}
                  >
                    {t('contact.resetBtn')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">{t('contact.nameLabel')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Jean Dupont" 
                      value={formData.name} 
                      onChange={handleChange} 
                    />
                  </div>

                  <div className={styles.rowInputs}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="email">{t('contact.emailFormLabel')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="jean@exemple.com" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">{t('contact.phoneFormLabel')}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="06 00 00 00 00" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="subject">{t('contact.subjectLabel')}</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                    >
                      <option value="general">{t('contact.subjectGeneral')}</option>
                      <option value="room">{t('contact.subjectRoom')}</option>
                      <option value="event">{t('contact.subjectEvent')}</option>
                      <option value="spa">{t('contact.subjectSpa')}</option>
                      <option value="other">{t('contact.subjectOther')}</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">{t('contact.messageLabel')}</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder={t('contact.messagePlaceholder')} 
                      value={formData.message} 
                      onChange={handleChange} 
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    {t('contact.submitBtn')}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION CARTE GOOGLE MAPS */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <span className={styles.surtitle}>{t('contact.mapSurtitle')}</span>
          <h3 className={styles.mapTitle}>{t('contact.mapTitle')}</h3>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            title="Localisation Hôtel du Pont Roupt Mende"
            src="https://www.google.com/maps?q=H%C3%B4tel+Pont+Roupt,+2+Av.+du+11+Novembre,+48000+Mende,+France&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default Contact;