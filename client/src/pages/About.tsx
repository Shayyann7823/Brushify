/*
 * Brushify About Page — "Arctic Wave" Design
 * Brand story, mission, values, and team section
 */

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useInView } from "@/hooks/useInView";
import { Heart, Target, Globe, Users, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Care-First Design",
    desc: "Every product starts with understanding what makes a smile healthier. We design from the perspective of dental care, not just manufacturing.",
    color: "#DC2626",
  },
  {
    icon: Globe,
    title: "Pakistani Pride",
    desc: "Born and built in Pakistan, we're proving that world-class quality can come from our country. Every brush carries our national pride.",
    color: "#0A5EBF",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We're committed to reducing plastic waste through our bamboo range and recyclable packaging, building a greener future for Pakistan.",
    color: "#16A34A",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We source locally, employ locally, and give back to the communities that help us grow. Our success is Pakistan's success.",
    color: "#7C3AED",
  },
];

function FadeInSection({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, isInView } = useInView(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(28px)",
        transition: `all 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function About() {
  const heroRef = useInView(0.1);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[15%] w-48 h-48 bg-[#0A5EBF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-[10%] w-32 h-32 bg-[#B3D9F2]/20 rounded-full blur-2xl" />
        </div>
        <div className="container relative z-10" ref={heroRef.ref}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              style={{
                opacity: heroRef.isInView ? 1 : 0,
                transform: heroRef.isInView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 100ms",
              }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5EBF] font-display">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-6">
                Born in Pakistan, <br />
                <span className="text-[#0A5EBF]">Built for Smiles.</span>
              </h1>
              <p className="text-[#0C1E3F]/60 leading-relaxed font-body text-lg mb-6">
                Brushify was founded with a simple belief: every Pakistani family deserves access to 
                world-class oral care products. We set out to challenge the notion that premium dental 
                products must be imported — proving that Pakistan can manufacture, innovate, and deliver 
                at the highest standards.
              </p>
              <p className="text-[#0C1E3F]/50 leading-relaxed font-body">
                From our headquarters in Islamabad to homes across all four provinces, we've been quietly 
                transforming morning routines and building healthier smiles, one brush at a time.
              </p>
            </div>
            <div
              className="hidden lg:block"
              style={{
                opacity: heroRef.isInView ? 1 : 0,
                transform: heroRef.isInView ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1) 300ms",
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#0A5EBF]/10 rounded-2xl blur-3xl" />
                <img
                  src="/images/l.png"
                  alt="Pakistani family with Brushify"
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8F4FD" position="bottom" />

      {/* Values */}
      <section className="py-24 bg-white" style={{ marginTop: "-1px" }}>
        <div className="container">
          <FadeInSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5EBF] font-display">
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0C1E3F] mt-3">
              Our Core <span className="text-[#0A5EBF]">Values</span>
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <FadeInSection key={value.title} delay={i * 120}>
                <div className="group p-7 rounded-2xl bg-white border border-[#E8F4FD] hover:border-[#0A5EBF]/20 hover:shadow-[0_16px_48px_rgba(10,94,191,0.08)] transition-smooth hover:-translate-y-2 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-smooth group-hover:scale-110" style={{ backgroundColor: `${value.color}10` }}>
                    <value.icon className="w-5 h-5" style={{ color: value.color }} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#0C1E3F] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#0C1E3F]/50 leading-relaxed font-body">{value.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-[#0A5EBF] to-[#084A9A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeInSection>
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-8">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-body">
              "To make premium oral care accessible to every Pakistani household, 
              proving that world-class quality is proudly Made in Pakistan."
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {[
                { label: "Employees", value: "120+" },
                { label: "Retail Partners", value: "50+" },
                { label: "Cities", value: "45+" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold font-display text-white">{stat.value}</p>
                  <p className="text-sm text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
