import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useOrderHistory } from "@/contexts/OrderHistoryContext";
import { Package, Calendar, CreditCard, MapPin } from "lucide-react";
import { Link } from "wouter";

const paymentLabels: Record<string, string> = {
  card: "Credit/Debit Card",
  bank_transfer: "Bank Transfer",
  cash_on_delivery: "Cash on Delivery",
};

export default function OrderHistory() {
  const { orders } = useOrderHistory();

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-gradient-to-br from-[#E8F4FD] via-white to-[#F1F7FC]">
        <div className="container text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0A5EBF] font-display">
            Your Orders
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-[#0C1E3F] mt-3 mb-4">
            Order History
          </h1>
          <p className="text-lg text-[#0C1E3F]/50 max-w-xl mx-auto font-body">
            All the orders you've placed on this device
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          {orders.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-[#E8F4FD] flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-[#0A5EBF]" />
              </div>
              <h2 className="text-xl font-bold text-[#0C1E3F] mb-2">No orders yet</h2>
              <p className="text-[#0C1E3F]/60 mb-8">
                Once you place an order, it'll show up here.
              </p>
              <Link href="/products">
                <button className="px-8 py-3.5 bg-[#0A5EBF] text-white font-semibold rounded-full hover:bg-[#084A9A] transition-smooth">
                  Browse Products
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map(order => (
                <div key={order.id} className="bg-[#F8FBFE] rounded-2xl p-6 border border-[#E8F4FD]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-[#E8F4FD]">
                    <div>
                      <p className="text-xs text-[#0C1E3F]/50 uppercase tracking-wide font-semibold">Order ID</p>
                      <p className="font-bold text-[#0C1E3F]">{order.id}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[#0C1E3F]/60">
                      <Calendar className="w-4 h-4" />
                      {new Date(order.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-[#0C1E3F]">{item.name} <span className="text-[#0C1E3F]/50">× {item.quantity}</span></span>
                        <span className="font-semibold text-[#0A5EBF]">Rs. {item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#E8F4FD]">
                    <div className="flex items-center gap-1.5 text-xs text-[#0C1E3F]/60">
                      <CreditCard className="w-3.5 h-3.5" />
                      {paymentLabels[order.paymentMethod] ?? order.paymentMethod}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#0C1E3F]/60 max-w-xs truncate">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      {order.customerAddress}
                    </div>
                    <p className="font-bold text-[#0C1E3F]">Total: <span className="text-[#0A5EBF]">Rs. {order.total}</span></p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}