import React from 'react';
import { motion } from 'motion/react';
import BookingWidget from './BookingWidget';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-[72px] overflow-hidden hero-gradient">
      <div className="container mx-auto px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-[52px] font-display font-extrabold leading-[1.1] text-primary">
              Autostar Travels
            </h1>
            <p className="text-xl font-bold text-accent">
              Premium Interstate Travel that you can trust
            </p>
            
            <p className="text-lg text-slate-500 max-w-[480px] leading-relaxed">
              Experience safe, reliable, and executive daily transportation connecting 
              Enugu, Abuja, and Lagos with 5-star comfort.
            </p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative mt-8 group"
            >
              <div className="relative z-10 w-full h-[320px] bg-white rounded-[24px] overflow-hidden shadow-premium border border-slate-200">
                <img 
                  src="/images/sienna.png" 
                  alt="Autostar Premium Sienna Fleet"
                  className="w-full h-full object-cover rounded-[24px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative background element behind image */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-accent/10 to-transparent rounded-[32px] -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>

          {/* Booking Widget Container */}
          <motion.div
            id="book"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-20"
          >
            <BookingWidget />
          </motion.div>
        </div>
      </div>
      
      {/* Features Bar integrated at the bottom of Hero */}
      <FeaturesBar />
    </section>
  );
}

function FeaturesBar() {
  const features = [
    { title: 'Daily Departures', desc: 'Fixed 5:30 AM schedules daily across all major routes.' },
    { title: 'Executive Fleet', desc: 'Clean, air-conditioned Toyota Sienna vehicles only.' },
    { title: 'Safety First', desc: 'Certified professional drivers and speed-limited transit.' },
    { title: 'Logistics', desc: 'Same-day parcel delivery between Enugu, Abuja & Lagos.' }
  ];

  return (
    <div className="bg-primary text-white py-10">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col gap-1 ${i !== features.length - 1 ? 'lg:border-r lg:border-white/10' : ''} lg:pr-8`}>
              <div className="flex items-center gap-2 font-bold text-sm">
                <div className="w-2 h-2 rounded-full bg-accent" />
                {f.title}
              </div>
              <p className="text-xs text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


function Star({ size, fill, className }: { size: number, fill?: string, className?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill || "none"} 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
