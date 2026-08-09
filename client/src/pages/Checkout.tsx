import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import { useCart } from "@/contexts/CartContext";
import { useOrderHistory } from "@/contexts/OrderHistoryContext";
import { useInView } from "@/hooks/useInView";
import { Check, AlertCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

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

interface FormData {
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const { addOrder } = useOrderHistory();
  const heroRef = useInView(0.1);
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    customerAddress: "",
    paymentMethod: "card",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = "Name is required";
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = "Please enter a valid email";
    }

    if (!formData.customerPhone.trim()) {
      newErrors.customerPhone = "Phone number is required";
    } else if (!/^\d{11}$/.test(formData.customerPhone)) {
      newErrors.customerPhone = "Phone must be 11 digits (e.g., 03001234567)";
    }

    if (!formData.customerAddress.trim()) {
      newErrors.customerAddress = "Address is required";
    } else if (formData.customerAddress.trim().length < 10) {
      newErrors.customerAddress = "Please provide a complete address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    setLoading(true);

    // Snapshot the cart before it gets cleared
    const orderItems = items;
    const orderTotal = total;

    // Simulate order processing
    setTimeout(() => {
      setLoading(false);
      setOrderPlaced(true);
      addOrder({
        id: `ORD-${Date.now()}`,
        date: new Date().toISOString(),
        items: orderItems,
        total: orderTotal,
        customerName: formData.customerName,
        customerEmail: formData.customerEmail,
        customerPhone: formData.customerPhone,
        customerAddress: formData.customerAddress,
        paymentMethod: formData.paymentMethod,
      });
      clearCart();
      toast.success("Order placed successfully!");
    }, 2000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="py-32 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC]">
          <div className="container text-center">
            <h1 className="text-4xl font-bold font-display text-[#0C1E3F] mb-4">
              Your cart is empty
            </h1>
            <p className="text-[#0C1E3F]/60 mb-8">
              Add some products before proceeding to checkout
            </p>
            <Link href="/products">
              <button className="px-8 py-3.5 bg-[#0A5EBF] text-white font-semibold rounded-full hover:bg-[#084A9A] transition-smooth">
                Continue Shopping
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="py-32 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC]">
          <div className="container max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-[#16A34A] flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold font-display text-[#0C1E3F] mb-4">
              Order Confirmed!
            </h1>
            <p className="text-[#0C1E3F]/60 mb-2">
              Thank you for your order
            </p>
            <p className="text-sm text-[#0C1E3F]/50 mb-8">
              We've sent a confirmation email with your order details. Your order will be processed and shipped soon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/products">
                <button className="px-8 py-3.5 bg-[#0A5EBF] text-white font-semibold rounded-full hover:bg-[#084A9A] transition-smooth">
                  Continue Shopping
                </button>
              </Link>
              <Link href="/order-history">
                <button className="px-8 py-3.5 border border-[#0A5EBF] text-[#0A5EBF] font-semibold rounded-full hover:bg-[#E8F4FD] transition-smooth">
                  View Order History
                </button>
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[12%] w-56 h-56 bg-[#0A5EBF]/5 rounded-full blur-3xl" />
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
              Final Step
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-4">
              Complete Your <span className="text-[#0A5EBF]">Order</span>
            </h1>
            <p className="text-lg text-[#0C1E3F]/50 max-w-xl mx-auto font-body">
              Review your items and provide your details to complete the purchase
            </p>
          </div>
        </div>
      </section>

      <WaveDivider color="#E8F4FD" position="bottom" />

      {/* Checkout Section */}
      <section className="py-24 bg-white" style={{ marginTop: "-1px" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <FadeInSection className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="bg-[#F8FBFE] rounded-2xl p-8 border border-[#E8F4FD]">
                  <h2 className="text-xl font-bold font-display text-[#0C1E3F] mb-6">
                    Personal Information
                  </h2>
                  <div className="space-y-5">
                    <div>
                      <label className="text-sm font-semibold text-[#0C1E3F] block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg border transition-smooth focus:outline-none focus:ring-2 focus:ring-[#0A5EBF] ${
                          errors.customerName ? "border-red-500" : "border-[#E8F4FD]"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.customerName && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.customerName}
                        </p>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-[#0C1E3F] block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.customerEmail}
                          onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                          className={`w-full px-4 py-3 rounded-lg border transition-smooth focus:outline-none focus:ring-2 focus:ring-[#0A5EBF] ${
                            errors.customerEmail ? "border-red-500" : "border-[#E8F4FD]"
                          }`}
                          placeholder="your@email.com"
                        />
                        {errors.customerEmail && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.customerEmail}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="text-sm font-semibold text-[#0C1E3F] block mb-2">
                          Phone Number (11 digits) *
                        </label>
                        <input
                          type="tel"
                          inputMode="numeric"
                          pattern="[0-9]*"
                          maxLength={11}
                          value={formData.customerPhone}
                          onChange={(e) => {
                            const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 11);
                            setFormData({ ...formData, customerPhone: digitsOnly });
                          }}
                          className={`w-full px-4 py-3 rounded-lg border transition-smooth focus:outline-none focus:ring-2 focus:ring-[#0A5EBF] ${
                            errors.customerPhone ? "border-red-500" : "border-[#E8F4FD]"
                          }`}
                          placeholder="03001234567"
                        />
                        {errors.customerPhone && (
                          <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.customerPhone}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-[#F8FBFE] rounded-2xl p-8 border border-[#E8F4FD]">
                  <h2 className="text-xl font-bold font-display text-[#0C1E3F] mb-6">
                    Delivery Address
                  </h2>
                  <div>
                    <label className="text-sm font-semibold text-[#0C1E3F] block mb-2">
                      Complete Address *
                    </label>
                    <textarea
                      value={formData.customerAddress}
                      onChange={(e) => setFormData({ ...formData, customerAddress: e.target.value })}
                      className={`w-full px-4 py-3 rounded-lg border transition-smooth focus:outline-none focus:ring-2 focus:ring-[#0A5EBF] ${
                        errors.customerAddress ? "border-red-500" : "border-[#E8F4FD]"
                      }`}
                      placeholder="Street address, city, postal code..."
                      rows={4}
                    />
                    {errors.customerAddress && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.customerAddress}
                      </p>
                    )}
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-[#F8FBFE] rounded-2xl p-8 border border-[#E8F4FD]">
                  <h2 className="text-xl font-bold font-display text-[#0C1E3F] mb-6">
                    Payment Method
                  </h2>
                  <div className="space-y-3">
                    {[
                      { id: "card", label: "Credit/Debit Card", desc: "Visa, Mastercard, or other cards" },
                      { id: "bank_transfer", label: "Bank Transfer", desc: "Direct bank transfer" },
                      { id: "cash_on_delivery", label: "Cash on Delivery", desc: "Pay when your order arrives" },
                    ].map(method => (
                      <label key={method.id} className="flex items-start gap-4 p-4 rounded-lg border-2 cursor-pointer transition-smooth hover:border-[#0A5EBF]" style={{
                        borderColor: formData.paymentMethod === method.id ? "#0A5EBF" : "#E8F4FD",
                        backgroundColor: formData.paymentMethod === method.id ? "#E8F4FD" : "white",
                      }}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={formData.paymentMethod === method.id}
                          onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                          className="mt-1"
                        />
                        <div>
                          <p className="font-semibold text-[#0C1E3F]">{method.label}</p>
                          <p className="text-xs text-[#0C1E3F]/60">{method.desc}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0A5EBF] text-white font-bold rounded-lg hover:bg-[#084A9A] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </form>
            </FadeInSection>

            {/* Order Summary */}
            <FadeInSection delay={100}>
              <div className="bg-[#F8FBFE] rounded-2xl p-8 border border-[#E8F4FD] sticky top-24 h-fit">
                <h2 className="text-xl font-bold font-display text-[#0C1E3F] mb-6">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-4 mb-6 pb-6 border-b border-[#E8F4FD]">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div>
                        <p className="font-semibold text-[#0C1E3F]">{item.name}</p>
                        <p className="text-xs text-[#0C1E3F]/60">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-semibold text-[#0A5EBF]">
                        Rs. {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-[#0C1E3F]/60">
                    <span>Subtotal:</span>
                    <span>Rs. {total}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#0C1E3F]/60">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#0C1E3F]/60">
                    <span>Tax (0%):</span>
                    <span>Rs. 0</span>
                  </div>
                  <div className="border-t border-[#E8F4FD] pt-3 flex justify-between font-bold text-lg text-[#0C1E3F]">
                    <span>Total:</span>
                    <span className="text-[#0A5EBF]">Rs. {total}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700">
                    ✓ Secure checkout with encrypted payment
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    ✓ Free shipping on all orders
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}