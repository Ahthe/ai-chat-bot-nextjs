import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "AhtheGPT Chatbot",
  description: "My personal chatbot assisten",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-full text-white">{children}</main>
        </body>
    </html>
  );
}
