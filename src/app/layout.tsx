import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { QueryProvider } from '@/tanstack/provider';

export const metadata: Metadata = {
  title: 'LOL 가이드',
  description:
    '리그 오브 레전드의 모든 챔피언과 아이템에 대한 정보를 확인해보세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col antialiased`}>
        <QueryProvider>
          <header className="w-full shadow-lg">
            <Header />
          </header>
          <main className="w-full p-[50px]">{children}</main>
          <footer className="fixed bottom-0 w-full">
            <Footer />
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
