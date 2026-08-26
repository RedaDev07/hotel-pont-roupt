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

      // -- PAGE ACCUEIL --
      accueil: {
        heroTitle: "L'Art de Vivre en Lozère",
        heroSubtitle: "Hôtel de charme, Spa & Gastronomie au cœur de Mende",
        welcomeSurtitle: "BIENVENUE AU PONT ROUPT",
        welcomeTitle: "Une escale de charme entre confort & terroir",
        welcomeText: "Situé à quelques minutes du centre historique de Mende, l'Hôtel du Pont Roupt vous accueille dans une atmosphère chaleureuse et élégante. Profitez de nos chambres raffinées, de notre spa avec piscine couverte chauffée et de notre bistrot mettant à l'honneur les trésors de l'Occitanie.",
        roomsBtn: "Découvrir nos chambres",
        ecoTag: "TOURISME DURABLE & ENGAGÉ",
        ecoActive: "Engagement actif",
        ecoTitle: "L’Élégance d'un Séjour Éco-Responsable",
        ecoDesc: "Soucieux de préserver notre exceptionnel terroir de Lozère, l'Hôtel du Pont Roupt s'engage quotidiennement dans une démarche respectueuse de l'environnement, certifiée par le prestigioso label international Clef Verte.",
        pillCircuit: "Gastronomie en Circuit Court",
        pillWater: "Gestion Raisonnée de l'Eau",
        pillEnergy: "Énergie Propre & Durable"
      },

      // -- PAGE LA MAISON --
      maison: {
        surtitle: "NOTRE ÉTABLISSEMENT",
        title: "L'Esprit de la Maison",
        subtitle: "Bienvenue à l'Hôtel du Pont Roupt, une demeure authentique où l'élégance contemporaine rencontre la tradition hôtelière de Lozère.",
        histoireTag: "NOTRE HISTOIRE",
        histoireTitle: "Une tradition d'accueil au cœur de Mende",
        histoireDesc: "Depuis des décennies, notre établissement est une adresse de référence en Gévaudan. Nous cultivons chaque jour un accueil chaleureux et personnalisé pour faire de votre séjour une expérience unique et mémorable.",
        badgeAuthentique: "Hôtel de Charme",
        badgeLozere: "Esprit Lozérien",
        valeursTag: "NOS ENGAGEMENTS",
        valeursTitle: "Confort, Sérénité & Respect du Terroir",
        valeursDesc: "Chaque détail de la maison a été pensé pour votre bien-être : des espaces de vie baignés de lumière, une literie haut de gamme et une attention permanente portée au tourisme durable."
      },

      // -- PAGE BAR & PETIT-DÉJEUNER --
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

      // -- PAGE SÉMINAIRES & ÉVÉNEMENTS --
      seminaire: {
        surtitle: "AFFAIRES & ÉVÉNEMENTS",
        title: "Séminaires & Réunions",
        subtitle: "Pour organiser vos évènements, nous mettons à votre disposition nos salles de réunion toutes équipées pouvant accueillir jusqu'à 100 personnes. Au cœur de Mende, profitez d'un cadre serein et baigné de lumière naturelle.",
        pleniereTag: "JOURNÉES D'ÉTUDE & RÉUNIONS",
        pleniereTitle: "La Salle Plénière : pour vos présentations",
        pleniereDesc: "Conçue pour vos assemblées, formations et comités de direction, notre salle principale s'adapte à l'envergure de vos événements. Équipée de matériel de projection haute définition et configurable selon vos besoins.",
        badgeCapacite: "Jusqu'à 100 personnes",
        badgeProjecteur: "Vidéoprojecteur & Écran",
        badgeModulable: "Configuration modulable",
        receptionTag: "RÉCEPTIONS & NETWORKING",
        receptionTitle: "Un salon lumineux pour vos événements corporates",
        receptionDesc: "En complément de vos réunions, profitez de ce second salon aux tables rondes pour vos moments d'échanges, cocktails d'entreprise, showrooms ou réceptions de fin d'année. Un espace élégant, entièrement privatisable.",
        badgeCocktail: "Cocktails & Réceptions",
        badgeShowroom: "Showroom d'entreprise",
        badgePrive: "Espace privatisable",
        contactSurtitle: "VOTRE ÉVÉNEMENT SUR-MESURE",
        contactTitle: "Organisons votre prochaine journée d'étude",
        contactText: "Journée d'étude, séminaire résidentiel ou location de salle sèche : notre équipe est à votre écoute pour concevoir une proposition adaptée à votre entreprise."
      },

      // -- PAGE SPA & DÉTENTE --
      spa: {
        surtitle: "DÉTENTE & RELAXATION",
        title: "Spa & Bien-Être",
        subtitle: "Accordez-vous une parenthèse de sérénité au cœur de Mende. Profitez de notre piscine intérieure chauffée et laissez-vous tenter par un soin relaxant dans notre espace bien-être.",
        piscineTag: "ESPACE AQUATIQUE",
        piscineTitle: "Piscine couverte chauffée & Aquabikes",
        piscineDesc: "Baignée de lumière, notre piscine intérieure chauffée vous accueille tout au long de l'année pour un instant de détente absolue. Des vélos d'aquabiking sont également à votre disposition pour allier sport et relaxation.",
        badgeChauffee: "Piscine chauffée",
        badgeAquabike: "Vélos Aquabike",
        badgeHotel: "Accès clients hôtel",
        soinsTag: "SOINS & MODELAGES",
        soinsTitle: "Un univers feutré dédié à votre sérénité",
        soinsDesc: "Dans une atmosphère intimiste aux lumières apaisantes, notre cabine de soins vous invite au lâcher-prise. Modelages relaxants et soins du corps sur-mesure pour ressourcer votre corps et votre esprit.",
        badgeRdv: "Sur rendez-vous",
        badgeMassages: "Soins & Massages",
        badgeZen: "Ambiance zen",
        contactSurtitle: "RÉSERVEZ VOTRE MOMENT DE DÉTENTE",
        contactTitle: "Envie d'un soin ou d'un modelage ?",
        contactText: "Pour vous garantir la meilleure disponibilité lors de votre séjour, nous vous conseillons de réserver votre séance de soin ou de massage avant votre arrivée."
      },

      // -- PAGE CONTACT & ACCÈS --
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
        mapTitle: "Nous trouver à Mende"
      },

      // -- PAGE CHAMBRES --
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
        wifiFree: "WIFI haut débit",
        wifiFreeHigh: "WIFI haut débit",
        wifiMinibar: "WIFI haut débit",
        wifiHautDebit: "WIFI haut débit", // NOUVEAU
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
        r3_bedLong: "1 Lit 180x200 cm ou 2 Lits 90x200 cm" // MODIFIÉ
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

      // -- PAGE ACCUEIL --
      accueil: {
        heroTitle: "The French Art of Living in Lozère",
        heroSubtitle: "Boutique Hotel, Spa & Gastronomy in the heart of Mende",
        welcomeSurtitle: "WELCOME TO PONT ROUPT",
        welcomeTitle: "A charming stopover between comfort & tradition",
        welcomeText: "Located just minutes from the historic center of Mende, Hotel du Pont Roupt welcomes you to a warm and elegant atmosphere. Enjoy our refined rooms, our spa with an indoor heated pool, and our bistrot showcasing the culinary treasures of Occitanie.",
        roomsBtn: "Discover our rooms",
        ecoTag: "SUSTAINABLE & COMMITTED TOURISM",
        ecoActive: "Active Commitment",
        ecoTitle: "The Elegance of an Eco-Friendly Stay",
        ecoDesc: "Committed to preserving our exceptional Lozère heritage, Hotel du Pont Roupt takes daily action to protect the environment, certified by the prestigious international Green Key label.",
        pillCircuit: "Short-Circuit Gastronomy",
        pillWater: "Responsible Water Management",
        pillEnergy: "Clean & Sustainable Energy"
      },

      // -- PAGE LA MAISON --
      maison: {
        surtitle: "OUR HOTEL",
        title: "The Spirit of the House",
        subtitle: "Welcome to Hotel du Pont Roupt, an authentic residence where contemporary elegance meets Lozère hospitality.",
        histoireTag: "OUR HISTORY",
        histoireTitle: "A tradition of hospitality in the heart of Mende",
        histoireDesc: "For decades, our property has been a benchmark in Gévaudan. Every day, we cultivate a warm and personalized welcome to make your stay a unique and memorable experience.",
        badgeAuthentique: "Charming Boutique Hotel",
        badgeLozere: "Lozère Spirit",
        valeursTag: "OUR COMMITMENTS",
        valeursTitle: "Comfort, Serenity & Local Heritage",
        valeursDesc: "Every detail has been designed for your well-being: light-filled living spaces, high-end bedding, and a permanent commitment to sustainable tourism."
      },

      // -- PAGE BAR & PETIT-DÉJEUNER --
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

      // -- PAGE SÉMINAIRES & ÉVÉNEMENTS --
      seminaire: {
        surtitle: "BUSINESS & EVENTS",
        title: "Seminars & Meetings",
        subtitle: "To organize your events, we offer fully equipped meeting rooms that can accommodate up to 100 guests. In the heart of Mende, enjoy a serene setting bathed in natural daylight.",
        pleniereTag: "STUDY DAYS & MEETINGS",
        pleniereTitle: "Main Hall: For Your Presentations",
        pleniereDesc: "Designed for conventions, training sessions, and executive meetings, our main hall scales to the size of your events. Equipped with high-definition projection systems and configurable layouts.",
        badgeCapacite: "Up to 100 people",
        badgeProjecteur: "Projector & Screen",
        badgeModulable: "Flexible Layouts",
        receptionTag: "RECEPTIONS & NETWORKING",
        receptionTitle: "A bright lounge for your corporate events",
        receptionDesc: "In addition to your meetings, enjoy this second round-table lounge for networking, corporate cocktails, showrooms, or end-of-year receptions. An elegant and fully privatizable space.",
        badgeCocktail: "Cocktails & Receptions",
        badgeShowroom: "Corporate Showroom",
        badgePrive: "Private Hire Available",
        contactSurtitle: "TAILOR-MADE EVENTS",
        contactTitle: "Let's organize your next business event",
        contactText: "Study days, residential seminars, or dry room rentals: our team is at your disposal to design a customized proposal for your company."
      },

      // -- PAGE SPA & DÉTENTE --
      spa: {
        surtitle: "RELAXATION & WELLNESS",
        title: "Spa & Wellness",
        subtitle: "Treat yourself to a serene break in the heart of Mende. Enjoy our heated indoor pool and indulge in a relaxing treatment in our wellness area.",
        piscineTag: "AQUATIC AREA",
        piscineTitle: "Heated Indoor Pool & Aquabikes",
        piscineDesc: "Bathed in natural light, our indoor heated swimming pool welcomes you year-round for absolute relaxation. Aquabikes are also available at the poolside to combine fitness and well-being.",
        badgeChauffee: "Heated Pool",
        badgeAquabike: "Aquabike Bikes",
        badgeHotel: "Hotel Guest Access",
        soinsTag: "TREATMENTS & MASSAGES",
        soinsTitle: "A peaceful sanctuary dedicated to your serenity",
        soinsDesc: "In an intimate atmosphere with soothing lighting, our treatment room invites you to unwind. Relaxing massages and tailor-made body treatments to recharge your body and mind.",
        badgeRdv: "By Appointment Only",
        badgeMassages: "Treatments & Massages",
        badgeZen: "Zen Atmosphere",
        contactSurtitle: "BOOK YOUR RELAXING TIME",
        contactTitle: "Looking for a treatment or massage?",
        contactText: "To ensure availability during your stay, we highly recommend booking your massage or spa treatment before your arrival."
      },

      // -- PAGE CONTACT & ACCÈS --
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
        mapTitle: "Find us in Mende"
      },

      // -- PAGE CHAMBRES --
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

      // -- PAGE DÉTAIL CHAMBRE --
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
        wifiHautDebit: "High-speed WIFI", // NOUVEAU
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
        r3_bedLong: "1 King size bed (180x200) or 2 Single beds (90x200)" // MODIFIÉ
      },

      // -- PAGE BONS CADEAUX --
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

      // -- PAGE ACCUEIL --
      accueil: {
        heroTitle: "El Arte de Vivir en Lozère",
        heroSubtitle: "Hotel con encanto, Spa & Gastronomía en el corazón de Mende",
        welcomeSurtitle: "BIENVENIDOS AL PONT ROUPT",
        welcomeTitle: "Una parada de encanto entre confort y tradición",
        welcomeText: "Situado a pocos minutos del centro histórico de Mende, el Hotel du Pont Roupt le recibe en un ambiente cálido y elegante. Disfrute de nuestras refinadas habitaciones, de nuestro spa con piscina cubierta climatizada y de nuestro bistró que rinde homenaje a la gastronomía de Occitania.",
        roomsBtn: "Descubrir habitaciones",
        ecoTag: "TURISMO SOSTENIBLE Y COMPROMETIDO",
        ecoActive: "Compromiso activo",
        ecoTitle: "La Elegancia de una Estancia Ecológica",
        ecoDesc: "Comprometidos con la preservación del excepcional patrimonio de Lozère, el Hotel du Pont Roupt trabaja diariamente por el medio ambiente, certificado por el prestigioso sello internacional Clef Verte.",
        pillCircuit: "Gastronomía de Proximidad",
        pillWater: "Gestión Responsable del Agua",
        pillEnergy: "Energía Limpia y Sostenible"
      },

      // -- PAGE LA MAISON --
      maison: {
        surtitle: "NUESTRO HOTEL",
        title: "El Espíritu de la Casa",
        subtitle: "Bienvenido al Hotel du Pont Roupt, un hogar auténtico donde la elegancia contemporánea se une a la tradición hospitalaria de Lozère.",
        histoireTag: "NUESTRA HISTORIA",
        histoireTitle: "Una tradición de hospitalidad en el corazón de Mende",
        histoireDesc: "Durante décadas, nuestro establecimiento ha sido un referente en Gévaudan. Cultivamos cada día una acogida cálida y personalizada para hacer de su estancia una experiencia única y memorable.",
        badgeAuthentique: "Hotel con Encanto",
        badgeLozere: "Espíritu Lozere",
        valeursTag: "NUESTROS COMPROMISOS",
        valeursTitle: "Confort, Serenidad y Respeto por el Terruño",
        valeursDesc: "Cada detalle ha sido pensado para su bienestar: espacios luminosos, camas de alta gama y un compromiso constante con el turismo sostenible."
      },

      // -- PAGE BAR & PETIT-DÉJEUNER --
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
        loungeDesc: "Póngase cómodo en nuestros sillones para una reunión de trabajo, un momento de lectura o simplemente para relajarse tras el viaje. Un espacio accesible durante todo el día.",
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

      // -- PAGE SÉMINAIRES & ÉVÉNEMENTS --
      seminaire: {
        surtitle: "NEGOCIOS & EVENTOS",
        title: "Seminarios & Reuniones",
        subtitle: "Para organizar sus eventos, ponemos a su disposición salas de reuniones totalmente equipadas con capacidad para hasta 100 personas. En Mende, disfrute de un entorno sereno con luz natural.",
        pleniereTag: "JORNADAS DE ESTUDIO & REUNIONES",
        pleniereTitle: "Sala Principal: Para sus presentaciones",
        pleniereDesc: "Diseñada para convenciones, formaciones y reuniones de directivos, nuestra sala principal se adapta a la escala de su evento. Equipada con proyección de alta definición y configuraciones a medida.",
        badgeCapacite: "Hasta 100 personas",
        badgeProjecteur: "Proyector & Pantalla",
        badgeModulable: "Configuración flexible",
        receptionTag: "RECEPCIONES & NETWORKING",
        receptionTitle: "Un salón luminoso para sus eventos corporativos",
        receptionDesc: "Como complemento a sus reuniones, disfrute de este segundo salón con mesas redondas para networking, cócteles de empresa, showrooms o recepciones de fin de año. Un espacio elegante y privatizable.",
        badgeCocktail: "Cócteles & Recepciones",
        badgeShowroom: "Showroom Corporativo",
        badgePrive: "Espacio Privatizable",
        contactSurtitle: "EVENTOS A SU MEDIDA",
        contactTitle: "Organicemos su próximo evento empresarial",
        contactText: "Jornadas de estudio, seminarios residenciales o alquiler de sala: nuestro equipo está a su disposición para diseñar una propuesta adaptada a su empresa."
      },

      // -- PAGE SPA & DÉTENTE --
      spa: {
        surtitle: "RELAX & BIENESTAR",
        title: "Spa & Bienestar",
        subtitle: "Regálese una pausa de serenidad en el corazón de Mende. Disfrute de nuestra piscina interior climatizada y relájese con un tratamiento en nuestra zona de bienestar.",
        piscineTag: "ZONA ACUÁTICA",
        piscineTitle: "Piscina cubierta climatizada & Aquabikes",
        piscineDesc: "Bañada por luz natural, nuestra piscina interior climatizada le acoge durante todo el año para un descanso absoluto. También disponemos de bicicletas de aquabiking para combinar deporte y relax.",
        badgeChauffee: "Piscine Climatizada",
        badgeAquabike: "Bicicletas Aquabike",
        badgeHotel: "Acceso clientes hotel",
        soinsTag: "TRATAMIENTOS & MASAJES",
        soinsTitle: "Un refugio tranquilo dedicado a su serenidad",
        soinsDesc: "En un ambiente íntimo con iluminación relajante, nuestra cabina de tratamientos le invita a desconectar. Masajes relajantes y tratamientos corporales a medida para renovar cuerpo y mente.",
        badgeRdv: "Cita Previa",
        badgeMassages: "Tratamientos & Masajes",
        badgeZen: "Ambiente Zen",
        contactSurtitle: "RESERVE SU MOMENTO DE RELAX",
        contactTitle: "¿Desea reservar un tratamiento o masaje?",
        contactText: "Para garantizar la disponibilidad durante su estancia, le recomendamos reservar su sesión de masaje o tratamiento de spa antes de su llegada."
      },

      // -- PAGE CONTACT & ACCÈS --
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
        resetBtn: "Enviar otro mensaje",
        mapSurtitle: "UBICACIÓN",
        mapTitle: "Encuéntrenos en Mende"
      },

      // -- PAGE CHAMBRES --
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

      // -- PAGE DÉTAIL CHAMBRE --
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
        wifiHautDebit: "WIFI de alta velocidad", // NOUVEAU
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
        r3_bedLong: "1 Cama King (180x200) o 2 Camas individuales (90x200)" // MODIFIÉ
      },

      // -- PAGE BONS CADEAUX --
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
      }
    }
  }
};

// ==========================================
// 4. CONFIGURATION & INITIALISATION i18next
// ==========================================
i18n
  .use(initReactI18next)
  .init({
    resources,
    // Lit la langue choisie et sauvegardée dans le navigateur, ou applique le français par défaut
    lng: localStorage.getItem('userLanguage') || "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false // React assure déjà une protection native contre les failles XSS
    }
  });

export default i18n;