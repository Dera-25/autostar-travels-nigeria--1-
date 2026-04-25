import React from 'react';
import { motion } from 'motion/react';
import { MousePointer2, MapPin, MessageSquare, PlaneTakeoff } from 'lucide-react';

const steps = [
  {
    icon: <MousePointer2 size={32} />,
    title: 'Choose Service',
    description: 'Select between passenger transport or parcel delivery based on your needs.'
  },
  {
    icon: <MapPin size={32} />,
    title: 'Select Route',
    description: 'Pick your origin, destination, and preferred travel or shipping date.'
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'Reserve via WhatsApp',
    description: 'Connect instantly with our team to confirm your booking and secure your spot.'
  },
  {
    icon: <PlaneTakeoff size={32} />,
    title: 'Travel/Ship',
    description: 'Arrive at our office by 5:30 AM and enjoy a premium, stress-free journey.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="max-w-3xl mb-20 space-y-4">
          <h2 className="text-4xl font-display font-extrabold text-primary">
            Simple Steps to <br /> Start Your Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-6"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-primary font-bold">
                {index + 1}
              </div>
              <h4 className="text-lg font-display font-extrabold text-primary">{step.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
