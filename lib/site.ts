import type { LucideIcon } from 'lucide-react';
import {
  FileCheck2,
  Handshake,
  LayoutTemplate,
  MessageSquareText,
  MonitorSmartphone,
  MousePointerClick,
  Paintbrush,
  Rocket,
} from 'lucide-react';

export const siteConfig = {
  name: 'LocalLift Studios',
  shortName: 'LocalLift',
  url: 'https://www.localliftstudios.com',
  email: 'team@localliftstudios.com',
  location: 'Downingtown, Pennsylvania',
  calendlyUrl: 'https://calendly.com/localliftstudio/quick-intro-call',
  description:
    'Professional websites for local businesses. $500 flat, with no required monthly LocalLift fees.',
} as const;

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/contact' },
] as const;

export const websiteOffer = {
  name: 'Professional Website',
  price: 500,
  priceLabel: '$500',
  cadence: 'One-time project fee',
  pageLimit: 'Up to 5 core pages',
  inclusions: [
    'Up to 5 core pages',
    'Custom professional design',
    'Mobile-responsive layout',
    'Home page',
    'Services page(s) within the 5-page limit',
    'About page',
    'Gallery or projects page when selected',
    'Contact page with form setup',
    'Click-to-call functionality',
    'Basic local SEO setup',
    'Basic on-page SEO structure',
    'Domain connection during launch',
    'Two reasonable revision rounds',
    'Final launch and handoff',
    'Client ownership after final payment',
  ],
  thirdPartyDisclosure:
    'Domain registration, paid hosting, premium software, and other third-party services are not included in the $500 project fee unless explicitly stated in writing.',
  separateQuote:
    'Significantly larger sites, e-commerce, advanced booking systems, custom applications, databases, memberships, and complex integrations require a separate quote.',
} as const;

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const benefits: Benefit[] = [
  {
    title: 'Professional Design',
    description:
      'A modern design shaped around your services, brand, and the details that make your business credible.',
    icon: Paintbrush,
  },
  {
    title: 'Mobile First',
    description:
      'Clear, fast layouts that make it easy to browse, call, and request a quote from a phone.',
    icon: MonitorSmartphone,
  },
  {
    title: 'Built for Inquiries',
    description:
      'Prominent calls to action, useful service information, click-to-call links, and a straightforward contact form.',
    icon: MousePointerClick,
  },
  {
    title: 'You Own It',
    description:
      'After completion and final payment, we hand over the website and agreed access. No required LocalLift plan.',
    icon: Handshake,
  },
];

export interface ProcessStep {
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  {
    title: '1. Free Website Review',
    shortTitle: 'Free Website Review',
    description:
      'We learn about your business, review your existing website if you have one, and determine what the new site needs.',
    icon: MessageSquareText,
  },
  {
    title: '2. We Build',
    shortTitle: 'We Build',
    description:
      'We design and develop your new website around your services, brand, photos, and business goals.',
    icon: LayoutTemplate,
  },
  {
    title: '3. You Review',
    shortTitle: 'You Review',
    description:
      'You review the finished site and request changes during the two included reasonable revision rounds.',
    icon: FileCheck2,
  },
  {
    title: '4. Launch & Handoff',
    shortTitle: 'Launch & Handoff',
    description:
      'Once approved and paid for, we launch the website and transfer the agreed ownership, files, and access to you.',
    icon: Rocket,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'Do I own my website?',
    answer:
      'Yes. Once the project is completed and the final project balance has been paid, we provide the website and necessary access or files according to the agreed handoff method. LocalLift does not require an ongoing subscription.',
  },
  {
    question: 'What happens after the website is finished?',
    answer:
      'After launch and handoff, you control the website. You can maintain it yourself, hire someone else, or contact us separately for future work if needed.',
  },
  {
    question: 'Do I have to pay LocalLift every month?',
    answer:
      'No. The standard website build is a $500 one-time project fee. There is no required LocalLift monthly plan.',
  },
  {
    question: 'Who pays for the domain and hosting?',
    answer:
      'The client is responsible for domain registration and any third-party hosting or software costs associated with the website. We can help connect and configure these services during launch.',
  },
  {
    question: 'Can you make changes later?',
    answer:
      'Yes, depending on availability. Future redesigns, new pages, or other work can be quoted separately. There is no required maintenance contract.',
  },
  {
    question: 'How long does a website take?',
    answer:
      'Most standard projects are targeted for completion within approximately 2–4 weeks after we receive the content, photos, branding, and business information needed for the build.',
  },
  {
    question: 'How many revisions are included?',
    answer: 'Two reasonable revision rounds are included before final handoff.',
  },
  {
    question: 'What do I need to provide?',
    answer:
      'You should provide accurate business and service information, contact details, your logo or branding if available, and photos you have permission to use.',
  },
];

export const portfolioProjects = [
  {
    title: 'Oak & Stone',
    category: 'Kitchen & Bath',
    label: 'Concept Build',
    image: '/images/oak-stone-concept.webp',
    imageAlt: 'Oak & Stone kitchen and bath concept website shown in a browser frame',
    href: 'https://oak-and-stone.vercel.app/',
    brief:
      'A demonstration for a high-end remodeling studio, designed to present services and project imagery with a polished editorial feel.',
    highlights: ['Clear service hierarchy', 'Project-focused visual layout', 'Mobile quote pathways'],
  },
  {
    title: 'Brandywine Landscaping & Hardscaping',
    category: 'Landscaping',
    label: 'Concept Build',
    image: '/images/brandywine-concept.webp',
    imageAlt: 'Brandywine landscaping concept website shown in a browser frame',
    href: 'https://brandywine-landscaping.vercel.app/',
    brief:
      'A demonstration of how a landscaping company can organize multiple services, project visuals, and quote actions without clutter.',
    highlights: ['Service-led navigation', 'Project gallery treatment', 'Prominent quote actions'],
  },
  {
    title: 'Shine & Shield',
    category: 'Auto Detailing',
    label: 'Concept Build',
    image: '/images/shine-shield-concept.webp',
    imageAlt: 'Shine and Shield auto detailing concept website shown in a browser frame',
    href: 'https://demo-shine-and-shield.vercel.app/',
    brief:
      'A demonstration landing page for a mobile detailing business, focused on packages, trust details, and simple booking paths.',
    highlights: ['Focused landing-page flow', 'Mobile-friendly service choices', 'Simple booking pathways'],
  },
] as const;

export const publicRoutes = [
  '/',
  '/work',
  '/pricing',
  '/how-it-works',
  '/about',
  '/free-review',
  '/contact',
  '/privacy',
  '/terms',
  '/cookie-policy',
] as const;
