import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Fragment } from 'react';

export interface HeaderItem {
  label: string;
  href: string;
  children?: HeaderItem[];
}

interface HeaderItemProps {
  items: HeaderItem[];
}

const HeaderNav = ({ items }: HeaderItemProps) => {
  return (
    <nav className="flex gap-4 lg:gap-6 xl:gap-8">
      {items.map((item) => (
        <div key={item.label} className="group relative">
          {item.children ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="inline-flex items-center gap-1 font-normal text-gray-600 no-underline transition-all">
                  {item.label}
                  <ChevronDown size={16} className="inline-block" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.children.map((child) => (
                  <Fragment key={child.label}>
                    <Link href={child.href}>
                      <DropdownMenuItem className="group block cursor-pointer rounded-md p-2 text-gray-600 no-underline transition-all hover:bg-gray-100 hover:text-gray-800">
                        {child.label}
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem className="group block cursor-pointer rounded-md p-2 text-gray-600 no-underline transition-all hover:bg-gray-100 hover:text-gray-800">
                      <form method="POST" action="/auth/signout">
                        <button type="submit" className="w-full text-left">
                          Sign Out
                        </button>
                      </form>
                    </DropdownMenuItem>
                  </Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href={item.href}
              className="font-normal text-gray-600 no-underline transition-all hover:text-gray-800"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default HeaderNav;
