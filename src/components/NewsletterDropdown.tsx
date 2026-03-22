"use client";

import { clsx } from "clsx";

interface NewsletterDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterDropdown({ isOpen, onClose }: NewsletterDropdownProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose} 
      />
      <div 
        className="absolute right-0 top-full mt-4 w-72 bg-panel border border-white/10 p-6 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200"
      >
        <h3 className="text-xl font-serif text-white mb-2">Join Our Newsletter</h3>
        <p className="text-sm text-gray-400 mb-4">
          Stay updated with the latest grooming tips, products, and exclusive offers from Sovereign Cuts.
        </p>
        <form className="flex flex-col space-y-3" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <input 
            type="email" 
            placeholder="Email Address" 
            required
            className="bg-black border border-white/20 text-white px-3 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
          />
          <button 
            type="submit"
            className="bg-gold hover:bg-gold-hover text-black font-semibold py-2 text-sm uppercase tracking-wider transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </>
  );
}
