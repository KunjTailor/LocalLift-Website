import type { MetadataRoute } from 'next';
import { publicRoutes, siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
  }));
}
