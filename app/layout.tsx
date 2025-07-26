import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

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
  title: "rKivee - GitHub for Creative Teams",
  description: "rKivee is a platform that allows creative teams to collaborate on projects and manage their assets.",
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
      <GoogleAnalytics gaId="G-ELBPDQCX2Q" />
      <GoogleTagManager gtmId="G-ELBPDQCX2Q" />

          {children}
      </body>
    </html>
  );
}
