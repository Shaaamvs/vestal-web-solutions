import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../image/banner section.jpg'; // Ensure you have an image at this path or update the path accordingly

export const HeroAbstractGraphic = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none">
      
      {/* 1. Ambient Background Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
          x: [0, 15, 0],
          y: [0, -15, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-72 h-72 sm:w-88 sm:h-88 rounded-full bg-gradient-to-tr from-[#0F52BA] via-cyan-500 to-indigo-600 blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-8 -right-8 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-emerald-500/40 via-teal-400/20 to-sky-600/30 blur-3xl pointer-events-none"
      />

      {/* 2. Hero High-Tech Image Display Frame with Glassmorphic Border */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-cyan-400/30 via-slate-800/60 to-indigo-500/20 border border-cyan-400/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl group overflow-hidden"
      >
        {/* Inner Image Container */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-950 border border-slate-800/80">
          <img
            src={heroImage}
            alt="High-Performance Digital Architecture"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* High-Gloss Subtle Gradient Overlay on the Image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

          {/* Minimalist Micro Image Corner Badge */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="font-heading font-bold text-white tracking-tight">Ultra-Performance Architecture</span>
            </div>
            <span className="font-mono text-[11px] text-cyan-300 font-semibold">99.8% Speed</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Floating Auxiliary Glass Capsule 1 (Top Left) */}
      <motion.div
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute -top-4 -left-3 sm:-left-6 z-20 bg-slate-900/90 backdrop-blur-xl border border-cyan-400/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Response Time</div>
          <div className="text-xs font-bold font-mono text-white">0.4s Instant Load</div>
        </div>
      </motion.div>

      {/* 4. Floating Auxiliary Glass Capsule 2 (Bottom Right) */}
      <motion.div
        animate={{
          y: [0, 10, 0],
          x: [0, -6, 0]
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute -bottom-4 -right-3 sm:-right-6 z-20 bg-slate-900/90 backdrop-blur-xl border border-emerald-400/40 px-3.5 py-2 rounded-2xl shadow-xl flex items-center gap-2.5"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Growth Lift</div>
          <div className="text-xs font-bold font-mono text-emerald-400">+48.6% Conversion</div>
        </div>
      </motion.div>

    </div>
  );
};
