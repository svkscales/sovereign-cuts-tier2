"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useBasket } from "@/context/BasketContext";
import BookingModal, { ServiceItem } from "@/components/BookingModal";

const hairServices: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'MOD CUT',
    price: '£35',
    desc: 'A structured, bowl-adjacent shape with heavy fringe presence and clean interior texturing. Requires exact scissor control to balance weight and movement.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'ADVANCED',
    name: 'FLOW CUT',
    price: '£40',
    desc: 'Long, sweeping layers designed to move naturally. The challenge lies in achieving seamless graduation and removing bulk without losing the fluid shape.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'WOLF CUT',
    price: '£45',
    desc: 'A bold hybrid of the shag and mullet, featuring heavy layers and a choppy texture. Requires precise sectioning to maintain volume on top while keeping the edges aggressive.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'MULLET',
    price: '£35',
    desc: 'The modern classic. Tight fades on the sides with deliberate length and flow at the back. Masterful texturing required to blend the opposing lengths smoothly.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'FRENCH CROP',
    price: '£30',
    desc: 'A sharp, textured top with a blunt fringe, perfectly contrasted against tight sides. The architecture of a flawless crop lies in the weight distribution.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'EXPERT',
    name: 'BURST FADE',
    price: '£35',
    desc: 'A rounded fade dropping behind the ear, preserving bulk at the nape. Requires highly technical clipper work to ensure a symmetrical, flawless gradient curve.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'DROP FADE',
    price: '£35',
    desc: 'A low gradient that arches down behind the ear. This fade requires exact clipper techniques to trace the natural curvature of the head dynamically.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'MASTERY',
    name: 'SKIN FADE (MED/HIGH)',
    price: '£40',
    desc: 'Taking the clipper work down to the bone. The true mark of a master barber is a skin fade with no visible weight lines—just a seamless gradient from skin to hair.',
    recommended: 'Solomon Vane'
  },
];

const beardServices: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'FULL BEARD SCULPT',
    price: '£25',
    desc: 'Shaping and defining the beard to complement your facial structure. Includes precision trimming, line work, and deep conditioning.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'EXPERT',
    name: 'BEARD FADE',
    price: '£20',
    desc: 'Fading the beard into the skin fade seamlessly. A highly technical blend that bridges the gap between the scalp and facial hair.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'MASTERY',
    name: 'SKIN FADE BEARD BLEND',
    price: '£35',
    desc: 'Seamlessly connecting the head fade into the beard—arguably the hardest technical exercise in barbering. The two must read as one continuous gradient.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'BEARD COLOUR AND TINT',
    price: '£30',
    desc: 'Covering greys or adding depth for a fuller, richer appearance. Exact color matching applied with meticulous brushwork.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'MASTERY',
    name: 'STRAIGHT RAZOR HOT TOWEL SHAVE',
    price: '£40',
    desc: 'Ritual as much as service. Hot towels, pre-shave oil, single-pass blade work across the grain. A clean head shave or face shave delivered the old way.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'EXPERT',
    name: 'HEAD SHAVE',
    price: '£35',
    desc: 'Full head shave with a hot towel finish. Executed with a straight razor for an immaculately smooth result.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'ADVANCED',
    name: 'BEARD WASH AND CONDITION',
    price: '£15',
    desc: 'Deep clean and moisturise treatment. Restores natural oils and softens coarse facial hair using premium Sovereign grade products.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'MOUSTACHE TRIM AND SHAPE',
    price: '£15',
    desc: 'Precision sculpting for the standalone moustache. Detailed scissor work to maintain a sharp, deliberate shape.',
    recommended: 'Dorian Cross'
  },
];

const treatments: ServiceItem[] = [
  {
    level: 'ADVANCED',
    name: 'SCALP TREATMENT',
    price: '£20',
    desc: 'Exfoliating and moisturising scalp massage to promote circulation and healthy hair growth.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'ADVANCED',
    name: 'BLACK MASK FACIAL',
    price: '£25',
    desc: 'Deep pore cleansing face mask to extract impurities and rejuvenate the skin beneath.',
    recommended: 'Finn Ashby'
  },
  {
    level: 'EXPERT',
    name: 'EYEBROW THREADING OR WAXING',
    price: '£15',
    desc: 'Clean, defined brows perfectly structured to frame the face. Executed with razor-sharp precision.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'HAIR TONING',
    price: '£30',
    desc: 'Removing brassiness or adding cool tones. Perfect for enhancing grey or artificially lightened hair.',
    recommended: 'Solomon Vane'
  },
  {
    level: 'MASTERY',
    name: 'KERATIN TREATMENT',
    price: '£80',
    desc: 'A premium smoothing and strengthening treatment to tame frizz and lock in a polished, effortless finish for weeks.',
    recommended: 'Dorian Cross'
  },
  {
    level: 'EXPERT',
    name: 'FADE REFRESH',
    price: '£25',
    desc: 'A mid-appointment tidy up. We redefine the perimeter and bring the skin fade back to absolute zero without altering the top.',
    recommended: 'Solomon Vane'
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center py-16 md:py-24 px-6 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <span className="text-[25vw] leading-none tracking-widest text-[#F0EDE8] font-serif uppercase">
          MENU
        </span>
      </div>

      <div className="w-full max-w-6xl mb-12 flex justify-between items-center z-10 border-b border-white/10 pb-6">
        <Link href="/" className="text-[10px] md:text-xs text-white/50 hover:text-gold uppercase tracking-[0.2em] transition-colors flex items-center gap-2 font-bold font-sans">
          <span>&larr;</span> CROWN CUTS
        </Link>
        <span className="text-[10px] md:text-xs text-gold uppercase tracking-[0.2em] font-bold font-sans">
          SERVICES
        </span>
      </div>

      <div className="max-w-6xl w-full z-10 mt-6">
        
        {/* Header Block */}
        <div className="mb-16">
          <span className="text-gold tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold font-sans block mb-5 opacity-80 shadow-black drop-shadow-md">
            CROWN CUTS - EST. 2026
          </span>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-[#F0EDE8] uppercase mb-6 tracking-widest drop-shadow-md">
            THE MENU
          </h1>
          <p className="text-[#F0EDE8]/60 tracking-[0.1em] text-sm md:text-base font-sans font-light italic mb-10 max-w-3xl">
            Every cut is assessed by difficulty. Barber recommendations are our honest advice — not marketing.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-6 text-[10px] md:text-xs tracking-[0.2em] font-sans font-bold text-white/50 uppercase">
            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#f8f8f8]" /> ADVANCED</div>
            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#c0392b]" /> EXPERT</div>
            <div className="flex items-center gap-3"><span className="w-2.5 h-2.5 rounded-full bg-[#c5a059]" /> MASTERY</div>
          </div>
        </div>

        {/* HAIR SECTION */}
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.3em] font-bold uppercase font-sans text-white/40 mb-8 mt-12">HAIR</h2>
          <div className="flex flex-col">
            {hairServices.map((item) => (
              <ServiceRow key={item.name} item={item} onBook={setSelectedService} />
            ))}
          </div>
        </div>

        {/* BEARD SERVICES SECTION */}
        <div className="mb-16">
          <h2 className="text-sm tracking-[0.3em] font-bold uppercase font-sans text-white/40 mb-8 mt-12">BEARD SERVICES</h2>
          <div className="flex flex-col">
            {beardServices.map((item) => (
              <ServiceRow key={item.name} item={item} onBook={setSelectedService} />
            ))}
          </div>
        </div>

        {/* TREATMENTS AND EXTRAS SECTION */}
        <div className="mb-20">
          <h2 className="text-sm tracking-[0.3em] font-bold uppercase font-sans text-white/40 mb-8 mt-12">TREATMENTS AND EXTRAS</h2>
          <div className="flex flex-col">
            {treatments.map((item) => (
              <ServiceRow key={item.name} item={item} onBook={setSelectedService} />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[#f8f8f8]/60 tracking-[0.1em] text-sm font-sans font-light italic">
            Ready to sit in the chair?
          </p>
          <Link href="/#coaching" className="border border-[#c0392b] text-[#c0392b] px-10 py-5 text-[10px] tracking-[0.2em] font-sans font-bold hover:bg-[#c0392b]/10 transition-colors uppercase shadow-[0_0_15px_rgba(192,57,43,0.15)] hover:shadow-[0_0_20px_rgba(192,57,43,0.3)]">
            CHOOSE YOUR BARBER
          </Link>
        </div>

      </div>

      <BookingModal service={selectedService} onClose={() => setSelectedService(null)} />
    </main>
  );
}

function ServiceRow({ item, onBook }: { item: ServiceItem; onBook: (item: ServiceItem) => void }) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'ADVANCED': return 'text-[#f8f8f8]/70 border-[#f8f8f8]/40 bg-transparent';
      case 'EXPERT': return 'text-[#c0392b] border-[#c0392b]/50 bg-[#c0392b]/5';
      case 'MASTERY': return 'text-[#c5a059] border-[#c5a059]/50 bg-[#c5a059]/5';
      default: return 'text-[#f8f8f8]/70 border-[#f8f8f8]/40 bg-transparent';
    }
  };

  const getSlug = (name: string) => {
    return name.toLowerCase().split(' ').join('-');
  }

  return (
    <div className="flex flex-col md:flex-row justify-between border-t border-white/10 py-8 md:py-10 group hover:bg-white/[0.015] transition-colors px-2 md:px-0">
      <div className="flex-1 pr-0 md:pr-10 mb-6 md:mb-0">
        <div className={`px-2.5 py-1 text-[8px] uppercase inline-block mb-4 font-bold tracking-[0.25em] border ${getLevelColor(item.level)} rounded-sm opacity-90 shadow-sm`}>
          {item.level}
        </div>
        <h3 className="text-2xl md:text-3xl font-serif text-[#F0EDE8] uppercase mb-4 drop-shadow-sm tracking-wide">
          {item.name}
        </h3>
        <p className="text-xs md:text-sm font-sans font-light text-[#f8f8f8]/50 max-w-3xl leading-relaxed mb-5 md:mb-4">
          {item.desc}
        </p>
        <p className="text-[10px] md:text-xs font-serif italic text-white/30">
          Recommended: <span className="font-bold text-[#F0EDE8]/80 not-italic uppercase tracking-widest">{item.recommended}</span>
        </p>
      </div>

      <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-end md:w-40 flex-shrink-0 pt-0 md:pt-4">
        <span className="text-2xl md:text-3xl font-serif text-[#F0EDE8] font-bold drop-shadow-md mb-0 md:mb-5">
          {item.price}
        </span>
        <button 
          onClick={() => onBook(item)}
          className="mt-0 md:mt-auto border border-[#c0392b] px-8 md:px-10 py-3 md:py-3 text-[9px] md:text-[10px] tracking-[0.2em] font-sans font-bold text-[#c0392b] hover:bg-[#c0392b]/10 transition-colors uppercase cursor-pointer"
        >
          BOOK
        </button>
      </div>
    </div>
  );
}
