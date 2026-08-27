import React, { useState, useMemo } from 'react';
import { PRICING_PACKAGES } from '../data/agencyData';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Clock,
  Globe,
  Palette,
  Search,
  Layers,
  Star,
  FileText,
  SearchCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

const CATEGORY_TABS = [
  {
    id: 'all',
    label: 'All Packages',
    shortLabel: 'All',
    icon: Layers,
    description: 'View all transparent web, social media, and SEO growth packages.'
  },
  {
    id: 'web',
    label: 'Website Development',
    shortLabel: 'Websites',
    icon: Globe,
    description: 'Custom, high-speed, mobile-first WordPress & e-commerce websites.'
  },
  {
    id: 'social',
    label: 'Social Media & Design',
    shortLabel: 'Social Media',
    icon: Palette,
    description: 'High-engagement social posters, festival creatives, reels & branding.'
  },
  {
    id: 'seo',
    label: 'SEO & Search Marketing',
    shortLabel: 'SEO',
    icon: Search,
    description: 'Google ranking, local GMB maps optimization & high-intent organic traffic.'
  }
];

export const PricingSection = ({ onSelectPackage }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPackages = useMemo(() => {
    if (activeCategory === 'all') {
      return PRICING_PACKAGES;
    }
    return PRICING_PACKAGES.filter((pkg) => pkg.category === activeCategory);
  }, [activeCategory]);

  const activeTabMeta = CATEGORY_TABS.find((t) => t.id === activeCategory) || CATEGORY_TABS[0];

  return (
    <section 
      id="pricing" 
      className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20 relative"
    >
      {/* Anchor alias for packages */}
      <span id="packages" className="absolute -top-20 left-0 h-0 w-0 opacity-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Agency Pricing</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight">
            Simple, Transparent Agency Packages
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#36454F] leading-relaxed">
            Fixed prices in Indian Rupees (₹) with zero hidden fees. Choose a package that fits your business today and scale as you grow.
          </p>
        </div>

        {/* Filter Tabs (Full-width responsive grid) */}
        <div className="mb-8 sm:mb-10 w-full">
          <div className="w-full p-1.5 sm:p-2 bg-slate-100/90 rounded-2xl border border-slate-200/80 shadow-inner grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              const count = tab.id === 'all' 
                ? PRICING_PACKAGES.length 
                : PRICING_PACKAGES.filter(p => p.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  id={`pricing-tab-${tab.id}`}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer w-full text-center min-w-0 overflow-hidden ${
                    isActive
                      ? 'bg-[#0F52BA] text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-cyan-200' : 'text-slate-500'}`} />
                  <span className="hidden sm:inline truncate">{tab.label}</span>
                  <span className="sm:hidden truncate text-[11px] font-medium">{tab.shortLabel}</span>
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

          {/* Tab Subtitle Description */}
          <p className="text-center text-xs sm:text-sm text-slate-500 mt-3 font-medium px-2">
            {activeTabMeta.description}
          </p>
        </div>

        {/* Pricing Cards Grid with Motion layout animations */}
        <motion.div 
          layout
          className={`grid gap-6 items-stretch ${
            filteredPackages.length === 4 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
              : filteredPackages.length === 1 && activeCategory === 'seo'
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : filteredPackages.length === 1
              ? 'grid-cols-1 max-w-md mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => {
              const isSocial = pkg.category === 'social';
              const isSeo = pkg.category === 'seo';
              const isGradient = 
                pkg.id === 'web-growth' || 
                pkg.id === 'web-pro' || 
                pkg.id === 'web-ecommerce' || 
                pkg.id === 'seo-basic' ||
                pkg.name.toLowerCase().includes('small business') ||
                pkg.name.toLowerCase().includes('elevate') ||
                pkg.name.toLowerCase().includes('e-store') ||
                pkg.name.toLowerCase().includes('basic seo');

              return (
                <motion.div
                  key={pkg.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  whileHover={{ y: -4 }}
                  id={`pricing-card-${pkg.id}`}
                  className={`rounded-2xl flex flex-col justify-between transition-colors duration-200 relative ${
                    isGradient
                      ? 'bg-gradient-to-br from-[#07111F] via-[#0D1F38] to-[#162A45] text-white border border-[#23456C] shadow-lg hover:shadow-2xl hover:border-cyan-400/50'
                      : 'bg-slate-50/90 text-slate-900 border border-slate-200 hover:border-[#0F52BA] hover:shadow-xl'
                  } ${
                    pkg.isPopular && !isGradient
                      ? 'border-[#0F52BA] ring-2 ring-[#0F52BA]/20 shadow-lg' 
                      : ''
                  } h-full`}
                >
                {/* Popular Highlight Badge */}
                {pkg.isPopular && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${
                    isGradient 
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border border-amber-300/40 shadow-lg' 
                      : 'bg-[#0F52BA] text-white border border-blue-300/40 shadow-md'
                  } text-[11px] font-bold px-3.5 py-1 rounded-full flex items-center gap-1.5 uppercase tracking-wider z-10`}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-100"></span>
                    </span>
                    <Star className="w-3.5 h-3.5 fill-amber-200 text-amber-200 shrink-0" />
                    <span className="font-extrabold tracking-wide text-white">Most Popular</span>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Category pill & Package Name */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span 
                        className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          isGradient
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : isSocial 
                            ? 'bg-amber-100 text-amber-800' 
                            : isSeo 
                            ? 'bg-purple-100 text-purple-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {isSocial ? 'Social & Design' : isSeo ? 'SEO Marketing' : 'Website'}
                      </span>
                      
                      {pkg.billingPeriod && (
                        <span className={`text-[11px] font-medium ${isGradient ? 'text-slate-300' : 'text-slate-500'}`}>
                          {pkg.billingPeriod}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-heading text-2xl font-bold ${isGradient ? 'text-white' : 'text-[#1E3A8A]'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs leading-relaxed min-h-[32px] ${isGradient ? 'text-slate-200' : 'text-slate-600'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className={`pt-3 border-t ${isGradient ? 'border-slate-700/80' : 'border-slate-200/80'}`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`font-heading text-3xl sm:text-4xl font-bold ${isGradient ? 'text-white' : 'text-[#1E3A8A]'}`}>
                        {pkg.priceFormatted}
                      </span>
                      {pkg.billingPeriod && pkg.billingPeriod.toLowerCase().includes('month') && (
                        <span className={`text-xs font-semibold ${isGradient ? 'text-slate-300' : 'text-slate-500'}`}>/ month</span>
                      )}
                    </div>
                    
                    {/* Turnaround / Deliverable Frequency */}
                    <div className={`flex items-center gap-1.5 text-xs font-semibold mt-2 ${isGradient ? 'text-slate-200' : 'text-slate-600'}`}>
                      <Clock className={`w-3.5 h-3.5 shrink-0 ${isGradient ? 'text-cyan-400' : 'text-[#0F52BA]'}`} />
                      <span>Timeline: {pkg.turnaroundTime}</span>
                    </div>
                  </div>

                  {/* Additional page note if applicable */}
                  {pkg.additionalPageCost && (
                    <div className={`text-[11px] font-semibold px-2.5 py-1 rounded ${
                      isGradient 
                        ? 'bg-white/10 border border-white/20 text-cyan-200' 
                        : 'bg-blue-50/80 border border-blue-100 text-[#0F52BA]'
                    }`}>
                      {pkg.additionalPageCost}
                    </div>
                  )}

                  {/* Recommended For */}
                  <div className={`text-[11px] rounded-lg p-2 ${
                    isGradient 
                      ? 'text-slate-200 bg-white/10 border border-white/15' 
                      : 'text-slate-600 bg-white/70 border border-slate-200/80'
                  }`}>
                    <span className={`font-bold ${isGradient ? 'text-white' : 'text-slate-800'}`}>Ideal For: </span>
                    <span className={isGradient ? 'text-slate-100' : ''}>{pkg.recommendedFor}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-1">
                    <div className={`text-xs font-bold uppercase tracking-wider ${isGradient ? 'text-cyan-300' : 'text-slate-500'}`}>
                      Included Deliverables:
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {pkg.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isGradient ? 'text-cyan-400' : 'text-[#0F52BA]'}`} />
                          <span className={`${isGradient ? 'text-white font-medium' : 'text-slate-700'} leading-snug`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA Button */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    id={`select-package-btn-${pkg.id}`}
                    onClick={() => onSelectPackage(`${pkg.name} (${pkg.priceFormatted})`)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group ${
                      isGradient
                        ? 'bg-[#0F52BA] hover:bg-[#1261D6] text-white border border-blue-400/40 hover:scale-[1.02] shadow-md active:scale-95'
                        : pkg.isPopular
                        ? 'bg-[#0F52BA] hover:bg-[#1E3A8A] text-white hover:shadow-md'
                        : 'bg-blue-50/80 hover:bg-[#0F52BA] text-[#0F52BA] hover:text-white border border-[#0F52BA]/35 hover:border-[#0F52BA] shadow-2xs active:scale-95'
                    }`}
                  >
                    <span className={isGradient || pkg.isPopular ? 'text-white' : 'text-[#0F52BA] group-hover:text-white transition-colors'}>
                      Choose {pkg.name}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${isGradient || pkg.isPopular ? 'text-white' : 'text-[#0F52BA] group-hover:text-white transition-colors'}`} />
                  </button>
                </div>

              </motion.div>
            );
          })}

          {/* Custom SEO Research & Quotation Card when SEO Tab is active */}
          {activeCategory === 'seo' && (
            <motion.div
              key="custom-seo-card"
              layout
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              id="custom-seo-quote-card"
              className="rounded-2xl flex flex-col justify-between transition-all duration-200 relative bg-gradient-to-br from-[#0B1528] to-[#162A45] text-white border border-[#23456C] shadow-lg hover:shadow-xl h-full p-5 sm:p-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Custom Keywords &amp; Strategy
                  </span>
                  <span className="text-[11px] font-medium text-slate-300">
                    Custom Quote
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Need More Keywords?
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-300">
                    For more keywords and custom SEO goals, we will research your business niche, analyze your competitors, and send a tailored quotation.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-700/80 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    What We Provide:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-start gap-2">
                      <SearchCode className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                      <span>Deep industry &amp; competitor keyword research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                      <span>Targeted keyword volume &amp; difficulty analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                      <span>Custom ranking roadmap &amp; content plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <FileText className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                      <span>Detailed commercial quotation for your exact requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6">
                <button
                  id="request-custom-seo-quote-btn"
                  onClick={() => onSelectPackage('Custom SEO & Keyword Research Quotation')}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-[#0F52BA] hover:bg-[#1261D6] text-white border border-blue-400/40 transition-all duration-200 shadow-md cursor-pointer hover:scale-[1.02] active:scale-95"
                >
                  <span>Request Custom SEO Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>

        {/* Global SEO Notice Banner across All Tabs */}
        {activeCategory !== 'seo' && (
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="p-2.5 rounded-xl bg-[#0F52BA] text-white shrink-0 hidden sm:block">
                <SearchCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1E3A8A]">
                  Looking for more keywords or custom SEO ranking?
                </h4>
                <p className="text-xs text-[#36454F] mt-0.5">
                  For more keywords and custom requirements, we will research your business and competitors and send you a personalized quotation.
                </p>
              </div>
            </div>
            <button
              id="global-custom-seo-quote-btn"
              onClick={() => onSelectPackage('Custom SEO & Keyword Research Quotation')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F52BA] hover:bg-[#1E3A8A] text-white text-xs font-bold transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
            >
              <span>Get Custom SEO Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Bottom Assurance */}
        <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#0F52BA]" />
            50% Initial Deposit on Web Projects, Monthly Retainers for Marketing
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>100% Source File &amp; Asset Handover</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>GST Invoices Available</span>
        </div>

      </div>
    </section>
  );
};

