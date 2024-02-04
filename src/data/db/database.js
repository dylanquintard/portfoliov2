import Mock from "../mock";

const database = {
  information: {
    name: 'Dylan Quintard',
    aboutContent: "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 24,
    phone: '',
    nationality: 'American',
    language: 'Français, Anglais',
    email: '',
    address: '121 King Street, Melbourne, Australia',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: '',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/brand-image.png',
    aboutImage: '/images/about-image.jpg',
    aboutImageLg: '/images/about-image-lg.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Développement Frontend",
      icon: 'code',
      details: "Conception et développement d'interfaces utilisateur interactives avec HTML, CSS et JavaScript. Utilisation de frameworks frontend tels que React, Angular, ou Vue.js pour des applications dynamiques."
    },
    {
      title: "Développement Backend",
      icon: 'code',
      details: "Création de serveurs robustes avec des technologies comme Node.js (Express). Mise en place de l'architecture serveur, gestion des routes et des requêtes."
    },
    {
      title: "Bases de données",
      icon: 'code',
      details: "Conception de schémas de bases de données. Utilisation de systèmes de gestion de bases de données tels que MongoDB & MySQL."
    },
    {
      title: "Optimisation des performances",
      icon: 'code',
      details: "Amélioration de la vitesse de chargement et de la réactivité des applications. Optimisation des requêtes et du code pour une efficacité maximale."
    },
    {
      title: "Intégration API",
      icon: 'code',
      details: "Intégration d'API tierces pour enrichir les fonctionnalités de l'application. Développement d'API personnalisées pour permettre l'interaction avec d'autres services."
    },
    {
      title: "Sécurité & Maintenance",
      icon: 'code',
      details: "Mise en place de protocoles de sécurité, tels que HTTPS. Gestion des autorisations d'accès et des mesures contre les attaques potentielles."
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 90
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "NodeJS",
      value: 70
    },
    {
      title: "Mongodb",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: '/portfolio/projet-1',
      github: 'https://github.com'
    },
    {
      id: 1,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com',
      github: 'https://github.com'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2024",
        position: "Formation développeur web et web mobile",
        company: "Abc Company",
        details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2023-2024",
        graduation: "Diplôme développeur web et web mobile",
        university: "OpenClassRoom",
        details: "Formation intensive chez OpenClassRoom en développement web et mobile, spécialisée dans le MERN stack (MongoDB, Express.js, React, Node.js). Acquisition de compétences pour concevoir des interfaces réactives avec React, développer des serveurs robustes avec Node.js, et gérer des bases de données MongoDB."
      }
    ]
  },
  contactInfo: {
    phoneNumbers: ['+33 7 49 34 70 12'],
    emailAddress: ['contact@quintarddylan.fr'],
    address: "Castres, 81100"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/projet1").reply(config => {
  const response = database.projet1;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});