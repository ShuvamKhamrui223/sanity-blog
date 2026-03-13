import type { Metadata } from "next";
import { Karla, Tenor_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import { SanityLive } from "@/sanity/lib/live";
import Bradcrumb from "@/components/layout/bradcrumb";

const karla = Karla({
  variable: "--karla",
  subsets: ["latin"],
});
const tenorSans = Tenor_Sans({
  weight: "400",
  variable: "--tenor-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    template: `%s | Blogly`,
    absolute: "Blogly - place for endless knowledge",
  },
  description:
    "Blogly offers blogs in variety of differnet categories to you to consume as a reader or share as a writer",
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.variable} ${tenorSans.variable} antialiased`}>
        <Navbar />
        <main className="min-h-screen flex flex-col px-[4%] py-10">
          <Bradcrumb />
          {children}
          <SanityLive />
        </main>
      </body>
    </html>
  );
}
