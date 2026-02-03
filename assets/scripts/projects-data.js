// Project Data Structure
const projects = [
  {
    id: 'datapulse',
    title: 'DataPulse',
    category: 'web-app',
    shortDescription: 'A comprehensive digital marketing tool that helps agencies and businesses visualize marketing campaign performance in real-time. Features interactive dashboards with data from multiple APIs that can be shared with clients.',
    thumbnail: '/assets/images/projects/datapulse/datapulse-promo.png',
    subtitle: 'Real-time Marketing Analytics Platform',
    techStack: ['Ruby on Rails', 'React', 'AWS', 'PostgreSQL', 'Sidekiq', 'Redis', 'Chart.js', 'GraphQL', 'REST APIs'],
    mediaGallery: [
      { src: '/assets/images/projects/datapulse/datapulse-promo.png', thumbnail: '/assets/images/projects/datapulse/datapulse-promo.png', caption: '', isMainThumbnail: true },
      { src: '/assets/images/projects/datapulse/datapulse-dashboard.mp4', thumbnail: '/assets/images/projects/datapulse/datapulse-dashboard-thumbnail.jpg', caption: 'Main dashboard showing real-time campaign analytics', isVideo: true },
      { src: '/assets/images/projects/datapulse/datapulse-config.mp4', thumbnail: '/assets/images/projects/datapulse/datapulse-config-thumbnail.jpg', caption: 'Client configuration and setup interface', isVideo: true },
      { src: '/assets/images/projects/datapulse/datapulse-alert-system.mp4', thumbnail: '/assets/images/projects/datapulse/datapulse-alerts-system-thumbnail.jpg', caption: 'Automated alert and notification system', isVideo: true }
    ],
    links: {
      primary: { label: 'View Homepage', url: 'https://www.digitalposition.com/discover-datapulse' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'DataPulse is a comprehensive digital marketing tool that helps agencies and businesses visualize the performance of their marketing campaigns in real-time. The platform pulls data from various APIs on-demand and displays interactive dashboards that can be shared with clients. Built to handle enterprise-level data processing with real-time updates and customizable reporting.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Real-time data visualization from multiple marketing platforms',
          'Customizable dashboards with drag-and-drop widgets',
          'Client-shareable reports with white-label branding',
          'API integrations with Google Analytics, Facebook Ads, and more',
          'Automated reporting and email notifications',
          'Multi-user collaboration and role management'
        ]
      }
    ]
  },
  {
    id: 'kaiwa',
    title: 'Kaiwa',
    category: 'web-app',
    shortDescription: 'A lightweight and highly customizable commenting system for websites. Users can create comment boxes and install them with a single JavaScript tag. Features real-time updates and moderation tools.',
    thumbnail: '/assets/images/projects/kaiwa/kaiwa-promo.png',
    subtitle: 'Universal Comment System',
    techStack: ['Ruby on Rails', 'JavaScript', 'AWS', 'PostgreSQL'],
    mediaGallery: [
      { src: '/assets/images/projects/kaiwa/kaiwa-promo.png', thumbnail: '/assets/images/projects/kaiwa/kaiwa-promo.png', caption: '' },
      { src: '/assets/images/projects/kaiwa/kaiwa-dashboard.jpg', thumbnail: '/assets/images/projects/kaiwa/kaiwa-dashboard-thumbnail.jpg', caption: 'Kaiwa dashboard' },
      { src: '/assets/images/projects/kaiwa/kaiwa-login.jpg', thumbnail: '/assets/images/projects/kaiwa/kaiwa-login-thumbnail.jpg', caption: 'Login screen' },
      { src: '/assets/images/projects/kaiwa/kaiwa-config.jpg', thumbnail: '/assets/images/projects/kaiwa/kaiwa-config-thumbnail.jpg', caption: 'Configuration interface' },
      { src: '/assets/images/projects/kaiwa/kaiwa-install.jpg', thumbnail: '/assets/images/projects/kaiwa/kaiwa-install-thumbnail.jpg', caption: 'Installation instructions' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://kaiwa-app.com/' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Kaiwa is a lightweight and highly customizable solution for adding comments to any website. Users can create comment boxes in Kaiwa, then install them using a simple JavaScript tag. The system features real-time updates, moderation tools, and seamless integration with any website or platform.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Easy integration with single line of code',
          'Basic moderation',
          'Customizable styling to match your brand',
        ]
      }
    ]
  },
  {
    id: 'blog-autopilot',
    title: 'Blog Autopilot',
    category: 'web-app',
    shortDescription: 'An AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. Generates SEO-optimized articles and supports auto-publishing to WordPress, Google Docs, and custom SFTP servers.',
    thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-promo.png',
    subtitle: 'AI-Powered Content Automation',
    techStack: ['Ruby on Rails', 'jQuery', 'OpenAI API', 'PostgreSQL', 'ActiveJob'],
    mediaGallery: [
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot-promo.png', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-promo.png', caption: '' },
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot-login.jpg', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-login-thumbnail.jpg', caption: 'Login screen' },
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot-campaign.jpg', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-campaign-thumbnail.jpg', caption: 'Campaign creation interface' },
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot-edit-campaign.jpg', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-edit-campaign-thumbnail.jpg', caption: 'Editing a campaign' },
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot-new-campaign.jpg', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot-new-campaign-thumbnail.jpg', caption: 'Creating a new campaign' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://blog-autopilot.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Blog Autopilot is an AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. The platform generates SEO-optimized articles using AI and supports auto-publishing to various platforms including WordPress, Google Docs, and custom SFTP servers.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'AI-generated SEO-optimized articles',
          'Auto-publishing to WordPress, Google Docs, and Custom SFTP servers',
          'Content calendar and scheduling system',
          'Competitor research and optimization suggestions',
          'Multi-site management dashboard',
        ]
      }
    ]
  },
  {
    id: 'brickhouse-nutrition',
    title: 'Brickhouse Nutrition',
    category: 'website',
    shortDescription: 'E-commerce website for a premium supplements brand. Involved migrating product pages to custom Shopify templates, improving user experience and conversion rates across the site.',
    thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home-thumbnail.jpg',
    subtitle: 'E-commerce Nutrition Website',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home-thumbnail.jpg', caption: 'Updated homepage with a modern design.' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp-thumbnail.jpg', caption: 'Updated all PDPs sitewide to improve CRO and UX.' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp-thumbnail.jpg', caption: 'Developed unique experiences for each target audience.' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.brickhousenutrition.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'E-commerce website for Brickhouse Nutrition, a premium supplements brand. This project involved migrating all existing product pages to custom Shopify templates, which allowed greater customization and improved user experience. The site features detailed supplement information and educational content about health and nutrition.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Shopify 2.0 theme development',
          'Improved conversion rates on product pages',
          'Developed educational content to feature on PDPs',
          'Optimized performance and site speed',
          'Mobile-responsive design'
        ]
      }
    ]
  },
  {
    id: 'honey-hole',
    title: 'Honey Hole Collectibles',
    category: 'website',
    shortDescription: 'Dual e-commerce platform for a sports card business with separate storefronts for retail and card breaking services. Migrated from WooCommerce to Shopify with unified inventory management through Thrive.',
    thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-homepage-thumbnail.webp',
    subtitle: 'Sports Card E-commerce Platform',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Thrive', 'Shopify Flow', 'WooCommerce', 'WordPress'],
    mediaGallery: [
      { src: '/assets/images/projects/honey-hole/honeyhole-nav.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-nav-thumbnail.webp', caption: 'Unified navigation system' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-homepage.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-homepage-thumbnail.webp', caption: 'Collect store homepage' },
      { src: '/assets/images/projects/honey-hole/honeyhole-breaks-homepage.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-breaks-homepage-thumbnail.webp', caption: 'Breaks store homepage' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-collection.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-collection-thumbnail.webp', caption: 'Product collection page' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-pdp.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-pdp-thumbnail.webp', caption: 'Product detail page' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-about-us.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-about-us-thumbnail.webp', caption: 'About page' }
    ],
    links: {
      primary: { label: 'Visit Collect Store', url: 'https://www.honeyholecollect.com' },
      external: [
        { label: 'Visit Breaks Store', url: 'https://www.honeyholebreaks.com' }
      ]
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Dual e-commerce platform for Honey Hole, featuring both a retail collectibles store and a card breaking service. Built as two separate Shopify stores with unified branding and shared inventory management through Thrive. The project involved migrating data from WooCommerce to Shopify and creating an attractive, user-friendly storefront.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Dual Shopify store architecture',
          'Sports card retail and breaking services',
          'Unified inventory management with Thrive',
          'Optimized navigation and user experience',
          'Mobile-friendly design',
        ]
      }
    ]
  },
  {
    id: 'maydi-strength',
    title: 'Maydi Strength',
    category: 'website',
    shortDescription: 'Website for a personal trainer and fitness coach. The site features a product shop for fitness merchandise as well as a booking system for personal training services.',
    thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-homepage-thumbnail.webp',
    subtitle: 'Fitness & Training Platform',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/maydi-strength/maydi-strength-homepage.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-homepage-thumbnail.webp', caption: 'Homepage' },
      { src: '/assets/images/projects/maydi-strength/maydi-strength-shop.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-shop-thumbnail.webp', caption: 'Product shop' },
      { src: '/assets/images/projects/maydi-strength/maydi-strength-lead-form.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-lead-form-thumbnail.webp', caption: 'Consultation booking form' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.maydistrength.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Website for a personal trainer and fitness coach. The site features a product shop for fitness merchandise and a consultation booking system for personal training services.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Shopify 2.0 theme development',
          'Custom landing pages',
          'Lead generation and capture',
          'Mobile-friendly design',
        ]
      }
    ]
  },
  {
    id: 'mixhers',
    title: 'Mixhers',
    category: 'website',
    shortDescription: 'E-commerce website for health supplements targeted towards women. This project involved migrating from a vintage Shopify theme to a modern Shopify 2.0 theme, improving site performance and user experience.',
    thumbnail: '/assets/images/projects/mixhers/mixhers-homepage-thumbnail.webp',
    subtitle: 'Women\'s Health E-commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/mixhers/mixhers-homepage.jpg', thumbnail: '/assets/images/projects/mixhers/mixhers-homepage-thumbnail.webp', caption: 'Homepage' },
      { src: '/assets/images/projects/mixhers/mixhers-backed-by-science.jpg', thumbnail: '/assets/images/projects/mixhers/mixhers-backed-by-science-thumbnail.webp', caption: 'Science and education page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.mixhers.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'E-commerce website for Mixhers, a women\'s health supplement brand. This project involved migrating from a vintage Shopify theme to a modern Shopify 2.0 theme, improving site performance and user experience. The site features science-backed educational content about hormones and women\'s health.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Shopify 2.0 theme migration',
          'Improved site performance and speed',
          'Enhanced mobile responsiveness',
          'Custom landing pages',
        ]
      }
    ]
  },
  {
    id: 'visbiome',
    title: 'Visbiome',
    category: 'website',
    shortDescription: 'E-commerce website for a medical-grade probiotic brand. Features extensive educational content on gut health conditions like IBS, ulcerative colitis, and leaky gut syndrome, along with product comparison tools.',
    thumbnail: '/assets/images/projects/visbiome/visbiome-gut-health-thumbnail.webp',
    subtitle: 'Medical Probiotic E-commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/visbiome/visbiome-gut-health.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-gut-health-thumbnail.webp', caption: 'Gut health information page' },
      { src: '/assets/images/projects/visbiome/visbiome-ibs.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-ibs-thumbnail.webp', caption: 'IBS treatment page' },
      { src: '/assets/images/projects/visbiome/visbiome-leaky-gut.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-leaky-gut-thumbnail.webp', caption: 'Leaky gut information' },
      { src: '/assets/images/projects/visbiome/visbiome-ulcerative-colitis.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-ulcerative-colitis-thumbnail.webp', caption: 'Ulcerative colitis page' },
      { src: '/assets/images/projects/visbiome/visbiome-vs-vsl3.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-vs-vsl3-thumbnail.webp', caption: 'Product comparison page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.visbiome.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'E-commerce website for Visbiome, a medical-grade probiotic brand. Features extensive educational content on gut health conditions such as IBS, ulcerative colitis, and leaky gut syndrome, along with product comparison tools to help users make informed decisions.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Condition-specific educational landing pages',
          'Product comparison tools',
          'Shopify 2.0 theme customization',
          'Mobile-responsive design'
        ]
      }
    ]
  },
  {
    id: 'escape-3',
    title: 'Escape 3',
    category: 'game',
    shortDescription: 'A side-scrolling platformer game built during my early game development days. Features multiple levels with increasing difficulty and various obstacles.',
    thumbnail: '/assets/images/projects/escape-3/escape-3.jpg',
    subtitle: 'Platformer Game',
    techStack: ['Game Maker', 'GML'],
    mediaGallery: [
      { src: '/assets/images/projects/escape-3/escape-3.jpg', thumbnail: '/assets/images/projects/escape-3/escape-3.jpg', caption: 'Escape 3 gameplay' }
    ],
    links: {
      primary: { label: 'Download Game', url: '/downloads/escape_3.exe' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'A side-scrolling platformer game built during early game development days. Features multiple levels with increasing difficulty and various obstacles. Created with Game Maker to learn game design principles and player mechanics.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Collectible items',
          'Boss battles'
        ]
      }
    ]
  },
  {
    id: 'escape-4',
    title: 'Escape 4',
    category: 'game',
    shortDescription: 'A side-scrolling platformer game and the sequel to Escape 3, featuring fog of war and blood splatters.',
    thumbnail: '/assets/images/projects/escape-4/escape-4.jpg',
    subtitle: 'Platformer Game',
    techStack: ['Game Maker', 'GML'],
    mediaGallery: [
      { src: '/assets/images/projects/escape-4/escape-4.jpg', thumbnail: '/assets/images/projects/escape-4/escape-4.jpg', caption: 'Escape 4 gameplay' }
    ],
    links: {
      primary: { label: 'Download Game', url: '/downloads/escape_4.exe' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'A side-scrolling platformer and the sequel to Escape 3, featuring fog of war and blood splatter effects. Building on lessons learned from the first game, this sequel introduced new enemies, power-ups, and a more polished player experience.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Fog of war effect',
          'Blood splatter effects',
          'New enemy types and obstacles'
        ]
      }
    ]
  },
  {
    id: 'bally-jump',
    title: 'Bally Jump',
    category: 'game',
    shortDescription: 'An infinite climbing game where you jump upwards avoiding obstacles and collecting points.',
    thumbnail: '/assets/images/projects/bally-jump/bally-jump.jpg',
    subtitle: 'Infinite Climbing Game',
    techStack: ['Game Maker Studio', 'GML'],
    mediaGallery: [
      { src: '/assets/images/projects/bally-jump/bally-jump.jpg', thumbnail: '/assets/images/projects/bally-jump/bally-jump.jpg', caption: 'Bally Jump game screen' }
    ],
    links: {
      primary: { label: 'Download Game', url: '/downloads/bally_jump.exe' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'An infinite climbing game where you jump upwards avoiding obstacles and collecting points. The game features procedurally generated levels that get progressively harder as you climb higher.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Randomly generated levels',
          'Increasing difficulty',
          'Point collection system'
        ]
      }
    ]
  },
  {
    id: 'talga-belly',
    title: 'Talga Belly',
    category: 'game',
    shortDescription: 'An interactive experience where you control a creature that eats villagers.',
    thumbnail: '/assets/images/projects/talga-belly/talga-belly.jpg',
    subtitle: 'Interactive Experience',
    techStack: ['Game Maker', 'GML'],
    mediaGallery: [
      { src: '/assets/images/projects/talga-belly/talga-belly.jpg', thumbnail: '/assets/images/projects/talga-belly/talga-belly.jpg', caption: 'Talga Belly game screen' }
    ],
    links: {
      primary: { label: 'Download', url: '/downloads/talga_belly.exe' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'An interactive experience where you control a creature that eats villagers. The game features humorous sound effects and animations as you interact with the villagers in various ways.',
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Eat villagers'
        ]
      }
    ]
  },
  {
    id: 'world-craft',
    title: 'World Craft',
    category: 'game',
    shortDescription: 'A 2D sandbox building game inspired by Minecraft. Mine resources, craft items, and build your world.',
    thumbnail: '/assets/images/projects/world-craft/world-craft.jpg',
    subtitle: '2D Sandbox Building Game',
    techStack: ['Game Maker Studio', 'GML'],
    mediaGallery: [
      { src: '/assets/images/projects/world-craft/world-craft.jpg', thumbnail: '/assets/images/projects/world-craft/world-craft.jpg', caption: 'World Craft game screen' }
    ],
    links: {
      primary: { label: 'Download Game', url: '/downloads/world_craft.exe' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'A 2D sandbox building game inspired by Minecraft. Players can mine resources, craft items, and build their world. The game features procedurally generated terrain, crafting systems, and creative freedom to build whatever you can imagine.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          '2D procedural terrain generation',
          'Mining and crafting system',
          'Block-based building mechanics',
          'Resource management and inventory',
          'Day/night cycle',
          'Save and load world functionality'
        ]
      }
    ]
  }
];
