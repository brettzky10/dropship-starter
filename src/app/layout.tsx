import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import { Providers } from "@/components/providers/providers";
import Navigation from "@/components/global/navigation";
import Navbar from "@/components/global/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
          <div className="relative flex flex-col h-screen">
             {/* <Navigation /> */}
             <Navbar/>
            <main className="container mx-auto max-w-full pt-4 flex-grow scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
