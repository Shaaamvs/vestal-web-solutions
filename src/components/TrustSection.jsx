import React, { useState } from 'react';
import { TRUST_CLIENTS } from '../data/agencyData';
import { ClientLogo } from './ClientLogo';
import { 
  Building2,
  ShieldCheck,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TrustSection = ({ onSelectClient }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Triple repeat list for seamless continuous infinite stream
  const marqueeClients = [...TRUST_CLIENTS, ...TRUST_CLIENTS, ...TRUST_CLIENTS];

  return (
    <section id="trust" className="bg-white py-12 sm:py-16 border-b border-slate-200/80 overflow-hidden relative">
      
      {/* Background subtle ambient tint */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/60 via-white to-slate-50/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={0.45}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-7 sm:mb-9 gap-3">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-[#0F52BA] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Built on Client Trust</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E3A8A] tracking-tight">
                Helping Businesses Grow Online
              </h2>
              <p className="text-xs sm:text-sm text-[#36454F] max-w-xl">
                We provide reliable digital solutions to build your brand and promote long-term company success, from expert websites and e-commerce platforms to SEO and digital marketing.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-slate-500 bg-slate-100/90 border border-slate-200/80 px-3 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active Client Stream</span>
            </div>
          </div>
        </ScrollReveal>

        {/* INFINITE MARQUEE STREAM */}
        <ScrollReveal direction="up" distance={20} delay={100} duration={0.5}>
          <div 
            className="relative overflow-hidden py-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Gradient edge fades for polished infinite scroll look */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div 
              className={`flex gap-5 sm:gap-6 w-max ${isHovered ? 'animation-pause' : ''}`}
              style={{
                animation: 'marqueeStream 28s linear infinite'
              }}
            >
              {marqueeClients.map((client, idx) => (
                <div
                  key={`${client.id}-${idx}`}
                  onClick={() => onSelectClient && onSelectClient(client.id)}
                  className="group px-6 sm:px-8 py-3.5 sm:py-4 bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-[#0F52BA] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex items-center justify-center cursor-pointer shrink-0 min-w-[170px] sm:min-w-[200px]"
                >
                  <ClientLogo client={client} size="md" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Marquee Animation Keyframes Style */}
      <style>{`
        @keyframes marqueeStream {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animation-pause {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};
