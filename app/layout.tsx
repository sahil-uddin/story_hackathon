import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} pb-4`}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import { ConnectKitButton } from "@/components/wrappers/ConnectKitBtn"; // Updated path here
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-2 px-4 font-anton bg-slate-700">
      <div>
        <p className="text-4xl font-bold">IPSwap</p>
      </div>
      <nav>
        <Link className="btn btn-link text-xl text-primary" href="/">
          Home
        </Link>
        <Link className="btn btn-link text-xl text-primary" href="/create">
          Create
        </Link>
        <Link className="btn btn-link text-xl text-primary" href="/proposal">
          Proposal
        </Link>
      </nav>
      <div>
        <ConnectKitButton />
      </div>
    </header>
  );
}