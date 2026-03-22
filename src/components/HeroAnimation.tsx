"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FRAME_COUNT = 192;

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // frame_000_delay-0.041s.jpg
      const frameNumber = i.toString().padStart(3, "0");
      img.src = `/frames/frame_${frameNumber}_delay-0.041s.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (progress: number) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT)
      );
      const img = images[frameIndex];
      if (!img) return;

      // Draw the image to fit canvas while maintaining aspect ratio
      const { width, height } = canvas;
      const imgRatio = img.width / img.height;
      const canvasRatio = width / height;

      let drawWidth, drawHeight, offsetX, offsetY;
      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
        offsetX = 0;
        offsetY = (height - drawHeight) / 2;
      } else {
        drawWidth = height * imgRatio;
        drawHeight = height;
        offsetX = (width - drawWidth) / 2;
        offsetY = 0;
      }

      // Scale factor to make the animation smaller and avoid navbar cropping
      const scale = 0.85;

      const scaledWidth = drawWidth * scale;
      const scaledHeight = drawHeight * scale;
      const centeredX = offsetX + (drawWidth - scaledWidth) / 2;
      const centeredY = offsetY + (drawHeight - scaledHeight) / 2 + 40; // Push down 40px to clear navbar cleanly

      // Fill canvas background with black to match JPEG edges
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      ctx.drawImage(img, centeredX, centeredY, scaledWidth, scaledHeight);
    };

    // Initial render
    render(0);

    const unsubscribe = scrollYProgress.onChange((latest) => {
      render(latest);
    });

    return () => unsubscribe();
  }, [images, scrollYProgress]);

  // Text Animations based on scroll progress
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const blurValue = useTransform(scrollYProgress, [0, 0.3], ["blur(0px)", "blur(10px)"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* SOVEREIGN ABOVE */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, filter: blurValue }}
          className="absolute top-[12%] sm:top-[15%] md:top-[12%] w-full flex justify-center z-20 pointer-events-none"
        >
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-serif text-white uppercase tracking-widest drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none text-center">
            SOVEREIGN
          </h1>
        </motion.div>

        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* CUTS BELOW */}
        <motion.div 
          style={{ opacity: textOpacity, scale: textScale, filter: blurValue }}
          className="absolute bottom-[20%] sm:bottom-[15%] md:bottom-[15%] w-full flex justify-center z-20 pointer-events-none"
        >
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] font-serif text-gold uppercase tracking-widest drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] leading-none text-center">
            CUTS
          </h1>
        </motion.div>

        {/* Scroll Cue */}
        <motion.div 
          style={{ opacity: textOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-white/50 animate-pulse pointer-events-none"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 font-sans text-gold">Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
