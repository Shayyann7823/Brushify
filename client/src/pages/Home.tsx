import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { WhyUs } from "@/components/sections/WhyUs";
import { SmartFeatures } from "@/components/sections/SmartFeatures";
import { OldTestimonials } from "@/components/sections/OldTestimonials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <WhyUs />
      <SmartFeatures />
      <OldTestimonials />
      <Footer />
    </div>
  );
}
