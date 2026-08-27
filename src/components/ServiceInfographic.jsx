import React, { useState } from 'react';
import { 
  Zap, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  TrendingUp, 
  Workflow
} from 'lucide-react';

export const ServiceInfographic = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const STACK_LAYERS = [
    {
      id: 'design',
      step: '01',
      title: 'UI/UX & Brand Architecture',
      subtitle: 'Design System & Conversion Wireframing',
      icon: Palette,
      accentColor: 'from-blue-600 to-indigo-600',
      badgeColor: 'bg-blue-950/80 text-cyan-300 border-blue-800/80',
      tag: 'Bespoke Figma',
      metric: '100% Custom',
      features: ['Mobile-first 8pt grid', 'WCAG AA contrast', 'Conversion heatmapping']
    },
    {
      id: 'engineering',
      step: '02',
      title: 'Native WordPress Engineering',
      subtitle: 'Custom Gutenberg Blocks & PHP 8.3',
      icon: Code2,
      accentColor: 'from-[#0F52BA] to-blue-500',
      badgeColor: 'bg-blue-900/60 text-blue-200 border-blue-700/80',
      tag: 'Zero Bloatware',
      metric: '3x Lighter',
      features: ['No slow Elementor/Divi', 'Modular block architecture', 'Clean custom post types']
    },
    {
      id: 'speed',
      step: '03',
      title: 'Core Web Vitals Engine',
      subtitle: 'Sub-Second LCP & Edge Optimization',
      icon: Zap,
      accentColor: 'from-emerald-600 to-teal-500',
      badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80',
      tag: 'Google 99+ Pass',
      metric: '0.7s LCP',
      features: ['Brotli + WebP assets', 'Critical CSS inline', 'Redis object caching']
    },
    {
      id: 'commerce',
      step: '04',
      title: 'Checkout & Growth Pipeline',
      subtitle: 'UPI, Payment Gateways & SEO Schema',
      icon: TrendingUp,
      accentColor: 'from-amber-600 to-orange-500',
      badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-800/80',
      tag: 'Instant Payments',
      metric: '+240% Sales',
      features: ['Razorpay / Stripe 1-Click', 'JSON-LD rich snippets', 'Abandoned cart flows']
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Container with Royal Blue & Cyber Dark Aesthetics */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#0F52BA]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Infographic Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0F52BA] to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
              <Workflow className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                END-TO-END WORKFLOW INFOGRAPHIC
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight">
                The Vestal Engineering Stack
              </h4>
            </div>
          </div>
          
          <div className="flex items-center gap-1 bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-0.5" />
            <span>Turnkey Blueprint</span>
          </div>
        </div>

        {/* The 4-Layer Connected Infographic Process Flow */}
        <div className="space-y-3 relative">
          
          {/* Vertical Connecting Pathway Spine */}
          <div className="absolute left-[26px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#0F52BA] via-cyan-400 to-emerald-400 opacity-40 -z-0" />

          {STACK_LAYERS.map((layer, idx) => {
            const Icon = layer.icon;
            const isHovered = activeTab === idx;

            return (
              <div
                key={layer.id}
                onMouseEnter={() => setActiveTab(idx)}
                className={`relative z-10 p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isHovered
                    ? 'bg-slate-900/95 border-blue-400/80 shadow-lg shadow-blue-500/20 translate-x-1 ring-1 ring-blue-400/30'
                    : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  
                  {/* Step Number & Glowing Icon Box */}
                  <div className="relative shrink-0">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.accentColor} flex items-center justify-center text-white shadow-md transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-slate-950 border border-slate-700 text-[9px] font-mono font-extrabold text-cyan-300 px-1 rounded">
                      {layer.step}
                    </span>
                  </div>

                  {/* Layer Info & Badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                      <h5 className="font-heading font-bold text-xs sm:text-sm text-white tracking-tight truncate">
                        {layer.title}
                      </h5>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border ${layer.badgeColor}`}>
                        {layer.metric}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-300 leading-snug mb-2 font-sans">
                      {layer.subtitle}
                    </p>

                    {/* Features Micro-Pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {layer.features.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-900/90 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Infographic Impact Summary */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 rounded-2xl p-3.5 border border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-400">
                Guaranteed Delivery SLA
              </div>
              <div className="text-xs font-extrabold text-white flex items-center gap-1.5">
                <span>3–15 Days Turnaround</span>
                <span className="text-cyan-400 font-bold">• 100% Satisfaction</span>
              </div>
            </div>
          </div>

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1 bg-[#0F52BA] hover:bg-blue-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <span>Build Mine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
