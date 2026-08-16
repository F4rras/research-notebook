import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import ReadingProgress from "@/components/article/ReadingProgress";
// @ts-ignore: side-effect import may not have type declarations
import "@fontsource/jetbrains-mono";
import CommandPalette from "@/components/CommandPalette";
import CommandMenu from "@/components/Search/CommandMenu";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title: "Research Notebook",
  // description: "A place where curiosity becomes research.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000"
  ),

  title: {
    default: "Research Notebook",
    template: "%s | Research Notebook",

  },

  description:
    "A research notebook about AI, Mathematics, Engineering, and Programming.",

  authors: [
    {
      name: "Farras",
    },
  ],

  keywords: [
    "AI",
    "Research",
    "Machine Learning",
    "Monte Carlo",
    "Engineering",
  ],

  creator: "Farras",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReadingProgress />
        <CommandPalette />
        <CommandMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}