import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "OmniGraph AI Suite",
  description: "The OS for Corporate Knowledge & Value",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-[#0f172a] bg-white min-h-screen selection:bg-blue-100 selection:text-blue-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
