import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
// import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "ERP System",
  description: "AI-Powered Enterprise Resource Planning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} font-sans antialiased`}>
          {children}
          <Toaster />
      </body>
    </html>
  );
}