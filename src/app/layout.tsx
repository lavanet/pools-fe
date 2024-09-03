import type { Metadata } from 'next';
import "@/styles/index.scss";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@/contexts';
import { Container } from '@mui/material';

import { Footer } from '@/components/common/Footer';
import { Header } from '@/components/common/Header';

export const metadata: Metadata = {
  title: 'LAVA Incentive Pools',
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
    <ThemeProvider>

      <body>

      <CssBaseline />

      <Header />

      <main>
        <Container maxWidth={false}>
          <Container maxWidth="xl">
            {children}
          </Container>
        </Container>
      </main>

      <Footer />

      </body>

    </ThemeProvider>

    </html>
  );
}
