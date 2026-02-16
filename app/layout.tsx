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
  title: "Proyecta - Inversión en Bienes Raíces en Florida | proyectafl.com",
  description: "Invierte en Bienes Raíces en los Estados Unidos y diversifica tu patrimonio en Dólares. Solución integral para una inversión confiable, rentable y segura. Rent to Own en LaBelle y Lehigh Acres.",
  keywords: ["proyecta", "proyectafl", "real estate Florida", "rent to own", "LaBelle", "Lehigh Acres", "inversión bienes raíces"],
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
