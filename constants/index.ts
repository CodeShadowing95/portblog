import {
    animevault,
    appleclone,
    bikemapper,
    brainwave,
    carhub,
    curriqulumai,
    exalta,
    kamercare,
    pokedexhub,
    rehobothnettoyage,
    servermanagement,
    youwatch,
} from "../assets/works";

const projectCategories = [
  {
    id: 1,
    title: "Tous"
  },
  {
    id: 2,
    title: "UI/UX"
  },
  {
    id: 3,
    title: "AI"
  },
  {
    id: 4,
    title: "React"
  },
  {
    id: 5,
    title: "Next.js"
  },
  {
    id: 6,
    title: "Angular"
  },
  {
    id: 7,
    title: "Fullstack App"
  },
];

const projects = [
  {
    id: "rehobothnettoyage",
    name: "REHOBOTH Nettoyage",
    description:
      "Site vitrine pour une entreprise de nettoyage professionnel basée à Lyon. Besoin de nettoyer vos bureaux, nettoyage de fin de chantier,... Contactez les et obtenez un devis gratuitement. Coûts adaptés à vos budgets et qualité de service garantis.",
    reason: "Projet client",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: rehobothnettoyage,
    source_code_link: "#",
    app_link: "https://rehobothnettoyage.com/",
    status: "Terminé",
    details: {
      fullDescription:
        "REHOBOTH Nettoyage est un site vitrine entreprise proposant des services de nettoyage pour particuliers et professionnels, basée à Lyon. Si vous avez besoin de nettoyer votre domicile, vos bureaux, nettoyage de fin de chantier,... Contactez les et obtenez un devis gratuitement. Coûts adaptés à vos budgets et qualité de service garantis.",
      keyObjectives: [
        "Présenter clairement les services et la valeur ajoutée",
        "Permettre une demande de contact/devis rapide",
        "Renforcer la crédibilité avec un design professionnel",
      ],
      functionalities: [
        "Pages services (ménage, vitres, bureaux, etc.)",
        "Formulaire de contact et demande de devis",
        "Mise en avant des engagements qualité et écologie",
        "Responsive design (mobile, tablette, desktop)",
      ],
    },
  },
  {
    id: "kamercare",
    name: "KamerCare",
    description: "Plateforme médicale moderne conçue pour le système de santé camerounais, facilitant la connexion entre patients et professionnels de santé.",
    reason: "Projet personnel",
    tags: [
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "nextjs",
        color: "text-white",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient"
      }
    ],
    image: kamercare,
    source_code_link: "https://github.com/CodeShadowing95/KamerCare",
    app_link: "https://github.com/CodeShadowing95/KamerCare",
    status: "En cours",
    details: {
      fullDescription: "KamerCare est une plateforme de santé pensée pour le contexte camerounais. Elle centralise la recherche de médecins et établissements, la prise de rendez-vous, la gestion du dossier patient et la communication sécurisée entre patients et praticiens. L'application met l'accent sur l'accessibilité, la confidentialité et la fiabilité des services, avec une architecture modulaire et performante.",
      keyObjectives: [
        "Faciliter la mise en relation patients–professionnels de santé",
        "Standardiser et sécuriser la gestion des rendez-vous",
        "Garantir la confidentialité des données médicales",
        "Offrir une expérience fluide sur web et mobile",
      ],
      functionalities: [
        "Recherche avancée de médecins par spécialité et ville",
        "Prise et gestion de rendez-vous avec rappels",
        "Messagerie chiffrée patient–praticien",
        "Dossier patient avec historiques et documents",
        "Tableaux de bord pour praticiens et patients",
      ],
    }
  },
  {
    id: "bikemapper",
    name: "BikeMapper",
    description:"Application de géolocalisation de stations de vélos en libre-service en France et dans le monde. Vous pouvez découvrir la liste des services, les bornes de station, les détails de la station par ville.",
    reason: "Test technique",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: bikemapper,
    source_code_link: "https://github.com/CodeShadowing95/velolibreservice",
    app_link: "https://bikemapper.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "BikeMapper est une application de cartographie des services de vélos en libre-service. Elle agrège les données des réseaux disponibles (France et international), affiche les stations sur une carte interactive, expose les disponibilités en temps réel et permet de consulter des détails par ville et par opérateur. L'interface est optimisée pour la découverte et la planification rapide.",
      keyObjectives: [
        "Centraliser les réseaux de vélos en libre-service",
        "Offrir une cartographie claire et réactive",
        "Informer sur disponibilité et caractéristiques des stations",
        "Permettre la recherche par ville et opérateur",
      ],
      functionalities: [
        "Carte interactive des stations",
        "Filtrage par ville, réseau et type de service",
        "Fiches détaillées de station (bornes, horaires, disponibilité)",
        "Favoris et navigation rapide",
      ],
    }
  },
  {
    id: "pokedexhub",
    name: "Pokedex Hub",
    description:
      "Pour les amateurs de Pokemon, plongez dans une présentation époustouflante de chaque Pokémon, découvrez leurs caractéristiques uniques.",
    reason: "Test technique",
    tags: [
      {
        name: "angular",
        color: "yellow-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
    ],
    image: pokedexhub,
    source_code_link: "https://github.com/CodeShadowing95/pokepokedex.git",
    app_link: "https://pokecraftershub.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "Pokedex Hub est une expérience immersive pour les fans de Pokémon. L'application présente chaque Pokémon avec des visuels soignés, des statistiques détaillées, des types et faiblesses, ainsi que des informations complémentaires. La navigation est pensée pour une exploration rapide et agréable.",
      keyObjectives: [
        "Proposer une encyclopédie Pokémon ergonomique",
        "Rendre l’exploration visuelle et informative",
        "Offrir filtres et recherches performants",
      ],
      functionalities: [
        "Catalogue complet des Pokémon",
        "Recherche par nom, type et génération",
        "Fiches détaillées (stats, types, faiblesses)",
        "Favoris et navigation par catégories",
      ],
    }
  },
  {
    id: "curriqulumai",
    name: "Curriqulum.ai",
    description:
      "Application web sophistiquée qui utilise l'IA pour garantir une compatibilité 100% ATS de tout CV. Notre solution maximise ainsi vos chances d'obtenir un entretien.",
    reason: "Projet personnel",
    tags: [
      {
        name: "react-router v7",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "ai",
        color: "blue-text-gradient",
      },
    ],
    image: curriqulumai,
    source_code_link: "https://github.com/CodeShadowing95/ai-resume-analyzer.git",
    app_link: "https://curriqulum-ai.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "Curriqulum.ai est une application d’analyse de CV assistée par IA, conçue pour garantir une compatibilité 100% ATS. Elle scanne la structure et le contenu, identifie les points d’amélioration et propose des recommandations pour augmenter vos chances d’obtenir un entretien.",
      keyObjectives: [
        "Assurer la compatibilité ATS des CV",
        "Fournir des recommandations claires et actionnables",
        "Automatiser l’analyse et le scoring",
      ],
      functionalities: [
        "Analyse IA de la structure et des mots-clés",
        "Score ATS et rapport d’amélioration",
        "Suggestions personnalisées et export",
        "Historique des analyses",
      ],
    }
  },
  {
    id: "appleclone",
    name: "Apple 2.0",
    description:
      "Site vitrine clone de Apple. Navigation fluide, animations GSAP, festin de visuels 3D des dernières sorties de iPhone. Simplement beau.",
    reason: "Projet personnel",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: appleclone,
    source_code_link: "https://github.com/CodeShadowing95/apple_website_clone",
    app_link: "https://mynewappleclone.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "Apple 2.0 est un site vitrine inspiré des pages marketing d’Apple, avec une navigation fluide, des animations GSAP et des visuels 3D mettant en avant les derniers iPhone. Le projet se concentre sur la performance et l’esthétique.",
      keyObjectives: [
        "Reproduire une expérience marketing premium",
        "Mettre en avant visuels 3D et animations",
        "Optimiser performance et accessibilité",
      ],
      functionalities: [
        "Sections vitrines animées",
        "Effets parallax et transitions GSAP",
        "Galeries produits interactives",
        "CTA et navigation bento",
      ],
    }
  },
  {
    id: "brainwave",
    name: "Brainwave",
    description:
      "Landing Page avec des effets parallax élégants et des mises en page bento pour présenter la puissance de nos services alimentés par l'IA. (In process...)",
    reason: "Projet personnel",
    tags: [
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/CodeShadowing95/ai_is_coming",
    app_link: "https://brainwave-tech.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "Brainwave est une landing page moderne présentant des services alimentés par l’IA, avec mises en page bento et effets parallax. L’accent est mis sur la narration visuelle et la conversion.",
      keyObjectives: [
        "Présenter clairement l’offre IA",
        "Maximiser l’engagement visuel",
        "Favoriser la conversion via CTA",
      ],
      functionalities: [
        "Sections bento modulaires",
        "Parallax et micro-interactions",
        "CTA dynamiques et suivi",
        "FAQ et témoignages",
      ],
    }
  },
  {
    id: "fitguide",
    name: "Fit Guide",
    description:
      "Explorez une collection complète d'exercices de gym classés par parties du corps et par équipement, garantissant une approche ciblée d'un programme d'entraînement.",
    reason: "Projet personnel",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: exalta,
    source_code_link: "https://github.com/CodeShadowing95/gym_tutorial",
    app_link: "https://exalta.netlify.app/",
    status: "Terminé",
    details: {
      fullDescription: "Fit Guide aide les utilisateurs à construire un programme d’entraînement ciblé grâce à un catalogue d’exercices classés par groupe musculaire et par équipement. L’interface facilite la recherche et la création de routines.",
      keyObjectives: [
        "Permettre une recherche d’exercices efficace",
        "Structurer des routines personnalisées",
        "Offrir des fiches claires et illustrées",
      ],
      functionalities: [
        "Catalogue d’exercices par muscle/équipement",
        "Recherche et filtres avancés",
        "Fiches détaillées (instructions, vidéos)",
        "Création et sauvegarde de routines",
      ],
    }
  },
  {
    id: "youwatch",
    name: "YouWatch",
    description:
      "Pseudo-clone de la plateforme YouTube permettant de voir n'importe quelle vidéo, rechercher des vidéos précises, consulter des vidéos par catégorie et par chaîne, etc...",
    reason: "Projet personnel",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "materialui",
        color: "orange-text-gradient",
      },
    ],
    image: youwatch,
    source_code_link: "https://github.com/CodeShadowing95/yutubewatch",
    app_link: "https://yutubewatch.netlify.app/",
    status: "En cours",
    details: {
      fullDescription: "YouWatch est un pseudo-clone de YouTube permettant d’explorer, rechercher et visionner des vidéos par catégories et par chaînes. Le projet met en œuvre une intégration d’API, une interface réactive et une navigation intuitive.",
      keyObjectives: [
        "Permettre la recherche et la découverte de contenus",
        "Proposer une expérience de lecture fluide",
        "Structurer les contenus par chaîne et catégories",
      ],
      functionalities: [
        "Recherche de vidéos et suggestions",
        "Lecture embarquée et pages de chaîne",
        "Classement par catégories",
        "Historique et favoris (selon implémentation)",
      ],
    }
  },
  {
    id: "animevault",
    name: "Anime Vault",
    description:
      "Application web de diffusion en streaming d'Animés japonais en HD, explorer tout type d'Animés par catégorie, par nom, par nom d'auteur, par titre, etc...",
    reason: "Projet personnel",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: animevault,
    source_code_link: "https://github.com/CodeShadowing95/anime237",
    app_link: "https://anime237.vercel.app/",
    status: "Terminé",
    details: {
      fullDescription: "Anime Vault est une plateforme de streaming d’animés japonais en HD. Elle permet d’explorer les œuvres par catégories, titres, auteurs et d’accéder à des fiches détaillées. L’expérience privilégie la performance et la qualité vidéo.",
      keyObjectives: [
        "Proposer un catalogue riche d’animés",
        "Offrir un streaming fluide en HD",
        "Faciliter l’exploration par filtres et recherches",
      ],
      functionalities: [
        "Catalogue par genres et auteurs",
        "Recherche et filtres multiples",
        "Lecteur vidéo intégré",
        "Fiches œuvres (synopsis, épisodes)",
      ],
    }
  },
  {
    id: "carhub",
    name: "Car Hub",
    description:
      "Application de location de voitures de manière rapide. Naviguez par modèle, nom, type de carburant ou année de fabrication. La voiture idéale est à portée de main.",
    reason: "Projet personnel",
    tags: [
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/CodeShadowing95/carhub",
    app_link: "https://rentalcar237.vercel.app/",
    status: "En cours",
    details: {
      fullDescription: "Car Hub simplifie la location de voitures. Les utilisateurs filtrent par modèle, carburant, année et caractéristiques pour trouver le véhicule idéal. L’application met en avant la rapidité et la clarté des informations.",
      keyObjectives: [
        "Accélérer la recherche de véhicules",
        "Offrir des filtres pertinents et rapides",
        "Afficher des fiches véhicules complètes",
      ],
      functionalities: [
        "Filtrage par modèle, carburant et année",
        "Fiches détaillées (prix, specs, photos)",
        "Favoris et comparaisons (selon implémentation)",
        "Processus de contact/réservation",
      ],
    }
  },
  {
    id: "servermanagement",
    name: "Server Management",
    description:
      "Ajoutez et supprimez des serveurs, activez et désactivez les serveurs inutilisés, gérez la connectivité avec vos différents serveurs,...",
    reason: "Projet personnel",
    tags: [
      {
        name: "angular",
        color: "orange-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "blue-text-gradient",
      },
    ],
    image: servermanagement,
    source_code_link: "https://github.com/CodeShadowing95/ServerManagement",
    app_link: "https://github.com/CodeShadowing95/ServerManagement",
    status: "Terminé",
    details: {
      fullDescription: "Server Management est une application de supervision et de gestion de serveurs. Elle permet d’ajouter/supprimer des serveurs, d’activer/désactiver ceux inutilisés et de contrôler l’état de connectivité. Architecture fullstack visant robustesse et lisibilité.",
      keyObjectives: [
        "Centraliser l’administration des serveurs",
        "Surveiller l’état et la connectivité",
        "Simplifier les opérations courantes",
      ],
      functionalities: [
        "CRUD des serveurs",
        "Activation/désactivation et états",
        "Tableaux de bord et filtres",
        "Historique des opérations",
      ],
    }
  },
];

export { projects, projectCategories }