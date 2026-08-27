import React from 'react';
import { 
  Sparkles, 
  Tag, 
  Zap, 
  Palette, 
  Headphones, 
  ArrowRight, 
  Clock, 
  ThumbsUp, 
  CheckCircle2 
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import whychoose from '../image/whychooseus.jpg';
import AffordablePackages from '../image/packages.webp';
import FastTurnaround from '../image/Fastturnaround.jpg';
import CustomizedDesigns from '../image/Customizeddesigns.jpg';
import customersupport from '../image/customersupport.jpg';


const WHY_CHOOSE_ITEMS = [
  {
    id: 'affordable-packages',
    number: '01',
    title: 'Affordable Packages',
    description: 'Competitive pricing without compromising on quality. We offer flexible packages for every budget.',
    image: AffordablePackages,
    badge: 'Value Focused',
    icon: 'pricing'
  },
  {
    id: 'fast-turnaround',
    number: '02',
    title: 'Fast Turnaround',
    description: 'Quick project delivery without sacrificing quality. We value your time and business deadlines.',
    image: FastTurnaround,
    badge: 'On-Time Delivery',
    icon: 'speed'
  },
  {
    id: 'customized-designs',
    number: '03',
    title: 'Customized Designs',
    description: 'Unique, tailored solutions that perfectly match your brand identity and business objectives.',
    image: CustomizedDesigns,
    badge: '100% Tailored',
    icon: 'design'
  },
  {
    id: '24-7-support',
    number: '04',
    title: '24/7 Support',
    description: 'Round-the-clock assistance to ensure your website runs smoothly at all times.',
    image: customersupport,
    badge: 'Always Available',
    icon: 'support'
  }
];

export const WhyChooseUs = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'pricing': return <Tag className="w-5 h-5" />;
      case 'speed': return <Zap className="w-5 h-5" />;
      case 'design': return <Palette className="w-5 h-5" />;
      case 'support': return <Headphones className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-blue-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Responsive Grid with Sticky Left Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
          
          {/* STICKY LEFT COLUMN: Sticks on desktop when scrolling through the right cards */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start space-y-6 z-20">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0F52BA]" />
                <span>The Vestal Advantage</span>
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight leading-tight">
                Why Choose Us?
              </h2>

              <p className="text-[1rem] text-[#36454F] leading-relaxed">
                At Vestal Web Solutions, we focus on delivering value-driven solutions that help your business stand out online. Here’s why clients trust us:
              </p>
            </div>

            {/* Left Side Visual Feature Image & Trust Card */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4">
              
              {/* Related Image in Sticky Section */}
              <div className="relative h-80 rounded-xl overflow-hidden bg-slate-900 border border-slate-100 shadow-2xs group">
                <img
                  src=
                  {whychoose}
                  alt="Why Choose Vestal Web Solutions"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#0F52BA] text-white flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold font-mono">Trusted Agency Partner</span>
                  </div>
                  <span className="text-[11px] text-cyan-300 font-medium">100% Quality SLA</span>
                </div>
              </div>

              {/* Quick Trust Points */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <ThumbsUp className="w-4 h-4 text-[#0F52BA] shrink-0" />
                  <span className="text-xs text-slate-700 font-semibold">Client-First Focus</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs text-slate-700 font-semibold">On-Time Delivery</span>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0F52BA] hover:bg-[#1E3A8A] text-white text-[1rem] font-bold py-3.5 rounded-xl shadow-md shadow-blue-500/20 transition-all transform hover:scale-102 cursor-pointer"
                >
                  <span>Get a Free Project Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 4 Scrolling Cards with Related Images */}
          <div className="lg:col-span-7 space-y-6 pt-2 lg:pt-0">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <ScrollReveal
                key={item.id}
                direction="up"
                distance={24}
                delay={idx * 60}
                duration={0.45}
              >
                <div
                  id={`why-choose-${item.id}`}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#0F52BA] p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    
                    {/* Visual Related Image for each item */}
                    <div className="sm:col-span-5 relative h-48 sm:h-44 w-full rounded-xl overflow-hidden bg-slate-950 shadow-2xs">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                      />
                      
                      {/* Gradient Scrim */}
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                        <span className="font-heading font-bold text-[11px] bg-black/70 backdrop-blur-md text-white px-2 py-0.5 rounded border border-white/15">
                          #{item.number}
                        </span>
                        <span className="text-[10px] font-bold bg-white/95 text-[#1E3A8A] px-2 py-0.5 rounded-full shadow-2xs uppercase">
                          {item.badge}
                        </span>
                      </div>

                      {/* Bottom Icon Badge */}
                      <div className="absolute bottom-2.5 left-2.5 z-10">
                        <div className="w-8 h-8 rounded-lg bg-[#0F52BA] text-white flex items-center justify-center shadow-md">
                          {getIcon(item.icon)}
                        </div>
                      </div>
                    </div>

                    {/* Card Content with Exact Requested Text */}
                    <div className="sm:col-span-7 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#0F52BA]">
                          {item.number}
                        </span>
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-[#1E3A8A] group-hover:text-[#0F52BA] transition-colors leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[1rem] text-[#36454F] leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
