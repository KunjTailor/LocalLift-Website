import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: '/',
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#F8FAFC',
    theme_color: '#0F172A',
    lang: 'en-US',
    categories: ['business', 'design'],
    icons: [
      {
        src: '/icon.png',
        sizes: '1024x1024',
        type: 'image/png',
      },
    ],
  };
}
