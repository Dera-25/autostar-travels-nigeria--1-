import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';

const branches = [
  {
    city: 'Enugu',
    address: 'Abakaliki Rd, GRA, Enugu, Enugu State',
    phone: '+2348133291883',
    email: 'enugu@autostar.ng',
    whatsapp: '+2348133291883'
  },
  {
    city: 'Abuja',
    address: 'IDE Shopping Plaza, 484 Obafemi Awolowo Wy, District, Abuja, Federal Capital Territory',
    phone: '+2348132534835',
    email: 'abuja@autostar.ng',
    whatsapp: '+2348132534835'
  },
  {
    city: 'Lagos',
    address: 'Jibowu Terminal, Yaba, Lagos State',
    phone: '+2348059548157',
    email: 'lagos@autostar.ng',
    whatsapp: '+2348059548157'
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-extrabold text-primary">
                Contact Our <br /> Support Team
              </h2>
              <p className="text-slate-500 leading-relaxed">
                Have questions about your trip or parcel? Our team is available 
                daily from 7:00 AM to 9:00 PM to assist you.
              </p>
            </div>

            <div className="space-y-4">
              <a href="tel:+2348133291883" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-premium transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-base font-bold text-slate-900">+2348133291883</p>
                </div>
              </a>

              <a href="mailto:support@autostar.ng" className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-premium transition-all group">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-base font-bold text-slate-900">support@autostar.ng</p>
                </div>
              </a>
            </div>
          </div>

          {/* Branches Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {branches.map((branch, index) => (
                <motion.div
                  key={branch.city}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-premium transition-all"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-xl font-display font-extrabold text-primary">{branch.city} Branch</h4>
                    <MapPin className="text-accent" size={20} />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="text-primary flex-shrink-0" size={16} />
                      <p className="text-slate-500 text-sm leading-relaxed">{branch.address}</p>
                    </div>
                    <div className="flex gap-3 text-slate-500">
                      <Phone className="text-primary flex-shrink-0" size={16} />
                      <p className="text-sm">{branch.phone}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <button  onClick={() => window.open(`https://wa.me/${branch.whatsapp.replace('+', '')}`, "_blank")}
                      className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-bold transition-all text-sm">
                      <MessageCircle size={16} />
                      <span>Chat via WhatsApp</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
