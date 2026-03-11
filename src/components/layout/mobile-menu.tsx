'use client'

import { MenuItem } from '@/types/global'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useState, startTransition} from 'react'

const MobileMenu = ({menuItems}: {menuItems: MenuItem[]}) => {
  const [isOpen, setisOpen] = useState(false)
  const pathname = usePathname()

  function handleMenuIconOpen() {
    startTransition(() => {
      setisOpen((prev) => !prev)
    })
  }
  return (
    <>
      <Image
        src={'menu.svg'}
        alt="menu icon"
        width={20}
        height={20}
        className="invert cursor-pointer  md:hidden"
        onClick={handleMenuIconOpen}
      />

      <aside
        className={`fixed top-0 right-0 z-50 md:hidden bg-zinc-900 transition-discrete duration-100 py-6 flex flex-col ${isOpen ? 'w-10/12' : 'w-0 hidden'} h-full`}
      >
        <Image
          src={'close.svg'}
          alt="menu icon"
          width={20}
          height={20}
          className="invert cursor-pointer self-end mb-5 mr-5 hover:brightness-50"
          onClick={handleMenuIconOpen}
        />
        <ul className="flex flex-col">
          {menuItems.map((item) =>
            item.isVisible ? (
              <li
                className={`capitalize text-lg px-4 py-2 ${pathname === item.path ? 'text-yellow-500 bg-yellow-500/10 border-l-4 border-l-yellow-500' : 'text-zinc-300'}`}
                key={item.label}
              >
                <Link href={item.path} onNavigate={handleMenuIconOpen}>{item.label}</Link>
              </li>
            ) : null,
          )}
        </ul>{' '}
      </aside>
    </>
  )
}

export default MobileMenu
