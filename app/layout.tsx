import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/providers/global-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Inter({  // Using Inter as fallback, but we'll use CSS import
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLEX — AI 3D Builder",
  description: "Generate 3D scenes using AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full dark`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}