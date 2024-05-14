import '@/app/ui/global.css';
import { inter, lusitana, roboto_mono } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lusitana.variable} ${roboto_mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
