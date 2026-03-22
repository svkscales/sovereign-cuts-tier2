"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface BasketItem {
  id: string;
  service: string;
  barber: string;
  price: string;
  time?: string;
}

interface BasketContextType {
  items: BasketItem[];
  addItem: (item: Omit<BasketItem, 'id'>) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  isBasketOpen: boolean;
  setIsBasketOpen: (isOpen: boolean) => void;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export function BasketProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BasketItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const addItem = (item: Omit<BasketItem, 'id'>) => {
    const newItem = { ...item, id: Math.random().toString(36).substring(7) };
    setItems((prev) => [...prev, newItem]);
    setIsBasketOpen(true);
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const clearBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider value={{ items, addItem, removeItem, clearBasket, isBasketOpen, setIsBasketOpen }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
}
