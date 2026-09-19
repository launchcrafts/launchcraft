import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const baseUrl = "https://launchcrafts.in";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "LaunchCraft — Web Development, AI Automation & Brand Identity",
    template: "%s | LaunchCraft",
  },
  description:
    "LaunchCraft delivers custom web development, AI automation, and brand identity services across India and the UK. 4+ years of experience, 40+ projects delivered. Next.js, React, Tailwind CSS experts.",
  keywords: [
    "web development",
    "AI automation",
    "brand identity",
    "web design",
    "Next.js development",
    "React development",
    "website development India",
    "website development UK",
    "custom website",
    "SEO services",
    "logo design",
    "digital agency India",
    "LaunchCraft",
    "launchcrafts.in",
  ],
  authors: [{ name: "LaunchCraft", url: baseUrl }],
  creator: "LaunchCraft",
  publisher: "LaunchCraft",
  robots: { index: true, follow: true },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: baseUrl,
    siteName: "LaunchCraft",
    title: "LaunchCraft — Web Development, AI Automation & Brand Identity",
    description:
      "LaunchCraft delivers custom web development, AI automation, and brand identity services across India and the UK. 4+ years of experience, 40+ projects delivered.",
    images: [
      {
        url: `${baseUrl}/assets/logo.PNG`,
        width: 800,
        height: 260,
        alt: "LaunchCraft — Web Development, AI Automation & Brand Identity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LaunchCraft — Web Development, AI Automation & Brand Identity",
    description:
      "Custom web development, AI automation, and brand identity services. 40+ projects delivered across India and the UK.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${lora.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B14MY4DWGZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B14MY4DWGZ');
          `}
        </Script>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
        <meta name="google-site-verification" content="5VSx2qnZ_2qwke-6YYPQ9cZganCFjUyqOartIZvdU2s" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
