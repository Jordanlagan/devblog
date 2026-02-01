// Project Data Structure
const projects = [
  {
    id: 'datapulse',
    title: 'DataPulse',
    category: 'web-app',
    shortDescription: 'DataPulse is a digital marketing tool that helps agencies & businesses visualize the performance of their marketing campaigns in real-time. It pulls data from various APIs on-demand and displays dashboards that can be shared with clients.',
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
        content: 'DataPulse is a comprehensive digital marketing tool that helps agencies and businesses visualize the performance of their marketing campaigns in real-time. It pulls data from various APIs on-demand and displays interactive dashboards that can be shared with clients. Built to handle enterprise-level data processing with real-time updates and customizable reporting.'
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
    shortDescription: 'Kaiwa is a lightweight & highly customizable solution for adding comments to any website. Users can create comment boxes in Kaiwa, then install them using a simple tag. This is a work in progress.',
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
        content: 'Kaiwa is a lightweight and highly customizable solution for adding comments to any website. Users can create comment boxes in Kaiwa, then install them using a simple JavaScript tag. Features real-time updates, moderation tools, and seamless integration with any website or platform.'
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
    shortDescription: 'Blog Autopilot is an AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. It generates SEO-optimized articles, and supports auto publishing to various platforms.',
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
        content: 'Blog Autopilot is an AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. It generates SEO-optimized articles using AI and supports auto-publishing to various platforms including WordPress, Google Docs, and Custom SFTP servers.'
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
    shortDescription: 'E-commerce website for a premium nutrition and supplements brand. Features custom product pages, educational content, and optimized conversion funnels.',
    thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home-thumbnail.jpg',
    subtitle: 'E-commerce Nutrition Website',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home-thumbnail.jpg', caption: 'Homepage' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp-thumbnail.jpg', caption: 'Field of Greens product page' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp-thumbnail.jpg', caption: 'Creatone product page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.brickhousenutrition.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'E-commerce website for Brickhouse Nutrition, a premium supplements brand. Features custom product pages with detailed supplement information and educational content about health and nutrition.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Custom Shopify theme development',
          'Product pages with detailed supplement information',
          'Educational content and blog',
          'Subscription and bundle options',
          'Mobile-optimized checkout',
          'Responsive web design'
        ]
      }
    ]
  },
  {
    id: 'honey-hole',
    title: 'Honey Hole Collectibles',
    category: 'website',
    shortDescription: 'Multi-brand e-commerce platform for sports card collecting and breaking. Features separate storefronts for retail and breaking services with shared navigation.',
    thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-homepage-thumbnail.webp',
    subtitle: 'Sports Card E-commerce Platform',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
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
        content: 'E-commerce platform for Honey Hole, featuring both a retail collectibles store and a card breaking service. Built as two separate Shopify stores with unified branding and shared navigation system.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Dual Shopify store architecture',
          'Sports card retail and breaking services',
          'Unified navigation across stores',
          'Custom product pages',
          'Mobile-responsive design',
          'Product catalog and filtering'
        ]
      }
    ]
  },
  {
    id: 'maydi-strength',
    title: 'Maydi Strength',
    category: 'website',
    shortDescription: 'E-commerce and lead generation website for a personal training and fitness brand. Features online shop, consultation booking, and fitness content.',
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
        content: 'Website for Maydi Strength, a personal training and fitness brand. Features product shop for fitness merchandise and a consultation booking system for personal training services.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Shopify e-commerce store',
          'Training consultation booking form',
          'Custom landing pages',
          'Lead generation and capture',
          'Mobile-responsive design',
          'Product catalog and shop'
        ]
      }
    ]
  },
  {
    id: 'mixhers',
    title: 'Mixhers',
    category: 'website',
    shortDescription: 'E-commerce website for women\'s health supplements. Features science-backed educational content, subscription management, and optimized product pages.',
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
        content: 'E-commerce website for Mixhers, a women\'s health supplement brand. Features science-backed educational content about hormones and women\'s health, along with subscription-based product offerings.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Custom Shopify theme',
          'Science and education content pages',
          'Subscription management',
          'Product bundles and customization',
          'Mobile-responsive design',
          'Educational blog and resources'
        ]
      }
    ]
  },
  {
    id: 'visbiome',
    title: 'Visbiome',
    category: 'website',
    shortDescription: 'Medical-grade probiotic e-commerce website with extensive educational content. Features condition-specific pages and scientific research integration.',
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
        content: 'E-commerce website for Visbiome, a medical-grade probiotic brand. Features extensive educational content about various gut health conditions including IBS, ulcerative colitis, and leaky gut syndrome.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Custom Shopify implementation',
          'Medical-grade probiotic products',
          'Condition-specific educational pages',
          'Scientific research integration',
          'Product comparison tools',
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
    subtitle: 'Classic Platformer Game',
    techStack: ['Game Maker Studio', 'GML'],
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
        content: 'A side-scrolling platformer game built during my early game development days. Features multiple levels with increasing difficulty and various obstacles. Created with Game Maker Studio, this project helped me learn game design principles and player mechanics.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Multiple challenging levels with unique themes',
          'Smooth platforming mechanics',
          'Custom level design with progressive difficulty',
          'Retro pixel art style',
          'Boss battles and collectibles'
        ]
      }
    ]
  },
  {
    id: 'escape-4',
    title: 'Escape 4',
    category: 'game',
    shortDescription: 'The sequel to Escape 3, featuring improved mechanics and more challenging levels.',
    thumbnail: '/assets/images/projects/escape-4/escape-4.jpg',
    subtitle: 'Platformer Game - Sequel',
    techStack: ['Game Maker Studio', 'GML'],
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
        content: 'The sequel to Escape 3, featuring improved mechanics and more challenging levels. Built on lessons learned from the first game, Escape 4 introduced new enemies, power-ups, and a more polished player experience.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Enhanced gameplay mechanics',
          'More complex level design',
          'New obstacles and enemy types',
          'Power-up system',
          'Improved graphics and animations'
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
        content: 'An infinite climbing game where you jump upwards avoiding obstacles and collecting points. Features procedurally generated levels that get progressively harder as you climb higher. Simple mechanics, endless challenge.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Infinite procedural level generation',
          'Global leaderboard and score tracking',
          'Increasing difficulty curve',
          'Simple one-button controls',
          'Addictive arcade gameplay'
        ]
      }
    ]
  },
  {
    id: 'talga-belly',
    title: 'Talga Belly',
    category: 'game',
    shortDescription: 'A quirky interactive experience where you control a creature that eats villagers. Not your typical game!',
    thumbnail: '/assets/images/projects/talga-belly/talga-belly.jpg',
    subtitle: 'Interactive Experience',
    techStack: ['Game Maker Studio', 'GML'],
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
        content: 'A quirky interactive experience where you control a creature that eats villagers. Not your typical game! This experimental project explores unconventional gameplay mechanics and humorous interactions.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Unique gameplay concept',
          'Interactive villagers with AI behavior',
          'Humorous sound effects and animations',
          'Multiple game modes',
          'Unlockable content'
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
        content: 'A 2D sandbox building game inspired by Minecraft. Mine resources, craft items, and build your world. Features procedurally generated terrain, crafting systems, and creative freedom to build whatever you imagine.'
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
