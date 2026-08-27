import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/agencyData';
import { 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export const FaqSection = ({ onAskQuestion }) => {
  const [openFaqId, setOpenFaqId] = useState('faq-1');

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25} duration={0.5}>
          <div className="text-center space-y-3 mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg text-[#36454F] leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our web development process, pricing, timelines, and post-launch support.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqId === faq.id;
            return (
              <ScrollReveal
                key={faq.id}
                direction="up"
                distance={20}
                delay={idx * 50}
                duration={0.45}
              >
                <div
                  id={`faq-item-${faq.id}`}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-[#0F52BA]/60 shadow-md ring-1 ring-blue-500/15' 
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className={`font-heading font-bold text-base sm:text-lg transition-colors ${
                      isOpen ? 'text-[#0F52BA]' : 'text-[#1E3A8A] group-hover:text-[#0F52BA]'
                    }`}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#0F52BA] text-white shadow-xs' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0F52BA]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-[#36454F] leading-relaxed border-t border-slate-100">
                          <p className="pt-3.5">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Direct Help Box */}
        <ScrollReveal direction="up" distance={20} delay={200} duration={0.5}>
          <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0F52BA] flex items-center justify-center shrink-0 border border-blue-100 shadow-2xs">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#1E3A8A]">
                  Have a different question or custom requirement?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  We typically respond with detailed technical answers within 24 hours.
                </p>
              </div>
            </div>

            <button
              id="faq-talk-to-us-btn"
              onClick={onAskQuestion}
              className="inline-flex items-center gap-2 bg-[#0F52BA] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl shadow-md shadow-blue-500/15 whitespace-nowrap transition-all transform hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              <span>Ask a Question</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

