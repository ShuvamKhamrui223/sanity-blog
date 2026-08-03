import Image from "next/image";
import MenuItems from "./menuItems";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { menuItems } from "@/constants/global";
import { Show, UserButton } from "@clerk/nextjs";
import SignInButton from "../buttons/sign-in-button";
import SignUpButton from "../buttons/sign-up-button";
import Logo from "../ui/Logo";
import { auth } from "@clerk/nextjs/server";

const Navbar = () => {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center app-container py-4 md:py-6 relative">
        <Logo />

        <MenuItems />
        <div className="hidden md:flex items-center gap-4">
          <Show when="signed-out">
            <SignInButton />
            <SignUpButton />
          </Show>
          <Show when="signed-in">
            <UserTierBadge />
            <UserButton />
          </Show>
        </div>
        <MobileMenu menuItems={menuItems} />
      </nav>
    </header>
  );
};

export default Navbar;

const UserTierBadge = async () => {
  const { has } = await auth();
  const isProMember = has({ plan: "pro_tier" });
  if (isProMember) {
    return (
      <div className="bg-amber-600 text-on-primary-container px-2 py-1 rounded-full text-xs font-medium">
        {isProMember ? "Pro Member" : "Free Member"}
      </div>
    );
  } else {
    return (
      <div className="bg-primary-container text-on-primary-container px-2 py-1 rounded-full text-xs font-medium">
        {isProMember ? "Pro Member" : "Free Member"}
      </div>
    );
  }
};
