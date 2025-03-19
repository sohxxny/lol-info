import type { Metadata } from 'next';
import '../styles/globals.css';
import { Header } from '@/components/layout/header';
import { QueryProvider } from '@/tanstack/provider';
import { ThemeButton } from '@/components/common/theme-button';
import { ThemeProvider } from 'next-themes';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`flex flex-col antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <QueryProvider>
            <header className="fixed flex w-full justify-center bg-background shadow-lg">
              <Header />
            </header>
            <main className="w-full p-[50px] pt-[100px]">{children}</main>
            <ThemeButton className="fixed right-5 top-20" />
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
