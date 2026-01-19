// Project Data Structure
const projects = [
  {
    id: 'datapulse',
    title: 'DataPulse',
    category: 'web-app',
    shortDescription: 'DataPulse is a digital marketing tool that helps agencies & businesses visualize the performance of their marketing campaigns in real-time. It pulls data from various APIs on-demand and displays dashboards that can be shared with clients.',
    thumbnail: '/assets/images/projects/datapulse/datapulse-thumbnail.png',
    subtitle: 'Real-time Marketing Analytics Platform',
    techStack: ['Ruby on Rails', 'React', 'AWS', 'PostgreSQL', 'Sidekiq', 'Redis', 'Chart.js', 'GraphQL', 'REST APIs'],
    mediaGallery: [
      { src: '/assets/images/projects/datapulse/datapulse-thumbnail.png', thumbnail: '/assets/images/projects/datapulse/datapulse-thumbnail.png', caption: 'Main dashboard overview', isMainThumbnail: true },
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
    thumbnail: '/assets/images/projects/kaiwa/kaiwa-1.jpg',
    subtitle: 'Universal Comment System',
    techStack: ['Ruby on Rails', 'JavaScript', 'AWS', 'PostgreSQL', 'OpenAI API', 'ActiveJob'],
    mediaGallery: [
      { src: '/assets/images/projects/kaiwa/kaiwa-1.jpg', thumbnail: '/assets/images/projects/kaiwa/kaiwa-1.jpg', caption: 'Kaiwa interface' }
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
          'Advanced moderation tools and spam filtering',
          'Customizable styling to match your brand',
          'User authentication and profiles',
          'Threaded conversations and notifications'
        ]
      }
    ]
  },
  {
    id: 'blog-autopilot',
    title: 'Blog Autopilot',
    category: 'web-app',
    shortDescription: 'Blog Autopilot is an AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. It generates SEO-optimized articles, and supports auto publishing to various platforms.',
    thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot.png',
    subtitle: 'AI-Powered Content Automation',
    techStack: ['Ruby on Rails', 'jQuery', 'OpenAI API', 'PostgreSQL', 'ActiveJob', 'WordPress API'],
    mediaGallery: [
      { src: '/assets/images/projects/blog-autopilot/blog-autopilot.png', thumbnail: '/assets/images/projects/blog-autopilot/blog-autopilot.png', caption: 'Blog Autopilot dashboard' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://blog-autopilot.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Blog Autopilot is an AI-powered content generation tool that helps businesses and creators automate their blog publishing workflow. Using advanced AI models, it generates SEO-optimized articles and supports auto-publishing to various platforms including WordPress, Medium, and custom CMSs.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'AI-generated SEO-optimized articles using GPT-4',
          'Auto-publishing to WordPress, Medium, and more',
          'Content calendar and scheduling system',
          'Keyword research and optimization suggestions',
          'Multi-site management dashboard',
          'Analytics and performance tracking'
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
  },
  {
    id: 'brickhouse-nutrition',
    title: 'Brickhouse Nutrition',
    category: 'website',
    shortDescription: 'E-commerce website for a premium nutrition and supplements brand. Features custom product pages, educational content, and optimized conversion funnels.',
    thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home.jpg',
    subtitle: 'E-commerce Nutrition Website',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-home.jpg', caption: 'Homepage' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-field-of-greens-pdp.jpg', caption: 'Field of Greens product page' },
      { src: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp.jpg', thumbnail: '/assets/images/projects/brickhouse-nutrition/brickhouse-nutrition-creatone-pdp.jpg', caption: 'Creatone product page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.brickhousenutrition.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Designed and developed an e-commerce platform for Brickhouse Nutrition, a premium supplements brand. The site features custom product pages with detailed nutritional information, customer testimonials, and optimized checkout flows to maximize conversions.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Custom Shopify theme development',
          'Responsive design across all devices',
          'Optimized product detail pages',
          'Educational content integration',
          'Subscription management system',
          'Performance optimization'
        ]
      }
    ]
  },
  {
    id: 'honey-hole',
    title: 'Honey Hole Collectibles',
    category: 'website',
    shortDescription: 'Multi-brand e-commerce platform for sports card collecting and breaking. Features separate storefronts for retail and breaking services with shared navigation.',
    thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-homepage.jpg',
    subtitle: 'Sports Card E-commerce Platform',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/honey-hole/honeyhole-nav.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-nav.jpg', caption: 'Unified navigation system' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-homepage.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-homepage.jpg', caption: 'Collect store homepage' },
      { src: '/assets/images/projects/honey-hole/honeyhole-breaks-homepage.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-breaks-homepage.jpg', caption: 'Breaks store homepage' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-collection.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-collection.jpg', caption: 'Product collection page' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-pdp.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-pdp.jpg', caption: 'Product detail page' },
      { src: '/assets/images/projects/honey-hole/honeyhole-collect-about-us.jpg', thumbnail: '/assets/images/projects/honey-hole/honeyhole-collect-about-us.jpg', caption: 'About page' }
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
        content: 'Created a dual-storefront e-commerce platform for Honey Hole, serving both retail sports card collectors and card breaking enthusiasts. The solution features unified branding with separate shopping experiences, integrated navigation, and optimized flows for both business models.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Dual Shopify store integration',
          'Unified navigation and branding',
          'Custom product filtering',
          'Live breaking schedule integration',
          'Inventory management across platforms',
          'Mobile-optimized experience'
        ]
      }
    ]
  },
  {
    id: 'maydi-strength',
    title: 'Maydi Strength',
    category: 'website',
    shortDescription: 'E-commerce and lead generation website for a personal training and fitness brand. Features online shop, consultation booking, and fitness content.',
    thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-homepage.jpg',
    subtitle: 'Fitness & Training Platform',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/maydi-strength/maydi-strength-homepage.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-homepage.jpg', caption: 'Homepage' },
      { src: '/assets/images/projects/maydi-strength/maydi-strength-shop.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-shop.jpg', caption: 'Product shop' },
      { src: '/assets/images/projects/maydi-strength/maydi-strength-lead-form.jpg', thumbnail: '/assets/images/projects/maydi-strength/maydi-strength-lead-form.jpg', caption: 'Consultation booking form' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.maydistrength.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Developed a hybrid e-commerce and service booking platform for Maydi Strength, combining product sales with personal training lead generation. The site balances e-commerce functionality with service-based business needs.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'E-commerce product catalog',
          'Consultation booking system',
          'Lead capture forms',
          'Training program showcase',
          'Responsive design',
          'Integration with booking tools'
        ]
      }
    ]
  },
  {
    id: 'mixhers',
    title: 'Mixhers',
    category: 'website',
    shortDescription: 'E-commerce website for women\'s health supplements. Features science-backed educational content, subscription management, and optimized product pages.',
    thumbnail: '/assets/images/projects/mixhers/mixhers-homepage.jpg',
    subtitle: 'Women\'s Health E-commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/mixhers/mixhers-homepage.jpg', thumbnail: '/assets/images/projects/mixhers/mixhers-homepage.jpg', caption: 'Homepage' },
      { src: '/assets/images/projects/mixhers/mixhers-backed-by-science.jpg', thumbnail: '/assets/images/projects/mixhers/mixhers-backed-by-science.jpg', caption: 'Science and education page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.mixhers.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Built an e-commerce platform for Mixhers, a women\'s health supplement brand. The site emphasizes scientific credibility with educational content while maintaining an approachable, feminine aesthetic that resonates with the target audience.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Science-focused content pages',
          'Subscription management',
          'Educational resources',
          'Product quiz integration',
          'Customer reviews system',
          'Mobile-first design'
        ]
      }
    ]
  },
  {
    id: 'naturaverde-pro',
    title: 'Naturaverde Pro',
    category: 'website',
    shortDescription: 'B2B e-commerce platform for professional esthetician supplies. Features wholesale pricing, bulk ordering, and professional product education.',
    thumbnail: '/assets/images/projects/naturaverde-pro/naturaverde-pro-homepage.jpg',
    subtitle: 'Professional Beauty Supplies',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/naturaverde-pro/naturaverde-pro-homepage.jpg', thumbnail: '/assets/images/projects/naturaverde-pro/naturaverde-pro-homepage.jpg', caption: 'Homepage' },
      { src: '/assets/images/projects/naturaverde-pro/naturaverde-pro-pdp.jpg', thumbnail: '/assets/images/projects/naturaverde-pro/naturaverde-pro-pdp.jpg', caption: 'Product detail page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.naturaverdepro.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Developed a B2B e-commerce platform for Naturaverde Pro, catering to professional estheticians and beauty salons. The site features wholesale pricing structures, bulk ordering capabilities, and professional-grade product information.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'B2B wholesale pricing',
          'Bulk order management',
          'Professional account system',
          'Product education resources',
          'Quick reorder functionality',
          'Professional certification integration'
        ]
      }
    ]
  },
  {
    id: 'visbiome',
    title: 'Visbiome',
    category: 'website',
    shortDescription: 'Medical-grade probiotic e-commerce website with extensive educational content. Features condition-specific pages and scientific research integration.',
    thumbnail: '/assets/images/projects/visbiome/visbiome-gut-health.jpg',
    subtitle: 'Medical Probiotic E-commerce',
    techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    mediaGallery: [
      { src: '/assets/images/projects/visbiome/visbiome-gut-health.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-gut-health.jpg', caption: 'Gut health information page' },
      { src: '/assets/images/projects/visbiome/visbiome-ibs.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-ibs.jpg', caption: 'IBS treatment page' },
      { src: '/assets/images/projects/visbiome/visbiome-leaky-gut.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-leaky-gut.jpg', caption: 'Leaky gut information' },
      { src: '/assets/images/projects/visbiome/visbiome-ulcerative-colitis.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-ulcerative-colitis.jpg', caption: 'Ulcerative colitis page' },
      { src: '/assets/images/projects/visbiome/visbiome-vs-vsl3.jpg', thumbnail: '/assets/images/projects/visbiome/visbiome-vs-vsl3.jpg', caption: 'Product comparison page' }
    ],
    links: {
      primary: { label: 'Visit Website', url: 'https://www.visbiome.com' },
      external: []
    },
    sections: [
      {
        type: 'about',
        title: 'About This Project',
        content: 'Created a comprehensive e-commerce platform for Visbiome, a medical-grade probiotic brand. The site features extensive condition-specific educational content, scientific research integration, and optimized flows for both consumers and healthcare providers.'
      },
      {
        type: 'features',
        title: 'Key Features',
        items: [
          'Condition-specific landing pages',
          'Scientific research integration',
          'Healthcare provider resources',
          'Prescription management system',
          'Educational content library',
          'Product comparison tools'
        ]
      }
    ]
  }
];
