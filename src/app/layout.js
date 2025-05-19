import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from 'next/font/google'
import "./globals.css";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500'], // Medium
  variable: '--font-manrope',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Imprenditore 4.0",
  description: "by E-Cell RGPV",
  icons: {
    icon: '/ecell-logo.jpg'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
