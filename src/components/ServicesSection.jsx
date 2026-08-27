import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { 
  ArrowRight, 
  Layers, 
  Sparkles,
  Code2,
  TrendingUp,
  Zap,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export const ServicesSection = ({ onSelectServiceForQuote }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const categories = [
    { 
      id: 'all', 
      label: 'All Capabilities', 
      shortLabel: 'All', 
      icon: Layers 
    },
    { 
      id: 'development', 
      label: 'Engineering & E-Commerce', 
      shortLabel: 'Engineering', 
      icon: Code2 
    },
    { 
      id: 'marketing', 
      label: 'SEO & Growth Marketing', 
      shortLabel: 'SEO & Growth', 
      icon: TrendingUp 
    },
    { 
      id: 'performance', 
      label: 'Speed & Hosting', 
      shortLabel: 'Speed & Hosting', 
      icon: Zap 
    },
    { 
      id: 'support', 
      label: 'Care & Maintenance', 
      shortLabel: 'Maintenance', 
      icon: ShieldCheck 
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden w-full">
      
      {/* Background Subtle Grid & Ambient Lighting across Full Width */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f018_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f018_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-[450px] h-[450px] bg-indigo-50/50 rounded-full blur-3xl pointer-events-none" />

      {/* FULL-WIDTH FLUID CONTAINER */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25} duration={0.55}>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Capabilities</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight leading-tight">
              Digital Services & Capabilities
            </h2>

            <p className="text-base sm:text-lg text-[#36454F] leading-relaxed">
              Explore our core digital engineering, organic search, and performance capabilities. Filter by discipline below.
            </p>
          </div>
        </ScrollReveal>

        {/* INTERACTIVE FILTER BAR (Full-Width Responsive Matching Pricing Tabs) */}
        <div className="mb-10 sm:mb-14 w-full">
          <div className="w-full p-1.5 sm:p-2 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'all' 
                ? SERVICES_DATA.length 
                : SERVICES_DATA.filter(s => s.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  id={`filter-btn-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer w-full text-center min-w-0 overflow-hidden ${
                    isActive 
                      ? 'bg-[#0F52BA] text-white shadow-md' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-cyan-200' : 'text-slate-500'}`} />
                  <span className="hidden sm:inline truncate">{cat.label}</span>
                  <span className="sm:hidden truncate text-[11px] font-medium">{cat.shortLabel}</span>
                  <span 
                    className={`text-[10px] sm:text-[11px] px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded-full font-mono font-bold shrink-0 ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FULL-WIDTH RESPONSIVE FILTERABLE GRID WITH ANIMATIONS */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch mb-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                id={`service-grid-item-${service.id}`}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-[#0F52BA] overflow-hidden transition-colors duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs group h-full relative"
              >
                <div>
                  {/* Clean Visual Image Box at Top */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Content Box */}
                  <div className="p-6 space-y-3">
                    {/* Title */}
                    <h3 className="font-heading text-xl font-bold text-[#1E3A8A] group-hover:text-[#0F52BA] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    {/* Key Deliverables Block */}
                    <div className="space-y-1.5 pt-1">
                      <p className="text-xs sm:text-sm text-[#36454F] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Action Button */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      id={`btn-quote-service-${service.id}`}
                      onClick={() => onSelectServiceForQuote(`${service.number} — ${service.title}`)}
                      className="w-full py-3 px-4 rounded-xl bg-blue-50/80 hover:bg-[#0F52BA] text-[#0F52BA] hover:text-white border border-[#0F52BA]/30 hover:border-[#0F52BA] font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:bg-[#0F52BA] group-hover:text-white active:scale-95"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM FULL-WIDTH CAPABILITIES BANNER */}
        <ScrollReveal direction="up" distance={20} delay={100} duration={0.5}>
          <div className="w-full bg-gradient-to-r from-[#1E3A8A] via-[#0F52BA] to-[#1E3A8A] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded-full text-xs font-bold text-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>Multi-Service Bundles Available</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                Combine Development, SEO, & Hosting for Maximum ROI
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/90 max-w-2xl">
                Get a single unified point of contact for your entire digital stack — built, hosted, secured, and scaled seamlessly.
              </p>
            </div>

            <button
              id="services-consultation-btn"
              onClick={() => onSelectServiceForQuote('Full Digital Stack Solution')}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#1E3A8A] font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
            >
              <span>Get a Full-Stack Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0F52BA]" />
            </button>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
