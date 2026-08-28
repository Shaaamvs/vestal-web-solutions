import React from 'react';
import { motion } from 'motion/react';

const BANNER_SERVICES = [
  {
    id: 'web-dev',
    name: 'Web Development',
    category: 'Next.js / Custom Code',
    color: '#38BDF8',
    shape: 'rounded-full', // geometric shape indicator
    border: 'hover:border-sky-400/60',
    stat: '99+ Speed Score'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Stores',
    category: 'WooCommerce / Sales',
    color: '#F59E0B',
    shape: 'rotate-45 rounded-xs',
    border: 'hover:border-amber-400/60',
    stat: 'High Conversion'
  },
  {
    id: 'seo',
    name: 'SEO Marketing',
    category: 'Google #1 Growth',
    color: '#10B981',
    shape: 'rounded-sm',
    border: 'hover:border-emerald-400/60',
    stat: 'Organic Traffic'
  },
  {
    id: 'social',
    name: 'Social Media Ads',
    category: 'Reach & Growth',
    color: '#A855F7',
    shape: 'rounded-full ring-2 ring-purple-400/50',
    border: 'hover:border-purple-400/60',
    stat: 'Brand Authority'
  },
  {
    id: 'speed',
    name: 'Speed Optimization',
    category: 'Core Web Vitals',
    color: '#60A5FA',
    shape: 'rotate-12 rounded-sm',
    border: 'hover:border-blue-400/60',
    stat: '0.4s Instant Load'
  },
  {
    id: 'maintenance',
    name: 'Website Maintenance',
    category: '24/7 Monitoring',
    color: '#2DD4BF',
    shape: 'rounded-full',
    border: 'hover:border-teal-400/60',
    stat: 'Zero Downtime'
  },
  {
    id: 'hosting',
    name: 'Cloud Web Hosting',
    category: 'Cloud SSD & SSL',
    color: '#818CF8',
    shape: 'rounded-xs rotate-45',
    border: 'hover:border-indigo-400/60',
    stat: '99.9% Uptime'
  },
  {
    id: 'content',
    name: 'Content Writing',
    category: 'SEO Copywriting',
    color: '#F43F5E',
    shape: 'rounded-md',
    border: 'hover:border-rose-400/60',
    stat: 'Engaging Copy'
  }
];

export const HeroServiceRibbon = ({ onSelectService }) => {
  return (
    <div className="w-full mt-10 pt-8 border-t border-slate-800/80">
      
      {/* Title & Micro Eyebrow with CSS status dot */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
            Comprehensive Digital Service Suite
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 hidden sm:inline">
          Select any service for instant customized estimation →
        </span>
      </div>

      {/* Grid of Interactive Service Cards with Pure CSS Geometric Accents */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {BANNER_SERVICES.map((item) => {
          return (
            <motion.button
              key={item.id}
              onClick={() => onSelectService && onSelectService(`Service: ${item.name}`)}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative flex flex-col justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 ${item.border} text-left transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer overflow-hidden`}
            >
              {/* Top ambient glow on hover */}
              <div 
                className="absolute -top-6 -right-6 w-14 h-14 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              {/* Geometric Node & Arrow Minimal Indicator */}
              <div className="flex items-center justify-between mb-2.5">
                <div 
                  className="w-7 h-7 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs border border-white/5"
                  style={{
                    backgroundColor: `${item.color}18`,
                  }}
                >
                  <span 
                    className={`inline-block w-2.5 h-2.5 ${item.shape}`}
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                
                {/* CSS-styled micro geometric indicator */}
                <span className="text-[11px] font-mono text-slate-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform">
                  ↗
                </span>
              </div>

              {/* Service Name & Metric Badge */}
              <div>
                <div className="font-heading font-bold text-xs sm:text-sm text-white tracking-tight leading-tight group-hover:text-cyan-200 transition-colors line-clamp-1">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-1 font-mono font-medium">
                  {item.stat}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>

    </div>
  );
};
