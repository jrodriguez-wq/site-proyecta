import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Proyecta Business Group - Inversión en Bienes Raíces en Estados Unidos",
  description: "Invierte en Bienes Raíces en los Estados Unidos y diversifica tu patrimonio en Dólares. Solución integral para una inversión confiable, rentable y segura.",
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
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
