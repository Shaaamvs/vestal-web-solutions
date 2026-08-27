import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import { ScrollReveal } from './ScrollReveal';

export const FinalCta = ({ onOpenQuote, onTalkToUs }) => {
  return (
    <section className="bg-gradient-to-br from-[#1E3A8A] via-[#0F52BA] to-[#0A387E] text-white py-16 sm:py-24 relative overflow-hidden border-t border-blue-900/50">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      
      {/* Atmospheric animated blur circles */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none animate-float-delayed" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        {/* Eyebrow */}
        <ScrollReveal direction="up" distance={20} duration={0.45}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-100 text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-200 animate-pulse" />
            <span>START YOUR DIGITAL TRANSFORMATION</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" distance={25} delay={80} duration={0.5}>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Ready to Build a Better Online Presence?
          </h2>
        </ScrollReveal>

        {/* Supporting text */}
        <ScrollReveal direction="up" distance={20} delay={140} duration={0.5}>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Tell us about your business and requirements. We'll help you choose the right digital solution for your goals and budget.
          </p>
        </ScrollReveal>

        {/* Key perks checklist */}
        <ScrollReveal direction="up" distance={20} delay={200} duration={0.5}>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-2 text-xs sm:text-sm text-blue-100 font-medium">
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Free Consultation Included
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              24-Hour Response Time
            </span>
            <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              No Hidden Fees Guarantee
            </span>
          </div>
        </ScrollReveal>

        {/* Dual CTA Buttons with light-sweep and hover lifts */}
        <ScrollReveal direction="up" distance={25} delay={250} duration={0.55}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              id="final-cta-free-quote-btn"
              onClick={onOpenQuote}
              className="relative group overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-[#1E3A8A] text-base font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span className="relative z-10">Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 text-[#0F52BA] relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-blue-100/40 to-transparent transition-transform duration-700 pointer-events-none" />
            </button>

            <button
              id="final-cta-talk-to-us-btn"
              onClick={onTalkToUs}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900/60 hover:bg-blue-900/80 text-white border border-blue-400/40 text-base font-semibold px-8 py-4 rounded-xl backdrop-blur-xs transition-all duration-200 transform hover:scale-102 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-blue-200" />
              <span>Talk to Us</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Bottom micro assurance */}
        <div className="pt-4 text-xs text-blue-200">
          Prefer direct email? Reach us directly at{' '}
          <a
            href={`mailto:${AGENCY_INFO.email}`}
            className="underline font-semibold text-white hover:text-blue-100 transition-colors"
          >
            {AGENCY_INFO.email}
          </a>
        </div>

      </div>
    </section>
  );
};
