import React from 'react';
import { AGENCY_INFO } from '../data/agencyData';
import {
  Mail,
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import logo from '../image/v.svg';


export const Footer = ({ onNavigate }) => {
  const servicesList = [
    { name: "Website Development", id: "services" },
    { name: "E-Commerce & WooCommerce", id: "services" },
    { name: "Search Engine Optimization (SEO)", id: "services" },
    { name: "Social Media Marketing", id: "services" },
    { name: "Content Writing", id: "services" },
    { name: "Website Maintenance", id: "services" },
    { name: "Hosting Solutions", id: "services" },
    { name: "Page Speed Optimization", id: "services" }
  ];

  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "Our Clients", id: "trust" },
    { name: "Our Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "The Vestal Advantage", id: "why-us" },
    { name: "Our Process", id: "process" },
    { name: "Website Packages", id: "pricing" },
    { name: "FAQ", id: "faq" },
    { name: "Request Quote", id: "contact" }
  ];

  return (
    <footer id="main-footer" className="bg-[#0B192C] text-slate-300 border-t border-slate-800">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <ScrollReveal direction="up" distance={20} duration={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

            {/* Brand Column (Col Span 5) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0F52BA] text-white flex items-center justify-center font-heading font-bold text-xl shadow-sm">
                  {/* <span>V</span> */}
                  <img
                    src={logo}
                    alt="Vestal Web Solutions Logo"
                    className="w-auto h-10 max-w-[180px] object-contain transition-transform duration-300 ease-out hover:scale-105"
                  />
                </div>
                <div>
                  <span className="font-heading font-bold text-2xl text-white tracking-tight">
                    Vestal Web Solutions
                  </span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-[#60A5FA]">
                    High-Performance Digital Agency
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
                A forward-thinking digital agency helping businesses establish and grow their online presence through innovative web solutions.
              </p>

              {/* Direct contact link */}
              <div className="pt-2 space-y-2">
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="inline-flex items-center gap-2 text-sm text-[#60A5FA] hover:text-white transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#0F52BA] group-hover:text-white" />
                  <span className="font-medium underline">{AGENCY_INFO.email}</span>
                </a>
                <div className="text-xs text-slate-400">
                  Mon – Sat: 9:00 AM – 7:00 PM IST
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F52BA] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F52BA] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 duration-200"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F52BA] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F52BA] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-110 duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services Links (Col Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Our Services
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {servicesList.map((service, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(service.id)}
                      className="hover:text-white text-slate-300 transition-colors flex items-center gap-1.5 group text-left cursor-pointer hover:translate-x-1 duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-[#0F52BA] group-hover:translate-x-0.5 transition-transform" />
                      <span>{service.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Links (Col Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-heading font-bold text-base text-white uppercase tracking-wider border-b border-slate-800 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="hover:text-white text-slate-300 transition-colors flex items-center gap-1.5 group cursor-pointer hover:translate-x-1 duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-[#0F52BA] group-hover:translate-x-0.5 transition-transform" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </ScrollReveal>

        {/* Sub-Footer Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong>Vestal Web Solutions</strong>. All rights reserved. Built with modern web standards.
          </p>
        </div>

      </div>
    </footer>
  );
};
