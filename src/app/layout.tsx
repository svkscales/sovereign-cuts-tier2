import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sovereign Cuts | Precision. Mastery.",
  description: "Premium Barber Brand - Sovereign Cuts",
};

import { BasketProvider } from "@/context/BasketContext";
import BasketOverlay from "@/components/BasketOverlay";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans overflow-x-hidden">
        <BasketProvider>
          {children}
          <BasketOverlay />
        </BasketProvider>
      </body>
    </html>
  );
}
