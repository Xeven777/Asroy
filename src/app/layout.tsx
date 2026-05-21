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

export const metadata: Metadata = {
  title: "Asroy Welfare Trust – Empowering Lives, Building Hope",
  description:
    "Asroy Welfare Trust works for the upliftment of underprivileged communities through education, healthcare, and sustainable development initiatives.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className + " " + serif.variable}>{children}</body>
    </html>
  );
}
