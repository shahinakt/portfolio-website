import type { Metadata, Viewport } from "next";
import "./globals.css";
import { JsonLd } from "../components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  AUTHOR_NAME,
  AUTHOR_ROLE,
  OG_IMAGE,
} from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${AUTHOR_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
  "Shahina Sareen KT",
  "Backend Developer",
  "Backend Software Engineer",
  "Python Developer",
  "FastAPI",
  "REST API",
  "Software Engineer",
  "Full Stack Developer",
  "PostgreSQL",
  "MongoDB",
  "Database Design",
  "API Development",
  "System Design",
  "React",
  "Next.js",
  "TypeScript",
  "Portfolio",
],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${AUTHOR_NAME} | ${AUTHOR_ROLE}`,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${AUTHOR_NAME} | ${AUTHOR_ROLE}`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className="font-sans transition-colors duration-300">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}