"use client";

import Link from "next/link";
import { CreditCard, Smartphone, Store, ArrowLeft } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <span className="text-[25vw] leading-none tracking-widest text-[#F0EDE8] font-serif uppercase">
          SECURE
        </span>
      </div>

      <div className="max-w-[500px] w-full z-10 bg-[#131313] border border-white/10 p-8 md:p-12 shadow-2xl rounded-sm">
        <div className="text-center mb-10">
          <span className="text-gold tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold font-sans block mb-4 opacity-80">
            SOVEREIGN CUTS - CHECKOUT
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#F0EDE8] uppercase tracking-widest drop-shadow-md mb-2">
            Payment
          </h1>
          <p className="text-white/40 text-xs tracking-widest uppercase font-sans">
            Select an option below to complete booking.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <button className="flex items-center justify-center gap-4 bg-[#111111] border border-white/10 hover:border-[#FFB3C7] text-white py-5 px-6 rounded-sm transition-all group">
            <span className="font-bold tracking-widest text-sm uppercase group-hover:text-[#FFB3C7] transition-colors">Klarna.</span>
          </button>
          
          <button className="flex items-center justify-center gap-4 bg-[#111111] border border-white/10 hover:border-gold text-white py-5 px-6 rounded-sm transition-all group">
            <CreditCard className="w-5 h-5 text-white/50 group-hover:text-gold transition-colors" />
            <span className="font-bold tracking-widest text-sm uppercase group-hover:text-gold transition-colors">Card</span>
          </button>
          
          <button className="flex items-center justify-center gap-4 bg-[#111111] border border-white/10 hover:border-white/50 text-white py-5 px-6 rounded-sm transition-all group">
            <Smartphone className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            <span className="font-bold tracking-widest text-sm uppercase group-hover:text-white transition-colors">Apple Pay</span>
          </button>
          
          <button className="flex items-center justify-center gap-4 bg-[#111111] border border-white/10 hover:border-gold text-white py-5 px-6 rounded-sm transition-all group">
            <Store className="w-5 h-5 text-white/50 group-hover:text-gold transition-colors" />
            <span className="font-bold tracking-widest text-sm uppercase group-hover:text-gold transition-colors">Pay at Store</span>
          </button>
        </div>

        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/30 hover:text-gold text-[10px] tracking-[0.2em] uppercase font-bold transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Return to Store
          </Link>
        </div>
      </div>
    </main>
  );
}
