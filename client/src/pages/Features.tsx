/*
 * Brushify Features Page — "Arctic Wave" Design
 * Detailed features/benefits with visual sections
 */

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useInView } from "@/hooks/useInView";
import {
  Shield, Sparkles, Leaf, Heart, Droplets, Zap,
  CheckCircle, Award, Thermometer, Microscope
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Ultra-Soft Bristle Technology (Manual)",
    desc: "Our proprietary micro-tip bristle technology is 10x softer than regular brushes. Each bristle is polished to a nano-finish, ensuring zero gum irritation while maximizing plaque removal.",
    stat: "10x Softer",
    color: "#0A5EBF",
  },
  {
    icon: Zap,
    title: "Advanced Sonic Vibration (Electric)",
    desc: "Our electric toothbrushes feature 40,000-50,000 vibrations per minute with intelligent pressure sensors. Removes up to 2x more plaque than manual brushes while protecting sensitive gums.",
    stat: "50K Vibrations",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Antibacterial Coating",
    desc: "Every Brushify handle is coated with silver-ion antibacterial protection, preventing bacterial growth on the brush itself for up to 3 months of hygienic use.",
    stat: "99.9% Bacteria",
    color: "#7C3AED",
  },
  {
    icon: Thermometer,
    title: "Ergonomic Comfort",
    desc: "Designed with input from orthodontists, our handles feature a contoured grip with anti-slip texture that reduces hand fatigue and provides optimal brushing angles.",
    stat: "360° Grip",
    color: "#16A34A",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Accessories",
    desc: "Our travel cases and replacement heads are made from sustainable materials. Biodegradable packaging and recyclable components reduce environmental impact while maintaining premium quality.",
    stat: "100% Green",
    color: "#10B981",
  },
  {
    icon: Droplets,
    title: "Water-Smart Design",
    desc: "Quick-dry bristle technology ensures your brush dries in minutes, not hours. This prevents moisture-related bacterial growth and extends brush life significantly.",
    stat: "3min Dry",
    color: "#3B82F6",
  },
  {
    icon: Microscope,
    title: "Lab-Tested Quality",
    desc: "Every batch undergoes rigorous testing in our ISO-certified labs in Islamabad. We test bristle density, handle durability, and packaging integrity before any product reaches you.",
    stat: "ISO Certified",
    color: "#DC2626",
  },
  {
    icon: Award,
    title: "Long-Lasting Durability",
    desc: "Engineered for longevity, our brushes maintain optimal bristle stiffness for a full 3 months. Electric models feature 3-hour battery life with wireless charging capability.",
    stat: "3-Month Life",
    color: "#8B5CF6",
  },
];

const comparison = [
  { feature: "Manual Toothbrushes", brushify: true, others: true },
  { feature: "Electric Toothbrushes", brushify: true, others: true },
  { feature: "Sonic Vibration (40K+)", brushify: true, others: "Partial" },
  { feature: "Antibacterial Coating", brushify: true, others: false },
  { feature: "Eco-Friendly Accessories", brushify: true, others: false },
  { feature: "Replacement Heads", brushify: true, others: true },
  { feature: "Travel Cases", brushify: true, others: "Partial" },
  { feature: "Dentist Recommended", brushify: true, others: true },
  { feature: "Made in Pakistan", brushify: true, others: false },
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

export default function Features() {
  const heroRef = useInView(0.1);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-56 h-56 bg-[#0A5EBF]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-5 left-[8%] w-40 h-40 bg-[#B3D9F2]/20 rounded-full blur-2xl" />
        </div>
        <div className="container relative z-10 text-center" ref={heroRef.ref}>
          <div
            style={{
              opacity: heroRef.isInView ? 1 : 0,
              transform: heroRef.isInView ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 100ms",
            }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5EBF] font-display">
              Innovation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-4">
              Why <span className="text-[#0A5EBF]">Brushify</span> is Different
            </h1>
            <p className="text-lg text-[#0C1E3F]/50 max-w-xl mx-auto font-body">
              From manual brushes to advanced electric toothbrushes and premium accessories, 
              every detail is engineered for your oral health. Here's what makes Brushify 
              the preferred choice of dental professionals across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8F4FD" position="bottom" />

      {/* Features Grid */}
      <section className="py-24 bg-white" style={{ marginTop: "-1px" }}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FadeInSection key={feature.title} delay={i * 100}>
                <div className="group p-8 rounded-2xl bg-white border border-[#E8F4FD] hover:border-[#0A5EBF]/20 hover:shadow-[0_16px_48px_rgba(10,94,191,0.1)] transition-smooth hover:-translate-y-2 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-smooth group-hover:scale-110" style={{ backgroundColor: `${feature.color}10` }}>
                      <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <span className="text-xs font-bold font-display px-3 py-1 rounded-full" style={{ backgroundColor: `${feature.color}10`, color: feature.color }}>
                      {feature.stat}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#0C1E3F] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#0C1E3F]/50 leading-relaxed font-body">
                    {feature.desc}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#F8FBFE]">
        <WaveDivider color="#ffffff" position="top" />
        <div className="container" style={{ marginTop: "-1px" }}>
          <FadeInSection className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5EBF] font-display">
              The Brushify Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0C1E3F] mt-3">
              Complete Product <span className="text-[#0A5EBF]">Range</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-[#E8F4FD] overflow-hidden shadow-lg">
              {/* Header */}
              <div className="grid grid-cols-3 bg-[#0A5EBF] text-white py-4 px-6">
                <span className="text-sm font-semibold font-display">Feature</span>
                <span className="text-sm font-semibold font-display text-center">Brushify</span>
                <span className="text-sm font-semibold font-display text-center text-white/70">Others</span>
              </div>
              {/* Rows */}
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 py-4 px-6 items-center ${
                    i % 2 === 0 ? "bg-white" : "bg-[#F8FBFE]"
                  }`}
                >
                  <span className="text-sm text-[#0C1E3F]/70 font-body">{row.feature}</span>
                  <div className="flex justify-center">
                    <CheckCircle className="w-5 h-5 text-[#0A5EBF]" />
                  </div>
                  <div className="flex justify-center">
                    {row.others === true ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : row.others === "Partial" ? (
                      <span className="text-xs text-[#0C1E3F]/40 font-body">Some</span>
                    ) : (
                      <span className="text-xs text-[#0C1E3F]/30 font-body">No</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0A5EBF] to-[#084A9A] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
              Experience the Difference
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 font-body">
              Try Brushify today and feel the difference in your daily oral care routine.
            </p>
            <a href="/products">
              <button className="px-8 py-3.5 bg-white text-[#0A5EBF] font-semibold rounded-full transition-smooth hover:bg-[#E8F4FD] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.97]">
                Browse Products
              </button>
            </a>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
