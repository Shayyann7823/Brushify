/*
 * Brushify Contact Page — "Arctic Wave" Design
 * Contact form, office details, and social links
 */

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useInView } from "@/hooks/useInView";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

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

export default function Contact() {
  const heroRef = useInView(0.1);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll get back to you soon.", {
        description: "Thank you for reaching out to Brushify.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-48 h-48 bg-[#0A5EBF]/5 rounded-full blur-3xl" />
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
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-4">
              Let's <span className="text-[#0A5EBF]">Connect</span>
            </h1>
            <p className="text-lg text-[#0C1E3F]/50 max-w-xl mx-auto font-body">
              Have a question, suggestion, or partnership inquiry? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8F4FD" position="bottom" />

      {/* Contact Section */}
      <section className="py-24 bg-white" style={{ marginTop: "-1px" }}>
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Column */}
            <FadeInSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold font-display text-[#0C1E3F] mb-3">
                    Contact Information
                  </h2>
                  <p className="text-[#0C1E3F]/50 font-body text-sm leading-relaxed">
                    Reach out to us through any of the channels below. Our team typically responds within 24 hours.
                  </p>
                </div>

                <div className="space-y-5">
                  {[
                    { icon: Mail, label: "Email Us", value: "hello@brushify.pk", sub: "For general inquiries" },
                    { icon: Phone, label: "Call Us", value: "+92 300 1234567", sub: "Mon - Sat, 9am - 6pm PKT" },
                    { icon: MapPin, label: "Visit Us", value: "Islamabad", sub: "Pakistan" },
                    { icon: Clock, label: "Working Hours", value: "Mon - Sat", sub: "9:00 AM - 6:00 PM PKT" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl bg-[#E8F4FD] flex items-center justify-center shrink-0 transition-smooth group-hover:bg-[#0A5EBF] group-hover:scale-110">
                        <item.icon className="w-5 h-5 text-[#0A5EBF] group-hover:text-white transition-smooth" />
                      </div>
                      <div>
                        <p className="text-xs text-[#0C1E3F]/40 font-body">{item.label}</p>
                        <p className="text-sm font-semibold text-[#0C1E3F]">{item.value}</p>
                        <p className="text-xs text-[#0C1E3F]/40">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

              
              </div>
            </FadeInSection>

            {/* Form Column */}
            <FadeInSection delay={150} className="lg:col-span-3">
              <div className="bg-[#F8FBFE] rounded-2xl p-8 md:p-10 border border-[#E8F4FD]">
                <h3 className="text-xl font-bold font-display text-[#0C1E3F] mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-semibold text-[#0C1E3F]/60 uppercase tracking-wider mb-2 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-[#E8F4FD] text-sm text-[#0C1E3F] font-body focus:outline-none focus:border-[#0A5EBF] focus:ring-2 focus:ring-[#0A5EBF]/10 transition-smooth placeholder:text-[#0C1E3F]/30"
                        placeholder="Ahmed Khan"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#0C1E3F]/60 uppercase tracking-wider mb-2 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white rounded-xl border border-[#E8F4FD] text-sm text-[#0C1E3F] font-body focus:outline-none focus:border-[#0A5EBF] focus:ring-2 focus:ring-[#0A5EBF]/10 transition-smooth placeholder:text-[#0C1E3F]/30"
                        placeholder="ahmed@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0C1E3F]/60 uppercase tracking-wider mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#E8F4FD] text-sm text-[#0C1E3F] font-body focus:outline-none focus:border-[#0A5EBF] focus:ring-2 focus:ring-[#0A5EBF]/10 transition-smooth placeholder:text-[#0C1E3F]/30"
                      placeholder="Product Inquiry"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0C1E3F]/60 uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white rounded-xl border border-[#E8F4FD] text-sm text-[#0C1E3F] font-body focus:outline-none focus:border-[#0A5EBF] focus:ring-2 focus:ring-[#0A5EBF]/10 transition-smooth placeholder:text-[#0C1E3F]/30 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full md:w-auto px-8 py-3.5 bg-[#0A5EBF] text-white font-semibold rounded-full transition-smooth hover:bg-[#084A9A] hover:shadow-[0_12px_32px_rgba(10,94,191,0.3)] hover:scale-[1.02] active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

   

      <Footer />
    </div>
  );
}
