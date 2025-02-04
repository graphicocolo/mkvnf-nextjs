import Link from 'next/link';

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
    <html lang="ja">
      <body>
        <header className="border-b bg-gray-100">
          <div className="md:flex md:justify-between md:align-middle">
            <div className="p-2 text-xl md:p-5">
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
                <li>
                  <Link href="/posts">Posts List</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* <main className="flex min-h-screen flex-col items-center justify-between p-5">{children}</main> */}
        <main className="p-3 md:flex md:flex-col md:items-center md:justify-between">{children}</main>
        <footer>
          <p className="border-t p-3 text-center">&copy;テストサイト</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
