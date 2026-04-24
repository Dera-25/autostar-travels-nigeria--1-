import React from 'react';
import { motion } from 'motion/react';
import { Users, Package, Shield, Clock, Map, Headphones } from 'lucide-react';

const services = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Passenger Transport',
    description: 'Daily executive travel between Enugu, Abuja, and Lagos in air-conditioned comfort.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Parcel Delivery',
    description: 'Fast and secure logistics for your goods with real-time tracking and careful handling.',
    color: 'bg-red-50 text-red-600'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Corporate Logistics',
    description: 'Tailored transportation solutions for businesses and organizations across Nigeria.',
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: 'Charter Services',
    description: 'Private vehicle hire for groups, events, and special occasions with professional drivers.',
    color: 'bg-amber-50 text-amber-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-4xl font-display font-extrabold text-primary">
            Premium Solutions for <br /> Modern Travelers
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Whether you're traveling for business or shipping across states, 
            we provide the reliability and comfort you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-premium transition-all duration-300 border border-slate-200"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h4 className="text-lg font-display font-extrabold text-primary mb-3">{service.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all">
                <span>Learn More</span>
                <span>&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
