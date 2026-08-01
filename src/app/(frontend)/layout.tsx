import type { Metadata } from "next";
import { Karla, Tenor_Sans } from "next/font/google";
// @ts-ignore css file path is correct but still showing error
import "../globals.css";
import Navbar from "@/components/layout/navbar";
import { SanityLive } from "@/sanity/lib/live";
import Footer from "@/components/layout/footer";
import NewsletterForm from "@/components/forms/newsletter-form";
import ProviderWrapper from "@/components/providers/provider-wrapper";

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
    <html>
      <body
        className={`min-h-screen flex flex-col font-body-sm text-on-surface ${karla.variable} ${tenorSans.variable} antialiased`}
      >
        <ProviderWrapper>
          <Navbar />
          <main className="flex flex-col app-container pt-12 pb-10 mt-8 md:mt-12">
            {/* <Bradcrumb /> */}
            {children}
            <SanityLive />
          </main>
          <NewsletterForm />
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
