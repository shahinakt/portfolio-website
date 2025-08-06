import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahina - Portfolio",
  description: "Minimal, modern dev portfolio template built with Next.js, Tailwind CSS, Typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="font-sans bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
