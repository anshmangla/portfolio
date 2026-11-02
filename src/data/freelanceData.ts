import type { FreelanceItem } from '../types';

export const freelanceData: FreelanceItem[] = [
  {
    id: 'labmatrix-marketplace',
    client: 'Labmatrix Instrument India Pvt. Ltd.',
    clientUrl: 'https://surplus.labmatrixindia.com',
    projectTitle: 'LabMatrix Surplus Marketplace',
    badge: 'B2B Equipment Marketplace',
    tagline: 'Premier B2B Marketplace for Refurbished Analytical Instruments & Spare Parts',
    role: 'Full-Stack & Mobile Engineer (Freelance)',
    period: '2026',
    location: 'Remote / India',
    liveUrl: 'https://surplus.labmatrixindia.com',
    overview: 'Architected and engineered the complete digital ecosystem for Labmatrix Instrument India Pvt. Ltd., encompassing a high-performance web marketplace and a cross-platform mobile app. The platform powers equipment liquidity for Indian scientific, pharmaceutical, and biotechnology sectors—allowing labs and manufacturers to liquidate, procure, and source certified analytical machinery (HPLC, GC-MS, AAS, ICP-OES) and genuine OEM spare parts.',
    impactHighlights: [
      'Engineered and launched an end-to-end B2B liquidity platform currently live in production at surplus.labmatrixindia.com',
      'Clocked a perfect 100/100 Desktop and 99/100 Mobile Google PageSpeed score via aggressive Edge CDN caching & WebP/AVIF compression',
      'Built a strict multi-tier Admin Moderation Portal (/admin) preventing spam and counterfeit listings with automated Resend alerts',
      'Delivered unified web and mobile experiences powered by Neon Serverless PostgreSQL and hardware-backed JWT authentication'
    ],
    deliverables: [
      {
        type: 'Web Platform',
        title: 'B2B Marketplace & Moderation Portal',
        platformBadge: 'Next.js 16 • Turbopack • Serverless',
        description: 'A production-grade, SEO-optimized B2B web application with 3 dedicated catalogs, buyer RFQ sourcing requests, and an administrative moderation dashboard.',
        techStack: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS v4',
          'Prisma ORM 7',
          'Neon PostgreSQL',
          'NextAuth.js v5',
          'Resend',
          'Cloudinary',
          'Vercel Edge'
        ],
        features: [
          '3 Dedicated Catalogs: Analytical Equipment, Spare Parts & Consumables, and New Instruments',
          'Strict Admin Moderation & Approval workflow with instant email dispatch for pending items',
          '100/100 Desktop & 99/100 Mobile PageSpeed score with zero-skeleton React Server Components',
          'Dynamic multi-dimensional search by category, condition grade, price range, and availability',
          'Automated dynamic sitemaps (/sitemap.xml) and robots.txt configured for organic search indexing'
        ],
        metrics: [
          { label: 'PageSpeed Score', value: '100 / 100' },
          { label: 'Web Framework', value: 'Next.js 16' },
          { label: 'Database', value: 'Neon Postgres' }
        ],
        liveUrl: 'https://surplus.labmatrixindia.com'
      },
      {
        type: 'Mobile Application',
        title: 'Cross-Platform Mobile Marketplace App',
        platformBadge: 'React Native • Expo SDK 58 • EAS',
        description: 'A native iOS and Android application with fluid gesture interactions, hardware-backed authentication, direct camera-to-cloud listing workflows, and lead management.',
        techStack: [
          'React Native 0.88',
          'React 19',
          'Expo SDK 58',
          'Expo Router',
          'TanStack Query',
          'Axios',
          'Expo SecureStore',
          'EAS Build'
        ],
        features: [
          'Multi-step listing creation with native camera/gallery picker and multipart Cloudinary uploads',
          'Bidirectional Inquiry & Quote Management tracking received leads and sent RFQ proposals',
          'Hardware-backed credential encryption via Expo SecureStore (iOS Keychain & Android Keystore)',
          'Real-time RFQ matching allowing sellers to fulfill open buyer requirements with 1 tap',
          'EAS cloud build configuration ready for Google Play (AAB) and Apple App Store (IPA)'
        ],
        metrics: [
          { label: 'Framework', value: 'React Native 0.88' },
          { label: 'Runtime', value: 'Expo SDK 58' },
          { label: 'Platforms', value: 'iOS & Android' }
        ],
        liveUrl: 'https://surplus.labmatrixindia.com'
      }
    ]
  }
];
