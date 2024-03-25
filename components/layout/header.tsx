import Image from 'next/image';
import Link from 'next/link';

import { createClient } from '@/lib/supabase/server';
import HeaderNav, { type HeaderItem } from './nav';

const HEADER_ITEMS: HeaderItem[] = [
  { label: 'Videos', href: '/videos' },
  { label: 'Vault', href: '/about' },
  {
    label: 'Account',
    href: '/settings',
    children: [{ label: 'Settings', href: '/settings' }],
  },
];

const Header = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="text-gray-1200 mx-auto flex max-w-[1144px] items-center justify-between px-4 py-12 antialiased md:mb-12 md:px-6">
      <Link
        href="/"
        className="text-gray-1200 flex items-center gap-2 font-medium no-underline"
      >
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
      </Link>

      {user && <HeaderNav items={HEADER_ITEMS} />}
    </header>
  );
};

export default Header;
