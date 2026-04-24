import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-premium">
              <img 
                src="/images/Parcel.jpg" 
                alt="Autostar Logistics - Parcel Loading"
                className="w-full h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 z-20 bg-white p-8 rounded-xl shadow-premium border border-slate-100 max-w-[240px]">
              <p className="text-primary font-display font-extrabold text-4xl mb-1 tracking-tighter">10+</p>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-[42px] font-display font-extrabold text-primary leading-tight">
                Redefining Interstate <br /> 
                Travel & Logistics
              </h2>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed">
              Autostar Travels Nigeria is a premium executive transportation company 
              dedicated to providing safe, reliable, and comfortable daily departures 
              between Nigeria's major hubs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 pt-4">
              {[
                'Daily Scheduled Departures',
                'Executive Air-Conditioned Fleet',
                'Professional & Trained Drivers',
                'Secure Parcel Handling',
                'Real-time Trip Updates',
                'Premium Customer Support'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-slate-900 font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
