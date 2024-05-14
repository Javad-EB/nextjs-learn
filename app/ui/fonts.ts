import { Inter, Lusitana, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-lusitana',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-roboto-mono',
});
