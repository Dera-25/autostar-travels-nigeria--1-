import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Phone, MapPin, Copy, Check, Navigation, Download } from 'lucide-react';

interface FullFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullFlyerModal({ isOpen, onClose }: FullFlyerModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const newAddress = 'NO-25 A E Ekukinam Street, Beside Zenith Bank, Utako Market Road, Utako, Abuja';

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(newAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenMaps = () => {
    const query = encodeURIComponent('Ekukinam Street Utako Abuja Beside Zenith Bank');
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            className="relative w-full max-w-[460px] bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="flyer-notice-title"
          >
            {/* Header Close Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#002855] text-white border-b border-blue-900">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D0021B] animate-pulse" />
                <span id="flyer-notice-title" className="text-xs font-black uppercase tracking-wider text-slate-100">
                  Autostar Official Notice
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Flyer Body Display */}
            <div className="p-3 sm:p-4 bg-slate-100 overflow-y-auto max-h-[80vh]">
              {/* Exact Poster Replica */}
              <div className="relative bg-white rounded-xl shadow-lg border-[3px] border-[#0A2558] overflow-hidden select-none">
                {/* 1. Header (White) */}
                <div className="pt-6 pb-3 px-4 bg-white flex flex-col items-center text-center">
                  {/* Star + AUTOSTAR EXPRESS LIMITED Brand */}
                  <div className="flex items-center justify-center gap-2.5">
                    <div className="relative flex-shrink-0">
                      <svg
                        width={38}
                        height={38}
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transform -rotate-6 filter drop-shadow-sm"
                      >
                        <polygon
                          points="50,5 64,36 98,39 72,63 80,97 50,79 20,97 28,63 2,39 36,36"
                          fill="#FFEBEB"
                          stroke="#D0021B"
                          strokeWidth="7"
                          strokeLinejoin="round"
                        />
                        <polygon
                          points="50,16 61,39 87,42 67,61 73,87 50,73 27,87 33,61 13,42 39,39"
                          fill="#D0021B"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left leading-none">
                      <span className="font-black text-2xl sm:text-3xl text-[#0B2A5F] tracking-tight uppercase font-sans">
                        AUTOSTAR
                      </span>
                      <div className="w-full h-[2.5px] bg-[#0B2A5F] my-[1.5px]" />
                      <span className="font-black text-[10px] sm:text-xs text-[#0B2A5F] tracking-widest uppercase font-sans">
                        EXPRESS LIMITED
                      </span>
                    </div>
                  </div>

                  {/* Alternative to Air Travels Badge */}
                  <div className="mt-3.5 inline-flex items-center px-4 py-1.5 rounded-full bg-[#0A245C] text-white text-xs sm:text-sm font-serif italic tracking-wide shadow-sm">
                    Alternative to Air Travels
                  </div>
                </div>

                {/* 2. Full-Width Banner: IS MOVING FROM IDE PLAZA */}
                <div className="bg-[#0A245C] text-white py-2 px-3 text-center border-y-2 border-red-500 shadow-sm">
                  <h3 className="font-black text-base sm:text-lg tracking-wider uppercase drop-shadow">
                    IS MOVING FROM IDE PLAZA
                  </h3>
                </div>

                {/* 3. Navy Blue Bus-Shape Body */}
                <div className="p-4 sm:p-5 bg-[#0A245C] text-white flex flex-col items-center text-center space-y-4">
                  {/* White Rounded Card for Address */}
                  <div className="w-full bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-slate-100 text-center">
                    <div className="text-[#D0021B] font-black text-sm sm:text-base uppercase tracking-widest mb-1">
                      TO:
                    </div>
                    <div className="text-[#D0021B] font-black text-sm sm:text-base leading-snug uppercase space-y-0.5">
                      <p>NO-25 A E EKUKINAM STREET,</p>
                      <p>BESIDE ZENITH BANK,</p>
                      <p>UTAKO MARKET ROAD,</p>
                      <p>UTAKO, ABUJA</p>
                    </div>
                  </div>

                  {/* Date section */}
                  <div className="w-full text-center">
                    <div className="text-[#D0021B] font-black text-xs sm:text-sm uppercase tracking-wider">
                      ON:
                    </div>
                    <div className="text-[#D0021B] font-black text-xl sm:text-2xl tracking-wide uppercase">
                      1ST OCTOBER 2026
                    </div>
                  </div>

                  {/* White Divider Line */}
                  <div className="w-full h-[3px] bg-white rounded-full" />

                  {/* Route List */}
                  <div className="w-full space-y-1 py-1">
                    <div className="text-white font-black italic text-lg sm:text-xl tracking-wide">
                      ABUJA - ENUGU
                    </div>
                    <div className="text-white font-black italic text-lg sm:text-xl tracking-wide">
                      ABUJA - AWKA
                    </div>
                  </div>

                  {/* White Divider Line */}
                  <div className="w-full h-[3px] bg-white rounded-full" />

                  {/* Website & Phone Container */}
                  <div className="w-full bg-white rounded-xl py-3 px-2 text-center shadow-lg space-y-0.5">
                    <div className="text-[#D0021B] font-black text-xs sm:text-sm tracking-wide">
                      www.autostar.ng
                    </div>
                    <div className="text-[#D0021B] font-black text-base sm:text-lg tracking-tight">
                      <a href="tel:08133291883" className="hover:underline">
                        08133291883
                      </a>
                      ,
                      <a href="tel:08132534835" className="hover:underline">
                        08132534835
                      </a>
                    </div>
                  </div>

                  {/* Thanks Message */}
                  <div className="pt-1 text-white font-serif italic text-sm tracking-wide">
                    Thanks For Your Patronage
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-all shadow-sm active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check size={14} className="text-green-600" />
                      <span className="text-green-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} className="text-slate-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleOpenMaps}
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#002855] text-white font-bold text-xs hover:bg-blue-900 transition-all shadow-sm active:scale-95"
                >
                  <Navigation size={14} />
                  <span>Open in Maps</span>
                </button>
              </div>

              <div className="mt-2 text-center">
                <a
                  href="tel:08133291883"
                  className="inline-flex items-center gap-1.5 text-xs text-[#002855] font-bold hover:underline"
                >
                  <Phone size={13} />
                  <span>Call Abuja Terminal: 08133291883 / 08132534835</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
