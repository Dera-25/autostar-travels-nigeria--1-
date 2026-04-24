import React from 'react';
import { motion } from 'motion/react';
import { ArrowRightLeft, Clock, MapPin } from 'lucide-react';

const routes = [
  { from: 'Abuja', to: 'Enugu', time: '5:30 AM', price: 'Premium', image: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=800' },
  { from: 'Lagos', to: 'Enugu', time: '5:30 AM', price: 'Premium', image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=800' },
  { from: 'Enugu', to: 'Abuja', time: '5:30 AM', price: 'Premium', image: 'https://images.unsplash.com/photo-1590603740183-980e7f6920eb?auto=format&fit=crop&q=80&w=800' },
  { from: 'Enugu', to: 'Lagos', time: '5:30 AM', price: 'Premium', image: 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&q=80&w=800' }
];

export default function Routes() {
  return (
    <section id="routes" className="py-24 bg-white">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-extrabold text-primary">
              Connecting the <br /> Heart of Nigeria
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <motion.div
              key={`${route.from}-${route.to}`}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[360px] rounded-2xl overflow-hidden shadow-sm border border-slate-100"
            >
              {/* Background Image */}
              <img 
                src={route.image} 
                alt={`${route.from} to ${route.to}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/50 transition-colors" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl font-display font-extrabold tracking-tight">{route.from}</span>
                  <ArrowRightLeft size={18} className="text-accent" />
                  <span className="text-2xl font-display font-extrabold tracking-tight">{route.to}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/80">
                    <Clock size={12} />
                    <span>{route.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
