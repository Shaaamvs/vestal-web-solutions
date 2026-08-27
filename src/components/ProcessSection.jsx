import React from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Compass, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Rocket, 
  GitBranch, 
  ChevronRight
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProcessSection = ({ onStartProject }) => {
  const getStepIcon = (index, className = "w-6 h-6") => {
    switch (index) {
      case 0: return <Compass className={className} />;
      case 1: return <Layout className={className} />;
      case 2: return <Code2 className={className} />;
      case 3: return <ShieldCheck className={className} />;
      case 4: return <Rocket className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[350px] bg-blue-100/35 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25} duration={0.55}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <GitBranch className="w-3.5 h-3.5 text-[#0F52BA]" />
              <span>Milestone Execution Timeline</span>
            </div>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight leading-tight">
              From Idea to Launch
            </h2>
            
            <p className="text-[1rem] text-[#36454F] leading-relaxed">
              Transparent, milestone-based execution engineered for quick turnarounds and zero surprises.
            </p>
          </div>
        </ScrollReveal>

        {/* 5 ICON BOXES GRID (Responsive: 1 col on mobile, 2 col on tablet, 5 col on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            return (
              <ScrollReveal
                key={step.step}
                direction="up"
                distance={25}
                delay={idx * 60}
                duration={0.45}
              >
                <div
                  id={`process-icon-box-${step.step}`}
                  className="group relative h-full bg-white rounded-2xl border border-slate-200 hover:border-[#0F52BA] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl shadow-xs overflow-hidden"
                >
                  {/* Top: Step Number Badge & Timeline Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-extrabold px-2.5 py-1 rounded-lg bg-blue-50 text-[#0F52BA] border border-blue-100 group-hover:bg-[#0F52BA] group-hover:text-white group-hover:border-[#0F52BA] transition-colors">
                      {step.step}
                    </span>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded-md">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{step.timeline}</span>
                    </span>
                  </div>

                  {/* PROMINENT ICON BOX */}
                  <div className="mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-108 bg-blue-50 group-hover:bg-[#0F52BA] text-[#0F52BA] group-hover:text-white border border-blue-100 group-hover:border-transparent shadow-sm">
                      {getStepIcon(idx, "w-7 h-7")}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2 flex-1">
                    <h3 className="font-heading text-lg font-bold text-[#1E3A8A] group-hover:text-[#0F52BA] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#36454F] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Phase Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-[#0F52BA] transition-colors">
                    <span>Phase {step.step}</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>

                  {/* Connected Step Arrow for Desktop */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="w-6 h-6 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-400">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
