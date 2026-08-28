import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { HeroAbstractGraphic } from './HeroAbstractGraphic';
import { HeroServiceRibbon } from './HeroServiceRibbon';
import { CheckCircle2 } from "lucide-react";

const ROTATING_HIGHLIGHTS = [
  'Custom Web & E-Commerce Engineering',
  'Rank #1 with High-Impact Organic SEO',
  'Lightning-Fast 0.4s PageSpeed Loading',
  '24/7 Security & High-Performance Cloud Hosting'
];

export const Hero = ({ onOpenQuote, onViewPackages }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);
  const heroRef = useRef(null);

  // Rotating Highlight Text
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHighlightIndex((prev) => (prev + 1) % ROTATING_HIGHLIGHTS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  // Soft Parallax on mouse move
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-800 w-full max-w-full"
    >
      {/* Background Ambient Geometric Grid with Floating Gradient Mesh */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Soft Ambient Depth Mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/95 to-slate-950" />

        {/* Luminous Interactive Atmospheric Orbs */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-[#0F52BA]/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
          }}
        />
        <div
          className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-cyan-600/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`
          }}
        />

        {/* Subtle Geometric Dot Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Bold Typography & Refined CTA Architecture (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Minimalist Micro Eyebrow with CSS geometric pulse badge */}
            <ScrollReveal direction="up" distance={20} duration={0.5}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-200 text-xs font-mono tracking-wider uppercase shadow-md backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                <span>Business Growth with Digital Solutions.</span>
              </div>
            </ScrollReveal>

            {/* Bold Display Headline with Refined Typography Scale */}
            <ScrollReveal direction="up" distance={25} delay={80} duration={0.55}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance">
                High-Performance Websites <br className="hidden sm:inline" />
                Built to Grow  <span className=" font-heading bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Your Business.</span>
              </h1>
            </ScrollReveal>

            {/* Smooth Rotating Subtitle Indicator (CSS Clean Dots) */}
            <div className="min-h-[28px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHighlightIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="flex items-center gap-2 text-sm sm:text-base font-semibold text-cyan-300"
                >
                  <span className="inline-block w-2 h-2 rounded-xs bg-amber-400 rotate-45 animate-pulse" />
                  <span>{ROTATING_HIGHLIGHTS[activeHighlightIndex]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Narrative Body Copy with Balanced Measure */}
            <ScrollReveal direction="up" distance={25} delay={140} duration={0.55}>
              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
                We build modern, fast, and conversion-focused websites that help businesses strengthen their online presence, attract more customers, and turn visitors into valuable leads.</p>
            </ScrollReveal>

            {/* Geometric Pill Highlights (Pure CSS Geometric Shapes - No Cluttered Icons) */}
            <ScrollReveal direction="up" distance={20} delay={180} duration={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 p-3 rounded-2xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                    <span className="font-heading font-bold text-white text-xs sm:text-sm">Custom Development</span>
                  </div>

                </div>

                <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-emerald-500/40 p-3 rounded-2xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                    <span className="font-heading font-bold text-white text-xs sm:text-sm">Mobile-Optimized</span>
                  </div>

                </div>

                <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 p-3 rounded-2xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                    <span className="font-heading font-bold text-white text-xs sm:text-sm">SEO Architecture</span>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* Refined High-Contrast CTA Action Suite */}
            <ScrollReveal direction="up" distance={25} delay={220} duration={0.55}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-view-packages-btn"
                  onClick={onViewPackages}
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0F52BA] via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-500 text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10">Explore Packages & Pricing</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                  {/* Light sweep reflection */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 pointer-events-none" />
                </button>

                <button
                  id="hero-quick-quote-btn"
                  onClick={() => onOpenQuote()}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-cyan-400/50 text-base font-semibold px-7 py-4 rounded-xl shadow-md backdrop-blur-md transition-all duration-200 transform hover:scale-102 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>Get Free Custom Quote</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Minimalist Trust Indicator Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400 font-mono">

              <span className="text-slate-300 font-sans font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                No Hidden Fees
              </span>

              <span className="text-slate-300 font-sans font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                24-Hour Response
              </span>

              <span className="text-slate-300 font-sans font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                100% Custom Built
              </span>
            </div>
          </div>

          {/* Right Column: High-Quality Abstract Glassmorphism Geometric Graphic (Col Span 5) */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            <ScrollReveal direction="left" distance={30} delay={160} duration={0.65}>
              <HeroAbstractGraphic />
            </ScrollReveal>
          </div>

        </div>

        {/* Banner Bottom Row: Comprehensive Digital Service Suite Ribbon */}
        <ScrollReveal direction="up" distance={25} delay={240} duration={0.6}>
          <HeroServiceRibbon onSelectService={onOpenQuote} />
        </ScrollReveal>

      </div>
    </section>
  );
};
