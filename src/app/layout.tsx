import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SITE_URL, siteConfig } from "@/config/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EXPANDE+ | Marketing y Soluciones Digitales",
  description: siteConfig.longDescription,
  applicationName: "EXPANDE+",
  keywords: ["marketing digital", "desarrollo web", "inteligencia artificial", "automatización", "redes sociales", "México"],
  authors: [{ name: "EXPANDE+" }],
  openGraph: {
    title: "EXPANDE+ | Marketing y Soluciones Digitales",
    description: siteConfig.longDescription,
    type: "website",
    locale: "es_MX",
    images: [{ url: "/expande-plus/brand-banner.png", width: 3513, height: 1008, alt: "EXPANDE+ — Agencia de marketing digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXPANDE+ | Marketing y Soluciones Digitales",
    description: siteConfig.longDescription,
    images: ["/expande-plus/brand-banner.png"],
  },
  icons: {
    icon: "/expande-plus/app-icon-light.png",
    apple: "/expande-plus/app-icon-light.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#06070b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={geist.variable}><body>{children}</body></html>;
}
