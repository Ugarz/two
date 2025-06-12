import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ugo Arzur personal Website",
  description: "My personal website build with Next.js and Shadcn UI",
  applicationName: "Ugo Arzur personal Website",
  keywords: ["website", "software engineer", "developer", "portfolio"],
  creator: "Ugo Arzur",
  publisher: "Vercel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ugo Arzur personal Website",
    description: "My personal website build with Next.js and Shadcn UI",
    url: "https://ugoarzur.fr",
    siteName: "Ugo Arzur",
    type: "website",
    locale: "en_US",
    ttl: 60,
    alternateLocale: "fr_FR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
