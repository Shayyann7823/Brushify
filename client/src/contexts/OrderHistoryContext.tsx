import React, { createContext, useContext, useState, useEffect } from "react";
import type { CartItem } from "./CartContext";

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  paymentMethod: string;
}

interface OrderHistoryContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  clearHistory: () => void;
}

const OrderHistoryContext = createContext<OrderHistoryContextType | undefined>(undefined);

export function OrderHistoryProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("brushify_orders");
    if (saved) {
      try {
        setOrders(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load order history:", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("brushify_orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order: Order) => {
    setOrders(prev => [order, ...prev]);
  };

  const clearHistory = () => {
    setOrders([]);
  };

  return (
    <OrderHistoryContext.Provider value={{ orders, addOrder, clearHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
}

export function useOrderHistory() {
  const context = useContext(OrderHistoryContext);
  if (!context) {
    throw new Error("useOrderHistory must be used within OrderHistoryProvider");
  }
  return context;
}