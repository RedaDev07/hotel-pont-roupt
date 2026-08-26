// src/locales/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  // ==========================================
  // 1. FRANÇAIS (FR) - Langue par défaut
  // ==========================================
  fr: {
    translation: {
      // -- NAVIGATION (HEADER & FOOTER) --
      menu: {
        maison: "La Maison",
        chambres: "Les Chambres",
        bistrot: "Bistrot Bar à Vin",
        seminaire: "Séminaires & Évènements",
        spa: "Spa & Détente",
        cadeaux: "Bons Cadeaux",
        acces: "Accès & Contact",
        reserver: "Réservez",
        contacter: "Nous contacter",
        fidelite: "Fidélité",
        club: "ORIGINALS CLUB",
        bestPrice: "Meilleur Prix Garanti",
        decouvrez: "Découvrez The Originals Boutique",
        villeRegion: "MENDE • LOZÈRE • OCCITANIE"
      },

      // ==========================================
      // -- PAGE ACCUEIL --
      // (Textes extraits de vos 7 sections JSX)
      // ==========================================
      accueil: {
        // Section 1: Welcome (La Maison)
        welcome: {
          badge: "LA MAISON",
          titlePart1: "L'art de recevoir",
          titlePart2: "depuis 4 générations.",
          para1: "Voilà 4 générations que la famille Gerbail veille à la bonne destinée du Pont Roupt, Mende. À l’origine, l’endroit était un dancing. Transformé en hôtel-restaurant après guerre, l’établissement n’a eu de cesse de se mettre au goût du jour au fil des générations afin de s’adapter aux attentes de la clientèle.",
          para2: "« Notre maison a une grande tradition d’accueil », explique Alexandre, propriétaire de cet établissement familial. Générosité, chaleur humaine, votre halte au The Originals Boutique Hôtel du Pont Roupt, Mende vous laissera une impression de simplicité et d’authenticité à l’image de la région.",
          para3: "L'hôtel propose 25 chambres confortables et bien équipées (la plupart sont climatisées et accessibles avec ascenseur), un bistrot bar à vin pour des moments de convivialité, des salles de réunion et un vaste espace de détente avec piscine intérieure, sauna, jacuzzi, cabines de soins.",
          button: "DÉCOUVRIR L'HÔTEL",
          altMain: "Ambiance Pont Roupt",
          altDetail: "Détail Pont Roupt"
        },
        // Section 2: RoomsPreview (VOTRE REPOS)
        rooms: {
          subtitle: "VOTRE REPOS",
          title: "Chambres",
          alt: "Chambre Hôtel du Pont Roupt",
          cardTitle: "Élégance & Confort",
          cardText: "Découvrez nos 25 chambres pensées pour votre bien-être. Baignées de lumière naturelle, elles offrent un cadre apaisant alliant mobilier contemporain et touches de caractère.",
          amenity1: "Climatisation",
          amenity2: "Accès ascenseur",
          amenity3: "Literie haut de gamme",
          button: "VOIR TOUTES LES CHAMBRES"
        },
        // Section 3: BistrotPreview (ÉPICURIEN)
        bistrot: {
          subtitle: "ÉPICURIEN",
          title: "Bistrot",
          titleItalic: "&",
          titlePart2: "Bar à Vin",
          para1: "Véritable cœur battant de l'Hôtel du Pont Roupt, notre Bistrot est un espace chaleureux pensé pour se retrouver, échanger et partager des moments de convivialité tout au long de la journée.",
          para2: "Dès le réveil, installez-vous pour savourer un petit-déjeuner généreux mettant à l'honneur les produits locaux. En fin de journée, l'ambiance se tamise : détendez-vous autour d'une de nos savoureuses planches de charcuterie et de fromages de la région.",
          button: "DÉCOUVRIR NOTRE CARTE",
          altMain: "Ambiance Bistrot Pont Roupt",
          altBreakfast: "Petit-déjeuner Pont Roupt",
          altPlanche: "Planche de charcuterie"
        },
        // Section 4: SpaPreview (ESPACE BIEN-ÊTRE)
        spa: {
          subtitle: "ESPACE BIEN-ÊTRE",
          title: "Détente",
          titleItalic: "&",
          titlePart2: "Soins",
          para1: "Plongez dans un véritable havre de paix. Notre vaste espace détente a été entièrement conçu pour vous offrir une parenthèse hors du temps, loin de l'effervescence du quotidien.",
          para2: "Laissez-vous porter par la douceur de notre piscine intérieure chauffée, libérez vos tensions dans le sauna, ou abandonnez-vous aux mains expertes de nos praticiennes dans nos cabines de soins du corps et du visage.",
          list1: "Piscine intérieure chauffée",
          list2: "Sauna",
          list3: "Modelages & Soins sur-mesure",
          button: "DÉCOUVRIR LE SPA",
          altPool: "Piscine intérieure chauffée",
          altSauna: "Espace Sauna",
          altSoins: "Cabine de soins et modelages"
        },
        // Section 5: SeminairePreview (VOS ÉVÉNEMENTS)
        seminaire: {
          subtitle: "VOS ÉVÉNEMENTS",
          title: "Séminaires",
          titleItalic: "&",
          titlePart2: "Réceptions",
          para1: "Organisez vos réunions, journées d'étude ou événements privés dans un cadre propice à la réflexion et à la convivialité, en plein cœur de la Lozère.",
          para2: "L'Hôtel du Pont Roupt met à votre disposition des salles modulables et baignées de lumière naturelle. Nous vous accompagnons de A à Z avec des offres sur-mesure incluant pauses gourmandes, déjeuners au Bistrot et hébergement.",
          list1: "Salles équipées (Écrans, Wi-Fi très haut débit)",
          list2: "Capacité adaptable selon vos besoins",
          list3: "Formules résidentielles ou semi-résidentielles",
          button: "DÉCOUVRIR NOS ESPACES",
          alt: "Salle de séminaire Hôtel Pont Roupt",
          badge: "Service Sur-mesure"
        },
        // Section 6: EcoLabel (TOURISME DURABLE)
        eco: {
          alt: "Label Clef Verte - Tourisme Durable",
          certified: "Certifié Clef Verte",
          tag: "TOURISME DURABLE & ENGAGÉ",
          status: "Engagement actif",
          title: "L’Élégance d'un Séjour Éco-Responsable",
          descPart1: "Soucieux de préserver notre exceptionnel terroir de Lozère, l'Hôtel du Pont Roupt s'engage quotidiennement dans une démarche respectueuse de l'environnement, certifiée par le prestigieux label international Clef Verte.",
          descLabel: "Clef Verte",
          pill1: "Gastronomie en Circuit Court",
          pill2: "Gestion Raisonnée de l'Eau",
          pill3: "Énergie Propre & Durable"
        },
        // Section 7: SocialWall (REJOIGNEZ-NOUS)
        social: {
          subtitle: "REJOIGNEZ-NOUS",
          title: "L'Hôtel",
          titleItalic: "en images",
          button: "@HOTELPONTROUPT",
          overlay: "Voir sur Facebook",
          alt1: "Instagram Hôtel Pont Roupt 1",
          alt2: "Instagram Hôtel Pont Roupt 2",
          alt3: "Instagram Hôtel Pont Roupt 3",
          alt4: "Instagram Hôtel Pont Roupt 4"
        }
      },

      // ==========================================
      // -- AUTRES PAGES --
      // ==========================================

      // -- PAGE LISTING CHAMBRES --
      chambres: {
        surtitle: "VOTRE SÉJOUR",
        title: "Nos Chambres",
        subtitle: "Découvrez nos espaces pensés pour votre confort, alliant charme authentique et modernité.",
        r1_name: "Chambre Standard",
        r1_desc: "Nos chambres les plus simples idéales pour un court séjour ou un déplacement d'affaires. Salle de Bain ou Douche et WC, télévision écran plat, WIFI gratuit, machine Nespresso®, certaines avec la climatisation.",
        r1_size: "12 m²",
        r1_bed: "1 Lit 160 cm",
        r2_name: "Chambre Confort",
        r2_desc: "Ces Chambres offrent une literie plus large et plus d'espace. Salle de Bain et WC, télévision écran plat, WIFI gratuit, machine Nespresso®, climatisation.",
        r2_size: "16 m²",
        r2_bed: "1 Lit 180x200 cm ou 2 Lits 90x200 cm",
        r3_name: "Chambre Supérieure",
        r3_desc: "Nos meilleures chambres et les plus spacieuses. Salle de Bain ou Douche et WC, télévision écran plat, WIFI gratuit, machine Nespresso®, minibar, climatisation.",
        r3_size: "20 m²",
        r3_bed: "1 Lit 180x200 cm ou 2 Lits 90x200 cm",
        discoverBtn: "Découvrir",
        bookBtn: "Réserver"
      },

      // -- PAGE DÉTAIL CHAMBRE --
      chambresDetail: {
        notFoundTitle: "Chambre introuvable",
        notFoundLink: "Retour à la collection",
        viewGallery: "Voir la galerie",
        detailsTitle: "EN DÉTAILS",
        backLink: "voir les autres chambres",
        bookLink: "RÉSERVER CETTE CHAMBRE",
        wifiFree: "WIFI gratuit",
        wifiFreeHigh: "WIFI gratuit haut débit",
        wifiMinibar: "WIFI gratuit & Minibar",
        wifiHautDebit: "WIFI haut débit", // Ajouté pour r3
        r1_descLong: "Leur large fenêtre donne soit sur le soleil levant ou la lumière du couchant, mais toutes tiennent la promesse d'un confort de cocon feutré, de détails judicieusement pensés et d'une élégance clairement intemporelle.",
        r1_size: "14 m²",
        r1_cap: "2 personnes max",
        r1_bedLong: "Lit queen size",
        r2_descLong: "Ces Chambres offrent une literie plus large et plus d'espace. Parfaitement équipées, elles vous garantissent un séjour serein et reposant au cœur de Mende avec une vue imprenable.",
        r2_size: "16 m²",
        r2_cap: "2 personnes max",
        r2_bedLong: "1 Lit 180x200 cm ou 2 Lits",
        r3_descLong: "Nos meilleures chambres et les plus spacieuses. Laissez-vous séduire par l'élégance de ces espaces généreux, idéals pour les longs séjours et les moments de pure détente.",
        r3_size: "20 m²",
        r3_cap: "3 personnes max",
        r3_bedLong: "1 Lit 180x200 cm ou 2 Lits 90x200 cm" // Mis à jour
      },

      // -- PAGE PRINCIPALE BISTROT --
      bar: {
        surtitle: "GOURMANDISE & CONVIVIALITÉ",
        mainTitle: "Le Bar & Petit-Déjeuner",
        subtitle: "Du premier café du matin au dernier verre du soir, profitez de nos espaces chaleureux pensés pour vos moments de détente en toute simplicité.",
        petitDejTag: "LE MATIN",
        petitDejTitle: "Un réveil gourmand & généreux",
        petitDejDesc: "Commencez votre journée en douceur avec notre buffet de petit-déjeuner. Viennoiseries croustillantes, pains artisanaux, confitures locales, fromages de Lozère et boissons chaudes servies dans une salle baignée de lumière.",
        badgeTerroir: "Produits régionaux",
        badgeBuffet: "Buffet libre-service",
        loungeTag: "L'ATMOSPHÈRE",
        loungeTitle: "Le Lounge : votre salon à Mende",
        loungeDesc: "Installez-vous confortablement dans nos fauteuils feutrés pour un rendez-vous professionnel, un moment de lecture ou simplement vous relaxer après la route. Un espace accessible en toute liberté tout au long de la journée.",
        badgeLounge1: "Ambiance feutrée",
        badgeLounge2: "Sans réservation",
        snackTag: "A TOUTE HEURE",
        snackTitle: "Vins de caractère & Snacking du terroir",
        snackDesc: "Notre Bar vous accueille en toute simplicité pour vos moments de convivialité. Une carte de snacking et bocaux artisanaux est proposée toute la journée pour accompagner notre sélection de vins et nos boissons fraîches.",
        badgeSnack1: "Bocaux mijotés",
        badgeSnack2: "Planches de charcuterie",
        pdfSurtitle: "LA SÉLECTION DU BISTROT",
        pdfTitle: "Découvrez l'intégralité de nos boissons et douceurs",
        pdfText: "Consultez notre carte complète : vins, boissons artisanales, tarifs et sélection de snacks.",
        pdfBtn: "Consulter la Carte (PDF)"
      },

     // -- PAGE PRINCIPALE SÉMINAIRE --
      seminairePage: {
        surtitle: "AFFAIRES & ÉVÉNEMENTS",
        mainTitle: "Séminaires & Réunions",
        subtitle: "Pour organiser vos évènements, nous mettons à votre disposition nos salles de réunion toutes équipées pouvant accueillir jusqu'à 100 personnes. Au cœur de Mende, profitez d'un cadre serein et baigné de lumière naturelle pour vos journées d'étude et réceptions.",
        pleniereTag: "JOURNÉES D'ÉTUDE & RÉUNIONS",
        pleniereTitle: "La Salle Plénière : pour vos présentations",
        pleniereDesc: "Conçue pour vos assemblées, formations et comités de direction, notre salle principale accueille jusqu'à 100 personnes. Équipée de matériel de projection haute définition et configurable en « U » ou en théâtre, elle offre un cadre calme et professionnel propice à la concentration.",
        badgeCapacite: "Jusqu'à 100 personnes",
        badgeProjecteur: "Vidéoprojecteur & Écran",
        receptionTag: "RÉCEPTIONS & NETWORKING",
        receptionTitle: "Un salon lumineux pour vos événements corporates",
        receptionDesc: "En complément de vos réunions, profitez de ce second salon aux tables rondes pour vos moments d'échanges, cocktails d'entreprise, showrooms ou réceptions de fin d'année. Un espace élégant, baigné de lumière naturelle, entièrement privatisable pour valoriser l'image de votre société.",
        badgeCocktail: "Cocktails & Réceptions",
        badgeShowroom: "Showroom d'entreprise",
        badgePrive: "Espace privatisable",
        equipSurtitle: "PRESTATIONS INCLUSES",
        equipTitle: "Tout le confort technique à votre disposition",
        equip1Title: "WIFI Haut Débit",
        equip1Desc: "Connexion fibre sécurisée et gratuite dans l'ensemble des salons.",
        equip2Title: "Vidéoprojecteur & Écran",
        equip2Desc: "Matériel de projection haute définition et connectique multi-supports.",
        equip3Title: "Paperboard & Papeterie",
        equip3Desc: "Tableaux de conférence, feutres, blocs-notes et eau minérale sur table.",
        equip4Title: "Lumière du Jour & Calme",
        equip4Desc: "De larges fenêtres ouvrant sur l'extérieur pour un environnement apaisant.",
        contactSurtitle: "VOTRE ÉVÉNEMENT SUR-MESURE",
        contactTitle: "Organisons votre prochaine journée d'étude",
        contactText: "Journée d'étude, séminaire résidentiel ou location de salle sèche : notre équipe est à votre écoute pour concevoir une proposition adaptée à votre entreprise."
      },

     // -- PAGE PRINCIPALE SPA --
      spaPage: {
        surtitle: "DÉTENTE & RELAXATION",
        title: "Spa & Bien-Être",
        subtitle: "Accordez-vous une parenthèse de sérénité au cœur de Mende. Profitez de notre piscine intérieure chauffée et laissez-vous tenter par un soin relaxant dans notre espace bien-être.",
        piscineTag: "ESPACE AQUATIQUE",
        piscineTitle: "Piscine couverte chauffée",
        piscineDesc: "Baignée de lumière, notre piscine intérieure chauffée vous accueille tout au long de l'année pour un instant de détente absolue. Profitez d'un bassin paisible pour vous ressourcer et relâcher les tensions en toute liberté.",
        badgeChauffee: "Piscine chauffée",
        badgeHotel: "Accès clients hôtel",
        soinsTag: "SOINS & MODELAGES",
        soinsTitle: "Un univers feutré dédié à votre sérénité",
        soinsDesc: "Dans une atmosphère intimiste aux lumières apaisantes, notre cabine de soins vous invite au lâcher-prise. Modelages relaxants, soins du corps ou du visage : nos praticiennes vous proposent un moment de bien-être sur-mesure pour ressourcer votre corps et votre esprit.",
        badgeRdv: "Sur rendez-vous",
        badgeMassages: "Soins & Massages",
        badgeZen: "Ambiance zen",
        equipSurtitle: "VOS PRIVILÈGES",
        equipTitle: "Les installations de notre espace détente",
        equip1Title: "Eau Chauffée",
        equip1Desc: "Un bassin à température idéale en toute saison pour vous délasser après vos visites.",
        equip2Title: "Soins Sur-Mesure",
        equip2Desc: "Massages et soins esthétiques dispensés sur réservation par nos professionnelles.",
        equip3Title: "Horaires Souples",
        equip3Desc: "Un espace pensé pour s'adapter à votre rythme, du matin jusqu'en fin de journée.",
        contactSurtitle: "RÉSERVEZ VOTRE MOMENT DE DÉTENTE",
        contactTitle: "Envie d'un soin ou d'un modelage ?",
        contactText: "Pour vous garantir la meilleure disponibilité lors de votre séjour, nous vous conseillons de réserver votre séance de soin ou de massage avant votre arrivée."
      },

      // -- PAGE CONTACT --
      contact: {
        surtitle: "COORDONNÉES & ITINÉRAIRE",
        title: "Accès & Contact",
        subtitle: "Une question sur votre futur séjour, l'organisation d'un séminaire ou une réservation au Spa ? Notre équipe est à votre écoute pour vous accompagner.",
        maisonTag: "LA MAISON",
        hotelName: "Hôtel du Pont Roupt",
        addressLabel: "Adresse :",
        addressValue: "2 Av. du 11 Novembre, 48000 Mende, Lozère",
        phoneLabel: "Téléphone :",
        emailLabel: "E-mail :",
        venirTitle: "Comment venir ?",
        carTitle: "En Voiture",
        carDesc: "Accès facile depuis l'A75. Parking privé et sécurisé à disposition de nos clients.",
        trainTitle: "En Train",
        trainDesc: "Gare SNCF de Mende située à quelques minutes de l'établissement.",
        parkingTitle: "Stationnement",
        parkingDesc: "Parking gratuit sur place pour voitures, motos et vélos.",
        formTitle: "Écrivez-nous",
        formSubtitle: "Remplissez le formulaire ci-dessous, nous vous répondrons dans les meilleurs délais.",
        nameLabel: "Nom & Prénom *",
        emailFormLabel: "E-mail *",
        phoneFormLabel: "Téléphone",
        subjectLabel: "Sujet de votre demande",
        subjectGeneral: "Renseignement général",
        subjectRoom: "Réservation de chambre",
        subjectEvent: "Séminaire & Évènement",
        subjectSpa: "Spa & Bien-être",
        subjectOther: "Autre demande",
        messageLabel: "Votre message *",
        submitBtn: "Envoyer le message",
        submittingBtn: "Envoi en cours...",
        successTitle: "Message envoyé avec succès !",
        successText: "Merci pour votre message. Notre équipe de réception vous répondra très rapidement.",
        resetBtn: "Envoyer un autre message",
        mapSurtitle: "LOCALISATION",
        mapTitle: "Nous trouver à Mende",
        messagePlaceholder: "Précisez vos dates de séjour ou votre question...",
      },

      // -- PAGE BONS CADEAUX --
      cadeaux: {
        surtitle: "FAITES PLAISIR",
        title: "Coffrets & Bons Cadeaux",
        subtitle: "Offrez un moment inoubliable à l'Hôtel du Pont Roupt : séjour de charme, escapade au Spa ou pause gourmande.",
        boxStayTitle: "Coffret Séjour Charme",
        boxStayDesc: "Une nuit en Chambre Supérieure avec petit-déjeuner buffet pour 2 personnes et accès libre au Lounge et à la piscine.",
        boxSpaTitle: "Parenthèse Spa & Bien-Être",
        boxSpaDesc: "Un soin relaxant ou modelage en cabine individuel accompagné d'un accès libre à la piscine couverte chauffée.",
        boxGourmetTitle: "Instant Gourmand Bistrot",
        boxGourmetDesc: "Dégustation au Bar à Vin : deux verres de vin de propriétaires en Occitanie et une grande planche de terroir à partager.",
        btnOffer: "Offrir ce coffret",
        contactNote: "Vous souhaitez un bon cadeau sur-mesure ? Contactez directement notre réception."
      },

      // -- FOOTER & JURIDIQUE --
      footer: {
        colA: {
          social: "Suivez-nous"
        },
        colB: {
          title: "La Maison",
          accueil: "Accueil",
          chambres: "Chambres",
          bar: "Bar & Bistrot",
          spa: "Spa & Bien-être",
          seminaire: "Séminaires"
        },
        colC: {
          title: "Réserver",
          coordonnees: "Coordonnées",
          btn: "RÉSERVER EN DIRECT"
        },
        legal: {
          mentions: "Mentions Légales",
          cgv: "CGV"
        }
      },
      cgv: {
        title: "Conditions Générales de Vente",
        content: "En cours de rédaction..."
      },
      mentionsLegales: {
        title: "Mentions Légales",
        content: "En cours de rédaction..."
      }
    }
  },

  // ==========================================
  // 2. ANGLAIS (EN)
  // ==========================================
  en: {
    translation: {
      // -- NAVIGATION (HEADER & FOOTER) --
      menu: {
        maison: "The Hotel",
        chambres: "Rooms & Suites",
        bistrot: "Wine Bar & Bistrot",
        seminaire: "Meetings & Events",
        spa: "Spa & Wellness",
        cadeaux: "Gift Cards",
        acces: "Location & Contact",
        reserver: "Book Now",
        contacter: "Contact Us",
        fidelite: "Loyalty",
        club: "ORIGINALS CLUB",
        bestPrice: "Best Rate Guaranteed",
        decouvrez: "Discover The Originals Boutique",
        villeRegion: "MENDE • LOZÈRE • OCCITANIE"
      },

      // ==========================================
      // -- HOME PAGE --
      // (Translated from your JSX)
      // ==========================================
      accueil: {
        // Section 1: Welcome
        welcome: {
          badge: "THE HOTEL",
          titlePart1: "The art of welcoming",
          titlePart2: "for 4 generations.",
          para1: "For 4 generations, the Gerbail family has watched over the destiny of Pont Roupt, Mende. Originally, the place was a dance hall. Transformed into a hotel-restaurant after the war, the establishment has never ceased to update itself over the generations to adapt to guest expectations.",
          para2: "« Our house has a great tradition of welcoming », explains Alexandre, owner of this family establishment. Generosity, human warmth, your stopover at The Originals Boutique Hôtel du Pont Roupt, Mende will leave you with an impression of simplicity and authenticity reflecting the region.",
          para3: "The hotel offers 25 comfortable and well-equipped rooms (most are air-conditioned and accessible by elevator), a bistro wine bar for convivial moments, meeting rooms, and a vast relaxation area with an indoor pool, sauna, jacuzzi, and treatment cabins.",
          button: "DISCOVER THE HOTEL",
          altMain: "Pont Roupt Atmosphere",
          altDetail: "Pont Roupt Detail"
        },
        // Section 2: RoomsPreview (YOUR REST)
        rooms: {
          subtitle: "YOUR REST",
          title: "Rooms",
          alt: "Chambre Hôtel du Pont Roupt Room",
          cardTitle: "Elegance & Comfort",
          cardText: "Discover our 25 rooms designed for your well-being. Bathed in natural light, they offer a soothing setting combining contemporary furniture and touches of character.",
          amenity1: "Air conditioning",
          amenity2: "Elevator access",
          amenity3: "Top-of-the-range bedding",
          button: "SEE ALL ROOMS"
        },
        // Section 3: BistrotPreview (EPICUREAN)
        bistrot: {
          subtitle: "EPICUREAN",
          title: "Bistro",
          titleItalic: "&",
          titlePart2: "Wine Bar",
          para1: "The true beating heart of the Hôtel du Pont Roupt, our Bistro is a warm space designed to meet, exchange, and share convivial moments throughout the day.",
          para2: "From the moment you wake up, settle in to enjoy a generous breakfast showcasing local products. At the end of the day, the atmosphere becomes subdued: relax around one of our tasty regional charcuterie and cheese platters.",
          button: "DISCOVER OUR MENU",
          altMain: "Pont Roupt Bistro Atmosphere",
          altBreakfast: "Pont Roupt Breakfast",
          altPlanche: "Charcuterie platter"
        },
        // Section 4: SpaPreview (WELLNESS AREA)
        spa: {
          subtitle: "WELLNESS AREA",
          title: "Relaxation",
          titleItalic: "&",
          titlePart2: "Treatments",
          para1: "Immerse yourself in a true haven of peace. Our vast relaxation area has been entirely designed to offer you a moment out of time, far from the hustle and bustle of daily life.",
          para2: "Let yourself be carried away by the gentleness of our heated indoor pool, release your tension in the sauna, or surrender to the expert hands of our practitioners in our body and face treatment cabins.",
          list1: "Heated indoor pool",
          list2: "Sauna",
          list3: "Massages & Custom Treatments",
          button: "DISCOVER THE SPA",
          altPool: "Heated indoor pool",
          altSauna: "Sauna area",
          altSoins: "Treatment and massage cabin"
        },
        // Section 5: SeminairePreview (YOUR EVENTS)
        seminaire: {
          subtitle: "YOUR EVENTS",
          title: "Seminars",
          titleItalic: "&",
          titlePart2: "Receptions",
          para1: "Organize your meetings, study days, or private events in a setting conducive to reflection and conviviality, right in the heart of Lozère.",
          para2: "The Hôtel du Pont Roupt provides you with modular rooms bathed in natural light. We support you from A to Z with custom offers including gourmet breaks, lunches at the Bistro, and accommodation.",
          list1: "Equipped rooms (Screens, very high-speed Wi-Fi)",
          list2: "Adaptable capacity according to your needs",
          list3: "Residential or semi-residential packages",
          button: "DISCOVER OUR SPACES",
          alt: "Hôtel Pont Roupt seminar room",
          badge: "Custom Service"
        },
        // Section 6: EcoLabel (SUSTAINABLE TOURISM)
        eco: {
          alt: "Green Key Label - Sustainable Tourism",
          certified: "Certified Green Key",
          tag: "SUSTAINABLE & COMMITTED TOURISM",
          status: "Active commitment",
          title: "The Elegance of an Eco-Responsible Stay",
          descPart1: "Anxious to preserve our exceptional Lozère terroir, the Hôtel du Pont Roupt commits daily to an environmentally friendly approach, certified by the prestigious international label",
          descLabel: "Green Key",
          pill1: "Short Circuit Gastronomy",
          pill2: "Reasoned Water Management",
          pill3: "Clean & Sustainable Energy"
        },
        // Section 7: SocialWall (JOIN US)
        social: {
          subtitle: "JOIN US",
          title: "The Hotel",
          titleItalic: "in pictures",
          button: "@HOTELPONTROUPT",
          overlay: "View on Facebook",
          alt1: "Instagram Hôtel Pont Roupt 1",
          alt2: "Instagram Hôtel Pont Roupt 2",
          alt3: "Instagram Hôtel Pont Roupt 3",
          alt4: "Instagram Hôtel Pont Roupt 4"
        }
      },

      // ==========================================
      // -- OTHER PAGES --
      // ==========================================

      // -- ROOMS PAGE --
      chambres: {
        surtitle: "YOUR STAY",
        title: "Our Rooms",
        subtitle: "Discover our spaces designed for your comfort, blending authentic charm with modern amenities.",
        r1_name: "Standard Room",
        r1_desc: "Our simplest rooms, ideal for a short stay or a business trip. Bathroom with bathtub or shower and WC, flat-screen TV, free WiFi, Nespresso® machine, some with air conditioning.",
        r1_size: "12 m²",
        r1_bed: "1 Bed 160 cm",
        r2_name: "Comfort Room",
        r2_desc: "These rooms offer larger bedding and more living space. Full bathroom and WC, flat-screen TV, free WiFi, Nespresso® machine, air conditioning.",
        r2_size: "16 m²",
        r2_bed: "1 Bed 180x200 cm or 2 Beds 90x200 cm",
        r3_name: "Superior Room",
        r3_desc: "Our best and most spacious rooms. Full bathroom or shower and WC, flat-screen TV, free WiFi, Nespresso® machine, minibar, air conditioning.",
        r3_size: "20 m²",
        r3_bed: "1 Bed 180x200 cm or 2 Beds 90x200 cm",
        discoverBtn: "Discover",
        bookBtn: "Book Now"
      },

      // -- ROOM DETAIL PAGE --
      chambresDetail: {
        notFoundTitle: "Room not found",
        notFoundLink: "Back to collection",
        viewGallery: "View gallery",
        detailsTitle: "IN DETAILS",
        backLink: "see other rooms",
        bookLink: "BOOK THIS ROOM",
        wifiFree: "Free WIFI",
        wifiFreeHigh: "Free High-Speed WIFI",
        wifiMinibar: "Free WIFI & Minibar",
        wifiHautDebit: "High-speed WIFI", // Added for r3
        r1_descLong: "Their large windows open to either the sunrise or the sunset light, but all hold the promise of a cozy cocoon comfort, thoughtfully designed details, and timeless elegance.",
        r1_size: "14 m²",
        r1_cap: "2 guests max",
        r1_bedLong: "Queen size bed",
        r2_descLong: "These rooms offer wider bedding and more space. Fully equipped, they guarantee a peaceful and relaxing stay in the heart of Mende with open views.",
        r2_size: "16 m²",
        r2_cap: "2 guests max",
        r2_bedLong: "1 Bed 180x200 cm or 2 Beds",
        r3_descLong: "Our best and most spacious rooms. Let yourself be seduced by the elegance of these generous spaces, ideal for long stays and pure relaxation.",
        r3_size: "20 m²",
        r3_cap: "3 guests max",
        r3_bedLong: "1 King size bed (180x200) or 2 Single beds (90x200)" // Updated
      },

      // -- BISTRO MAIN PAGE --
      bar: {
        surtitle: "GOURMET MOMENTS & CONVIVIALITY",
        mainTitle: "Bar & Breakfast",
        subtitle: "From your first morning coffee to a relaxing evening drink, enjoy our warm spaces designed for simple, restful moments throughout the day.",
        petitDejTag: "MORNINGS",
        petitDejTitle: "A Gourmet & Generous Awakening",
        petitDejDesc: "Start your day gently with our breakfast buffet. Crispy pastries, artisanal breads, local jams, Lozère cheeses, and hot drinks served in a light-filled dining room.",
        badgeTerroir: "Regional Products",
        badgeBuffet: "Self-Service Buffet",
        loungeTag: "THE ATMOSPHERE",
        loungeTitle: "The Lounge: Your Living Room in Mende",
        loungeDesc: "Settle comfortably into our plush armchairs for a business meeting, a quiet reading break, or simply to unwind after your journey. Open and accessible all day long.",
        badgeLounge1: "Cozy Atmosphere",
        badgeLounge2: "No Reservation Needed",
        snackTag: "ALL DAY LONG",
        snackTitle: "Character Wines & Local Snacking",
        snackDesc: "Our Bar welcomes you in a relaxed setting for convivial moments. A snacking menu with artisanal glass jars is available all day to accompany our selection of wines and chilled drinks.",
        badgeSnack1: "Artisanal Hot Jars",
        badgeSnack2: "Charcuterie Boards",
        pdfSurtitle: "THE BISTROT SELECTION",
        pdfTitle: "Discover all our drinks and sweet treats",
        pdfText: "View our complete menu: wines, craft beverages, prices, and snack selection.",
        pdfBtn: "View Menu (PDF)"
      },

      // -- SEMINAR MAIN PAGE --
      seminairePage: {
        surtitle: "BUSINESS & EVENTS",
        mainTitle: "Seminars & Meetings",
        subtitle: "To organize your events, we offer fully equipped meeting rooms that can accommodate up to 100 guests. In the heart of Mende, enjoy a serene setting bathed in natural daylight for your study days and receptions.",
        pleniereTag: "STUDY DAYS & MEETINGS",
        pleniereTitle: "Main Hall: For Your Presentations",
        pleniereDesc: "Designed for conventions, training sessions, and executive meetings, our main room accommodates up to 100 people. Equipped with high-definition projection equipment and configurable in a 'U' shape or theater style, it offers a quiet and professional setting conducive to concentration.",
        badgeCapacite: "Up to 100 people",
        badgeProjecteur: "Projector & Screen",
        receptionTag: "RECEPTIONS & NETWORKING",
        receptionTitle: "A bright lounge for your corporate events",
        receptionDesc: "In addition to your meetings, enjoy this second round-table lounge for your networking moments, corporate cocktails, showrooms, or end-of-year receptions. An elegant space, bathed in natural light, entirely privatizable to enhance your company's image.",
        badgeCocktail: "Cocktails & Receptions",
        badgeShowroom: "Corporate Showroom",
        badgePrive: "Private Hire Available",
        equipSurtitle: "INCLUDED SERVICES",
        equipTitle: "All technical comfort at your disposal",
        equip1Title: "High-Speed WIFI",
        equip1Desc: "Secure and free fiber connection in all lounges.",
        equip2Title: "Projector & Screen",
        equip2Desc: "High-definition projection equipment and multi-support connectivity.",
        equip3Title: "Flipchart & Stationery",
        equip3Desc: "Flipcharts, markers, notepads, and mineral water on the table.",
        equip4Title: "Daylight & Quiet",
        equip4Desc: "Large windows opening to the outside for a soothing environment.",
        contactSurtitle: "TAILOR-MADE EVENTS",
        contactTitle: "Let's organize your next business event",
        contactText: "Study days, residential seminars, or dry room rentals: our team is at your disposal to design a customized proposal for your company."
      },

     // -- SPA MAIN PAGE --
      spaPage: {
        surtitle: "RELAXATION & WELLNESS",
        title: "Spa & Wellness",
        subtitle: "Treat yourself to a serene break in the heart of Mende. Enjoy our heated indoor pool and indulge in a relaxing treatment in our wellness area.",
        piscineTag: "AQUATIC AREA",
        piscineTitle: "Heated indoor pool",
        piscineDesc: "Bathed in natural light, our indoor heated swimming pool welcomes you year-round for a moment of absolute relaxation. Enjoy a peaceful pool to recharge and release tension in complete freedom.",
        badgeChauffee: "Heated Pool",
        badgeHotel: "Hotel Guest Access",
        soinsTag: "TREATMENTS & MASSAGES",
        soinsTitle: "A peaceful sanctuary dedicated to your serenity",
        soinsDesc: "In an intimate atmosphere with soothing lighting, our treatment cabin invites you to let go. Relaxing massages, body or facial treatments: our practitioners offer you a tailor-made well-being moment to recharge your body and mind.",
        badgeRdv: "By Appointment Only",
        badgeMassages: "Treatments & Massages",
        badgeZen: "Zen Atmosphere",
        equipSurtitle: "YOUR PRIVILEGES",
        equipTitle: "The facilities of our relaxation area",
        equip1Title: "Heated Water",
        equip1Desc: "A pool at the perfect temperature in all seasons to relax after your visits.",
        equip2Title: "Custom Treatments",
        equip2Desc: "Massages and beauty treatments provided upon reservation by our professionals.",
        equip3Title: "Flexible Hours",
        equip3Desc: "A space designed to adapt to your rhythm, from morning until late afternoon.",
        contactSurtitle: "BOOK YOUR RELAXING TIME",
        contactTitle: "Looking for a treatment or massage?",
        contactText: "To ensure availability during your stay, we highly recommend booking your massage or spa treatment before your arrival."
      },

      // -- CONTACT PAGE --
      contact: {
        surtitle: "LOCATION & DIRECTIONS",
        title: "Location & Contact",
        subtitle: "A question about your upcoming stay, organizing a seminar, or a Spa booking? Our team is here to assist you.",
        maisonTag: "THE HOTEL",
        hotelName: "Hotel du Pont Roupt",
        addressLabel: "Address:",
        addressValue: "2 Av. du 11 Novembre, 48000 Mende, Lozère, France",
        phoneLabel: "Phone:",
        emailLabel: "Email:",
        venirTitle: "How to get here?",
        carTitle: "By Car",
        carDesc: "Easy access from the A75 motorway. Private and secure parking available for hotel guests.",
        trainTitle: "By Train",
        trainDesc: "Mende SNCF train station located just a few minutes from the hotel.",
        parkingTitle: "Parking",
        parkingDesc: "Free on-site parking for cars, motorcycles, and bicycles.",
        formTitle: "Write to us",
        formSubtitle: "Fill out the form below and we will get back to you as soon as possible.",
        nameLabel: "Full Name *",
        emailFormLabel: "Email *",
        phoneFormLabel: "Phone Number",
        subjectLabel: "Subject of your request",
        subjectGeneral: "General inquiry",
        subjectRoom: "Room reservation",
        subjectEvent: "Seminar & Events",
        subjectSpa: "Spa & Wellness",
        subjectOther: "Other request",
        messageLabel: "Your Message *",
        submitBtn: "Send Message",
        submittingBtn: "Sending...",
        successTitle: "Message sent successfully!",
        successText: "Thank you for reaching out. Our front desk team will reply to you very shortly.",
        resetBtn: "Send another message",
        mapSurtitle: "LOCATION",
        mapTitle: "Find us in Mende",
        messagePlaceholder: "Please specify your dates of stay or your question...",
      },

      // -- BONS CADEAUX (Gift Vouchers) --
      cadeaux: {
        surtitle: "GIFT EXPERIENCES",
        title: "Gift Boxes & Vouchers",
        subtitle: "Offer an unforgettable moment at Hotel du Pont Roupt: charming stay, Spa getaway, or gourmet break.",
        boxStayTitle: "Charming Stay Package",
        boxStayDesc: "One night in a Superior Room with breakfast buffet for 2 guests and free access to the Lounge and swimming pool.",
        boxSpaTitle: "Spa & Wellness Break",
        boxSpaDesc: "A relaxing massage or body treatment in a private cabin accompanied by free access to the heated indoor pool.",
        boxGourmetTitle: "Bistrot Gourmet Moment",
        boxGourmetDesc: "Wine Bar tasting: two glasses of estate wine from Occitanie and a large regional charcuterie platter to share.",
        btnOffer: "Gift this package",
        contactNote: "Looking for a custom gift voucher? Contact our front desk directly."
      },

      // -- FOOTER & LEGAL --
      footer: {
        colA: {
          social: "Follow Us"
        },
        colB: {
          title: "The Hotel",
          accueil: "Home",
          chambres: "Rooms",
          bar: "Bar & Bistrot",
          spa: "Spa & Wellness",
          seminaire: "Meetings"
        },
        colC: {
          title: "Book Now",
          coordonnees: "Contact Details",
          btn: "BOOK DIRECTLY"
        },
        legal: {
          mentions: "Legal Notice",
          cgv: "T&Cs"
        }
      },
      cgv: {
        title: "Terms and Conditions of Sale",
        content: "Drafting in progress..."
      },
      mentionsLegales: {
        title: "Legal Notice",
        content: "Drafting in progress..."
      }
    }
  },

  // ==========================================
  // 3. ESPAGNOL (ES)
  // ==========================================
  es: {
    translation: {
      // -- NAVIGATION (HEADER & FOOTER) --
      menu: {
        maison: "El Hotel",
        chambres: "Habitaciones",
        bistrot: "Bistró & Bar de Vinos",
        seminaire: "Reuniones & Eventos",
        spa: "Spa & Bienestar",
        cadeaux: "Bonos Regalo",
        acces: "Ubicación & Contacto",
        reserver: "Reservar",
        contacter: "Contáctenos",
        fidelite: "Fidelidad",
        club: "ORIGINALS CLUB",
        bestPrice: "Mejor Precio Garantizado",
        decouvrez: "Descubra The Originals Boutique",
        villeRegion: "MENDE • LOZÈRE • OCCITANIE"
      },

      // ==========================================
      // -- PÁGINA DE INICIO --
      // (Translated from your JSX)
      // ==========================================
      accueil: {
        // Section 1: Welcome
        welcome: {
          badge: "LA CASA",
          titlePart1: "El arte de recibir",
          titlePart2: "desde hace 4 generaciones.",
          para1: "Hace ya 4 generaciones que la familia Gerbail vela por el buen destino del Pont Roupt, Mende. Originalmente, el lugar era una sala de baile. Transformado en hotel-restaurante après la guerra, el establecimiento no ha dejado de actualizarse a lo largo de las generaciones para adaptarse a las expectativas de la clientela.",
          para2: "« Nuestra casa tiene una gran tradición de acogida », explica Alexandre, propietario de este establecimiento familiar. Generosidad, calor humano, su parada en The Originals Boutique Hôtel du Pont Roupt, Mende le dejará una impresión de simplicidad y autenticidad a imagen de la región.",
          para3: "El hotel ofrece 25 habitaciones cómodas y bien equipadas (la mayoría con aire acondicionado y accessibles por ascensor), un bistró bar de vinos para momentos de convivencia, salas de reuniones y una amplia zona de relajación con piscina cubierta, sauna, jacuzzi y cabinas de tratamiento.",
          button: "DESCUBRIR EL HOTEL",
          altMain: "Ambiente Pont Roupt",
          altDetail: "Detalle Pont Roupt"
        },
        // Section 2: RoomsPreview (SU DESCANSO)
        rooms: {
          subtitle: "SU DESCANSO",
          title: "Habitaciones",
          alt: "Chambre Hôtel du Pont Roupt Habitación",
          cardTitle: "Elegancia y Confort",
          cardText: "Descubra nuestras 25 habitaciones pensadas para su bienestar. Bañadas de luz natural, ofrecen un entorno relajante que combina mobiliario contemporáneo y toques de carácter.",
          amenity1: "Aire acondicionado",
          amenity2: "Acceso por ascensor",
          amenity3: "Ropa de cama de alta gama",
          button: "VER TODAS LAS HABITACIONES"
        },
        // Section 3: BistrotPreview (EPICÚREO)
        bistrot: {
          subtitle: "EPICÚREO",
          title: "Bistró",
          titleItalic: "&",
          titlePart2: "Bar de Vinos",
          para1: "Verdadero corazón palpitante del Hôtel du Pont Roupt, nuestro Bistró es un espacio cálido pensado para encontrarse, intercambiar y compartir momentos de convivencia durante todo el día.",
          para2: "Desde que se despierta, acomódese para disfrutar de un desayuno generoso que rinde homenaje a los productos locales. Al final del día, el ambiente se atenúa: relájese alrededor de una de nuestras sabrosas tablas de embutidos y quesos de la región.",
          button: "DESCUBRIR NUESTRA CARTA",
          altMain: "Ambiente Bistró Pont Roupt",
          altBreakfast: "Desayuno Pont Roupt",
          altPlanche: "Tabla de embutidos"
        },
        // Section 4: SpaPreview (ZONA DE BIENESTAR)
        spa: {
          subtitle: "ZONA DE BIENESTAR",
          title: "Relajación",
          titleItalic: "&",
          titlePart2: "Tratamientos",
          para1: "Sumérjase en un verdadero remanso de paz. Nuestra amplia zona de relajación ha sido totalmente diseñada para ofrecerle un momento fuera del tiempo, lejos del ajetreo de la vida cotidiana.",
          para2: "Déjese llevar par la suavidad de nuestra piscina interior climatizada, libere tensiones en la sauna o entréguese a las manos expertas de nuestras terapeutas en nuestras cabinas de tratamiento corporal y facial.",
          list1: "Piscine interior climatizada",
          list2: "Sauna",
          list3: "Masajes y Tratamientos a medida",
          button: "DESCUBRIR EL SPA",
          altPool: "Piscina interior climatizada",
          altSauna: "Zona de Sauna",
          altSoins: "Cabina de tratamientos y masajes"
        },
        // Section 5: SeminairePreview (SUS EVENTOS)
        seminaire: {
          subtitle: "SUS EVENTOS",
          title: "Seminarios",
          titleItalic: "&",
          titlePart2: "Recepciones",
          para1: "Organice sus reuniones, jornadas de estudio o eventos privados en un entorno propicio para la reflexión y la convivencia, en pleno corazón de la Lozère.",
          para2: "El Hôtel du Pont Roupt pone a su disposición salas modulables y bañadas de luz natural. Le acompañamos de la A a la Z con ofertas a medida que incluyen pausas gourmet, almuerzos en el Bistró y alojamiento.",
          list1: "Salas equipadas (Pantallas, Wi-Fi de muy alta velocidad)",
          list2: "Capacidad adaptable según sus necesidades",
          list3: "Fórmulas residenciales o semi-residenciales",
          button: "DESCUBRIR NUESTROS ESPACIOS",
          alt: "Sala de seminarios Hôtel Pont Roupt",
          badge: "Servicio a medida"
        },
        // Section 6: EcoLabel (TURISMO SOSTENIBLE)
        eco: {
          alt: "Sello Clef Verte - Turismo Sostenible",
          certified: "Certificado Clef Verte",
          tag: "TURISMO SOSTENIBLE Y COMPROMETIDO",
          status: "Compromiso activo",
          title: "La Elegancia de una Estancia Eco-Responsable",
          descPart1: "Deseoso de preservar nuestro excepcional terroir de Lozère, el Hôtel du Pont Roupt se compromete diariamente con un enfoque respetuoso con el medio ambiente, certificado por el prestigioso sello internacional",
          descLabel: "Clef Verte",
          pill1: "Gastronomía en Circuito Corto",
          pill2: "Gestión Razonada del Agua",
          pill3: "Energía Limpia y Sostenible"
        },
        // Section 7: SocialWall (ÚNETE A NOSOTROS)
        social: {
          subtitle: "ÚNETE A NOSOTROS",
          title: "El Hotel",
          titleItalic: "en imágenes",
          button: "@HOTELPONTROUPT",
          overlay: "Ver en Facebook",
          alt1: "Instagram Hôtel Pont Roupt 1",
          alt2: "Instagram Hôtel Pont Roupt 2",
          alt3: "Instagram Hôtel Pont Roupt 3",
          alt4: "Instagram Hôtel Pont Roupt 4"
        }
      },

      // ==========================================
      // -- AUTRES PAGES --
      // ==========================================

      // -- PÁGINA LISTADO HABITACIONES --
      chambres: {
        surtitle: "SU ESTANCIA",
        title: "Nuestras Habitaciones",
        subtitle: "Descubra nuestros espacios pensados para su comodidad, combinando encanto auténtico y modernidad.",
        r1_name: "Habitación Estándar",
        r1_desc: "Nuestras habitaciones más sencillas, ideales para una estancia corta o un viaje de negocios. Baño o ducha y WC, televisión de pantalla plana, wifi gratuito, cafetera Nespresso®, algunas con aire acondicionado.",
        r1_size: "12 m²",
        r1_bed: "1 Cama de 160 cm",
        r2_name: "Habitación Confort",
        r2_desc: "Estas habitaciones ofrecen camas más grandes y más espacio. Baño completo y WC, televisión de pantalla plana, wifi gratuito, cafetera Nespresso®, aire acondicionado.",
        r2_size: "16 m²",
        r2_bed: "1 Cama 180x200 cm o 2 Camas 90x200 cm",
        r3_name: "Habitación Superior",
        r3_desc: "Nuestras mejores y más amplias habitaciones. Baño o ducha y WC, televisión de pantalla plana, wifi gratuito, cafetera Nespresso®, minibar, aire acondicionado.",
        r3_size: "20 m²",
        r3_bed: "1 Cama 180x200 cm o 2 Camas 90x200 cm",
        discoverBtn: "Descubrir",
        bookBtn: "Reservar"
      },

      // -- PÁGINA DETALLE HABITACIÓN --
      chambresDetail: {
        notFoundTitle: "Habitación no encontrada",
        notFoundLink: "Volver a la colección",
        viewGallery: "Ver galería",
        detailsTitle: "EN DETALLES",
        backLink: "ver otras habitaciones",
        bookLink: "RESERVAR ESTA HABITACIÓN",
        wifiFree: "WIFI gratuito",
        wifiFreeHigh: "WIFI gratuito alta velocidad",
        wifiMinibar: "WIFI gratuito y Minibar",
        wifiHautDebit: "WIFI de alta velocidad", // Added for r3
        r1_descLong: "Sus grandes ventanas dan al sol naciente o a la luz del poniente, pero todas cumplen la promesa de un confort acogedor, detalles cuidadosamente pensados y una elegancia atemporal.",
        r1_size: "14 m²",
        r1_cap: "2 personas máx",
        r1_bedLong: "Cama Queen size",
        r2_descLong: "Estas habitaciones ofrecen camas más anchas y más espacio. Perfectamente equipadas, garantizan una estancia tranquila en el corazón de Mende con vistas despejadas.",
        r2_size: "16 m²",
        r2_cap: "2 personas máx",
        r2_bedLong: "1 Cama 180x200 cm o 2 Camas",
        r3_descLong: "Nuestras mejores y más amplias habitaciones. Déjese seducir por la elegancia de estos generosos espacios, ideales para estancias largas y pura relajación.",
        r3_size: "20 m²",
        r3_cap: "3 personas máx",
        r3_bedLong: "1 Cama King (180x200) or 2 Camas individuales (90x200)" // Updated
      },

      // -- PÁGINA PRINCIPAL BISTRÓ --
      bar: {
        surtitle: "GASTRONOMÍA & CONVIVENCIA",
        mainTitle: "Bar & Desayuno",
        subtitle: "Desde el primer café de la mañana hasta la última copa de la noche, disfrute de nuestros acogedores espacios pensados para su descanso.",
        petitDejTag: "POR LA MAÑANA",
        petitDejTitle: "Un despertar gourmet y generoso",
        petitDejDesc: "Comience su día con nuestro buffet de desayuno. Bollería crujiente, panes artesanales, mermeladas locales, quesos de Lozère y bebidas calientes en un salón luminoso.",
        badgeTerroir: "Productos Regionales",
        badgeBuffet: "Buffet Libre",
        loungeTag: "EL AMBIENTE",
        loungeTitle: "El Lounge: Su salón en Mende",
        loungeDesc: "Póngase cómodo en nuestros sillones para una reunión de trabajo, un moment de lectura o simplemente para relajarse tras el viaje. Un espacio accesible durante todo el día.",
        badgeLounge1: "Ambiente Acogedor",
        badgeLounge2: "Sin Reserva",
        snackTag: "A CUALQUIER HORA",
        snackTitle: "Vinos con carácter & Snacking local",
        snackDesc: "Nuestro Bar le acoge en un ambiente informal para sus momentos de ocio. Ofrecemos una carta de snacks y platos artesanales en tarro todo el día para acompañar nuestros vinos y bebidas.",
        badgeSnack1: "Tarros Artesanales",
        badgeSnack2: "Tablas de Embutidos",
        pdfSurtitle: "LA SELECCIÓN DEL BISTRÓ",
        pdfTitle: "Descubra todas nuestras bebidas y dulces",
        pdfText: "Consulte nuestra carta completa: vinos, bebidas artesanales, precios y selección de snacks.",
        pdfBtn: "Ver Carta (PDF)"
      },

      // -- PÁGINA PRINCIPAL SEMINARIO --
      seminairePage: {
        surtitle: "NEGOCIOS & EVENTOS",
        mainTitle: "Seminarios & Reuniones",
        subtitle: "Para organizar sus eventos, ponemos a su disposición salas de reuniones totalmente equipadas con capacidad para hasta 100 personas. En Mende, disfrute de un entorno sereno con luz natural para sus jornadas de estudio y recepciones.",
        pleniereTag: "JORNADAS DE ESTUDIO & REUNIONES",
        pleniereTitle: "Sala Principal: Para sus presentaciones",
        pleniereDesc: "Diseñada para convenciones, formaciones y reuniones de directivos, nuestra sala principal acoge hasta 100 personas. Equipada con material de proyección de alta definición y configurable en 'U' o en teatro, ofrece un entorno tranquilo y profesional propicio para la concentración.",
        badgeCapacite: "Hasta 100 personas",
        badgeProjecteur: "Proyector y Pantalla",
        receptionTag: "RECEPCIONES & NETWORKING",
        receptionTitle: "Un salón luminoso para sus eventos corporativos",
        receptionDesc: "Como complemento a sus reuniones, disfrute de este segundo salón con mesas redondas para sus momentos de intercambio, cócteles de empresa, showrooms o recepciones de fin de año. Un espacio elegante, bañado de luz natural y totalmente privatizable para potenciar la imagen de su empresa.",
        badgeCocktail: "Cócteles y Recepciones",
        badgeShowroom: "Showroom Corporativo",
        badgePrive: "Espacio Privatizable",
        equipSurtitle: "SERVICIOS INCLUIDOS",
        equipTitle: "Todo el confort técnico a su disposición",
        equip1Title: "WIFI de alta velocidad",
        equip1Desc: "Conexión de fibra segura y gratuita en todos los salones.",
        equip2Title: "Proyector y Pantalla",
        equip2Desc: "Equipo de proyección de alta definición y conectividad multisoporte.",
        equip3Title: "Pizarra y Papelería",
        equip3Desc: "Pizarras, rotuladores, blocs de notas y agua mineral en la mesa.",
        equip4Title: "Luz Natural y Tranquilidad",
        equip4Desc: "Grandes ventanales que dan al exterior para un ambiente relajante.",
        contactSurtitle: "EVENTOS A SU MEDIDA",
        contactTitle: "Organicemos su próximo evento empresarial",
        contactText: "Jornadas de estudio, seminarios residenciales o alquiler de sala: nuestro equipo está a su disposición para diseñar una propuesta adaptada a su empresa."
      },

      // -- PÁGINA PRINCIPAL SPA --
      spaPage: {
        surtitle: "RELAX & BIENESTAR",
        title: "Spa & Bienestar",
        subtitle: "Regálese una pausa de serenidad en el corazón de Mende. Disfrute de nuestra piscina interior climatizada y relájese con un tratamiento en nuestra zona de bienestar.",
        piscineTag: "ZONA ACUÁTICA",
        piscineTitle: "Piscina cubierta climatizada",
        piscineDesc: "Bañada por luz natural, nuestra piscina interior climatizada le acoge durante todo el año para un momento de descanso absoluto. Disfrute de una piscina tranquila para recargar energías y liberar tensiones con total libertad.",
        badgeChauffee: "Piscine Climatizada",
        badgeHotel: "Acceso clientes hotel",
        soinsTag: "TRATAMIENTOS & MASAJES",
        soinsTitle: "Un refugio tranquilo dedicado a su serenidad",
        soinsDesc: "En un ambiente íntimo con luces relajantes, nuestra cabina de tratamientos le invita a desconectar. Masajes relajantes, tratamientos corporales o faciales: nuestras terapeutas le ofrecen un momento de bienestar a medida para renovar cuerpo y mente.",
        badgeRdv: "Cita Previa",
        badgeMassages: "Tratamientos & Masajes",
        badgeZen: "Ambiente Zen",
        equipSurtitle: "SUS PRIVILEGIOS",
        equipTitle: "Las instalaciones de nuestra zona de relajación",
        equip1Title: "Agua Climatizada",
        equip1Desc: "Una piscina a la temperatura ideal en cualquier época del año para relajarse tras sus visitas.",
        equip2Title: "Tratamientos a Medida",
        equip2Desc: "Masajes y tratamientos estéticos impartidos previa reserva por nuestras profesionales.",
        equip3Title: "Horarios Flexibles",
        equip3Desc: "Un espacio diseñado para adaptarse a su ritmo, desde la mañana hasta el final del día.",
        contactSurtitle: "RESERVE SU MOMENTO DE RELAX",
        contactTitle: "¿Desea reservar un tratamiento o masaje?",
        contactText: "Para garantizar la disponibilidad durante su estancia, le recomendamos reservar su sesión de masaje o tratamiento de spa antes de su llegada."
      },

      // -- PÁGINA CONTACTO --
      contact: {
        surtitle: "UBICACIÓN E ITINERARIO",
        title: "Ubicación & Contacto",
        subtitle: "¿Tiene alguna pregunta sobre su próxima estancia, la organización de un seminario o una reserva en el Spa? Nuestro equipo está a su disposición.",
        maisonTag: "EL HOTEL",
        hotelName: "Hotel du Pont Roupt",
        addressLabel: "Dirección:",
        addressValue: "2 Av. du 11 Novembre, 48000 Mende, Lozère, Francia",
        phoneLabel: "Teléfono:",
        emailLabel: "Correo electrónico:",
        venirTitle: "¿Cómo llegar?",
        carTitle: "En Coche",
        carDesc: "Fácil acceso desde la autopista A75. Aparcamiento privado y seguro disponible para nuestros clientes.",
        trainTitle: "En Tren",
        trainDesc: "Estación de tren SNCF de Mende situada a pocos minutos del establecimiento.",
        parkingTitle: "Aparcamiento",
        parkingDesc: "Aparcamiento gratuito en el hotel para coches, motos y bicicletas.",
        formTitle: "Escríbanos",
        formSubtitle: "Rellene el siguiente formulario y le responderemos lo antes posible.",
        nameLabel: "Nombre y Apellidos *",
        emailFormLabel: "Correo electrónico *",
        phoneFormLabel: "Teléfono",
        subjectLabel: "Asunto de su consulta",
        subjectGeneral: "Información general",
        subjectRoom: "Reserva de habitación",
        subjectEvent: "Seminario y Eventos",
        subjectSpa: "Spa & Bienestar",
        subjectOther: "Otra consulta",
        messageLabel: "Su Mensaje *",
        submitBtn: "Enviar Mensaje",
        submittingBtn: "Enviando...",
        successTitle: "¡Mensaje enviado con éxito!",
        successText: "Gracias por contactarnos. Nuestro equipo de recepción le responderá muy pronto.",
        resetBtn: "Enviar otro message",
        mapSurtitle: "UBICACIÓN",
        mapTitle: "Encuéntrenos en Mende",
        messagePlaceholder: "Por favor, especifique sus fechas de estancia o su pregunta...",
      },

      // -- BONS CADEAUX (Gift Vouchers) --
      cadeaux: {
        surtitle: "REGALAR EXPERIENCIAS",
        title: "Cajas y Bonos Regalo",
        subtitle: "Regale un momento inolvidable en el Hotel du Pont Roupt: estancia con encanto, escapada Spa o pausa gourmet.",
        boxStayTitle: "Estancia con Encanto",
        boxStayDesc: "Una noche en Habitación Superior con desayuno buffet para 2 personas y acceso libre al Lounge y la piscina.",
        boxSpaTitle: "Pausa Spa & Bienestar",
        boxSpaDesc: "Un tratamiento relajante o masaje individual en cabina acompañado de acceso libre a la piscina cubierta climatizada.",
        boxGourmetTitle: "Momento Gourmet Bistró",
        boxGourmetDesc: "Cata en el Bar de Vinos: dos copas de vino de autor de Occitania y una gran tabla regional para compartir.",
        btnOffer: "Regalar esta caja",
        contactNote: "¿Desea un bono regalo a medida? Póngase en contacto con nuestra recepción."
      },

      // -- FOOTER & JURÍDICO --
      footer: {
        colA: {
          social: "Síguenos"
        },
        colB: {
          title: "El Hotel",
          accueil: "Inicio",
          chambres: "Habitaciones",
          bar: "Bar & Bistró",
          spa: "Spa & Bienestar",
          seminaire: "Eventos"
        },
        colC: {
          title: "Reservar",
          coordonnees: "Datos de contacto",
          btn: "RESERVAR DIRECTAMENTE"
        },
        legal: {
          mentions: "Aviso Legal",
          cgv: "Condiciones"
        }
      },
      cgv: {
        title: "Condiciones Generales de Venta",
        content: "Redactando..."
      },
      mentionsLegales: {
        title: "Aviso Legal",
        content: "Redactando..."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('userLanguage') || "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;