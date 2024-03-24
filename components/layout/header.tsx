'use client';

import Image from 'next/image';
import Link from 'next/link';

import HeaderNav, { type HeaderItem } from './nav';

const HEADER_ITEMS: HeaderItem[] = [
  { label: 'Videos', href: '/videos' },
  { label: 'Vault', href: '/about' },
  {
    label: 'Account',
    href: '/settings',
    children: [
      { label: 'Settings', href: '/settings' },
      { label: 'Logout', href: '/logout' },
    ],
  },
];

const Header = () => {
  return (
    <header className="text-gray-1200 mx-auto flex max-w-[1144px] items-center justify-between px-4 py-12 antialiased md:mb-12 md:px-6">
      <Link
        href="/"
        className="text-gray-1200 flex items-center gap-2 font-medium no-underline"
      >
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
      </Link>

      <HeaderNav items={HEADER_ITEMS} />
    </header>
  );
};

export default Header;
