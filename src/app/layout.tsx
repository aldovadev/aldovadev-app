import type { Metadata, Viewport } from "next";
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
  metadataBase: new URL("https://aldovadev.com"),
  title: {
    default: "CODEWITHALDOVA | Aldova",
    template: "%s | CODEWITHALDOVA",
  },
  description:
    "Personal portfolio of Aldova - Software Engineer crafting high-quality web solutions with React, Next.js, and modern technologies.",
  keywords: [
    "developer",
    "creative",
    "webgl",
    "threejs",
    "react",
    "next.js",
    "portfolio",
    "web developer",
    "frontend",
    "3D web",
  ],
  authors: [{ name: "aldovadev", url: "https://aldovadev.com" }],
  creator: "aldovadev",
  openGraph: {
    title: "CODEWITHALDOVA | Aldova",
    description: "Software Engineer crafting high-quality web solutions.",
    type: "website",
    locale: "en_US",
    url: "https://aldovadev.com",
    siteName: "CODEWITHALDOVA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CODEWITHALDOVA - Aldova Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEWITHALDOVA | Aldova",
    description: "Software Engineer crafting high-quality web solutions.",
    creator: "@aldovadev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
