import type { Metadata } from 'next';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/dist/tippy.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "@/styles/index.scss";

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import { GoogleAnalytics } from '@/utils/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Lava Pools',
  description: 'Boost infrastructure for your favourite chain, earn rewards.',
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <body>

      <GoogleAnalytics />

      <Header />

      <main className="c-main">
        {children}
      </main>

      <Footer />

      </body>

    </html>
  );
}
