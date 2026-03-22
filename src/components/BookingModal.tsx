"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { clsx } from "clsx";
import { useBasket } from "@/context/BasketContext";
import { barberSchedules, sharedDates } from "@/data/schedules";

export interface ServiceItem {
  name: string;
  level: 'ADVANCED' | 'EXPERT' | 'MASTERY' | string;
  price: string;
  desc: string;
  recommended: string;
}

interface BookingModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

const BARBERS = [
  { name: "Solomon Vane", role: "Master Barber" },
  { name: "Dorian Cross", role: "Expert Barber" },
  { name: "Finn Ashby", role: "Advanced Barber" }
];

export default function BookingModal({ service, onClose }: BookingModalProps) {
  const { addItem, setIsBasketOpen } = useBasket();
  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [service]);

  // Reset local state whenever a new service opens or barber changes
  useEffect(() => {
    if (service) {
      setSelectedBarber("");
      setSelectedDate("");
      setSelectedTime("");
    }
  }, [service]);

  useEffect(() => {
    setSelectedDate("");
    setSelectedTime("");
  }, [selectedBarber]);

  useEffect(() => {
    setSelectedTime("");
  }, [selectedDate]);

  if (!service) return null;

  const handleConfirm = () => {
    if (!selectedBarber || !selectedDate || !selectedTime) return;
    
    addItem({
      service: service.name,
      barber: selectedBarber,
      price: service.price,
      time: `${selectedDate} Oct 2026 · ${selectedTime}`
    });
    
    onClose();
    // Tiny delay to let the modal close animation happen before Basket slides in
    setTimeout(() => {
      setIsBasketOpen(true);
    }, 100);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6 transition-opacity duration-300">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative bg-[#0a0a0a] border border-white/10 w-full max-w-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 font-sans flex flex-col max-h-[90vh] rounded-sm transform transition-all duration-300 scale-100 opacity-100 animate-in fade-in zoom-in-95">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-20">
          <X className="w-6 h-6" />
        </button>

        {/* Header content */}
        <div className="p-8 pb-6 border-b border-white/5 shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-serif text-[#F0EDE8] uppercase mb-2 tracking-widest relative z-10">
            {service.name}
          </h2>
          <p className="text-gold text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold relative z-10">
            {service.price} &mdash; Select Details
          </p>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar flex-1 relative z-10">
          {/* Barber Selection */}
          <div className="mb-10">
            <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-bold mb-4">1. Choose Barber</h3>
            <div className="flex flex-col gap-3">
              {BARBERS.map(b => (
                <button
                  key={b.name}
                  onClick={() => setSelectedBarber(b.name)}
                  className={clsx(
                    "flex justify-between items-center p-4 border transition-colors text-left rounded-sm relative overflow-hidden group",
                    selectedBarber === b.name 
                      ? "border-gold bg-gold/10 text-white shadow-[0_0_15px_rgba(197,160,89,0.15)]" 
                      : "border-white/10 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/[0.02]"
                  )}
                >
                  <div className="relative z-10 flex flex-col">
                    <span className="text-sm md:text-base font-bold tracking-wider uppercase drop-shadow-sm">{b.name}</span>
                    <span className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-white/40 mt-1">{b.role}</span>
                  </div>
                  {service.recommended === b.name && (
                    <span className="relative z-10 text-[8px] md:text-[9px] bg-white/10 px-2 py-1 tracking-[0.2em] font-bold uppercase rounded-sm border border-white/5">
                      Recommended
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Day Selection */}
          <div className="mb-10">
            <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-bold mb-4">
              2. Choose Day {selectedBarber ? "" : <span className="text-white/20 ml-2 lowercase not-italic tracking-normal">(Select barber first)</span>}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {sharedDates.map((d) => (
                <button
                  key={d.date}
                  disabled={!selectedBarber || d.status === 'booked'}
                  onClick={() => setSelectedDate(d.date)}
                  className={clsx(
                    "flex flex-col items-center p-3 rounded-sm border transition-all",
                    (!selectedBarber || d.status === 'booked')
                      ? "border-white/5 bg-transparent opacity-30 cursor-not-allowed" 
                      : selectedDate === d.date
                        ? "border-gold bg-gold/10 text-white shadow-[inset_0_0_10px_rgba(197,160,89,0.2)]"
                        : "border-white/10 bg-[#0a0a0a] hover:border-white/30 text-white hover:bg-white/[0.02]"
                  )}
                >
                  <span className="text-[9px] uppercase tracking-widest mb-1">{d.day}</span>
                  <span className="text-lg font-serif">{d.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="mb-4">
            <h3 className="text-[10px] md:text-[11px] tracking-[0.2em] text-white/50 uppercase font-bold mb-4">
              3. Choose Time {selectedDate ? "" : <span className="text-white/20 ml-2 lowercase not-italic tracking-normal">(Select day first)</span>}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {selectedBarber && (barberSchedules[selectedBarber.toLowerCase().replace(' ', '-')] || barberSchedules['default']).map(t => (
                <button
                  key={t.time}
                  disabled={!selectedDate || t.status === 'booked'}
                  onClick={() => setSelectedTime(t.time)}
                  className={clsx(
                    "py-3 text-[10px] md:text-[11px] tracking-[0.1em] font-bold uppercase border transition-colors rounded-sm",
                    (!selectedDate || t.status === 'booked') 
                      ? "border-white/5 bg-transparent opacity-20 cursor-not-allowed " + (t.status === 'booked' ? "line-through" : "")
                      : selectedTime === t.time
                        ? "border-gold bg-gold/10 text-white shadow-[inset_0_0_10px_rgba(197,160,89,0.2)]" 
                        : "border-white/10 text-white/60 hover:border-white/30 hover:text-white hover:bg-white/[0.02]"
                  )}
                >
                  {t.time}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Actions */}
        <div className="p-8 pt-6 border-t border-white/5 shrink-0 relative bg-[#0a0a0a]">
          <button
            onClick={handleConfirm}
            disabled={!selectedBarber || !selectedTime}
            className="w-full bg-gold hover:bg-[#e0b86a] disabled:bg-white/5 disabled:text-white/20 disabled:border disabled:border-white/10 disabled:cursor-not-allowed text-black py-4 md:py-5 text-[11px] md:text-xs font-black tracking-[0.2em] uppercase transition-all shadow-[0_4px_20px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_25px_rgba(197,160,89,0.4)] disabled:shadow-none rounded-sm"
          >
            {selectedBarber && selectedTime ? "CONFIRM & ADD TO BASKET" : "SELECT YOUR DETAILS"}
          </button>
        </div>

      </div>
    </div>
  );
}
