import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, ChevronRight } from 'lucide-react';
import { AGENCY_INFO } from '../data/agencyData';
import logo from '../image/V.svg';
export const Header = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Total document height and scroll threshold check
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page detection (activates contact section)
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Top of page detection
      if (scrollY < 80) {
        setActiveSection('home');
        return;
      }

      const sections = ['home', 'trust', 'services', 'about', 'why-us', 'process', 'pricing', 'faq', 'contact'];
      const anchor = 160; // offset beneath sticky header

      let currentSection = 'home';
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section top is above or near the anchor and its bottom is below the anchor
          if (rect.top <= anchor && rect.bottom > anchor) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Run once initially on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Clients', href: '#trust', id: 'trust' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Advantage', href: '#why-us', id: 'why-us' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Packages', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    let targetEl = document.getElementById(targetId);
    if (!targetEl && (targetId === 'pricing' || targetId === 'packages')) {
      targetEl = document.getElementById('pricing') || document.getElementById('packages');
    }

    if (targetEl) {
      const topOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
    }
  };

  return (
    <>
      {/* Top Micro-Announcement Bar */}
      <div
        id="top-announcement-bar"
        className="bg-[#1E3A8A] text-white text-xs font-medium py-2 px-4 hidden md:block border-b border-blue-900/40 select-none transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2 text-blue-100 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              Accepting New Website &amp; SEO Projects for 2026
            </span>
            <span className="text-blue-300/60">•</span>
            <span className="text-blue-200 font-normal">Custom WordPress, WooCommerce &amp; High-Speed Web Apps</span>
          </div>

          <div className="flex items-center space-x-5 text-blue-100 text-xs">
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="no-underline text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-blue-300 rounded px-1"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
              <span>{AGENCY_INFO.email}</span>
            </a>
            <span className="text-blue-300/60">•</span>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="no-underline text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-1 font-semibold group focus:outline-none focus:ring-1 focus:ring-blue-300 rounded px-1"
            >
              <span>Fast 24-Hour Proposal</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-sticky-header"
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out select-none ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/90 py-2.5 sm:py-3'
          : 'bg-white border-b border-slate-100 py-3.5 sm:py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Brand Logo */}
            <a
              id="brand-logo-link"
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="no-underline flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F52BA] rounded-xl transition-transform duration-200 hover:scale-[1.01]"
            >
              {/* <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F52BA] to-[#1E3A8A] text-white flex items-center justify-center font-heading font-bold text-xl shadow-md shadow-blue-900/10 group-hover:shadow-lg group-hover:shadow-blue-600/20 group-hover:from-[#1E3A8A] group-hover:to-[#0F52BA] transition-all duration-300 shrink-0">
                <span className="tracking-tight">V</span>
              
              </div> */}

              <div className="shrink-0 flex items-center">
                <img
                  src={logo}
                  alt="Vestal Web Solutions Logo"
                  className="w-auto h-10 max-w-[180px] object-contain transition-transform duration-300 ease-out hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl sm:text-2xl text-[#1E3A8A] tracking-tight leading-tight group-hover:text-[#0F52BA] transition-colors duration-200">
                  Vestal Web Solutions
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] tracking-wider text-slate-500 uppercase font-bold">
                    Digital Agency
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              {/* <div className="flex flex-col items-start">
                <img
                  src={logo}
                  alt="Vestal Web Solutions Logo"
                  className="w-[90%] h-auto object-contain transition-transform duration-500 ease-out hover:scale-110 origin-left"
                />

                <div className="flex items-center justify-start gap-1.5 mt-1">
                  <span className="text-[10px] tracking-wider text-slate-500 uppercase font-bold">
                    Digital Agency
                  </span>

                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                </div>
              </div> */}
            </a>

            {/* Desktop Navigation Menu (No Underlines, Smooth Hover Transitions, Active Highlighting) */}
            <nav
              id="desktop-navigation"
              className="hidden lg:flex items-center gap-1 bg-slate-50/90 p-1.5 rounded-xl border border-slate-200/70 shadow-inner"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    id={`nav-link-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`no-underline relative px-3.5 py-1.5 rounded-lg text-[13px] font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${isActive
                      ? 'text-[#0F52BA] bg-white shadow-xs border border-blue-200/90 font-bold ring-1 ring-blue-500/10'
                      : 'text-slate-600 hover:text-[#0F52BA] hover:bg-white/70 hover:shadow-xs'
                      }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F52BA] shrink-0 animate-pulse"></span>
                    )}
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                id="header-quote-button"
                onClick={() => onOpenQuote()}
                className="inline-flex items-center gap-2 bg-[#0F52BA] hover:bg-[#1E3A8A] text-white text-xs sm:text-sm font-semibold px-4.5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#36454F] hover:text-[#0F52BA] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0F52BA] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-200 mt-2"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`no-underline block px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${activeSection === link.id
                    ? 'bg-blue-50/90 text-[#0F52BA] font-bold border border-blue-200/60 shadow-xs'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-[#0F52BA]'
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{link.name}</span>
                    <ChevronRight className={`w-4 h-4 ${activeSection === link.id ? 'text-[#0F52BA]' : 'text-slate-400'}`} />
                  </div>
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 px-2 space-y-3">
                <button
                  id="mobile-nav-quote-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-[#0F52BA] hover:bg-[#1E3A8A] text-white py-3 rounded-xl font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex justify-between items-center text-xs text-slate-500 pt-1 px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Mail className="w-3.5 h-3.5 text-[#0F52BA]" />
                    {AGENCY_INFO.email}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">24h Proposal</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
