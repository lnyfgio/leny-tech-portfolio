
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
  metadataBase: new URL("https://leny-tech-portfolio.vercel.app"),
  title: {
    default: "Leny Flogio | Cloud & Platform Engineer",
    template: "%s | Leny Flogio",
  },
  description:
    "Explore Leny Flogio's portfolio in cloud infrastructure, platform engineering, DevOps, automation, and reliable systems.",
  openGraph: {
    title: "Leny Flogio | Cloud & Platform Engineer",
    description:
      "Engineering reliable systems, with intention. Explore my experience in cloud infrastructure, platform engineering, and DevOps.",
    url: "https://leny-tech-portfolio.vercel.app",
    siteName: "Leny Flogio Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leny Flogio | Cloud & Platform Engineer",
    description:
      "Engineering reliable systems, with intention.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
