import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar } from "./_components/navbar";

const inter = Fira_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <section>{children}</section>
        </body>
      </html>
    </ClerkProvider>
  );
}
