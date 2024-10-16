import { Inter as FontSans, Poppins } from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const fontPoppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  subsets: ['latin'],
});
