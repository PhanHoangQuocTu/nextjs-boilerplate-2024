export const isProduction = process.env.NODE_ENV === 'production';

export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || '',
  API_URL: process.env.NEXT_PUBLIC_API_URL || '',
};

export const IMAGE_TYPE = ['png', 'jpg', 'jpeg', 'webp', 'svg'];
export const VIDEO_TYPE = ['mp4', 'mov', 'webm', 'ogg', 'wmv'];
