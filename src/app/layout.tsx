import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { MobileContactButton } from "@/components/layout/mobile-contact-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bluespace.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BlueSpace | Renovations & Hardware Supply",
    template: "%s | BlueSpace",
  },
  description:
    "BlueSpace delivers turnkey renovation projects and enterprise hardware supply for schools, colleges, and government institutions across India.",
  keywords: [
    "BlueSpace",
    "school renovation",
    "campus modernization",
    "hardware supply",
    "smart classrooms",
  ],
  openGraph: {
    title: "BlueSpace | Turnkey Campus Modernization",
    description:
      "Partner with BlueSpace for renovations, hardware procurement, and installation for government and private institutions.",
    url: siteUrl,
    siteName: "BlueSpace",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BlueSpace - Infrastructure Partner",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueSpace | Turnkey Campus Modernization",
    description:
      "Modernize your institution with BlueSpace's renovation and hardware supply teams.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2A6C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#020410] text-white antialiased`}
      >
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-6 sm:px-6 lg:px-0">
          <Navbar />
          <main className="flex-1 space-y-12 pb-10">{children}</main>
        </div>
        <Footer />
        <MobileContactButton />
      </body>
    </html>
  );
}
