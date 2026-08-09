import { Link, useLocation } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";
import { PremiumButton } from "@/components/PremiumButton";
import { StarRating } from "@/components/StarRating";
import { useCart } from "@/contexts/CartContext";

// The flagship model — "Buy now" adds this straight to the cart and heads to products
const FLAGSHIP = {
  id: 1,
  name: "Pro Electric Sonic",
  price: 2499,
  image: "/images/b.png",
  category: "electric",
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { addItem } = useCart();
  const [, navigate] = useLocation();

  const { scrollY } = useScroll();
  const yCopy = useTransform(scrollY, [0, 700], [0, -60]);
  const ySky = useTransform(scrollY, [0, 700], [0, 90]);

  const handleBuyNow = () => {
  navigate("/products");
};

  return (
    <section
      ref={ref}
      className="relative -mt-16 flex min-h-[95vh] items-center overflow-hidden pt-36 pb-24 sm:-mt-20 sm:pt-40 sm:pb-32 lg:-mt-24 lg:min-h-screen lg:pt-44 lg:pb-36"
    >
      {/* Video background — landscape-optimized and clean */}
      <motion.div style={{ y: ySky }} className="absolute inset-0 -z-30">
        <video
          className="h-full w-full object-cover object-center"
          src="/videos/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* Soft scrim so the copy stays legible over the video on the left */}
      <div className="pointer-events-none absolute inset-y-0 left-0 -z-10 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.85)_40%,rgba(255,255,255,0.4)_70%,transparent_90%)] lg:w-[75%]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <motion.div style={{ y: yCopy }} className="order-1 pt-12 lg:pt-8">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide shadow-sm backdrop-blur-md bg-white/80 border border-white/40"
          >
            <Sparkles size={14} className="text-[var(--cyan)]" />
            New · Brushify AI Edition
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-['Bricolage_Grotesque'] text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.95] font-extrabold text-[#0C1E3F] tracking-tight drop-shadow-sm"
          >
            Experience the
            <br />
            <span className="text-accent-gradient">Future of Brushing.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 max-w-lg font-['Manrope'] text-lg text-slate-700 sm:text-xl font-normal leading-relaxed"
          >
            52,000 sonic strokes a minute, adaptive AI coaching and a 70-day battery — wrapped in forged
            titanium. Oral care, finally engineered like hardware.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <PremiumButton variant="accent" size="lg" onClick={handleBuyNow} className="shadow-lg shadow-cyan-500/20">
              Buy now <ArrowRight size={18} />
            </PremiumButton>
            <Link href="/products">
              <PremiumButton variant="outline" size="lg" className="bg-white/60 backdrop-blur-sm hover:bg-white/90">
                Explore models
              </PremiumButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-600 font-medium"
          >
            <span className="flex items-center gap-2">
              <StarRating value={5} /> 4.9 · 8,000+ reviews
            </span>
            <span>2-year warranty</span>
            <span>Free shipping over Rs. 15,000</span>
          </motion.div>
        </motion.div>

        {/* Right column kept empty on purpose — the video already shows the product. */}
        <div className="order-2 hidden lg:block" aria-hidden="true" />
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 lg:block"
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        <span className="text-[11px] tracking-[0.3em] text-slate-500 uppercase font-semibold">Scroll</span>
      </motion.div>
    </section>
  );
}