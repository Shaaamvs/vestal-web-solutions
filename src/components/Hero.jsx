import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Sparkles 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedServiceSvgBanner } from './AnimatedServiceSvgBanner';

export const Hero = ({ onOpenQuote, onViewPackages }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Parallax on mouse move
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
      className="relative overflow-hidden bg-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800 w-full max-w-full"
    >
      {/* Background Ambient Video with Parallax & Soft Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.08) translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)`
          }}
          poster="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-typing-on-a-macbook-keyboard-5182/1080p.mp4"
            type="video/mp4"
          />
        </video>

        {/* Ambient Gradient Masks */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950" />

        {/* Luminous Interactive Orbs */}
        <div 
          className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[#0F52BA]/25 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`
          }}
        />
        <div 
          className="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700"
          style={{
            transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 0)`
          }}
        />

        {/* Subtle Cyber Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:36px_36px] opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Hero Welcome Address & Inspiring Copy (60% width) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Welcome Eyebrow Badge */}
            <ScrollReveal direction="up" distance={20} duration={0.5}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-xs font-bold tracking-wider uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>Business Growth with Digital Solutions.</span>
              </div>
            </ScrollReveal>

            {/* Main Inspiring H1 Heading */}
            <ScrollReveal direction="up" distance={25} delay={100} duration={0.55}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
               High-Performance Websites <br className="hidden sm:inline" />
               Built to Grow <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Your Business.</span>.
              </h1>
            </ScrollReveal>

            {/* Inspiring Welcome Address Statement */}
            <ScrollReveal direction="up" distance={25} delay={150} duration={0.55}>
              <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
               We build modern, fast, and conversion-focused websites that help businesses strengthen their online presence, attract more customers, and turn visitors into valuable leads.
              </p>
            </ScrollReveal>

            {/* Value Highlights Grid */}
            <ScrollReveal direction="up" distance={20} delay={200} duration={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs sm:text-sm font-medium text-slate-200">
                <div className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/40 p-2.5 rounded-xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Custom Development</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-emerald-500/40 p-2.5 rounded-xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mobile-Optimized</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-amber-500/40 p-2.5 rounded-xl backdrop-blur-xs transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>SEO Website Structure</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Inspiring CTA Buttons with Smooth Glow & Shimmer */}
            <ScrollReveal direction="up" distance={25} delay={250} duration={0.55}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  id="hero-view-packages-btn"
                  onClick={onViewPackages}
                  className="relative group overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0F52BA] to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white text-base font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span className="relative z-10">Explore Transparent Packages</span>
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  {/* Subtle light sweep reflection */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />
                </button>

                <button
                  id="hero-quick-quote-btn"
                  onClick={onOpenQuote}
                  className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-500 text-base font-semibold px-7 py-4 rounded-xl shadow-md backdrop-blur-md transition-all duration-200 transform hover:scale-102 cursor-pointer"
                >
                  <span>Get Instant Custom Quote</span>
                </button>
              </div>
            </ScrollReveal>

            {/* Mini Trust & Warranty Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 font-medium text-slate-300">
                <Shield className="w-4 h-4 text-cyan-400" />
                Zero Hidden Charges
              </span>
              <span>•</span>
              <span className="font-medium text-slate-300">Fast Project Delivery</span>
              <span>•</span>
              <span className="font-medium text-slate-300">Ongoing Full-Time Support</span>
            </div>
          </div>

          {/* Right Column: Animated SVG Service Infographic (40% width) */}
          <div className="lg:col-span-4 relative w-full">
            <ScrollReveal direction="up" distance={35} delay={200} duration={0.6}>
              <AnimatedServiceSvgBanner />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
