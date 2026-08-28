import React from 'react';
import { Megaphone, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface NoticeBannerProps {
  onOpenFlyer: () => void;
}

export default function NoticeBanner({ onOpenFlyer }: NoticeBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8"
    >
      <div
        onClick={onOpenFlyer}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onOpenFlyer();
          }
        }}
        className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#09224E] text-white p-3 sm:p-3.5 lg:py-3 lg:px-6 border-[3px] border-[#D0021B] shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-red-500"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 lg:gap-6">
          {/* Main Notice Info */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 md:gap-4 text-xs sm:text-sm">
            {/* Red IMPORTANT Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D0021B] text-white font-black tracking-wider uppercase text-xs shadow-md">
              <Megaphone size={14} className="fill-white flex-shrink-0" />
              <span>IMPORTANT</span>
            </div>

            {/* Headline */}
            <span className="font-black tracking-tight text-white uppercase text-sm sm:text-base whitespace-nowrap">
              WE ARE MOVING!
            </span>

            {/* Divider */}
            <div className="hidden sm:block w-[1.5px] h-5 bg-white/40" />

            {/* Date */}
            <div className="inline-flex items-center gap-1.5 text-white whitespace-nowrap font-bold">
              <Calendar size={16} className="text-white flex-shrink-0" />
              <span className="text-white/90">ON:</span>
              <span className="font-black text-[#FF3B30] tracking-wide text-sm sm:text-base">
                1ST OCTOBER 2026
              </span>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-[1.5px] h-6 bg-white/40" />

            {/* Address */}
            <div className="flex items-center gap-2 text-white text-left">
              <MapPin size={18} className="text-white flex-shrink-0" />
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-xs sm:text-sm tracking-wide text-white uppercase">
                  TO: NO-25 A E EKUKINAM STREET,
                </span>
                <span className="text-[11px] sm:text-xs text-white/90 font-semibold uppercase">
                  BESIDE ZENITH BANK, UTAKO MARKET ROAD, UTAKO, ABUJA
                </span>
              </div>
            </div>
          </div>

          {/* Right CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto flex justify-center mt-1 lg:mt-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenFlyer();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-white text-[#D0021B] font-black text-xs sm:text-sm shadow-md hover:bg-slate-100 group-hover:scale-105 active:scale-95 transition-all uppercase tracking-wider whitespace-nowrap"
            >
              <span>LEARN MORE</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
