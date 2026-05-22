import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import WhatWeDo from "@/components/WhatWeDo";
import Gallery from "@/components/Gallery";
import Team from "@/components/Team";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hidden structured text for SEO — visible to crawlers, not to users */}
      <div className="sr-only" aria-hidden="true">
        <h1>Asroy Welfare Trust – NGO in Murshidabad, West Bengal</h1>
        <p>
          Asroy Welfare Trust is one of the top NGOs in West Bengal, based in
          Raghunathganj, Murshidabad. We work for the welfare of underprivileged
          communities through education, healthcare, women empowerment, child
          welfare, and community development. As a registered nonprofit and
          social welfare trust in West Bengal, Asroy NGO has impacted 800+ lives
          across Murshidabad district. Contact us to volunteer or donate.
        </p>
        <address>
          Indira Pally, Raghunathganj, Murshidabad, West Bengal, India – 742225
        </address>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <WhatWeDo />
      <Gallery />
      <Team />
      <CTABanner />
      <Footer />
    </main>
  );
}
