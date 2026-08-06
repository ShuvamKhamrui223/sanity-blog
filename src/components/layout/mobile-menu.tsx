"use client";

import { MenuItem } from "@/types/global";

import { Close, Menu } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, startTransition, Suspense } from "react";
import SignUpButton from "../buttons/sign-up-button";
import SignInButton from "../buttons/sign-in-button";
import { ClerkLoaded, Show, UserButton } from "@clerk/nextjs";

const MobileMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname();

  function handleMenuIconOpen() {
    startTransition(() => {
      setisOpen((prev) => !prev);
    });
  }
  return (
    <>
      <button className="cursor-pointer md:hidden" onClick={handleMenuIconOpen}>
        <Menu />
      </button>

      <aside
        className={`fixed top-0 right-0 z-50 md:hidden bg-surface-container transition-discrete duration-100 py-6 flex flex-col ${isOpen ? "w-10/12" : "w-0 hidden"} h-full px-4`}
      >
        <button
          className="cursor-pointer self-end mb-5 mr-5 hover:brightness-50"
          onClick={handleMenuIconOpen}
        >
          <Close />
        </button>
        <div className="flex items-center gap-4">
          <ClerkLoaded>
            <Show when="signed-out">
              <SignUpButton />
              <SignInButton />
            </Show>
            <div className="flex items-center gap-2">
              <Show when={"signed-in"}>
                <UserButton />
              </Show>
            </div>
          </ClerkLoaded>
        </div>
        <ul className="flex flex-col">
          {menuItems.map((item) =>
            item.isVisible ? (
              <li
                className={`capitalize text-lg px-4 py-2 ${pathname === item.path ? "text-yellow-600 bg-yellow-500/10 border-l-4 border-l-yellow-500" : "text-zinc-600"}`}
                key={item.label}
              >
                <Link href={item.path} onNavigate={handleMenuIconOpen}>
                  {item.label}
                </Link>
              </li>
            ) : null,
          )}
        </ul>{" "}
      </aside>
    </>
  );
};

export default MobileMenu;
