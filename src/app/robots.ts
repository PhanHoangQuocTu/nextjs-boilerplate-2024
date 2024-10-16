import { type MetadataRoute } from 'next';
import { env } from '@/utils/const';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${env.APP_URL}/sitemap.xml`,
  };
}
