import {
  AgriPreciseLogo,
  AgroLogo,
  AquaLogo,
  CoRdLogo,
  ConseilLogo,
  DurabiliteLogo,
  SmartCitiesLogo,
} from "./icons";
import { SelectedProps } from "./types";

/*
 ? @var: this is the nav bar menu
 */
export const sidebarMenu = [
  {
    name: "Solutions",
    path: "/solutions",
  },
  {
    name: "Devices",
    path: "/devices",
  },
  {
    name: "Sectors",
    path: "/sectors",
  },
  {
    name: "More",
    path: "/more",
  },
];

export const secteurs: SelectedProps[] = [
  {
    id: 1,
    img: "/events/agpre.jpg",
    name: "Agriculture de précision",
    desc: "L'agriculture de précision est une approche qui permet d'optimiser la production agricole en utilisant les technologies de l'information et de la communication pour prendre des décisions plus éclairées.",
    subItems: [
      {
        icon: <AgriPreciseLogo />,
        name: "Vision et traitement d’image",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Fertigation connecté",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Gestion de l’eau et du sol",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "IOT",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Robotique",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Farm management",
      },
      {
        icon: <AgriPreciseLogo />,
        name: "Climat monitoring",
      },
    ],
  },
  {
    id: 2,
    img: "/sectors/aquaculture.jpg",
    name: "Aquaculture 4.0",
    desc: "Nous intégrons des technologies avancées et des systèmes numériques dans l'industrie aquacole, dans le but d'améliorer l'efficacité, la durabilité et la rentabilité de la production. Cela comprend l'utilisation de capteurs, d'application",
    subItems: [
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AquaLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: 3,
    img: "/sectors/agroalimentaire.jpg",
    name: "Agroalimentaire 4.0",
    desc: "Usines intelligentes : les capteurs IoT et les appareils connectés peuvent aider à optimiser les processus de production, à améliorer l'efficacité et à réduire les temps d'arrêt.Maintenance prédictive...",
    subItems: [
      {
        icon: <AgroLogo />,
        name: "Frigo connecté",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <AgroLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: 4,
    img: "/sectors/smartCities.jpg",
    name: "Smart Cities",
    desc: "Les grandes villes marocaines ont un potentiel de développement considérable, mais leur croissance rapide crée des défis tels que la congestion urbaine et la pollution. Pour surmonter ces défis de manière...",
    subItems: [
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion d'énergie",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion d'irrigation",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de l'éclairage",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de transport",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Gestion de parking",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Traffic management",
      },
      {
        icon: <SmartCitiesLogo />,
        name: "Environnement intelligent",
      },
    ],
  },
  {
    id: 5,
    img: "/sectors/durabilite.jpg",
    name: "Durabilite",
    desc: "En intégrant la durabilité dans nos activités, nous pouvons contribuer à créer un monde plus juste, équitable et durable pour les générations futures. Cela peut se faire à travers des actions telles que la réduction de l'utilisation ...",
    subItems: [
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <DurabiliteLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: 6,
    img: "/sectors/co-rd.jpg",
    name: "CO-R&D",
    desc: "Notre engagement envers la R&D ne relève pas d'un simple caprice, mais plutôt de notre conviction que c'est la pierre angulaire de la survie de toute entreprise, quelle que soit sa taille ou son modèle économique.",
    subItems: [
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <CoRdLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
  {
    id: 7,
    img: "/sectors/conseil.jpg",
    name: "Conseil",
    desc: "Agri 4.0 ne limite pas ses prestations à la vente des produits et services. Nous assurons également un accompagnement de qualité avec une équipe jeune et pluridisciplinaire ayant comme point...",
    subItems: [
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
      {
        icon: <ConseilLogo />,
        name: "xxxxxxxxxxxx",
      },
    ],
  },
];

export const solutions = [
  {
    name: "Agriculture de précision",
    icon: <AgriPreciseLogo />,
    description:
      "L'agriculture de précision est une approche qui permet d'optimiser...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "Aquaculture 4.0",
    icon: <AquaLogo />,
    description:
      "Nous intégrons des technologies avancées et des systèmes numériques...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "Agroalimentaire 4.0",
    icon: <AgroLogo />,
    description:
      "Usines intelligentes : les capteurs IoT et les appareils connectés peuvent...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "Smart cities",
    icon: <SmartCitiesLogo />,
    description:
      "Les grandes villes marocaines ont un potentiel de développement...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "Durabilite",
    icon: <DurabiliteLogo />,
    description:
      "En intégrant la durabilité dans nos activités, nous pouvons...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "CO-R&D",
    icon: <CoRdLogo />,
    description:
      "Notre engagement envers la R&D ne relève pas d'un simple caprice...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
  {
    name: "Conseil",
    icon: <ConseilLogo />,
    description:
      "Agri 4.0 ne limite pas ses prestations à la vente des produits et services...",
    projects: [
      {
        name: "Projet 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "Projet 3",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
    apps: [
      {
        name: "App 1",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
      {
        name: "App 2",
        description:
          "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      },
    ],
  },
];

export const solutionsArr = [
  {
    id: 1,
    name: "Vision et traitement d’image",
    desc: "La vision et le traitement d'image sont des outils essentiels en agriculture de précision pour aider les agriculteurs...",
    imgUrl: "/solutions/sig.png",
    sectorId: 1,
  },
  {
    id: 2,
    name: "Gestion de l’eau et du sol",
    desc: "La gestion de l'eau et du sol en agriculture de précision consiste à utiliser des technologies de pointe ...",
    imgUrl: "/solutions/waterm.jpg",
    sectorId: 1,
  },
  {
    id: 3,
    name: "Climat Monitoring",
    desc: "La surveillance du climat pour les cultures consiste à observer et à mesurer l'impact du temps et du climat ...",
    imgUrl: "/solutions/wm.jpg",
    sectorId: 1,
  },
  {
    id: 4,
    name: "Farm management",
    desc: "Nous mettons à la disposition de nos clients des applications leur permettant de gérer leurs cultures...",
    imgUrl: "/solutions/farmm.jpeg",
  },
  {
    id: 5,
    name: "Robotique",
    desc: "L'utilisation des robots dans l'agriculture de précision est de plus en plus courante et a de nombreux avantages...",
    imgUrl: "/solutions/robotic.jpg",
  },
  {
    id: 6,
    name: "Fertigation connectée",
    desc: "Nous utilisons des capteurs pour mesurer les niveaux d'humidité du sol, de nutriments et de pH...",
    imgUrl: "/solutions/robotic.jpg",
    sectorId: 1,
  },
];
