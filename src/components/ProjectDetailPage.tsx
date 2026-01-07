import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectDetail } from './ProjectDetail';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      slug: 'flexiryde-technologies',
      title: 'FlexiRyde Technologies',
      description: 'Premium Chauffeur & Fleet Management Platform',
      fullDescription: 'FlexiRyde is a dual-sided luxury mobility platform built to modernize how premium chauffeur services and fleet owners operate in Nigeria. The product consists of a Customer App, Partner App, and Admin Dashboard, designed to streamline bookings, driver management, payments, subscriptions, and analytics — all in one ecosystem. Built as a full-stack mobile product with end-to-end development including frontend architecture, backend integrations, payments, and deployment.',
      image: '/flexiryde/others/flexiryde_header.png',
      tags: ['Flutter', 'Firebase', 'Mobile App', 'UI/UX', 'Fleet Management', 'Fintech'],
      color: 'from-blue-500 to-cyan-500',
      challenge: 'The premium transportation space faced multiple problems: chauffeur businesses relied on manual booking and WhatsApp coordination, no unified system to manage cars, drivers, bookings, and earnings, poor visibility into business performance and analytics, difficulty scaling operations beyond a few vehicles, and lack of professional, app-based experience for premium customers. Most existing solutions focused on mass ride-hailing, not luxury or chauffeur-driven services.',
      solution: 'FlexiRyde provides a comprehensive three-part solution. The Customer App allows users to book premium rides, track drivers in real-time, and make secure payments. The Partner App empowers fleet owners to manage their cars and drivers, accept and assign bookings, track earnings and withdrawals, and subscribe to membership tiers with automated commission logic. The Admin Dashboard provides platform oversight, approvals, analytics, and system control. The entire system is built with scalability, role-based access, and real-time operations in mind.',
      results: [
        'Successfully built and deployed a production-ready mobile application',
        'Implemented real-time booking flow, payments, and wallet systems',
        'Designed subscription-based monetization for partners',
        'Deployed the Partner App to Google Play Store (closed testing)',
        'Established a solid foundation for investor discussions and partner onboarding',
        'Transitioned from idea to live product, validating both technical execution and business model'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1519003722824-194d4455a60c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      appPreviews: {
        lightMode: [
          '/flexiryde/light_mode/1.png',
          '/flexiryde/light_mode/13.png',
          '/flexiryde/light_mode/14.png',
          '/flexiryde/light_mode/15.png',
          '/flexiryde/light_mode/16.png',
          '/flexiryde/light_mode/17.png',
          '/flexiryde/light_mode/18.png',
          '/flexiryde/light_mode/19.png',
          '/flexiryde/light_mode/20.png',
          '/flexiryde/light_mode/21.png',
          '/flexiryde/light_mode/22.png',
          '/flexiryde/light_mode/23.png',
          '/flexiryde/light_mode/24.png',
          '/flexiryde/light_mode/25.png',
          '/flexiryde/light_mode/26.png',
          '/flexiryde/light_mode/27.png',
          '/flexiryde/light_mode/28.png',
          '/flexiryde/light_mode/29.png',
          '/flexiryde/light_mode/30.png',
          '/flexiryde/light_mode/31.png'
        ],
        darkMode: [
          '/flexiryde/dark_mode/1.png',
          '/flexiryde/dark_mode/2.png',
          '/flexiryde/dark_mode/3.png',
          '/flexiryde/dark_mode/4.png',
          '/flexiryde/dark_mode/5.png',
          '/flexiryde/dark_mode/6.png',
          '/flexiryde/dark_mode/7.png',
          '/flexiryde/dark_mode/8.png',
          '/flexiryde/dark_mode/9.png',
          '/flexiryde/dark_mode/10.png',
          '/flexiryde/dark_mode/11.png',
          '/flexiryde/dark_mode/12.png'
        ]
      }
    },
    {
      slug: 'vixa-emergency-safety-app',
      title: 'Vixa Emergency Safety App',
      description: 'Emergency Safety Mobile Application',
      fullDescription: 'VIXA is an emergency safety mobile application designed to help users quickly request help during critical situations such as robbery, kidnapping, or medical emergencies. The app provides a one-tap panic mechanism that instantly captures the user\'s real-time location and audio evidence, and notifies selected trusted contacts through multiple communication channels to enable faster response.',
      image: '/vixa/others/vixa_header.png',
      tags: ['Flutter', 'Firebase', 'Supabase', 'OneSignal', 'Twilio', 'Resend', 'Mobile App', 'Emergency Safety'],
      color: 'from-red-500 to-orange-500',
      challenge: 'Enabling instant emergency alerts under high-stress conditions with minimal user interaction. Handling real-time location tracking and audio recording while respecting mobile OS restrictions and privacy policies. Ensuring reliable delivery of alerts across SMS, email, and in-app notifications. Balancing user safety needs with platform compliance, especially background permissions and data protection constraints.',
      solution: 'Designed a single-tap panic workflow that triggers emergency alerts immediately upon app launch. Implemented real-time location capture and secure backend storage for incident tracking. Built automated multi-channel notification pipelines to ensure alerts reach trusted contacts even if one channel fails. Developed a backend process to record, upload, and securely share audio evidence via downloadable links. Made deliberate architectural decisions to maintain Play Store and App Store compliance without compromising core functionality.',
      results: [
        'Delivered a fully functional end-to-end safety system covering mobile client, backend services, and third-party integrations',
        'Achieved fast alert dispatch with minimal user interaction during emergency scenarios',
        'Provided verifiable incident evidence (location + audio) to improve response effectiveness',
        'Built a scalable and compliance-ready foundation for future enhancements such as native triggers and emergency service integrations'
      ],
      appPreviews: {
        lightMode: [],
        darkMode: [
          '/vixa/dark_mode/1.png',
          '/vixa/dark_mode/2.png',
          '/vixa/dark_mode/3.png',
          '/vixa/dark_mode/4.png',
          '/vixa/dark_mode/5.png',
          '/vixa/dark_mode/6.png',
          '/vixa/dark_mode/7.png',
          '/vixa/dark_mode/8.png',
          '/vixa/dark_mode/9.png',
          '/vixa/dark_mode/10.png',
          '/vixa/dark_mode/11.png',
          '/vixa/dark_mode/12.png',
          '/vixa/dark_mode/13.png',
          '/vixa/dark_mode/14.png',
          '/vixa/dark_mode/15.png',
          '/vixa/dark_mode/16.png',
          '/vixa/dark_mode/17.png',
          '/vixa/dark_mode/18.png',
          '/vixa/dark_mode/19.png',
          '/vixa/dark_mode/20.png',
          '/vixa/dark_mode/21.png',
          '/vixa/dark_mode/22.png',
          '/vixa/dark_mode/23.png',
          '/vixa/dark_mode/24.png',
          '/vixa/dark_mode/25.png',
          '/vixa/dark_mode/26.png',
          '/vixa/dark_mode/27.png',
          '/vixa/dark_mode/28.png',
          '/vixa/dark_mode/29.png',
          '/vixa/dark_mode/30.png',
          '/vixa/dark_mode/31.png',
          '/vixa/dark_mode/32.png',
          '/vixa/dark_mode/33.png'
        ]
      }
    },
    {
      slug: 'iexcel-foods',
      title: 'iExcel Foods',
      description: 'Brand identity & website for a catering and welfare service company',
      fullDescription: 'Complete brand redesign and website development for a leading catering and corporate welfare services company. Created a cohesive visual identity that reflects quality, trust, and premium service.',
      image: 'https://images.unsplash.com/photo-1588560107833-167198a53677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwY2F0ZXJpbmclMjByZXN0YXVyYW50JTIwYnJhbmRpbmd8ZW58MXx8fHwxNzYyNTgzNjA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Branding', 'Web Design', 'WordPress', 'Graphic Design'],
      color: 'from-orange-500 to-red-500',
      challenge: 'Transforming a traditional catering company into a modern, digitally-savvy brand while maintaining their reputation for quality and service.',
      solution: 'Created a comprehensive brand identity system and a responsive WordPress website that showcases their services, streamlines booking, and reinforces their premium positioning.',
      results: [
        'Increased online bookings by 150%',
        'Improved brand recognition across target markets',
        'Reduced customer inquiry response time by 70%',
        'Launched successful digital marketing campaigns'
      ]
    },
    {
      slug: 'kovest-app',
      title: 'Kovest App',
      description: 'Smart Savings, Investment & Rewards Platform',
      fullDescription: 'Kovest is a fintech product concept and MVP-in-progress designed to help individuals build disciplined saving habits while earning rewards over time. The platform pools user contributions into company-managed investment strategies and rewards long-term commitment with guaranteed capital return and token-based incentives ($KOVEST). Unlike traditional thrift or peer-based contribution apps, Kovest removes user-to-user dependency entirely. Users do not create or join savings cycles. Instead, they contribute to company-managed plans, lock funds for a fixed 12-month period, and receive their full capital back at maturity, alongside rewards in $KOVEST tokens. Kovest blends Web2 financial infrastructure (bank transfers, Naira wallets) with Web3 incentives (token rewards, vesting, gamified earning), all wrapped in a Gen Z–friendly, transparent experience.',
      image: '/kovest/others/kovest_header.png',
      tags: ['Flutter', 'Fintech', 'Mobile App', 'UI/UX', 'Web3', 'Tokenomics'],
      color: 'from-purple-500 to-pink-500',
      challenge: 'Trust deficit in savings/investment apps — many users are skeptical due to failed schemes, unrealistic ROI promises, and lack of transparency. Balancing returns without sounding like a scam — promising high percentages creates hype but kills credibility, while promising nothing kills motivation. Long-term user commitment — most users want instant withdrawals, but Kovest required a 52-week lock period which is psychologically hard to sell without strong incentives. Web3 adoption friction — many users don\'t care about crypto, and forcing Web3 features without clear value would alienate users.',
      solution: 'Kovest solves these problems with a capital-first, reward-second model. Capital Safety First: Users get 100% of their contributed capital back after 52 weeks with no mid-cycle withdrawals, reducing liquidity risk while the company bears investment risk. Rewards Instead of Unrealistic ROI: Users earn $KOVEST tokens for completing savings cycles, referrals, loyalty milestones, and app engagement — keeping Kovest credible, not desperate. Hybrid Web2 + Web3 Experience: Users can fully use Kovest without caring about crypto, while advanced users can earn, hold, lock (vesting), or swap $KOVEST tokens. Founder-Led Transparency: Development progress shared openly, decisions explained publicly, and community grows alongside the product to create Day-1 trust.',
      results: [
        'Defined a clear, non-scammy financial model with fixed lock period, guaranteed capital return, and token-based incentives instead of fake ROI',
        'Designed full app architecture including Savings plans, Wallet (Naira + $KOVEST), Earn, Refer & Earn, Withdraw, and Send Money flows',
        'Established clear tokenomics direction with fixed 1B $KOVEST supply, controlled rewards, and long-term utility over hype',
        'Positioned Kovest as a Gen Z–focused fintech, not another thrift clone',
        'Built the product as a solo founder handling product thinking, UX flows, technical architecture, business logic, and Web2 + Web3 integration strategy'
      ],
      appPreviews: {
        lightMode: [
          '/kovest/light_mode/8.png',
          '/kovest/light_mode/9.png',
          '/kovest/light_mode/10.png',
          '/kovest/light_mode/11.png',
          '/kovest/light_mode/12.png',
          '/kovest/light_mode/13.png',
          '/kovest/light_mode/14.png',
          '/kovest/light_mode/15.png',
          '/kovest/light_mode/16.png',
          '/kovest/light_mode/17.png',
          '/kovest/light_mode/18.png',
          '/kovest/light_mode/19.png',
          '/kovest/light_mode/20.png',
          '/kovest/light_mode/21.png',
          '/kovest/light_mode/22.png',
          '/kovest/light_mode/23.png',
          '/kovest/light_mode/24.png',
          '/kovest/light_mode/25.png',
          '/kovest/light_mode/26.png',
          '/kovest/light_mode/27.png',
          '/kovest/light_mode/28.png',
          '/kovest/light_mode/29.png',
          '/kovest/light_mode/30.png',
          '/kovest/light_mode/31.png',
          '/kovest/light_mode/32.png',
          '/kovest/light_mode/33.png',
          '/kovest/light_mode/34.png',
          '/kovest/light_mode/35.png',
          '/kovest/light_mode/36.png',
          '/kovest/light_mode/37.png',
          '/kovest/light_mode/38.png',
          '/kovest/light_mode/39.png',
          '/kovest/light_mode/40.png',
          '/kovest/light_mode/41.png',
          '/kovest/light_mode/42.png',
          '/kovest/light_mode/43.png',
          '/kovest/light_mode/44.png',
          '/kovest/light_mode/45.png',
          '/kovest/light_mode/46.png',
          '/kovest/light_mode/47.png',
          '/kovest/light_mode/48.png',
          '/kovest/light_mode/49.png',
          '/kovest/light_mode/50.png'
        ],
        darkMode: [
          '/kovest/dark_mode/1.png',
          '/kovest/dark_mode/2.png',
          '/kovest/dark_mode/3.png',
          '/kovest/dark_mode/4.png',
          '/kovest/dark_mode/5.png',
          '/kovest/dark_mode/6.png',
          '/kovest/dark_mode/7.png'
        ]
      },
      videoPreview: 'https://player.vimeo.com/video/1151316291'
    },
    {
      slug: 'project-eon',
      title: 'Project EON',
      description: 'AI-generated cinematic short film exploring humanity\'s future under AI control',
      fullDescription: 'An innovative AI-generated cinematic experience that explores themes of artificial intelligence, human consciousness, and the future of technology. Combines cutting-edge AI tools with traditional storytelling techniques.',
      image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwQUklMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjU4MzYwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AI', 'Film', 'Motion Graphics', 'Storytelling'],
      color: 'from-purple-500 to-pink-500',
      challenge: 'Pushing the boundaries of AI-assisted filmmaking while maintaining a compelling narrative and cinematic quality.',
      solution: 'Leveraged state-of-the-art AI generation tools for visuals and sound design, combined with traditional filmmaking techniques for storytelling and post-production.',
      results: [
        'Featured at 5 international film festivals',
        'Over 100K views on YouTube',
        'Sparked conversations about AI in creative industries',
        'Recognized as innovative use of AI in storytelling'
      ]
    },
    {
      slug: 'whot-island-game',
      title: 'Whot Island Game',
      description: 'A mobile card game inspired by the classic Whot game',
      fullDescription: 'Whot Island is a mobile card game inspired by the traditional African Whot game. The project reimagines the classic gameplay into a modern digital experience with offline AI play, online multiplayer, and real-money staking. The goal was to build a smooth, engaging, and scalable card game that feels fun, competitive, and trustworthy for users.',
      image: '/whot_island/others/whot_island_header.png',
      tags: ['Flutter', 'Dart', 'Unity', 'Mobile Game', 'Card Game', 'Game Design', 'Firebase', 'Multiplayer'],
      color: 'from-green-500 to-teal-500',
      challenge: 'Translating the complex rules of Whot into a digital game without confusing new players. Designing a game UI that feels playful and modern while remaining clear on small mobile screens. Supporting multiple game modes including offline AI, online multiplayer, and private rooms. Planning a real-money staking system that feels fair, transparent, and secure. Ensuring animations and visuals enhance gameplay without hurting performance.',
      solution: 'Designed a complete custom UI system for the game, including onboarding, gameplay screens, wallets, and result states. Built a structured game logic flow to handle card rules, turns, special actions, and win conditions. Implemented offline single-player mode with configurable AI difficulty levels (Easy, Medium, Hard). Designed multiplayer flows for Quick Match and Private Rooms, including stake selection and matchmaking logic. Used lightweight animations (Lottie, sprite-based concepts) to create a 3D-like feel in a 2D game without performance issues. Planned backend architecture using Firebase for authentication, game state syncing, and wallet transactions.',
      results: [
        'Delivered a fully designed and functional MVP ready for development and live testing',
        'Created a scalable foundation that supports real-time multiplayer and monetization',
        'Achieved a polished, game-ready UI that clearly communicates gameplay states and actions',
        'Demonstrated ability to take a game from concept → design → technical architecture → implementation planning as a solo developer'
      ],
      gallery: [
        'https://images.unsplash.com/photo-1511193311914-0346f16efe90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1529892485617-25f63cd7b1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1606167668584-78701c57f13d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1612404730960-5c71577fca11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ],
      appPreviews: {
        lightMode: [
          '/whot_island/screens/1.png',
          '/whot_island/screens/2.png',
          '/whot_island/screens/3.png',
          '/whot_island/screens/4.png',
          '/whot_island/screens/5.png',
          '/whot_island/screens/6.png',
          '/whot_island/screens/7.png',
          '/whot_island/screens/8.png',
          '/whot_island/screens/9.png',
          '/whot_island/screens/10.png',
          '/whot_island/screens/11.png',
          '/whot_island/screens/12.png',
          '/whot_island/screens/13.png',
          '/whot_island/screens/14.png',
          '/whot_island/screens/15.png',
          '/whot_island/screens/16.png',
          '/whot_island/screens/17.png',
          '/whot_island/screens/18.png',
          '/whot_island/screens/19.png',
          '/whot_island/screens/20.png',
          '/whot_island/screens/21.png',
          '/whot_island/screens/22.png',
          '/whot_island/screens/23.png',
          '/whot_island/screens/24.png',
          '/whot_island/screens/25.png',
          '/whot_island/screens/26.png',
          '/whot_island/screens/27.png',
          '/whot_island/screens/28.png',
          '/whot_island/screens/29.png'
        ],
        darkMode: []
      }
    },
    {
      slug: 'elites-realty-website',
      title: 'Elites Realty Website',
      description: 'Modern Real Estate Platform for Premium Properties',
      fullDescription: 'Elites Realty Investment Limited is a leading real estate company specializing in development, investment, and management. The website showcases a diverse portfolio of premium residential, commercial, and industrial properties including Rosepearl Apartment, The Vale Apartment, and Winterfell Apartment. Built with modern web technologies and elegant design principles, the platform delivers a professional digital presence for high-quality property listings.',
      image: '/elites_realty_website/others/elites_realty_header.png',
      tags: ['Web Design', 'Real Estate', 'UI/UX', 'Responsive', 'WordPress', 'Property Showcase'],
      color: 'from-amber-500 to-orange-500',
      challenge: 'Creating an elegant, user-friendly platform to showcase luxury properties while maintaining a professional aesthetic. Needed to integrate property listings with detailed information and high-quality imagery. Ensuring responsive design across all devices while providing intuitive navigation for property browsers. Building trust through professional web presence while highlighting key amenities and features of each property.',
      solution: 'Designed and developed a modern, responsive website with elegant property showcase capabilities. Implemented intuitive navigation with dedicated pages for each apartment complex. Created high-quality visual presentations with professional photography and detailed property information. Built a mobile-optimized experience ensuring seamless browsing across all devices. Integrated contact forms and call-to-action elements to facilitate property inquiries. Developed a clean, professional interface that conveys luxury and trustworthiness.',
      results: [
        'Delivered a professional web presence showcasing premium properties with elegant design',
        'Improved property visibility and client engagement through modern digital platform',
        'Enhanced user experience with responsive design working seamlessly across all devices',
        'Created streamlined property browsing experience with intuitive navigation and detailed information',
        'Established strong brand identity through consistent visual language and professional presentation'
      ],
      appPreviews: {
        lightMode: [
          '/elites_realty_website/screens/1.png',
          '/elites_realty_website/screens/2.png',
          '/elites_realty_website/screens/3.png',
          '/elites_realty_website/screens/4.png',
          '/elites_realty_website/screens/5.png',
          '/elites_realty_website/screens/6.png',
          '/elites_realty_website/screens/7.png',
          '/elites_realty_website/screens/8.png',
          '/elites_realty_website/screens/9.png'
        ],
        darkMode: []
      },
      websiteUrl: 'https://elitesrealtyng.com/'
    },
    {
      slug: 'iexcel-foods-website',
      title: 'iExcel Foods Website',
      description: 'Comprehensive Food Services, Catering & Welfare Solutions Platform',
      fullDescription: 'iExcel Foods is a multi-service platform combining quality, care, and convenience to serve families, religious organizations, associations, and NGOs. The website showcases comprehensive services including weekly meat sharing (goat, ram, cow), welfare packaging and delivery for churches/mosques/NGOs, professional catering for events, food tray deliveries, and community support programs. Built with a focus on compassion-driven service and customized solutions for each client.',
      image: '/iexcel_foods/others/iExcel_Foods_header.png',
      tags: ['Web Design', 'Food Services', 'UI/UX', 'E-commerce', 'Community Support', 'WordPress'],
      color: 'from-green-600 to-emerald-500',
      challenge: 'Creating a comprehensive platform that effectively communicates diverse service offerings - from food supply to event decoration to welfare support. Needed to build trust and credibility in food handling and hygiene standards. Designing an intuitive user experience to help different customer segments (families, religious organizations, NGOs) quickly find relevant services. Balancing commercial services with compassionate community welfare messaging while maintaining a professional appearance.',
      solution: 'Developed a clean, service-focused website with clear categorization of offerings. Implemented dedicated sections for each service type with detailed descriptions and visual elements. Created testimonial sections featuring real customer reviews to build trust. Designed an engaging gallery showcasing service excellence and food quality. Integrated easy contact and quote request systems. Built mobile-optimized responsive design for accessibility across all devices. Emphasized the compassion-driven mission while maintaining professional presentation.',
      results: [
        'Delivered a comprehensive digital platform showcasing all service offerings in an organized, accessible manner',
        'Enhanced brand credibility through professional presentation and customer testimonials',
        'Improved customer engagement with clear service descriptions and easy contact options',
        'Created a responsive website working seamlessly across desktop and mobile devices',
        'Successfully balanced commercial food services with community welfare mission'
      ],
      appPreviews: {
        lightMode: [
          '/iexcel_foods/screens/1.png',
          '/iexcel_foods/screens/2.png',
          '/iexcel_foods/screens/3.png',
          '/iexcel_foods/screens/4.png',
          '/iexcel_foods/screens/5.png',
          '/iexcel_foods/screens/6.png',
          '/iexcel_foods/screens/7.png',
          '/iexcel_foods/screens/8.png',
          '/iexcel_foods/screens/9.png'
        ],
        darkMode: []
      },
      websiteUrl: 'https://iexcelfoods.com/'
    },
    {
      slug: 'flexiryde-website',
      title: 'FlexiRyde Website',
      description: 'Premium Chauffeur Service Booking Platform',
      fullDescription: 'FlexiRyde website serves as the digital gateway to luxury chauffeur services, providing an elegant platform for customers to discover and book premium transportation. The modern React-based website showcases the fleet of luxury vehicles, presents service offerings, displays pricing transparently, and enables seamless online booking. Built with a focus on conveying luxury, trust, and professionalism while making premium chauffeur services accessible and easy to book.',
      image: '/flexiryde/others/flexiryde_website_header.png',
      tags: ['Web Design', 'Transportation', 'React', 'UI/UX', 'Booking System', 'Premium Services'],
      color: 'from-blue-600 to-cyan-500',
      challenge: 'Creating a website that conveys luxury and professionalism while remaining accessible and user-friendly. Needed to showcase premium fleet vehicles with high-quality visuals and detailed information. Building trust in a competitive market where customers expect reliability and transparency. Designing an intuitive booking flow that makes scheduling premium chauffeur services effortless. Ensuring the website reflects the premium nature of the service while maintaining fast load times and mobile responsiveness.',
      solution: 'Developed a modern, visually stunning React website with elegant animations and premium aesthetic. Implemented high-quality vehicle showcase with detailed specifications and professional photography. Created transparent pricing displays and service packages to build customer confidence. Designed streamlined booking interface with clear steps and instant confirmation. Built fully responsive experience optimized for desktop and mobile devices. Integrated professional copywriting that conveys luxury while remaining approachable. Optimized performance for fast loading despite rich visual content.',
      results: [
        'Delivered a premium web presence that effectively communicates the luxury chauffeur service brand',
        'Created an intuitive booking platform that simplifies the process of scheduling premium rides',
        'Enhanced brand credibility through professional design and transparent service information',
        'Achieved responsive design working flawlessly across all devices and screen sizes',
        'Successfully positioned FlexiRyde as a modern, trustworthy alternative in the luxury transportation market'
      ],
      appPreviews: {
        lightMode: [
          '/flexiryde/website/1.png',
          '/flexiryde/website/2.png',
          '/flexiryde/website/3.png',
          '/flexiryde/website/4.png',
          '/flexiryde/website/5.png',
          '/flexiryde/website/6.png'
        ],
        darkMode: []
      },
      websiteUrl: 'https://flexiryde.com/'
    },
    {
      slug: 'collins-portfolio-website',
      title: 'Mr. Collins Portfolio Website',
      description: 'Professional One-Page Portfolio Website',
      fullDescription: 'A sleek, modern one-page portfolio website designed to showcase professional work and skills in an elegant, easy-to-navigate format. Built with React/Next.js, the website features smooth scrolling, responsive design, and eye-catching animations that create an engaging user experience. The portfolio effectively presents projects, skills, experience, and contact information in a cohesive single-page layout that keeps visitors engaged while providing all necessary information.',
      image: '/collins/others/collins_website_header.png',
      tags: ['Web Design', 'Portfolio', 'Next.js', 'UI/UX', 'Single Page', 'React'],
      color: 'from-indigo-500 to-purple-600',
      challenge: 'Creating a comprehensive portfolio that presents all essential information on a single page without overwhelming visitors. Needed to design smooth navigation that guides users through different sections seamlessly. Balancing visual appeal with fast load times and performance. Ensuring the design stands out in a competitive market while remaining professional and accessible. Making the portfolio responsive and engaging across all devices from mobile to desktop.',
      solution: 'Developed a modern one-page portfolio using React/Next.js with smooth scroll navigation and section transitions. Implemented clean, minimalist design with strategic use of whitespace and typography. Created engaging animations and micro-interactions that enhance user experience without impacting performance. Built fully responsive layout optimized for all screen sizes. Organized content into logical sections (About, Skills, Projects, Experience, Contact) with intuitive navigation. Optimized images and assets for fast loading while maintaining visual quality.',
      results: [
        'Delivered a professional, visually stunning portfolio that effectively showcases work and skills',
        'Created seamless single-page experience with smooth navigation and engaging animations',
        'Achieved excellent performance metrics with fast load times despite rich visual content',
        'Built fully responsive design that provides optimal experience on all devices',
        'Successfully presented comprehensive professional information in an accessible, engaging format'
      ],
      appPreviews: {
        lightMode: [
          '/collins/screens/1.png',
          '/collins/screens/2.png',
          '/collins/screens/3.png',
          '/collins/screens/4.png'
        ],
        darkMode: []
      },
      websiteUrl: 'https://collins-portfolio-nine.vercel.app/'
    }
  ];

  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return <ProjectDetail project={project} onBack={() => navigate('/')} />;
}
