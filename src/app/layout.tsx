import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
 
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
 
export const metadata: Metadata = {
  title: "CSC Assam - Common Service Centre | Digital Services in Assam",
  description: "CSC Assam provides comprehensive digital and government services including document printing, PAN card application, ticket booking, and more. Trusted service provider in Guwahati, Assam.",
  keywords: "CSC Assam, Common Service Centre, digital services, government services, Assam, Guwahati, PAN card, printing, booking",
  authors: [{ name: "CSC Assam" }],
  openGraph: {
    title: "CSC Assam - Your Digital Service Partner",
    description: "Comprehensive digital and government services at your doorstep",
    type: "website",
    locale: "en_IN",
  },
};
 
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
