import { env } from '@/utils/const';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'next.js boilerplate',
  metaTitle: 'next.js boilerplate',
  description: 'next.js boilerplate',
  ogImage: `${env.APP_URL}/og-image.png`,
};
