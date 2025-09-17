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
  title: "AISOLO Technologies - AI-Powered Video Privacy Solutions | Mumbai, India",
  description: "Leading AI company in Mumbai specializing in video privacy solutions, AI agent building, GenAI training, RAG training, and software MVP development. Founded by Yash Thakker with 12+ years experience.",
  keywords: "AI company Mumbai, video privacy, AI agents, GenAI training, RAG training, MCP training, software MVP, machine learning India, AI consultant Mumbai, AISOLO Technologies",
  authors: [{ name: "Yash Thakker" }],
  creator: "AISOLO Technologies",
  publisher: "AISOLO Technologies",
  openGraph: {
    title: "AISOLO Technologies - AI-Powered Video Privacy Solutions",
    description: "Leading AI company in Mumbai specializing in video privacy solutions and AI training services.",
    url: "https://aisolo.tech",
    siteName: "AISOLO Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AISOLO Technologies - AI-Powered Video Privacy Solutions",
    description: "Leading AI company in Mumbai specializing in video privacy solutions and AI training services.",
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
