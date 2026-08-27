import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [preselectedServiceOrPackage, setPreselectedServiceOrPackage] = useState('');

  const scrollToSection = (sectionId) => {
    // Check for target or alias
    let el = document.getElementById(sectionId);
    if (!el && sectionId === 'packages') {
      el = document.getElementById('pricing');
    }
    if (!el && sectionId === 'pricing') {
      el = document.getElementById('packages');
    }

    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleOpenQuote = (serviceOrPackage) => {
    if (serviceOrPackage) {
      setPreselectedServiceOrPackage(serviceOrPackage);
    }
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#36454F] flex flex-col selection:bg-[#0F52BA]/15 selection:text-[#0F52BA] w-full max-w-full overflow-x-clip relative">
      
      {/* 1. Sticky Header / Navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full max-w-full">
        
        {/* 2. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onViewPackages={() => scrollToSection('pricing')}
        />

        {/* 3. Trust / Client Partners Introduction */}
        <ScrollReveal direction="up" distance={25} duration={0.6}>
          <TrustSection onSelectClient={() => scrollToSection('contact')} />
        </ScrollReveal>

        {/* 4. Interactive Services Section */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <ServicesSection onSelectServiceForQuote={(serviceTitle) => handleOpenQuote(`Service: ${serviceTitle}`)} />
        </ScrollReveal>

        {/* 5. About Section */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <AboutSection />
        </ScrollReveal>

        {/* 6. The Vestal Advantage: Design & Development Excellence */}
        <WhyChooseUs />

        {/* 7. Process Section */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <ProcessSection onStartProject={() => handleOpenQuote('Phase 01 Discovery')} />
        </ScrollReveal>

        {/* 8. Pricing Packages Section */}
        <PricingSection onSelectPackage={(pkgName) => handleOpenQuote(`Package: ${pkgName}`)} />

        {/* 9. FAQ Section */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <FaqSection onAskQuestion={() => handleOpenQuote('General Question / Custom Scope')} />
        </ScrollReveal>

        {/* 10. Final Call To Action */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <FinalCta
            onOpenQuote={() => handleOpenQuote()}
            onTalkToUs={() => handleOpenQuote('Discovery Talk')}
          />
        </ScrollReveal>

        {/* 11. Contact / Quick Quote Section */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <ContactSection preselectedServiceOrPackage={preselectedServiceOrPackage} />
        </ScrollReveal>

      </main>

      {/* Footer */}
      <Footer onNavigate={(sectionId) => scrollToSection(sectionId)} />

      {/* Global Floating Action Group (WhatsApp + Back to Top) */}
      <FloatingActions />

    </div>
  );
}
