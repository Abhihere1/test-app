import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "test-app - Modern Testing Platform",
  description: "Build, test, and deploy your applications with confidence using our comprehensive testing platform. Start your free trial today.",
  keywords: ["testing", "software", "development", "qa", "automated testing"],
  authors: [{ name: "test-app Team" }],
  openGraph: {
    title: "test-app - Modern Testing Platform",
    description: "Build, test, and deploy your applications with confidence.",
    type: "website",
    url: "https://test-app.example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "test-app - Modern Testing Platform",
    description: "Build, test, and deploy your applications with confidence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
