"use client";

import { slugify } from "@/lib/formatter";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Bradcrumb = () => {
  const paths = usePathname();
  const pathnames = paths.split("/");

  if (paths == "/") {
    return null;
  }
  return (
    <>
      <nav
        className="w-fit flex p-3 mb-6 bg-zinc-900 border border-zinc-600 rounded-md"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center ">
          {pathnames.map((item, index) => {
            const isLast = index === pathnames.length - 1;
            return (
              <li className="flex items-center group" key={item}>
                <Link
                  href={`/${slugify({ content: item })}`}
                  className={`inline-flex items-center text-sm font-medium capitalize ${isLast ? "text-yellow-500" : "text-zinc-200"}`}
                >
                  {item === "" ? "home" : item}
                </Link>
                <svg
                  className="w-3.5 h-3.5 rtl:rotate-180 group-last:hidden mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m9 5 7 7-7 7"
                  />
                </svg>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Bradcrumb;
