import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <WhatWeDo />
      <Gallery />
      <CTABanner />
      <Footer />
    </main>
  );
}
