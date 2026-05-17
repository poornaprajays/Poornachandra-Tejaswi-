import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { AtmosphereLayers } from "@/features/atmosphere/AtmosphereLayers";
import { SiteNavigation } from "@/components/navigation/SiteNavigation";

export const metadata: Metadata = {
  title: "Poornachandra Tejaswi | Monsoon Literary Archive",
  description:
    "An immersive cinematic archive dedicated to the forests, literature, curiosity, and world of Poornachandra Tejaswi."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="kn" suppressHydrationWarning>
      <body>
        <AppProviders>
          <AtmosphereLayers />
          <SiteNavigation />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
