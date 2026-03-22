"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const barbers = [
  {
    slug: "solomon-vane",
    name: "SOLOMON VANE",
    title: "SENIOR BARBER",
    level: "SENIOR",
    specialty: "Skin Fades & Hot Towel Shaves",
    bio: "15 years behind the chair, Solomon's hands move like a surgeon's. Unhurried, deliberate, exact. His fades are studied like scripture in his shop.",
    accent: "#c5a059",
  },
  {
    slug: "dorian-cross",
    name: "DORIAN CROSS",
    title: "SENIOR BARBER",
    level: "SENIOR",
    specialty: "Scissor Work & Classic Cuts",
    bio: "A true master of architecture and flow. Dorian’s scissor work constructs timeless silhouettes tailored perfectly to the individual’s distinct bone structure.",
    accent: "#c5a059",
  },
  {
    slug: "finn-ashby",
    name: "FINN ASHBY",
    title: "JUNIOR BARBER",
    level: "JUNIOR",
    specialty: "Beard Sculpting & Modern Tapers",
    bio: "The newest prodigy to step into Sovereign Cuts. Finn blends sharp, new-school techniques with old-world dedication, making him a rising star.",
    accent: "#c5a059",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.25 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 10, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    scale: 1,
    transition: { 
      duration: 1.2, 
      ease: [0.16, 1, 0.3, 1] as const
    } 
  },
};

export default function TheBarbers() {
  return (
    <section id="coaching" className="relative bg-background py-16 md:py-24 overflow-hidden z-20">

      {/* Faint background lettering */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.03] select-none">
        <span className="text-[20vw] leading-none tracking-widest text-white font-serif uppercase">
          SOVEREIGN
        </span>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 flex flex-col items-center"
        >
          <span className="text-gold text-[10px] md:text-sm tracking-[0.2em] font-medium uppercase mb-4 font-sans drop-shadow-md">
            SOVEREIGN CUTS - EST. 2026
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl tracking-widest text-[#F0EDE8] drop-shadow-md font-serif uppercase">
            THE BARBERS
          </h2>
          <p className="mt-6 text-sm md:text-base text-gold/80 uppercase tracking-[0.2em] max-w-2xl font-serif italic">
            THREE CRAFTSMEN. ONE STANDARD OF EXCELLENCE.
          </p>
        </motion.div>

        {/* Coach Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10"
        >
          {barbers.map((barber) => (
            <motion.div
              key={barber.slug}
              variants={cardVariants}
              className="group relative bg-[#1a1a1a] rounded-sm border border-white/5 overflow-hidden flex flex-col hover:border-gold/30 transition-colors duration-500"
            >
              <div className="relative h-[300px] md:h-[350px] bg-[#111111] overflow-hidden flex items-end">
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[9rem] leading-none text-white opacity-5 select-none transition-transform duration-700 group-hover:scale-110 font-serif">
                    {barber.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-black/50 text-gold border border-gold/30 backdrop-blur-md font-sans">
                    {barber.level}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a1a] to-transparent z-10" />
                
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase drop-shadow-lg font-serif whitespace-nowrap overflow-hidden text-ellipsis">
                    {barber.name}
                  </h3>
                  <p className="text-gold text-xs sm:text-sm tracking-[0.2em] font-medium uppercase mt-2 drop-shadow-md font-sans">
                    {barber.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6 md:p-8 relative z-20">
                <div className="mb-5 pb-5 border-b border-white/5">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-gold font-sans font-bold">Specialties</span>
                  <p className="text-white/90 font-bold tracking-wide text-xs md:text-sm uppercase font-sans mt-2">
                    {barber.specialty}
                  </p>
                </div>

                <p className="text-[#F0EDE8]/80 font-light text-sm md:text-[15px] leading-relaxed mb-10 font-sans">
                  {barber.bio}
                </p>

                <div className="mt-auto">
                  <Link
                    href={`/book/${barber.slug}`}
                    className="relative overflow-hidden flex w-full items-center justify-center py-4 bg-[#111111] border border-gold/40 text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold group/btn font-sans rounded-none transition-all hover:shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                  >
                    <span className="relative z-10 transition-colors duration-300 text-gold group-hover/btn:text-black">BOOK NOW</span>
                    <div className="absolute inset-x-0 bottom-0 h-0 transition-all duration-300 ease-out group-hover/btn:h-full z-0 bg-gold" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
