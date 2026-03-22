"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    tag: "BEST SELLER",
    name: "HAIR STYLING POWDER",
    price: "£11.95",
    rating: 5,
    image: "https://slickgorilla.co.uk/cdn/shop/files/slick-gorilla-hair-styling-powder-1178549380.png"
  },
  {
    tag: "MOST POPULAR",
    name: "SEA SALT SPRAY",
    price: "£12.95",
    rating: 5,
    image: "https://slickgorilla.co.uk/cdn/shop/files/slick-gorilla-sea-salt-spray-1178549393.png"
  },
  {
    tag: "FAN FAVOURITE",
    name: "LIGHTWORK",
    price: "£12.95",
    rating: 5,
    image: "https://slickgorilla.co.uk/cdn/shop/files/slick-gorilla-lightwork-1178549391.png"
  },
  {
    tag: "STAFF PICK",
    name: "CLAY POMADE",
    price: "£12.95",
    rating: 5,
    image: "https://slickgorilla.co.uk/cdn/shop/files/slick-gorilla-clay-pomade-1178549384.png"
  }
];

export default function SlickGorillaSection() {
  return (
    <section className="bg-[#111111] py-16 md:py-20 text-white relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start mb-10 md:mb-12"
        >
          <span className="text-gold text-[9px] md:text-[10px] tracking-[0.2em] font-bold uppercase mb-3 font-sans opacity-90">
            SLICK GORILLA × SOVEREIGN CUTS
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#F0EDE8] uppercase mb-4 tracking-widest drop-shadow-md">
            THE ESSENTIALS
          </h2>
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "8rem", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="h-[2px] bg-gradient-to-r from-gold to-transparent" 
          />
        </motion.div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
          {products.map((product, index) => (
            <motion.div 
              key={product.name} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col group cursor-pointer relative"
            >
              {/* Tag Over Image */}
              <div className="text-[8px] md:text-[9px] tracking-[0.2em] font-bold text-white/40 uppercase mb-2 font-sans pl-1">
                {product.tag}
              </div>
              
              {/* Image Box */}
              <div className="bg-[#1a1a1a] aspect-square relative flex items-center justify-center mb-4 transition-colors duration-500 overflow-hidden rounded-sm border border-white/5 group-hover:border-white/10 group-hover:bg-[#1f1f1f]">
                <div className="w-[82%] h-[82%] bg-[#dddddd] shadow-lg flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105 rounded-sm">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-[90%] h-[90%] object-contain mix-blend-multiply drop-shadow-lg" 
                  />
                </div>
                
                {/* Shop Now Overlay Button */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-20">
                  <a 
                    href="https://slickgorilla.co.uk/collections/all" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-gold text-black text-[9px] font-black tracking-[0.2em] uppercase px-6 py-2 rounded-full shadow-lg whitespace-nowrap hover:bg-[#e0b86a] transition-all font-sans"
                  >
                    SHOP NOW
                  </a>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="flex flex-col px-1">
                {/* 5 Rating Stars */}
                <div className="flex space-x-[2px] mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <svg key={i} className="w-[10px] h-[10px] md:w-[11px] md:h-[11px] fill-gold" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Title */}
                <h3 className="font-sans font-bold text-[13px] md:text-sm tracking-tight uppercase text-white/90 group-hover:text-gold transition-colors mb-1 truncate">
                  {product.name}
                </h3>
                
                {/* Price & Hover Arrow */}
                <div className="flex items-center space-x-2">
                  <span className="text-white/60 text-xs md:text-[13px] font-bold font-sans tracking-wide">{product.price}</span>
                  <svg className="w-[14px] h-[14px] text-gold transform translate-x-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View Full Range Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex justify-center flex-col items-center"
        >
          <a 
            href="https://slickgorilla.co.uk/collections/all" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center space-x-2 text-white/50 hover:text-gold transition-colors font-sans tracking-[0.25em] text-[10px] uppercase font-bold group"
          >
            <span>VIEW FULL RANGE</span>
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
