import Link from 'next/link';
import { Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <span className="text-[25vw] leading-none tracking-widest text-[#F0EDE8] font-serif uppercase">
          CONTACT
        </span>
      </div>

      <div className="w-full max-w-7xl mb-12 flex justify-between items-center z-10 border-b border-white/10 pb-6">
        <Link href="/" className="text-[10px] md:text-xs text-white/50 hover:text-gold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 font-bold font-sans">
          <span>&larr;</span> SOVEREIGN CUTS
        </Link>
        <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.2em] font-bold font-sans">
          CONTACT
        </span>
      </div>

      <div className="max-w-[800px] w-full z-10 mt-10 md:mt-20">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold tracking-[0.2em] uppercase text-[10px] md:text-sm font-bold font-sans block mb-6 opacity-80 shadow-black drop-shadow-md">
            SOVEREIGN CUTS - EST. 2026
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#F0EDE8] uppercase mb-8 tracking-widest drop-shadow-md">
            GET IN TOUCH
          </h1>
          <p className="text-[#F0EDE8]/60 tracking-[0.1em] text-sm md:text-base font-sans font-light italic">
            Find us on the handles below or drop us a line directly.
          </p>
        </div>

        <div className="flex flex-col border-t border-white/10">
          
          <a href="https://www.instagram.com/svkscales?igsh=MTkzZjkzOHNkNHExbg%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer border-b border-white/10 py-8 md:py-10 px-4 hover:bg-white/[0.02] transition-colors">
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center mr-6 md:mr-8 rounded-sm bg-[#111111] group-hover:border-gold/40 transition-colors shadow-lg">
              <Instagram className="w-5 h-5 text-[#F0EDE8]/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-sans font-bold mb-2">INSTAGRAM</p>
              <p className="text-base md:text-lg font-serif uppercase tracking-widest text-[#F0EDE8]">@SVKSCALES</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
          </a>

          <a href="mailto:SVKSCALES@GMAIL.COM" className="flex items-center group cursor-pointer border-b border-white/10 py-8 md:py-10 px-4 hover:bg-white/[0.02] transition-colors">
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center mr-6 md:mr-8 rounded-sm bg-[#111111] group-hover:border-gold/40 transition-colors shadow-lg">
              <Mail className="w-5 h-5 text-[#F0EDE8]/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-sans font-bold mb-2">EMAIL</p>
              <p className="text-base md:text-lg font-serif uppercase tracking-widest text-[#F0EDE8]">SVKSCALES@GMAIL.COM</p>
            </div>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
          </a>

          <div className="flex items-center group cursor-default border-b border-white/10 py-8 md:py-10 px-4">
            <div className="w-14 h-14 border border-white/10 flex items-center justify-center mr-6 md:mr-8 rounded-sm bg-[#111111] shadow-lg">
              <MapPin className="w-5 h-5 text-[#F0EDE8]/70" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <p className="text-[10px] text-white/40 tracking-[0.3em] uppercase font-sans font-bold mb-2">LOCATION</p>
              <p className="text-base md:text-lg font-serif uppercase tracking-widest text-[#F0EDE8]">123 BARBER LANE, LONDON</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
