import { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Renseignement général',
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
      subject: 'Renseignement général',
      message: ''
    });
  };

  return (
    <div className={styles.pageContainer}>
      
      {/* 1. EN-TÊTE ÉDITORIAL */}
      <section className={styles.pageHeader}>
        <span className={styles.surtitle}>COORDONNÉES & ITINÉRAIRE</span>
        <h1 className={styles.mainTitle}>Accès & Contact</h1>
        <div className={styles.separator}></div>
        <p className={styles.subtitle}>
          Une question sur votre futur séjour, l'organisation d'un séminaire ou une réservation au Spa ? 
          Notre équipe est à votre écoute pour vous accompagner.
        </p>
      </section>

      {/* 2. SECTION PRINCIPALE (COORDONNÉES + FORMULAIRE) */}
      <section className={styles.mainSection}>
        <div className={styles.gridContainer}>
          
          {/* COLONNE GAUCHE : COORDONNÉES & INFOS PRATIQUES */}
          <div className={styles.infoColumn}>
            <span className={styles.tag}>LA MAISON</span>
            <h2 className={styles.sectionTitle}>Hôtel du Pont Roupt</h2>
            
            <div className={styles.addressBox}>
              {/* ADRESSE CORRIGÉE ICI */}
              <p className={styles.addressLine}>
                <strong>Adresse :</strong> 2 Av. du 11 Novembre, 48000 Mende, Lozère
              </p>
              <p className={styles.addressLine}>
                <strong>Téléphone :</strong>{' '}
                <a href="tel:+33466650143" className={styles.link}>04 66 65 01 43</a>
              </p>
              <p className={styles.addressLine}>
                <strong>E-mail :</strong>{' '}
                <a href="mailto:contact@hotel-pont-roupt.fr" className={styles.link}>contact@hotel-pont-roupt.fr</a>
              </p>
            </div>

            <h3 className={styles.subTitle}>Comment venir ?</h3>
            
            <div className={styles.transportCards}>
              
              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🚗</span>
                <div>
                  <h4>En Voiture</h4>
                  <p>Accès facile depuis l'A75. Parking privé et sécurisé à disposition de nos clients.</p>
                </div>
              </div>

              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🚆</span>
                <div>
                  <h4>En Train</h4>
                  <p>Gare SNCF de Mende située à quelques minutes de l'établissement.</p>
                </div>
              </div>

              <div className={styles.transportCard}>
                <span className={styles.transportIcon}>🅿️</span>
                <div>
                  <h4>Stationnement</h4>
                  <p>Parking privé sur place pour voitures, motos et vélos.</p>
                </div>
              </div>

            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE DE CONTACT */}
          <div className={styles.formColumn}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Écrivez-nous</h3>
              <p className={styles.formSubtitle}>Remplissez le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.</p>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <span className={styles.successIcon}>✓</span>
                  <h4>Message envoyé avec succès !</h4>
                  <p>Merci pour votre message. Notre équipe de réception vous répondra très rapidement.</p>
                  <button 
                    type="button" 
                    onClick={() => setIsSubmitted(false)} 
                    className={styles.resetBtn}
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  
                  <div className={styles.inputGroup}>
                    <label htmlFor="name">Nom & Prénom *</label>
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
                      <label htmlFor="email">E-mail *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="jean@exemple.fr" 
                        value={formData.email} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="phone">Téléphone</label>
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
                    <label htmlFor="subject">Sujet de votre demande</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange}
                    >
                      <option value="Renseignement général">Renseignement général</option>
                      <option value="Réservation de chambre">Réservation de chambre</option>
                      <option value="Séminaire & Évènement">Séminaire & Évènement</option>
                      <option value="Spa & Bien-être">Spa & Bien-être</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="message">Votre message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5" 
                      required 
                      placeholder="Précisez vos dates de séjour ou votre question..." 
                      value={formData.message} 
                      onChange={handleChange} 
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Envoyer le message
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION CARTE GOOGLE MAPS (AVEC REPÈRE SUR L'HÔTEL) */}
      <section className={styles.mapSection}>
        <div className={styles.mapHeader}>
          <span className={styles.surtitle}>LOCALISATION</span>
          <h3 className={styles.mapTitle}>Nous trouver à Mende</h3>
        </div>

        <div className={styles.mapContainer}>
          {/* L'URL pointe désormais exactement sur Hôtel Pont Roupt, 2 Av. du 11 Novembre avec un repère */}
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