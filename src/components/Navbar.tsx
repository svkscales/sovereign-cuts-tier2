"use client";

import { useState } from "react";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import NewsletterDropdown from "./NewsletterDropdown";
import BasketOverlay from "./BasketOverlay";
import SearchOverlay from "./SearchOverlay";
import { useBasket } from "@/context/BasketContext";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items, isBasketOpen, setIsBasketOpen } = useBasket();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-[#111111]/95 backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.9)] transition-all duration-300">
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="text-white hover:text-gold transition-colors p-2"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="hover:opacity-80 transition-opacity flex flex-col items-center">
            {/* Chrome 3-point Spiked Crown Logo */}
            <svg
              width="55"
              height="45"
              viewBox="0 0 100 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transition-all hover:brightness-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              <defs>
                <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#d4d4d4" />
                  <stop offset="50%" stopColor="#8a8a8a" />
                  <stop offset="65%" stopColor="#c0c0c0" />
                  <stop offset="100%" stopColor="#595959" />
                </linearGradient>
              </defs>
              <path 
                d="M 15 75 C 18 60 22 45 25 34 C 28 55 33 63 38 63 C 43 63 48 45 50 20 C 52 45 57 63 62 63 C 67 63 72 55 75 34 C 78 45 82 60 85 75 C 65 72 35 72 15 75 Z"
                fill="url(#chromeGradient)" 
              />
              <circle cx="25" cy="30" r="2.5" fill="url(#chromeGradient)" />
              <circle cx="50" cy="15" r="3.5" fill="url(#chromeGradient)" />
              <circle cx="75" cy="30" r="2.5" fill="url(#chromeGradient)" />
            </svg>
          </Link>
        </div>

        <div className="flex items-center space-x-4 relative">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="text-white hover:text-gold transition-colors p-2"
          >
            <Search className="w-5 h-5" />
          </button>
          
          <button 
            onClick={() => setIsBasketOpen(true)}
            className="text-white hover:text-gold transition-colors p-2 relative"
          >
            <ShoppingBag className="w-5 h-5" />
            {items.length > 0 && (
              <span className="absolute top-1 right-1 bg-[#c0392b] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            )}
          </button>

          <div className="relative">
            <button 
              onClick={() => setIsNewsletterOpen(!isNewsletterOpen)}
              className="text-white hover:text-gold transition-colors p-2"
            >
              <User className="w-5 h-5" />
            </button>
            <NewsletterDropdown isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
