import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatdisposal.com"),
  title: "Bharat Disposal | Premium Disposable Supplier in Jaunpur",
  description:
    "Bharat Disposal is a trusted wholesale and retail supplier of premium disposable products in Jaunpur, Uttar Pradesh. Call now for cups, plates, packaging, and more.",
  keywords: [
    "Bharat Disposal Jaunpur",
    "Disposable Shop Jaunpur",
    "Paper Cup Wholesale Jaunpur",
    "Plastic Products Jaunpur",
    "Disposable Items Jaunpur",
    "Wholesale Disposable Supplier",
  ],
  openGraph: {
    title: "Bharat Disposal | Premium Disposable Supplier in Jaunpur",
    description:
      "Wholesale and retail disposable products for restaurants, hotels, caterers, offices, and households.",
    url: "https://bharatdisposal.com",
    siteName: "Bharat Disposal",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://bharatdisposal.com",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full bg-[#FFFDF8] text-[#1F2937]">
        {children}
        <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bharat Disposal",
            image: "https://bharatdisposal.com/images/logo.svg",
            telephone: "+919616919294",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Alfsteenganj, In Front of Head Post Office",
              addressLocality: "Jaunpur",
              addressRegion: "Uttar Pradesh",
              addressCountry: "India",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "09:00",
                closes: "21:00",
              },
            ],
            url: "https://bharatdisposal.com",
            description: "Premium wholesale and retail supplier of disposable products in Jaunpur.",
          })}
        </Script>
      </body>
    </html>
  );
}
