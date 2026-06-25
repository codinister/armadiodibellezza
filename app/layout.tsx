import QueriesProvider from '@/state/query/QueriesProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Roboto, Geist } from 'next/font/google';
import StoreProvider from '@/state/redux/StoreProvider';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'CODENESTA',
  description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
  `,

  metadataBase: new URL('https://codenesta.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'CODENESTA',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
    `,
    url: 'https://codenesta.com',
    siteName: 'CODENESTA',
    images: [
      {
        url: '', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'Codenesta logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CODENESTA',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.`,
    images: [''],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-qb-installed="true"
      suppressHydrationWarning={true}
      className={cn(roboto.className, "font-sans", geist.variable)}
    >
      <body cz-shortcut-listen="true">
        <StoreProvider>
          <QueriesProvider>{children}</QueriesProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
