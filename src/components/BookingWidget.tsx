import React, { useState, useEffect } from 'react';
import { Calendar, Users, Package, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ServiceType = 'people' | 'parcel';

export default function BookingWidget() {
  const [service, setService] = useState<ServiceType>('people');
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');
  const [tripType, setTripType] = useState('');
  const [parcels, setParcels] = useState<{ id: string; weight: number | ''; count: number }[]>([]);

  const addParcel = () => {
    setParcels([...parcels, { id: Math.random().toString(36).substr(2, 9), weight: '', count: 1 }]);
  };

  const removeParcel = (id: string) => {
    setParcels(parcels.filter(p => p.id !== id));
  };

  const updateParcel =(id: string, updates: Partial<{ weight: number | ''; count: number }>) => {
    setParcels(parcels.map(p => p.id === id ? { ...p, ...updates } : p));
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
      const parts = parcels
        .filter(p => p.weight !== '' || p.count > 0)
        .map(p => `${p.count} parcel(s)${p.weight ? ` approx ${p.weight}kg each` : ''}`);
      
      if (parts.length >0){
        details = `with ${parts.join(', ')}`;
      }
    }

    const message = `Hello,my name is ${name}. I would like to book an Autostar ${service === 'people' ? 'trip' : 'parcel delivery'} ${details} from ${from} to ${to} on ${date}.`;
    const whatsappUrl = `https://wa.me/${ from === 'Lagos' ? '2348059548157': service==='parcel' && from ==='Abuja' ? '2349071309994': service === 'people' && from === 'Abuja' ? '2348132534835':service=== 'parcel'&& from==='Enugu'? '2349124767267' : '2348133291883'}?text=${encodeURIComponent(message)}`;
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
        {/* Name */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-sm"
          />
        </div>
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
              <div className="flex items-center justify-between">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
                  <Package size={12} className="text-primary" />
                  Parcel Details (Optional)
                </label>
                <button 
                  onClick={addParcel}
                  className="text-[10px] font-bold text-primary hover:text-primary-dark transition-colors border border-primary/20 rounded px-2 py-1 bg-primary/5"
                >
                  + Add Parcel
                </button>
              </div>
              
              <div className="space-y-3">
                {parcels.map((parcel) => (
                  <motion.div 
                    key={parcel.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-2 items-start"
                  >
                    <div className="flex-grow grid grid-cols-2 gap-2">
                      <div className="relative">
                        <input 
                          type="number" 
                          placeholder="Weight (kg)"
                          value={parcel.weight}
                          onChange={(e) => updateParcel(parcel.id, { weight: e.target.value === '' ? '' : Number(e.target.value) })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-primary pr-8"
                        />
                        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400">KG</span>
                      </div>
                      <select
                        value={parcel.count}
                        onChange={(e) => updateParcel(parcel.id, { count: parseInt(e.target.value) })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs outline-none focus:border-primary font-bold"
                      >
                        {[1, 2, 3, 4, 5, 10, 20].map(num => (
                          <option key={num} value={num}>Qty: {num}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      onClick={() => removeParcel(parcel.id)}
                      className="p-2.5 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  </motion.div>
                ))}

                {parcels.length === 0 &&(
                  <p className="text-[10px] text-slate-400 text-center py-4 bg-slate-50/50 border border-dashed border-slate-200 rounded-xl">
                    No parcel details added. You can still book and provide info via WhatsApp.
                  </p>
                )}
              </div>

              {/* Disclaimer*/}
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-[9px] text-red-600 leading-relaxed font-medium">
                  <strong>NOTE:</strong> High-value or sensitive items (phones, passports, documents, cheques) 
                  are ineligible for standard weight pricing. Please contact us via WhatsApp for approval 
                  and specialized pricing before sending.
                </p>
              </div>
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

