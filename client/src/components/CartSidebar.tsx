import React from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-screen w-full max-w-md bg-white shadow-2xl z-50 flex flex-col overflow-hidden transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="shrink-0 bg-white border-b border-[#E8F4FD] p-6 flex items-center justify-between">
          <h2 className="text-xl font-bold font-display text-[#0C1E3F]">
            Shopping Cart
          </h2>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#F8FBFE] rounded-lg transition-smooth"
              >
                <X className="w-5 h-5 text-[#0C1E3F]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>Close cart</TooltipContent>
          </Tooltip>
        </div>

        <div className="cart-scroll flex-1 min-h-0 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-16 h-16 rounded-full bg-[#E8F4FD] flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[#0A5EBF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-[#0C1E3F]/60 font-body">Your cart is empty</p>
              <p className="text-xs text-[#0C1E3F]/40 mt-2">Add products to get started</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-[#F8FBFE] rounded-lg hover:bg-[#E8F4FD] transition-smooth"
                >
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center shrink-0 border border-[#E8F4FD]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-[#0C1E3F] truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#0C1E3F]/60 mb-2">
                      Rs. {item.price}
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded transition-smooth"
                          >
                            <Minus className="w-3 h-3 text-[#0A5EBF]" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Decrease quantity</TooltipContent>
                      </Tooltip>
                      <span className="text-xs font-semibold text-[#0C1E3F] min-w-[20px] text-center">
                        {item.quantity}
                      </span>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded transition-smooth"
                          >
                            <Plus className="w-3 h-3 text-[#0A5EBF]" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>Increase quantity</TooltipContent>
                      </Tooltip>
                    </div>

                    <p className="text-xs font-semibold text-[#0A5EBF]">
                      Rs. {item.price * item.quantity}
                    </p>
                  </div>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded transition-smooth text-red-500"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>Remove item</TooltipContent>
                  </Tooltip>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="shrink-0 bg-white border-t border-[#E8F4FD] p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#0C1E3F]/60">
                <span>Subtotal:</span>
                <span>Rs. {total}</span>
              </div>
              <div className="flex justify-between text-sm text-[#0C1E3F]/60">
                <span>Shipping:</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-[#E8F4FD] pt-2 flex justify-between font-bold text-[#0C1E3F]">
                <span>Total:</span>
                <span>Rs. {total}</span>
              </div>
            </div>

            <Link href="/checkout">
              <button
                onClick={onClose}
                className="w-full py-3 bg-[#0A5EBF] text-white font-semibold rounded-lg hover:bg-[#084A9A] transition-smooth active:scale-95"
              >
                Proceed to Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="w-full py-2 border border-[#E8F4FD] text-[#0C1E3F] font-semibold rounded-lg hover:bg-[#F8FBFE] transition-smooth"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}