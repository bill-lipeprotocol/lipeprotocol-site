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
  title: {
    default: "LipeProtocol",
    template: "%s | LipeProtocol",
  },
  description:
    "Structural honesty, visible reasoning, entropy diagnostics, and decision-grade clarity.",
  applicationName: "LipeProtocol",
  metadataBase: new URL("https://www.lipeprotocol.com"),
  openGraph: {
    title: "LipeProtocol",
    description:
      "A protocol for structural honesty, visible reasoning, entropy diagnostics, and decision-grade clarity.",
    url: "https://www.lipeprotocol.com",
    siteName: "LipeProtocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LipeProtocol",
    description:
      "Structural honesty, visible reasoning, entropy diagnostics, and decision-grade clarity.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}