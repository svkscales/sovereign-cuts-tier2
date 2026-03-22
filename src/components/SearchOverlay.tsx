"use client";

import { X, Search } from "lucide-react";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        document.getElementById("search-input")?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div 
        className={clsx(
          "fixed inset-0 bg-black/90 backdrop-blur-xl z-[60] transition-opacity duration-300 flex flex-col items-center pt-32 md:pt-48 px-6",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button onClick={onClose} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
          <X className="w-8 h-8" />
        </button>

        <div 
          className={clsx(
            "w-full max-w-3xl transform transition-all duration-500",
            isOpen ? "translate-y-0 opacity-100 delay-100" : "-translate-y-8 opacity-0"
          )}
        >
          <p className="text-gold text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-6 text-center font-sans">
            Search Sovereign Cuts
          </p>
          <div className="relative flex items-center border-b-2 border-white/20 pb-4 group">
            <Search className="w-8 h-8 text-white/50 mr-4 group-focus-within:text-gold transition-colors" />
            <input 
              id="search-input"
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What are you looking for?" 
              className="w-full bg-transparent text-3xl md:text-5xl font-serif text-white placeholder:text-white/20 focus:outline-none placeholder:font-serif caret-gold" 
              autoComplete="off"
            />
          </div>
          
          <div className="mt-16 text-center text-white/40 text-[10px] md:text-xs tracking-[0.2em] font-sans uppercase">
             {query ? `Press Enter to search for "${query}"` : "e.g. Services, Contact, Mod Cut, Essentials"}
          </div>
        </div>
      </div>
    </>
  );
}
