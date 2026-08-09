import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Sparkles, X, ShoppingCart, History } from "lucide-react";
import CartSidebar from "./CartSidebar";
import { useCart } from "@/contexts/CartContext";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [location] = useLocation();
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_2px_24px_rgba(10,94,191,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2 group">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-2xl bg-accent-gradient text-white transition-hover group-hover:scale-110">
              <Sparkles className="h-5 w-5" strokeWidth={2} />
            </span>
            <span
              className={`text-xl font-bold font-display tracking-tight transition-smooth ${
                scrolled ? "text-[#0C1E3F]" : "text-[#0C1E3F]"
              }`}
            >
              brushify
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`relative px-4 py-2 text-sm font-medium font-body transition-smooth rounded-full ${
                  location === link.href
                    ? "text-[#0A5EBF] bg-[#E8F4FD]"
                    : scrolled
                    ? "text-[#0C1E3F]/70 hover:text-[#0A5EBF] hover:bg-[#E8F4FD]/60"
                    : "text-[#0C1E3F]/70 hover:text-[#0A5EBF] hover:bg-[#E8F4FD]/60"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/order-history">
                <button
                  className={`p-2.5 rounded-full hover:bg-[#E8F4FD] transition-smooth ${
                    location === "/order-history" ? "bg-[#E8F4FD]" : ""
                  }`}
                >
                  <History className="w-5 h-5 text-[#0A5EBF]" />
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Order history</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-full hover:bg-[#E8F4FD] transition-smooth"
              >
                <ShoppingCart className="w-5 h-5 text-[#0A5EBF]" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 w-5 h-5 bg-[#DC2626] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>View cart</TooltipContent>
          </Tooltip>

          <Link href="/contact">
            <button className="ml-2 px-6 py-2.5 bg-[#0A5EBF] text-white text-sm font-semibold rounded-full transition-smooth hover:bg-[#084A9A] hover:shadow-[0_8px_24px_rgba(10,94,191,0.3)] hover:scale-[1.02] active:scale-[0.97]">
              Get in Touch
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/order-history">
                <button className="p-2 rounded-lg transition-smooth hover:bg-[#E8F4FD]">
                  <History className="w-5 h-5 text-[#0A5EBF]" />
                </button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Order history</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 rounded-lg transition-smooth hover:bg-[#E8F4FD]"
              >
                <ShoppingCart className="w-5 h-5 text-[#0A5EBF]" />
                {itemCount > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-[#DC2626] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>View cart</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className="p-2 rounded-lg transition-smooth hover:bg-[#E8F4FD]"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5 text-[#0C1E3F]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#0C1E3F]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>{mobileOpen ? "Close menu" : "Open menu"}</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div
        className={`md:hidden transition-smooth overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container pt-4 pb-6 space-y-1 bg-white/95 backdrop-blur-xl">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-smooth ${
                  location === link.href
                    ? "text-[#0A5EBF] bg-[#E8F4FD]"
                    : "text-[#0C1E3F]/70 hover:text-[#0A5EBF] hover:bg-[#E8F4FD]/60"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Link href="/order-history">
            <span
              className={`block px-4 py-3 text-sm font-medium rounded-xl transition-smooth ${
                location === "/order-history"
                  ? "text-[#0A5EBF] bg-[#E8F4FD]"
                  : "text-[#0C1E3F]/70 hover:text-[#0A5EBF] hover:bg-[#E8F4FD]/60"
              }`}
            >
              Order History
            </span>
          </Link>
          <div className="pt-3">
            <Link href="/contact">
              <button className="w-full px-6 py-3 bg-[#0A5EBF] text-white text-sm font-semibold rounded-xl transition-smooth hover:bg-[#084A9A]">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}