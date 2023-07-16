import { cn } from "@/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Navbar } from "../components/Navbar";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hash",
  description: "Social media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900", comfortaa.className)}
    >
      <body className="min-h-screen pt-12 bg-slate-50">
        <Navbar />
        <main className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </main>
      </body>
    </html>
  );
}
