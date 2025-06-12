

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import ReactQueryProvider from "@/shared/providers/react-query-provider";

import Navbar from "@/shared/components/landing-page/navbar";
import Footer from "@/shared/components/landing-page/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axisor Technologies Brasil",
  description:
    "A Axisor desenvolve plataformas inteligentes com IA e automação para transformar cidades, educação e acessibilidade digital. Conheça a plataforma Atena e o Gutenvox.  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
          <ReactQueryProvider>
          <main className="relative flex min-h-screen w-full flex-col bg-background text-foreground antialiased overflow-x-hidden">
      <Navbar />
      <div className="mx-auto flex-1 px-3">
        {children}
      </div>
      <Footer />
    </main>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
