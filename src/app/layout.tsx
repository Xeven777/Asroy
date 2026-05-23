import type { Metadata } from "next";
import { Crimson_Text, Nunito } from "next/font/google";
import "./globals.css";

const serif = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
});
const sans = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://asroywelfaretrust.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Asroy Welfare Trust | NGO in Murshidabad, West Bengal",
    template: "%s | Asroy Welfare Trust",
  },
  description:
    "Asroy Welfare Trust is a registered NGO in Murshidabad, West Bengal dedicated to education, healthcare, women empowerment, and child welfare. One of the top NGOs in West Bengal helping underprivileged communities in Raghunathganj and surrounding areas.",
  keywords: [
    "Asroy Welfare Trust",
    "Asroy NGO",
    "NGO in Murshidabad",
    "NGO in West Bengal",
    "top NGOs in West Bengal",
    "best NGOs West Bengal",
    "charity Murshidabad",
    "nonprofit West Bengal",
    "Raghunathganj NGO",
    "education NGO West Bengal",
    "healthcare NGO Murshidabad",
    "child welfare West Bengal",
    "women empowerment NGO West Bengal",
    "community development Murshidabad",
    "underprivileged children West Bengal",
    "social welfare trust West Bengal",
    "Supriyo Roy Foundation",
    "volunteer West Bengal NGO",
    "donate NGO West Bengal",
  ],
  authors: [{ name: "Asroy Welfare Trust" }],
  creator: "Asroy Welfare Trust",
  publisher: "Asroy Welfare Trust",
  category: "Non-Profit Organization",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Asroy Welfare Trust",
    title: "Asroy Welfare Trust | NGO in Murshidabad, West Bengal",
    description:
      "A registered NGO in Murshidabad, West Bengal working for education, healthcare, women empowerment, and child welfare. Helping underprivileged communities across West Bengal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asroy Welfare Trust | NGO in Murshidabad, West Bengal",
    description:
      "Registered NGO in Murshidabad, West Bengal working for education, healthcare, and community development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Murshidabad, West Bengal, India",
    "geo.position": "24.1074;88.2719",
    ICBM: "24.1074, 88.2719",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["NGO", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Asroy Welfare Trust",
      alternateName: ["Asroy NGO", "Asroy Welfare"],
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo1.webp`,
        width: 52,
        height: 52,
      },
      image: `${siteUrl}/logo1.webp`,
      description:
        "Asroy Welfare Trust is a registered NGO in Murshidabad, West Bengal dedicated to education, healthcare, women empowerment, child welfare, and community development for underprivileged communities.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Indira Pally",
        addressLocality: "Raghunathganj",
        addressRegion: "West Bengal",
        postalCode: "742225",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-80017-32493",
          contactType: "general",
          email: "asroywelfaretrust@gmail.com",
          areaServed: "IN",
          availableLanguage: ["English", "Bengali", "Hindi"],
        },
      ],
      areaServed: [
        {
          "@type": "State",
          name: "West Bengal",
          containedInPlace: { "@type": "Country", name: "India" },
        },
      ],
      foundingLocation: {
        "@type": "Place",
        name: "Murshidabad, West Bengal, India",
      },
      knowsAbout: [
        "Education",
        "Healthcare",
        "Women Empowerment",
        "Child Welfare",
        "Community Development",
      ],
      nonprofit: true,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Asroy Welfare Trust",
      description:
        "Official website of Asroy Welfare Trust, a registered NGO in Murshidabad, West Bengal.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={sans.className + " " + serif.variable}>{children}</body>
    </html>
  );
}
