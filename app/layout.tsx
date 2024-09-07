/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundComponent from './features/background/background-component'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RES Potential",
  description: "Calculate RES potential in chosen space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundComponent />
        {children}
      </body>
    </html>
  );
}
