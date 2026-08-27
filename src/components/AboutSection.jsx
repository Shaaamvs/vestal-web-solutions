import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Target, 
  Gauge, 
  Users 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import aboutus from '../image/about us.png';

export const AboutSection = () => {
  const highlights = [
    { title: "Web Development", desc: "Modern, responsive websites built for business growth." },
    { title: "E-Commerce Stores", desc: "High-converting online stores built for seamless shopping." },
    { title: "SEO & Lead Generation", desc: "Improve search visibility and turn traffic into enquiries." },
    { title: "Website Support", desc: "Ongoing updates, security, optimization, and technical assistance." }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Development Hub & Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-4">
            <ScrollReveal direction="right" distance={30} duration={0.6}>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group transform transition-all duration-300 hover:shadow-2xl">
                {/* Agency High-Res Image */}
                <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                  <img
                    src={aboutus}
                    alt="Vestal Web Solutions Team & Collaboration"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* Floating pill on image */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-[#1E3A8A] font-bold text-xs px-3 py-1 rounded-md shadow-sm flex items-center gap-1.5 animate-float-gentle">
                    <Users className="w-3.5 h-3.5 text-[#0F52BA]" />
                    <span>Vestal Core Team</span>
                  </div>

                  {/* Bottom text on image */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="text-xs font-medium text-blue-200 uppercase tracking-wider">Engineering Standards</div>
                    <div className="font-heading font-bold text-lg text-white">Delivering Speed, Security & Scalability</div>
                  </div>
                </div>

                {/* 2 Highlight Metrics Cards */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-900 text-white">
                  <div className="bg-slate-800/90 border border-slate-700/80 p-3 rounded-xl text-left space-y-0.5 transition-transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-bold uppercase tracking-wider">
                      <Target className="w-3 h-3" />
                      <span>Client Focus</span>
                    </div>
                    <div className="font-heading font-bold text-xl text-white">100%</div>
                    <div className="text-[11px] text-slate-300">Custom Built</div>
                  </div>

                  <div className="bg-slate-800/90 border border-slate-700/80 p-3 rounded-xl text-left space-y-0.5 transition-transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-1.5 text-[#60A5FA] text-[11px] font-bold uppercase tracking-wider">
                      <Gauge className="w-3 h-3" />
                      <span>Performance</span>
                    </div>
                    <div className="font-heading font-bold text-xl text-white">99+</div>
                    <div className="text-[11px] text-slate-300">Speed Score</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: About Content & Highlights */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            
            {/* Eyebrow */}
            <ScrollReveal direction="up" distance={20} duration={0.4}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT VESTAL</span>
              </div>
            </ScrollReveal>

            {/* Main Section Heading */}
            <ScrollReveal direction="up" distance={25} delay={70} duration={0.5}>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight leading-tight">
                We Build Digital Experiences That Help Businesses Grow
              </h2>
            </ScrollReveal>

            {/* Core Narrative */}
            <ScrollReveal direction="up" distance={20} delay={140} duration={0.5}>
<p className="text-[1rem] text-[#36454F] leading-relaxed">
  Vestal Web Solutions is a modern digital solutions agency. We engineer clean WordPress websites, fast e-commerce storefronts, and high-impact SEO strategies designed for measurable business growth.
</p>
            </ScrollReveal>

            {/* 4 Service Pillars Highlights with staggered animation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" distance={15} delay={180 + idx * 60} duration={0.45}>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1 hover:border-[#0F52BA]/60 hover:bg-blue-50/20 hover:shadow-xs transition-all duration-200 transform hover:-translate-y-0.5">
                    <div className="flex items-center gap-1.5 font-heading font-bold text-sm text-[#1E3A8A]">
                      <CheckCircle className="w-4 h-4 text-[#0F52BA] shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-5.5">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
