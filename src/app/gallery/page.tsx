import Link from 'next/link';
import { Image as ImageIcon } from "lucide-react";

export default function GalleryPage() {
  const images = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <span className="text-[25vw] leading-none tracking-widest text-[#F0EDE8] font-serif uppercase">
          GALLERY
        </span>
      </div>

      <div className="w-full max-w-7xl mb-12 flex justify-between items-center z-10 border-b border-white/10 pb-6">
        <Link href="/" className="text-[10px] md:text-xs text-white/50 hover:text-gold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 font-bold font-sans">
          <span>&larr;</span> SOVEREIGN CUTS
        </Link>
        <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.2em] font-bold font-sans">
          GALLERY
        </span>
      </div>

      <div className="max-w-6xl w-full z-10 mt-10">
        <div className="mb-16 md:mb-24">
          <span className="text-gold tracking-[0.2em] uppercase text-[10px] md:text-sm font-bold font-sans block mb-5 opacity-80">
            SOVEREIGN CUTS - EST. 2026
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#F0EDE8] uppercase mb-6 tracking-widest drop-shadow-md">
            THE WORK
          </h1>
          <p className="text-[#F0EDE8]/60 tracking-[0.1em] text-sm md:text-base font-sans font-light italic">
            Every cut is a credential. Every client leaves the chair differently to how they arrived.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img} className="aspect-[4/3] relative bg-[#151515] border border-white/5 flex flex-col items-center justify-center group overflow-hidden shadow-lg hover:border-gold/30 transition-colors duration-500 cursor-pointer">
              
              {/* Corner Accents */}
              <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-white/20 group-hover:border-gold transition-colors duration-500" />
              <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-white/20 group-hover:border-gold transition-colors duration-500" />
              <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-white/20 group-hover:border-gold transition-colors duration-500" />
              <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-white/20 group-hover:border-gold transition-colors duration-500" />

              <ImageIcon className="w-8 h-8 text-white/10 mb-4 group-hover:text-gold/50 transition-colors duration-500" strokeWidth={1} />
              <span className="text-[10px] text-white/20 tracking-[0.3em] font-sans uppercase group-hover:text-gold/80 transition-colors duration-500 font-bold">
                IMAGE {img}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
