"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-background py-16 md:py-24 text-white relative z-20 border-t border-white/5" id="location">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-12 lg:gap-24 justify-between">
          
          {/* Left Side: Address & Info */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#F0EDE8] uppercase mb-10 tracking-widest drop-shadow-md">
                LOCATION
              </h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm tracking-[0.2em] font-bold uppercase font-sans text-white mb-2">SOVEREIGN CUTS HQ</h3>
                    <p className="text-white/60 font-sans font-light leading-relaxed text-sm uppercase tracking-wide">
                      123 Barber Lane<br />
                      London, W1D 4AB
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0" strokeWidth={1.5} />
                  <p className="text-white/60 font-sans font-light tracking-widest text-sm uppercase">+44 20 7123 4567</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gold shrink-0" strokeWidth={1.5} />
                  <p className="text-white/60 font-sans font-light tracking-widest text-sm uppercase">SVKSCALES@GMAIL.COM</p>
                </div>

                {/* Google Maps Button */}
                <div className="pt-6">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center border border-white/20 hover:border-gold px-10 py-4 text-[10px] tracking-[0.2em] font-sans font-bold text-white hover:text-gold hover:bg-gold/5 transition-all uppercase cursor-pointer shadow-lg"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Opening Hours */}
          <div className="flex-1 md:max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="bg-[#111111] p-10 md:p-12 border border-white/5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] rounded-sm relative overflow-hidden group"
            >
              {/* Subtle accent hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <h3 className="text-xs md:text-sm tracking-[0.2em] font-bold uppercase font-sans text-gold mb-10 text-left">
                TRADING HOURS
              </h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/50 font-bold uppercase">MON - THU</span>
                  <span className="text-sm md:text-base font-serif text-[#F0EDE8] tracking-widest">9AM — 8PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/50 font-bold uppercase">FRIDAY</span>
                  <span className="text-sm md:text-base font-serif text-[#F0EDE8] tracking-widest">8AM — 9PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/50 font-bold uppercase">SATURDAY</span>
                  <span className="text-sm md:text-base font-serif text-[#F0EDE8] tracking-widest">8AM — 6PM</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-white/30 font-bold uppercase">SUNDAY</span>
                  <span className="text-sm md:text-base font-serif text-white/30 tracking-widest">CLOSED</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
