import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";

const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hash",
  description: "An online forum for the nigerian community",
};

export default function RootLayout({
  children,
}: // authModal,
{
  children: React.ReactNode;
  // authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900", comfortaa.className)}
    >
      <Providers>
        <body className="min-h-screen pt-12 bg-slate-50">
          <Navbar />
          {/* {authModal} */}
          <main className="container max-w-7xl mx-auto h-full pt-12">
            {children}
          </main>
          <Toaster />
        </body>
      </Providers>
    </html>
  );
}
