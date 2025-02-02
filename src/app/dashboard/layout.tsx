import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="md:m-auto md:w-full md:text-center">
      <ul className="md:flex md:justify-end">
        <li className="md:mr-4">
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Settings</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default DashboardLayout;
