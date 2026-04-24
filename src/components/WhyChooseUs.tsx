import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Star, HeartHandshake, Award, Shield } from 'lucide-react';

const reasons = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Daily Reliable Departures',
    description: 'Our schedule is set in stone. We depart at 5:30 AM sharp, every single day, without fail.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Executive Fleet',
    description: 'Travel in modern, air-conditioned Toyota Siennas and executive shuttles designed for comfort.'
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Professional Drivers',
    description: 'Our drivers are rigorously trained, background-checked, and committed to your safety.'
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: 'Trusted Logistics',
    description: 'Your parcels are handled with extreme care and delivered with the same speed as our passengers.'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Premium Service',
    description: 'From booking to arrival, enjoy a seamless, high-end experience that respects your time.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safety First',
    description: 'GPS tracking, speed limiters, and regular maintenance ensure a secure journey every time.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-4xl font-display font-extrabold leading-tight">
            The Standard for <br /> Premium Interstate Travel
          </h2>
          <p className="text-white/60 text-lg">
            We don't just move people and goods; we deliver peace of mind 
            through excellence and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-accent">
                {reason.icon}
              </div>
              <h4 className="text-lg font-display font-extrabold">{reason.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
