import React, { useState, useEffect } from 'react';
import { Calendar, Users, Package, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ServiceType = 'people' | 'parcel';

export default function BookingWidget() {
  const [service, setService] = useState<ServiceType>('people');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [tripType, setTripType] = useState('');
  const [smallParcels, setSmallParcels] = useState(0);
  const [mediumParcels, setMediumParcels] = useState(0);
  const [largeParcels, setLargeParcels] = useState(0);
  const [xlParcels, setXlParcels] = useState(0);
  const [xlWeight, setXlWeight] = useState<number | ''>('');
  const [customWeight, setCustomWeight] = useState<number | ''>('');
  const [customCount, setCustomCount] = useState(0);

  const calculateWeightPrice = (w: number) => {
    if (w <= 0) return 0;
    if (w <= 1) return 5000;
    return 5000 + Math.ceil(w - 1) * 500;
  };

  const getParcelTotal = () => {
    let total = 0;
    total += smallParcels * 6000;
    total += mediumParcels * 8000;
    total += largeParcels * 12500;
    
    if (xlParcels > 0 && typeof xlWeight === 'number') {
      total += xlParcels * calculateWeightPrice(xlWeight);
    }
    
    if (customCount > 0 && typeof customWeight === 'number') {
      total += customCount * calculateWeightPrice(customWeight);
    }
    
    return total;
  };

  // Logic: 
  // If From = Abuja → To auto-set/read-only = Enugu
  // If From = Lagos → To auto-set/read-only = Enugu
  // If From = Enugu → To dropdown options: Abuja, Lagos
  useEffect(() => {
    if (from === 'Abuja' || from === 'Lagos') {
      setTo('Enugu');
    } else if (from === 'Enugu') {
      if (to === 'Enugu') setTo('');
    }
  }, [from]);

  // Calculate minimum booking date (tomorrow)
  const [minDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split('T')[0];
  });

  const handleBook = () => {
    if (!from || !to || !date) {
      alert('Please fill in all fields');
      return;
    }

    let details = '';
    if (service === 'people') {
      if (!tripType) {
        alert('Please select a trip type');
        return;
      }
      const price = tripType === 'Executive' ? 70000 : 60000;
      const total = price * parseInt(passengers);
      details = `for ${passengers} ${parseInt(passengers) === 1 ? 'person' : 'people'} (${tripType} Trip, Total: ₦${total.toLocaleString()})`;
    } else {
      const parts = [];
      if (smallParcels > 0) parts.push(`${smallParcels} Small (0-3kg) @ ₦6k`);
      if (mediumParcels > 0) parts.push(`${mediumParcels} Medium (4-10kg) @ ₦8k`);
      if (largeParcels > 0) parts.push(`${largeParcels} Large (11-20kg) @ ₦12.5k`);
      if (xlParcels > 0) {
        if (!xlWeight || xlWeight < 20) {
          alert('Please enter a weight of at least 20kg for Extra Large items');
          return;
        }
        parts.push(`${xlParcels} Extra Large (${xlWeight}kg) @ ₦${calculateWeightPrice(xlWeight).toLocaleString()}`);
      }
      if (customCount > 0) {
        if (!customWeight || customWeight <= 0) {
          alert('Please enter a valid weight for custom items');
          return;
        }
        parts.push(`${customCount} Custom (${customWeight}kg) @ ₦${calculateWeightPrice(customWeight).toLocaleString()}`);
      }
      
      const total = getParcelTotal();
      if (total === 0) {
        alert('Please specify at least one parcel');
        return;
      }
      details = `with ${parts.join(', ')} (Total: ₦${total.toLocaleString()})`;
    }

    const message = `Hello, I would like to book an Autostar ${service === 'people' ? 'trip' : 'parcel delivery'} ${details} from ${from} to ${to} on ${date}.`;
    const whatsappUrl = `https://wa.me/${from === 'Abuja' ? '2348132534835' : from === 'Lagos' ? '2348059548157' : '2348133291883'}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-premium overflow-hidden border border-slate-100 p-8">
      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-6">
        <button
          onClick={() => setService('people')}
          className={`pb-3 px-4 text-sm font-bold transition-all relative ${
            service === 'people' 
              ? 'text-primary' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          People Transport
          {service === 'people' && (
            <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setService('parcel')}
          className={`pb-3 px-4 text-sm font-bold transition-all relative ${
            service === 'parcel' 
              ? 'text-primary' 
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          Parcel Logistics
          {service === 'parcel' && (
            <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {/* Form */}
      <div className="space-y-5">
        {/* From */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            From
          </label>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
          >
            <option value="">Select Origin</option>
            <option value="Enugu">Enugu</option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>

        {/* To */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            To
          </label>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            disabled={from === 'Abuja' || from === 'Lagos'}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <option value="">Select Destination</option>
            {from === 'Enugu' ? (
              <>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
              </>
            ) : from === 'Abuja' || from === 'Lagos' ? (
              <option value="Enugu">Enugu </option>
            ) : (
              <>
                <option value="Enugu">Enugu </option>
                <option value="Abuja">Abuja </option>
                <option value="Lagos">Lagos </option>
              </>
            )}
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Departure Date
            </label>
            <input
              type="date"
              value={date}
              min={minDate}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer text-sm"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Departure Time
            </label>
            <input
              type="text"
              value="05:30 AM"
              readOnly
              className="w-full p-3 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 outline-none text-sm cursor-default"
            />
          </div>
        </div>

        {/* Dynamic Service Sections */}
        <AnimatePresence mode="wait">
          {service === 'people' ? (
            <motion.div
              key="people-fields"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-1.5"
            >
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Users size={12} className="text-primary" />
                Number of Passengers
              </label>
              <div className="relative">
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer text-sm"
                >
                  {[1, 2, 3, 4, 5, 6, 7].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ArrowRight size={14} className="rotate-90" />
                </div>
              </div>

              <div className="space-y-1.5 mt-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Type of Trip
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Regular', 'Executive'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTripType(type)}
                      className={`p-3 text-xs font-bold rounded-lg border transition-all ${
                        tripType === type
                          ? 'bg-primary text-white border-primary shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-primary/50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {tripType && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 p-4 bg-primary/5 rounded-xl border border-primary/10 flex justify-between items-center"
                >
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Total Fair</p>
                    <p className="text-xl font-display font-extrabold text-primary">
                      ₦{( (tripType === 'Executive' ? 70000 : 60000) * parseInt(passengers) ).toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-bold text-slate-500 bg-white px-2 py-1 rounded border border-slate-100 italic">
                      ₦{tripType === 'Executive' ? '70k' : '60k'} per individual
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="parcel-fields"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <Package size={12} className="text-primary" />
                Parcel Inventory & Weight
              </label>
              
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: 'small', label: 'Small (0-3kg)', price: '₦6,000', state: smallParcels, setter: setSmallParcels },
                  { id: 'medium', label: 'Medium (4-10kg)', price: '₦8,000', state: mediumParcels, setter: setMediumParcels },
                  { id: 'large', label: 'Large (10-20kg)', price: '₦12,500', state: largeParcels, setter: setLargeParcels },
                  { id: 'xl', label: 'Extra Large (20kg+)', price: 'Based on weight', state: xlParcels, setter: setXlParcels },
                ].map((item) => (
                  <div key={item.id} className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-primary/30 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-700">{item.label}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{item.price}</span>
                      </div>
                      <select
                        value={item.state}
                        onChange={(e) => item.setter(parseInt(e.target.value))}
                        className="bg-white border border-slate-200 rounded px-2 py-1 text-xs font-bold text-primary outline-none focus:ring-1 focus:ring-primary/20"
                      >
                        {[0, 1, 2, 3, 4, 5, 10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                    {item.id === 'xl' && xlParcels > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pl-4 border-l-2 border-accent/20 space-y-1.5"
                      >
                        <p className="text-[9px] font-bold text-accent uppercase">Enter Assumed Weight (Min 20kg)</p>
                        <div className="flex items-center gap-2">
                          <input 
                            type="number" 
                            placeholder="Weight in kg"
                            value={xlWeight}
                            onChange={(e) => setXlWeight(e.target.value === '' ? '' : Number(e.target.value))}
                            className="w-full p-2 bg-white border border-slate-200 rounded text-xs outline-none focus:border-accent"
                          />
                          <span className="text-[10px] font-bold text-slate-400">KG</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Custom Weight Section */}
              <div className="pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Custom Weight Parcel</p>
                <div className="flex gap-2">
                  <div className="flex-grow">
                    <input 
                      type="number" 
                      placeholder="Approx Weight (kg)"
                      value={customWeight}
                      onChange={(e) => setCustomWeight(e.target.value === '' ? '' : Number(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-primary"
                    />
                  </div>
                  <div className="w-24">
                    <select
                      value={customCount}
                      onChange={(e) => setCustomCount(parseInt(e.target.value))}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-primary font-bold"
                    >
                      <option value="0">Qty: 0</option>
                      {[1, 2, 3, 4, 5, 10].map(num => (
                        <option key={num} value={num}>Qty: {num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <p className="text-[9px] text-slate-400 mt-1 italic">
                  * Pricing: ₦5k for 1st kg + ₦500 per additional kg
                </p>
              </div>

              {getParcelTotal() > 0 && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-2 p-3 bg-accent/5 rounded-xl border border-accent/10 flex justify-between items-center"
                >
                  <p className="text-[10px] font-bold text-slate-500 uppercase">Estimated Shipping Total</p>
                  <p className="text-lg font-display font-extrabold text-accent">
                    ₦{getParcelTotal().toLocaleString()}
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action */}
        <button
          onClick={handleBook}
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 px-6 rounded-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-1 shadow-lg shadow-primary/10 mt-2"
        >
          <span>{service === 'people' ? 'Reserve Seat Now' : 'Send Parcel Now'}</span>
          <span className="text-accent ml-1 text-xl leading-none">&rarr;</span>
        </button>
        
        <p className="text-[11px] text-center text-slate-500 mt-3">
          Instant booking via WhatsApp & Email Confirmation
        </p>
      </div>
    </div>
  );
}

