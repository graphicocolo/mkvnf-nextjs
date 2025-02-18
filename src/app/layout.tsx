import Link from 'next/link';

import { Toaster } from '@/components/ui/toaster';

// import TanstackQueryProvider from '@/app/_libs/tanstackProvider';
import { ThemeProvider } from '@/app/context/ThemeContext';

import type { Metadata } from 'next';

import '@/app/globals.css';

export const metadata: Metadata = {
  title: '',
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ThemeProvider>
      <html lang="ja">
        {/* <TanstackQueryProvider> */}
        <body>
          <header className="border-b bg-gray-100">
            <div className="md:flex md:justify-between md:align-middle">
              <div className="p-2 text-xl md:w-48 md:p-5">
                <Link href="/">テストサイト</Link>
              </div>
              <div className="p-2 md:p-5">
                <ul className="md:flex">
                  <li className="md:mr-4">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/posts">Posts List</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/sampletanstack1">TanStack Query サンプル1 コンポーネントを分割してCRUD</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/sampleshadcnui">Shadcn UI サンプル</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/sampleimages">Image コンポーネントサンプル</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/samplecontextapi">Context API サンプル</Link>
                  </li>
                  <li className="md:mr-4">
                    <Link href="/sampleenv">env 表示サンプル</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          {/* <main className="flex min-h-screen flex-col items-center justify-between p-5">{children}</main> */}
          <main className="p-3 md:flex md:flex-col md:items-center md:justify-between">{children}</main>
          <Toaster />
          <footer>
            <p className="border-t p-3 text-center">&copy;テストサイト</p>
          </footer>
        </body>
        {/* </TanstackQueryProvider> */}
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
