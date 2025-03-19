import { GoogleAnalytics } from '@next/third-parties/google';
import { Noto_Sans_KR } from "next/font/google";
import { Header } from './layout/Header/Header';
import { Sidebar } from './layout/Sidebar/Sidebar';
import { Footer } from './layout/Footer/Footer';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { SkipLink } from './components/SkipLink/SkipLink';
import { MenuItem } from '@/interfaces/menu.interface';
import { getMenu } from '@/api/menu';
import { Up } from './components/Up/Up';
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ['100', '200', '400', '600', '700', '800'],
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const menu = await getMenu(TopLevelCategory.Courses);

  return (
    <html lang="en">
      <body className={`${notoSansKR.variable}`}>
        <GoogleAnalytics gaId={'G-XYZ'} />
        <div className={'wrapper'}>
          <SkipLink />
          <Header menu={menu as MenuItem[]} firstCategory={TopLevelCategory.Courses} className={'header'} />
          <Sidebar menu={menu as MenuItem[]} firstCategory={TopLevelCategory.Courses} className={'sidebar'} />
          <main className={'body'} role='main'>
            {children}
          </main>
          <Footer className={'footer'} />
          <Up />
        </div>
      </body>
    </html>
  );
}

