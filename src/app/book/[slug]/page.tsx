"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Instagram, Mail, Facebook, ArrowUpRight, Check } from "lucide-react";
import { useState } from 'react';
import { allServices } from '@/data/services';
import { useBasket } from '@/context/BasketContext';
import { barberSchedules, sharedDates as DATES } from '@/data/schedules';

export default function BookBarberPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "barber";
  const { addItem } = useBasket();

  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const formatName = (s: string) => {
    return s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  };

  const name = formatName(slug);
  const TIMES = barberSchedules[slug] || barberSchedules['default'];

  const socialLinks = {
    instagram: `@${slug.replace('-', '')}_cuts`,
    facebook: `${name} Barbering`,
    email: `${slug.replace('-', '')}@sovereigncuts.com`
  };

  return (
    <main className="min-h-screen bg-background flex flex-col items-center py-24 px-6 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none overflow-hidden opacity-[0.02] select-none z-0">
        <span className="text-[25vw] leading-none tracking-widest text-[#F0EDE8] font-serif uppercase">
          BOOK
        </span>
      </div>

      <div className="max-w-[600px] w-full z-10">
        
        {/* Top Header */}
        <div className="text-center mb-12">
          <span className="text-gold tracking-[0.2em] uppercase text-[10px] md:text-sm font-bold font-sans block mb-4 opacity-80">
            SOVEREIGN CUTS - EST. 2026
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#F0EDE8] uppercase mb-4 tracking-widest drop-shadow-lg">
            BOOK AN APPOINTMENT
          </h1>
          <p className="text-white/40 tracking-[0.2em] uppercase text-[10px] md:text-xs font-sans italic">
            Secure your slot with <span className="text-gold font-bold not-italic">{name}</span>
          </p>
        </div>

        {/* BOOKING SYSTEM FORM */}
        <div className="bg-[#131313] p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl relative overflow-hidden mb-16 group">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold/50 via-gold to-gold/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

          <form className="flex flex-col gap-8 w-full font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-[#0a0a0a] border border-white/10 text-white/90 text-sm p-4 outline-none focus:border-gold/50 transition-colors rounded-sm" required />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Email Address</label>
                <input type="email" placeholder="john@example.com" className="bg-[#0a0a0a] border border-white/10 text-white/90 text-sm p-4 outline-none focus:border-gold/50 transition-colors rounded-sm" required />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Select Service</label>
              <select 
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="bg-[#0a0a0a] border border-white/10 text-white/90 text-sm p-4 outline-none focus:border-gold/50 transition-colors cursor-pointer appearance-none rounded-sm"
              >
                <option value="" disabled>Select a service...</option>
                {allServices.map(service => (
                  <option key={service.name} value={service.name}>{service.name} — {service.price}</option>
                ))}
              </select>
            </div>

            {/* Simulated Date/Time Scheduler */}
            <div className="flex flex-col gap-6 pt-4 border-t border-white/5">
              
              {/* Date Selection */}
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Select Date</label>
                  <span className="text-[9px] text-white/20 uppercase tracking-widest">Oct 2026</span>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {DATES.map((d) => (
                    <button
                      key={d.date}
                      type="button"
                      disabled={d.status === 'booked'}
                      onClick={() => setSelectedDate(d.date)}
                      className={`flex flex-col items-center p-3 rounded-sm border transition-all ${
                        d.status === 'booked' 
                          ? 'border-white/5 bg-transparent opacity-30 cursor-not-allowed' 
                          : selectedDate === d.date
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-white/10 bg-[#0a0a0a] hover:border-white/30 text-white'
                      }`}
                    >
                      <span className="text-[9px] uppercase tracking-widest mb-1">{d.day}</span>
                      <span className="text-lg font-serif">{d.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-[10px] text-white/40 tracking-[0.2em] uppercase font-bold">Select Time</label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {TIMES.map((t) => (
                    <button
                      key={t.time}
                      type="button"
                      disabled={t.status === 'booked'}
                      onClick={() => setSelectedTime(t.time)}
                      className={`py-3 px-2 text-xs text-center border rounded-sm transition-all font-sans font-medium ${
                        t.status === 'booked'
                          ? 'border-white/5 bg-transparent opacity-20 cursor-not-allowed line-through'
                          : selectedTime === t.time
                            ? 'border-gold bg-gold text-black shadow-[0_0_10px_rgba(197,160,89,0.4)]'
                            : 'border-white/10 bg-[#0a0a0a] hover:border-gold/50 text-white'
                      }`}
                    >
                      {t.time}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <button 
              type="button" 
              onClick={(e) => { 
                e.preventDefault(); 
                if (!selectedService || !selectedDate || !selectedTime) {
                  alert("Please select a service, date, and time slot.");
                  return;
                }
                const serviceObj = allServices.find(s => s.name === selectedService);
                if (serviceObj) {
                  addItem({
                    service: serviceObj.name,
                    barber: name,
                    price: serviceObj.price,
                    time: `${selectedDate} Oct 2026 · ${selectedTime}`
                  });
                }
              }} 
              className={`mt-4 font-black uppercase tracking-[0.25em] text-[10px] md:text-xs py-5 transition-all rounded-sm flex items-center justify-center gap-2 ${
                selectedService && selectedDate && selectedTime
                  ? 'bg-gold text-black hover:bg-[#e0b86a] shadow-[0_4px_15px_rgba(197,160,89,0.2)] cursor-pointer'
                  : 'bg-white/5 text-white/20 cursor-not-allowed border-none'
              }`}
            >
              Confirm Booking
              {selectedService && selectedDate && selectedTime && <Check className="w-4 h-4" strokeWidth={3} />}
            </button>
          </form>
        </div>

        {/* GET IN TOUCH SEGMENT */}
        <div className="bg-transparent mb-12">
          
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-serif text-[#F0EDE8] uppercase mb-4 tracking-widest drop-shadow-md">
              GET IN TOUCH
            </h2>
            <p className="text-white/40 tracking-[0.1em] text-xs font-sans font-light italic">
              Find us on the handles below or drop a line directly.
            </p>
          </div>

          <div className="flex flex-col">
            
            {/* Instagram Contact Block */}
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer border-t border-white/10 py-6 px-2 hover:bg-white/[0.02] transition-colors">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-6 rounded-sm bg-[#111111] group-hover:border-gold/40 transition-colors shadow-lg">
                <Instagram className="w-5 h-5 text-[#F0EDE8]/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-sans font-bold mb-1">INSTAGRAM</p>
                <p className="text-sm md:text-base font-serif uppercase tracking-widest text-[#F0EDE8]">{socialLinks.instagram}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            </a>

            {/* Facebook Contact Block */}
            <a href="https://www.facebook.com/?locale=en_GB" target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer border-t border-white/10 py-6 px-2 hover:bg-white/[0.02] transition-colors">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-6 rounded-sm bg-[#111111] group-hover:border-gold/40 transition-colors shadow-lg">
                <Facebook className="w-5 h-5 text-[#F0EDE8]/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-sans font-bold mb-1">FACEBOOK</p>
                <p className="text-sm md:text-base font-serif uppercase tracking-widest text-[#F0EDE8]">{socialLinks.facebook}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            </a>

            {/* Email Contact Block */}
            <a href="https://mail.google.com/mail/" target="_blank" rel="noreferrer" className="flex items-center group cursor-pointer border-y border-white/10 py-6 px-2 hover:bg-white/[0.02] transition-colors">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center mr-6 rounded-sm bg-[#111111] group-hover:border-gold/40 transition-colors shadow-lg">
                <Mail className="w-5 h-5 text-[#F0EDE8]/70 group-hover:text-gold transition-colors" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-white/40 tracking-[0.2em] uppercase font-sans font-bold mb-1">EMAIL</p>
                <p className="text-sm md:text-base font-serif uppercase tracking-widest text-[#F0EDE8]">{socialLinks.email}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            </a>

          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-4">
          <Link href="/#coaching" className="text-[10px] text-white/30 hover:text-gold uppercase tracking-[0.15em] transition-colors inline-flex items-center gap-3 font-bold font-sans">
            <span>&larr;</span> BACK TO BARBERS
          </Link>
        </div>

      </div>
    </main>
  );
}
