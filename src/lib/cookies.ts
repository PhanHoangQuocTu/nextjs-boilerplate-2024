import type { NextPageContext } from 'next';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

export const getCookies = (key: string, ctx?: Pick<NextPageContext, 'req'>) => {
  const cookie = parseCookies(ctx);
  return cookie[key];
};

export const setCookies = (key: string, value: string) => {
  setCookie(null, key, value, {
    // maxAge: 30 * 24 * 60 * 60,
    path: '/',
    sameSite: 'strict',
    secure: true,
  });
};

export const removeCookies = (key: string) => {
  destroyCookie(null, key, {
    path: '/',
  });
};
