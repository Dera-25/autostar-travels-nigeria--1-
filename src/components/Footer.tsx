import React from 'react';
import { Star, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-1 group">
              <span className="font-display font-extrabold text-2xl tracking-tighter text-white">
                AUTOSTAR<span className="text-accent">.</span>
              </span>
            </a>
            <p className="text-white/50 text-sm leading-relaxed">
              Nigeria's premium interstate transportation and parcel logistics company. 
              Connecting Enugu, Abuja, and Lagos with executive comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Travel Routes', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Contact Info</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li>Abakaliki Rd, GRA, Enugu, Enugu State.</li>
              <li>+2348133291883</li>
              <li>support@autostar.ng</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-white">Newsletter</h4>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs focus:outline-none focus:border-accent transition-colors"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-bold text-xs transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Autostar Travels Nigeria.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all border border-white/10"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
