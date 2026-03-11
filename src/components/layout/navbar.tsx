import Image from 'next/image'
import MenuItems from './menuItems'
import Link from 'next/link'
import MobileMenu from './mobile-menu'
import { menuItems } from '@/constants/global'

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 py-5 px-[4%] flex items-center justify-between relative">
      <Link href={'/'}>
        <Image
          src={'/icon-large.svg'}
          alt="logo"
          height={25}
          width={100}
          className="invert-70 hidden md:block"
        />
        <Image
          src={'/icon-small.svg'}
          alt="logo"
          height={25}
          width={25}
          className="invert-30 block md:hidden"
        />
      </Link>

      <MenuItems />

      <MobileMenu menuItems={menuItems} />
    </nav>
  )
}

export default Navbar
