'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'

import {menuItems} from '@/constants/global'

const MenuItems = () => {
  const pathname = usePathname()

  return (
    <ul className="hidden md:flex gap-4 items-center">
      {menuItems.map((item) =>
        item.isVisible ? (
          <li
            className={`capitalize text-sm ${pathname === item.path ? 'text-yellow-500' : 'text-zinc-300'}`}
            key={item.label}
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ) : null,
      )}
    </ul>
  )
}

export default MenuItems
