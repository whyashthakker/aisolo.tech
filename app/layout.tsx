import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AISOLO Technologies - Privacy-First AI Solutions & Education | Mumbai, India",
  description: "Mumbai-based AI company building privacy-first solutions and democratizing AI education. Offering AI Maker Bootcamp, custom AI development, and products like bgblur.com and olly.social. Founded by Yash Thakker.",
  keywords: "AI company Mumbai, privacy-first AI, AI education India, AI Maker Bootcamp, AI training Mumbai, bgblur.com, olly.social, GenAI training, RAG training, MCP training, AI consultant Mumbai, AISOLO Technologies",
  authors: [{ name: "Yash Thakker" }],
  creator: "AISOLO Technologies",
  publisher: "AISOLO Technologies",
  openGraph: {
    title: "AISOLO Technologies - Privacy-First AI Solutions & Education",
    description: "Mumbai-based AI company building privacy-first solutions and democratizing AI education through products and training programs.",
    url: "https://aisolo.tech",
    siteName: "AISOLO Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISOLO Technologies - Privacy-First AI Solutions & Education",
    description: "Mumbai-based AI company building privacy-first solutions and democratizing AI education through products and training programs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
