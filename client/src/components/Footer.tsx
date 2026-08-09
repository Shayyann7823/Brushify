import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Products", href: "/products" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ],
  products: [
    { label: "Premium Soft", href: "/products" },
    { label: "Kids Collection", href: "/products" },
    { label: "Travel Series", href: "/products" },
    { label: "Eco Range", href: "/products" },
  ],
  support: [
    { label: "FAQs", href: "/contact" },
    { label: "Shipping Info", href: "/contact" },
    { label: "Return Policy", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
  ],
};

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82c-1.02-.9-1.6-2.16-1.6-3.62h-3.15v13.9c0 1.66-1.35 3-3 3a3 3 0 0 1 0-6c.32 0 .63.05.92.14V9.9a6.15 6.15 0 0 0-.92-.07 6.16 6.16 0 1 0 6.16 6.16V9.36a9.3 9.3 0 0 0 5.13 1.54V7.75a6.15 6.15 0 0 1-3.54-1.93Z" />
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c2.87 0 4.98 2.06 5.16 4.9.06.9.03 1.72 0 2.42.63.24 1.34.02 1.66.36.24.26.13.62-.13.86-.36.34-1.03.5-1.36.86-.2.22-.13.62.03.9.66 1.14 1.86 1.62 2.9 1.9.24.06.4.3.36.54-.1.5-1.06.72-1.83.86-.1.34-.16.72-.4.94-.26.24-.7.16-1.2.2-.5.03-1.06.3-1.7.83-.83.66-1.76 1.4-3.5 1.4s-2.66-.74-3.5-1.4c-.63-.53-1.2-.8-1.7-.83-.5-.04-.93.04-1.2-.2-.24-.22-.3-.6-.4-.94-.76-.14-1.73-.36-1.83-.86-.04-.24.12-.48.36-.54 1.04-.28 2.24-.76 2.9-1.9.16-.28.24-.68.03-.9-.33-.36-1-.52-1.36-.86-.26-.24-.37-.6-.13-.86.32-.34 1.03-.12 1.66-.36-.03-.7-.06-1.53 0-2.42C7.02 4.06 9.13 2 12 2Z" />
    </svg>
  );
}

const socialLinks = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: TikTokIcon, label: "TikTok" },
  { Icon: SnapchatIcon, label: "Snapchat" },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="bg-white border-t border-[#E8F4FD]">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0C1E3F]/40">
              Follow Brushify
            </span>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      aria-label={label}
                      className="w-10 h-10 rounded-full bg-[#E8F4FD] text-[#0A5EBF] flex items-center justify-center transition-smooth hover:bg-[#0A5EBF] hover:text-white hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
                className={`flex items-center gap-2 shrink-0 rounded-full bg-white text-[#0A5EBF] border border-[#0A5EBF]/20 shadow-[0_12px_32px_rgba(10,94,191,0.18)] transition-all duration-300 hover:bg-[#0A5EBF] hover:text-white hover:scale-105 active:scale-95 pl-5 pr-6 py-3 ${
                  showBackToTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
              >
                <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
                <span className="text-sm font-semibold">Back to top</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>Back to top</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <footer className="bg-[#0C1E3F] text-white">
        <div className="container pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
            <div className="lg:col-span-2 flex flex-col">
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-4">
                Premium oral care crafted with pride in Pakistan. Bringing world-class dental hygiene 
                to every home with brushes designed for the modern Pakistani family.
              </p>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-white/40 mb-4">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        <span className="text-sm text-white/60 transition-smooth hover:text-[#B3D9F2] hover:translate-x-1 inline-block cursor-pointer">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="text-sm font-semibold font-display uppercase tracking-wider text-white/40 mb-4">
                Reach Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0A5EBF] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0A5EBF] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">hello@brushify.pk</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0A5EBF] mt-0.5 shrink-0" />
                  <span className="text-sm text-white/60">+92 300 1234567</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; 2026 Brushify. Crafted with pride in Pakistan.
            </p>
            <p className="text-xs text-white/40">
              Designed for healthier smiles.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}