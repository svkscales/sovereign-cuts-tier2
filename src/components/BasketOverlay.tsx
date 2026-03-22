"use client";

import { X, Scissors } from "lucide-react";
import { clsx } from "clsx";
import { useEffect } from "react";
import { useBasket } from "@/context/BasketContext";
import Link from "next/link";

export default function BasketOverlay() {
  const { items, removeItem, isBasketOpen, setIsBasketOpen } = useBasket();

  useEffect(() => {
    if (isBasketOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isBasketOpen]);

  const total = items.reduce((sum, item) => sum + parseInt(item.price.replace('£', '')), 0);

  return (
    <>
      <div 
        className={clsx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isBasketOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsBasketOpen(false)}
      />

      <div 
        className={clsx(
          "fixed top-0 right-0 bottom-0 w-[450px] max-w-full bg-[#1A1A1A] border-l border-white/5 z-50 p-6 md:p-10 transform transition-transform duration-500 ease-in-out flex flex-col font-sans",
          isBasketOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-bold tracking-[0.2em] text-white uppercase font-sans">Your Basket</h2>
            <p className="text-white/50 text-xs tracking-widest mt-1 uppercase">{items.length} Items</p>
          </div>
          <button onClick={() => setIsBasketOpen(false)} className="text-white/70 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between border-b border-white/10 py-6 group">
              <div className="flex gap-4">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5 text-white/50" />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-bold text-white mb-1 tracking-wide">{item.service}</h3>
                  <p className="text-[11px] tracking-[0.1em] text-white/70 uppercase mb-1">{item.barber}</p>
                  {item.time && <p className="text-[11px] text-white/40">{item.time}</p>}
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <p className="text-xl font-bold text-white">{item.price}</p>
                <button onClick={() => removeItem(item.id)} className="text-[10px] tracking-[0.1em] text-white/40 group-hover:text-[#c0392b] transition-colors uppercase cursor-pointer z-10">
                  Remove
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="text-center text-white/40 text-sm mt-10 tracking-[0.1em] uppercase font-sans">
              Basket is empty
            </div>
          )}
        </div>

        <div className="pt-8 border-t border-white/10 mt-auto">
          {items.map((item) => (
            <div key={item.id + "summary"} className="flex justify-between text-xs tracking-widest text-white/60 mb-3 uppercase">
              <span>{item.service}</span>
              <span>{item.price}</span>
            </div>
          ))}
          
          <div className="flex justify-between items-end mt-6 mb-8">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white uppercase">Total</h3>
            <p className="text-3xl font-bold text-white">£{total}</p>
          </div>

          <Link href="/checkout" target="_blank" className="w-full bg-gold hover:bg-[#e0b86a] text-black py-4 font-bold tracking-[0.15em] uppercase transition-all rounded-sm mb-3 text-sm flex items-center justify-center text-center shadow-[0_4px_15px_rgba(197,160,89,0.2)]">
            Proceed to Checkout
          </Link>
          <button 
            onClick={() => setIsBasketOpen(false)}
            className="w-full border border-white/10 hover:border-white/30 text-white/70 hover:text-white py-4 font-bold tracking-[0.15em] uppercase transition-colors rounded-sm text-xs"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </>
  );
}
