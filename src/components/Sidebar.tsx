"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { clsx } from "clsx";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "GALLERY", href: "/gallery" },
  { name: "BOOKING", href: "/#coaching" },
  { name: "CONTACT", href: "/contact" },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={clsx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar Panel */}
      <div 
        className={clsx(
          "fixed top-0 left-0 bottom-0 w-[300px] max-w-[80vw] bg-panel border-r border-white/10 z-50 p-8 transform transition-transform duration-500 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Top Logo Area Header */}
        <div className="absolute top-0 left-0 right-0 h-32 border-b border-white/5 flex items-center justify-between px-8 bg-[#151515]">
          <svg
            width="45"
            height="35"
            viewBox="0 0 100 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <defs>
              <linearGradient id="chromeGradientSidebar" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#d4d4d4" />
                <stop offset="50%" stopColor="#8a8a8a" />
                <stop offset="65%" stopColor="#c0c0c0" />
                <stop offset="100%" stopColor="#595959" />
              </linearGradient>
            </defs>
            <path 
              d="M 15 75 C 18 60 22 45 25 34 C 28 55 33 63 38 63 C 43 63 48 45 50 20 C 52 45 57 63 62 63 C 67 63 72 55 75 34 C 78 45 82 60 85 75 C 65 72 35 72 15 75 Z"
              fill="url(#chromeGradientSidebar)" 
            />
            <circle cx="25" cy="30" r="2.5" fill="url(#chromeGradientSidebar)" />
            <circle cx="50" cy="15" r="3.5" fill="url(#chromeGradientSidebar)" />
            <circle cx="75" cy="30" r="2.5" fill="url(#chromeGradientSidebar)" />
          </svg>
          
          <button 
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-32 flex flex-col w-full h-[calc(100%-8rem)] overflow-y-auto pt-6 pb-12">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="flex flex-col group">
              <Link 
                href={link.href}
                onClick={onClose}
                className="relative text-xl md:text-[2rem] font-serif text-white/70 group-hover:text-white py-6 flex flex-col justify-center transition-all duration-500 overflow-hidden"
              >
                <div className="flex items-center w-full">
                  <span className="relative z-10 uppercase tracking-widest drop-shadow-md group-hover:pl-4 transition-all duration-500 ease-out italic group-hover:not-italic">{link.name}</span>
                  <span className="absolute left-0 opacity-0 group-hover:opacity-100 text-gold transition-all duration-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  </span>
                  
                  {/* Numbered Index */}
                  <span className="ml-auto text-xs font-sans tracking-[0.2em] text-white/20 group-hover:text-gold/60 transition-colors">
                    0{idx + 1}
                  </span>
                </div>
              </Link>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-1 group-hover:via-gold/30 transition-colors duration-500" />
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
