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
  title: "Vorn Odom main",
  description: "Software Engineer main",
  openGraph: {
    title: "Vorn Odom open graph",
    description: "Software Engineer open graph",
    url: "https://metadata-git-main-vornodoms-projects.vercel.app",
    siteName: "vorn.dev",
    images: [
      {
        url: "https://metadata-git-main-vornodoms-projects.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vorn Odom",
      },
    ],
    locale: "en_US",
    type: "website",
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
