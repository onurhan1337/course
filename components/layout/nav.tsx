"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export interface HeaderItem {
    label: string
    href: string
    children?: HeaderItem[]
}

interface HeaderItemProps {
    items: HeaderItem[]
}

const HeaderNav = ({ items }: HeaderItemProps) => {
    return (
        <nav className='flex gap-4 lg:gap-6 xl:gap-8'>
            {items.map((item) => (
                <div key={item.label} className='group relative'>
                    {item.children ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button className='inline-flex items-center gap-1 font-normal text-gray-600 no-underline transition-all'>
                                    {item.label}
                                    <ChevronDown
                                        size={16}
                                        className='inline-block'
                                    />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                {item.children.map((child) => (
                                    <Link key={child.label} href={child.href}>
                                        <DropdownMenuItem className='group block cursor-pointer rounded-md p-2 text-gray-600 no-underline transition-all hover:bg-gray-100 hover:text-gray-800'>
                                            {child.label}
                                        </DropdownMenuItem>
                                    </Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link
                            href={item.href}
                            className='font-normal text-gray-600 no-underline transition-all hover:text-gray-800'
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    )
}

export default HeaderNav
