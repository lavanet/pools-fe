import type { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';

import { ThemeProvider } from '@/contexts';
import { Footer, Header } from '@/modules';

export const metadata: Metadata = {
  title: 'LAVA Incentive Pools',
  description: 'Boost infrastructure for your favourite chain, earn rewards.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Container maxWidth="xl">
            <CssBaseline />

            <Header />
            <main>{children}</main>
            <Footer />
          </Container>
        </body>
      </ThemeProvider>
    </html>
  );
}
