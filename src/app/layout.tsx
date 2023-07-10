import "./globals.css";
import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";

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
    <html lang="en">
      <body className={comfortaa.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
