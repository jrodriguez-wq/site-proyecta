import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/config/contact";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Proyecta - Real Estate Investment in Florida | proyectafl.com",
  description: "Invest in real estate in the United States and diversify your portfolio in dollars. Full solution for a reliable, profitable and secure investment. Rent to Own in LaBelle and Lehigh Acres.",
  keywords: ["proyecta", "proyectafl", "real estate Florida", "rent to own", "LaBelle", "Lehigh Acres", "real estate investment", "new construction homes Florida"],
  openGraph: {
    url: SITE_URL,
    siteName: "Proyecta",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
