import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useInView } from "@/hooks/useInView";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";
import type { CartItem } from "@/contexts/CartContext";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const products = [
  // Electric Toothbrushes
  {
    id: 1,
    name: "Pro Electric Sonic",
    category: "electric",
    tagline: "Advanced Sonic Technology",
    price: 2499,
    description: "Premium electric toothbrush with advanced sonic vibration technology for superior plaque removal and gum health.",
    features: ["40,000 vibrations/min", "3 brushing modes", "2-hour battery life", "Smart timer", "Waterproof IPX7"],
    color: "#0A5EBF",
    image: "/images/b.png",
    popular: true,
  },
  {
    id: 2,
    name: "Elite Electric White",
    category: "electric",
    tagline: "Sleek Minimalist Design",
    price: 2199,
    description: "Elegant white electric toothbrush with premium features and modern aesthetic for daily professional cleaning.",
    features: ["35,000 vibrations/min", "2 brushing modes", "1.5-hour battery", "Pressure sensor", "USB charging"],
    color: "#FFFFFF",
    image: "/images/c.png",
    popular: false,
  },
  {
    id: 3,
    name: "Premium Black Edition",
    category: "electric",
    tagline: "Luxury Performance",
    price: 2799,
    description: "Top-tier electric toothbrush with luxury finish and maximum performance for discerning users.",
    features: ["50,000 vibrations/min", "5 brushing modes", "3-hour battery", "AI detection", "Wireless charging"],
    color: "#1F2937",
    image: "/images/d.png",
    popular: true,
  },

  // Normal Toothbrushes
  {
    id: 4,
    name: "Classic Red Soft",
    category: "normal",
    tagline: "Everyday Essential",
    price: 299,
    description: "Soft-bristled manual toothbrush perfect for daily use with comfortable ergonomic handle.",
    features: ["Ultra-soft bristles", "Ergonomic handle", "Antibacterial coating", "3-month indicator"],
    color: "#DC2626",
    image: "/images/e.png",
    popular: true,
  },
  {
    id: 5,
    name: "Premium Blue",
    category: "normal",
    tagline: "Professional Grade",
    price: 349,
    description: "Professional-grade manual toothbrush with superior bristle quality and durability.",
    features: ["Micro-soft bristles", "Contoured grip", "Sensitive formula", "Plaque guard"],
    color: "#3B82F6",
    image: "/images/f.png",
    popular: false,
  },
  {
    id: 6,
    name: "Eco Green Natural",
    category: "normal",
    tagline: "Sustainable Choice",
    price: 399,
    description: "Eco-friendly manual toothbrush with natural materials and sustainable packaging.",
    features: ["Bamboo handle", "Biodegradable", "Sustainable bristles", "Recyclable packaging"],
    color: "#16A34A",
    image: "/images/g.png",
    popular: false,
  },

  // Accessories
  {
    id: 7,
    name: "Travel Toothbrush Holder",
    category: "accessory",
    tagline: "Portable Protection",
    price: 199,
    description: "Compact travel case for toothbrush protection and hygiene on the go.",
    features: ["Portable design", "Protective cover", "Lightweight", "Fits any brush"],
    color: "#7C3AED",
    image: "/images/h.png",
    popular: false,
  },
  {
    id: 8,
    name: "Replacement Heads Set",
    category: "accessory",
    tagline: "Pack of 4 Heads",
    price: 899,
    description: "Compatible replacement heads for electric toothbrushes, pack of 4 for extended use.",
    features: ["4 replacement heads", "Compatible with Pro models", "Soft bristles", "Easy snap-on"],
    color: "#0A5EBF",
    image: "/images/i.png",
    popular: false,
  },
  {
    id: 9,
    name: "Premium Toothpaste",
    category: "accessory",
    tagline: "Whitening Formula",
    price: 249,
    description: "Advanced whitening toothpaste with natural ingredients for brighter, healthier teeth.",
    features: ["Whitening formula", "Fluoride protection", "Fresh mint flavor", "75ml tube"],
    color: "#FFFFFF",
    image: "/images/j.png",
    popular: false,
  },
  {
    id: 10,
    name: "Deluxe Holder Set",
    category: "accessory",
    tagline: "Family Pack",
    price: 599,
    description: "Beautiful toothbrush holder set for the entire family with modern design.",
    features: ["Holds 4 brushes", "Modern aesthetic", "Easy to clean", "Ceramic material"],
    color: "#0A5EBF",
    image: "/images/k.png",
    popular: false,
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

export default function Products() {
  const heroRef = useInView(0.1);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      category: product.category,
    };
    addItem(cartItem);
    toast.success(`${product.name} added to cart!`);
  };

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
              Our Collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-4">
              Premium Oral Care <span className="text-[#0A5EBF]">Products</span>
            </h1>
            <p className="text-lg text-[#0C1E3F]/50 max-w-xl mx-auto font-body">
              Discover our complete range of electric toothbrushes, manual brushes, and accessories
              designed for optimal oral health and comfort.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8F4FD" position="bottom" />

      {/* Category Filter */}
      <section className="py-12 bg-white" style={{ marginTop: "-1px" }}>
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { id: "all", label: "All Products" },
              { id: "electric", label: "Electric Toothbrushes" },
              { id: "normal", label: "Manual Toothbrushes" },
              { id: "accessory", label: "Accessories" },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-smooth ${
                  selectedCategory === cat.id
                    ? "bg-[#0A5EBF] text-white shadow-lg"
                    : "bg-[#E8F4FD] text-[#0C1E3F] hover:bg-[#D0E8F9]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, i) => (
              <FadeInSection key={product.id} delay={i * 100}>
                <div className="group h-full flex flex-col rounded-2xl bg-white border border-[#E8F4FD] hover:border-[#0A5EBF]/20 hover:shadow-[0_16px_48px_rgba(10,94,191,0.1)] transition-smooth overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden bg-[#F8FBFE] h-64 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-300"
                    />
                    {product.popular && (
                      <div className="absolute top-4 right-4 bg-[#DC2626] text-white px-3 py-1 rounded-full text-xs font-bold">
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs font-semibold text-[#0A5EBF] uppercase tracking-wider mb-2">
                      {product.category === "electric" ? "Electric" : product.category === "normal" ? "Manual" : "Accessory"}
                    </span>
                    <h3 className="text-lg font-bold font-display text-[#0C1E3F] mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#0C1E3F]/60 mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-[#0C1E3F]/50 leading-relaxed font-body mb-4 flex-grow">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <ul className="space-y-2">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#0A5EBF] mt-0.5 shrink-0" />
                            <span className="text-xs text-[#0C1E3F]/60">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#E8F4FD]">
                      <div>
                        <p className="text-xs text-[#0C1E3F]/50">Price</p>
                        <p className="text-2xl font-bold font-display text-[#0A5EBF]">
                          Rs. {product.price}
                        </p>
                      </div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="p-3 bg-[#0A5EBF] text-white rounded-full hover:bg-[#084A9A] transition-smooth hover:scale-110 active:scale-95"
                          >
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Add to cart</TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
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
              Ready to Upgrade Your Oral Care?
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 font-body">
              Choose from our premium collection and experience the difference quality makes.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="px-8 py-3.5 bg-white text-[#0A5EBF] font-semibold rounded-full transition-smooth hover:bg-[#E8F4FD] hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] hover:scale-[1.02] active:scale-[0.97]"
            >
              View All Products
            </button>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}