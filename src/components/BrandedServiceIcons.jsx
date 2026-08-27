import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export const WebServiceSvg = ({ isHovered = false }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[160px] max-h-[160px] transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
          filter: isHovered ? 'drop-shadow(0 12px 24px rgba(15, 82, 186, 0.45))' : 'drop-shadow(0 6px 12px rgba(15, 82, 186, 0.25))'
        }}
      >
        <defs>
          {/* Defined Brand Color Gradients */}
          <linearGradient id="webBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#0F52BA" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0A2540" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="webCyanAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0F52BA" />
          </linearGradient>

          <linearGradient id="webWindowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1E293B" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="codeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Outer Halo Ring */}
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke="#0F52BA"
          strokeWidth="1.5"
          strokeDasharray={isHovered ? "6 4" : "4 6"}
          className={`opacity-40 transition-all duration-700 ${isHovered ? 'animate-spin' : ''}`}
          style={{ transformOrigin: 'center center', animationDuration: '18s' }}
        />

        {/* Outer Hexagon/Shield Base */}
        <polygon
          points="100,24 168,60 168,140 100,176 32,140 32,60"
          fill="url(#webBgGrad)"
          stroke="#38BDF8"
          strokeWidth={isHovered ? "2.5" : "1.5"}
          strokeOpacity={isHovered ? "0.9" : "0.5"}
          className="transition-all duration-300"
        />

        {/* Subtle Geometric Wireframe Inner Lines */}
        <line x1="32" y1="60" x2="168" y2="140" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.15" />
        <line x1="168" y1="60" x2="32" y2="140" stroke="#38BDF8" strokeWidth="0.75" strokeOpacity="0.15" />

        {/* Floating Code Viewport Window */}
        <g transform={isHovered ? "translate(0, -2)" : "translate(0, 0)"} className="transition-transform duration-300">
          <rect
            x="52"
            y="54"
            width="96"
            height="72"
            rx="8"
            fill="url(#webWindowGrad)"
            stroke="#60A5FA"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Browser Window Header */}
          <rect x="52" y="54" width="96" height="14" rx="8" fill="#1E3A8A" fillOpacity="0.8" />
          
          {/* Traffic Dots */}
          <circle cx="62" cy="61" r="2.2" fill="#F43F5E" />
          <circle cx="68" cy="61" r="2.2" fill="#FBBF24" />
          <circle cx="74" cy="61" r="2.2" fill="#10B981" />

          {/* Address Bar */}
          <rect x="82" y="58" width="58" height="6" rx="3" fill="#0F172A" fillOpacity="0.8" />

          {/* Central Code Tag / Brackets Symbol < / > */}
          <g transform="translate(100, 94)">
            {/* Left Bracket < */}
            <path
              d="M -18,-10 L -27,0 L -18,10"
              fill="none"
              stroke="url(#codeGlow)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isHovered ? "animate-pulse" : ""}
            />

            {/* Slash / */}
            <line
              x1="-4"
              y1="12"
              x2="4"
              y2="-12"
              stroke="#38BDF8"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Right Bracket > */}
            <path
              d="M 18,-10 L 27,0 L 18,10"
              fill="none"
              stroke="url(#codeGlow)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isHovered ? "animate-pulse" : ""}
            />
          </g>

          {/* Code lines simulation */}
          <rect x="62" y="112" width="28" height="3" rx="1.5" fill="#38BDF8" fillOpacity="0.5" />
          <rect x="94" y="112" width="44" height="3" rx="1.5" fill="#60A5FA" fillOpacity="0.4" />
        </g>

        {/* Speed Node */}
        <g 
          transform="translate(154, 76)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115' : ''}`}
        >
          <circle cx="0" cy="0" r="13" fill="#0A2540" stroke="#38BDF8" strokeWidth="1.5" />
          <polygon points="-2,-6 3,-6 -1,0 4,0 -3,7 -1,1 -4,1" fill="#38BDF8" />
        </g>

        {/* Clean PHP 8.3 & React Node */}
        <g 
          transform="translate(46, 126)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115' : ''}`}
        >
          <circle cx="0" cy="0" r="12" fill="#1E3A8A" stroke="#60A5FA" strokeWidth="1.5" />
          <rect x="-4" y="-4" width="3" height="3" rx="0.5" fill="#93C5FD" />
          <rect x="1" y="-4" width="3" height="3" rx="0.5" fill="#93C5FD" />
          <rect x="-4" y="1" width="3" height="3" rx="0.5" fill="#93C5FD" />
          <rect x="1" y="1" width="3" height="3" rx="0.5" fill="#38BDF8" />
        </g>

        {/* Bottom Sparkle/Anchor */}
        <g transform="translate(100, 168)">
          <circle cx="0" cy="0" r="4" fill="#38BDF8" className={isHovered ? "animate-ping" : ""} />
        </g>
      </svg>
    </div>
  );
};

export const EcommerceServiceSvg = ({ isHovered = false }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[160px] max-h-[160px] transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
          filter: isHovered ? 'drop-shadow(0 12px 24px rgba(15, 82, 186, 0.45))' : 'drop-shadow(0 6px 12px rgba(15, 82, 186, 0.25))'
        }}
      >
        <defs>
          <linearGradient id="ecomBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0F52BA" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="ecomGoldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>

          <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0F52BA" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Ambient Outer Halo */}
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke="#0F52BA"
          strokeWidth="1.5"
          strokeDasharray={isHovered ? "6 4" : "4 6"}
          className={`opacity-40 transition-all duration-700 ${isHovered ? 'animate-spin' : ''}`}
          style={{ transformOrigin: 'center center', animationDuration: '22s' }}
        />

        {/* Outer Rounded Diamond / Shield Base */}
        <polygon
          points="100,24 168,60 168,140 100,176 32,140 32,60"
          fill="url(#ecomBgGrad)"
          stroke="#60A5FA"
          strokeWidth={isHovered ? "2.5" : "1.5"}
          strokeOpacity={isHovered ? "0.9" : "0.5"}
          className="transition-all duration-300"
        />

        {/* High-Tech Shopping Bag / Cart Architecture */}
        <g transform={isHovered ? "translate(0, -2)" : "translate(0, 0)"} className="transition-transform duration-300">
          
          {/* Shopping Bag Handles */}
          <path
            d="M 82,72 C 82,54 118,54 118,72"
            fill="none"
            stroke="#38BDF8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Shopping Bag Main Body */}
          <polygon
            points="68,72 132,72 124,136 76,136"
            fill="#0F172A"
            fillOpacity="0.85"
            stroke="#38BDF8"
            strokeWidth="2"
          />

          {/* Bag Front Gradient Accent Panel */}
          <polygon
            points="74,80 126,80 120,128 80,128"
            fill="url(#ecomBgGrad)"
            fillOpacity="0.6"
          />

          {/* Currency / Secure Shield Node in Center of Bag */}
          <g transform="translate(100, 102)">
            <circle cx="0" cy="0" r="14" fill="#0A2540" stroke="#FBBF24" strokeWidth="1.5" />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="#FBBF24"
              fontSize="14"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              ₹
            </text>
          </g>
        </g>

        {/* Floating 1-Click Payment Card Pill */}
        <g 
          transform="translate(142, 68)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115 rotate-3' : ''}`}
        >
          <rect
            x="-20"
            y="-12"
            width="40"
            height="24"
            rx="5"
            fill="url(#cardGrad)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <rect x="-14" y="-6" width="7" height="6" rx="1.5" fill="#FDE047" />
          <line x1="-14" y1="4" x2="6" y2="4" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" />
          <circle cx="12" cy="-4" r="3" fill="#FFFFFF" fillOpacity="0.5" />
        </g>

        {/* Instant Checkout Verified Badge */}
        <g 
          transform="translate(56, 134)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115' : ''}`}
        >
          <circle cx="0" cy="0" r="12" fill="#065F46" stroke="#34D399" strokeWidth="1.5" />
          <path
            d="M -5,-1 L -1,3 L 5,-3"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Growth Arrow Satellite */}
        <g transform="translate(100, 168)">
          <circle cx="0" cy="0" r="4" fill="#FBBF24" className={isHovered ? "animate-ping" : ""} />
        </g>
      </svg>
    </div>
  );
};

export const SeoServiceSvg = ({ isHovered = false }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full max-w-[160px] max-h-[160px] transition-transform duration-500 ease-out"
        style={{
          transform: isHovered ? 'scale(1.06) translateY(-2px)' : 'scale(1)',
          filter: isHovered ? 'drop-shadow(0 12px 24px rgba(15, 82, 186, 0.45))' : 'drop-shadow(0 6px 12px rgba(15, 82, 186, 0.25))'
        }}
      >
        <defs>
          <linearGradient id="seoBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0F52BA" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#064E3B" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="seoGreenGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#34D399" />
          </linearGradient>
        </defs>

        {/* Ambient Outer Halo */}
        <circle
          cx="100"
          cy="100"
          r="84"
          fill="none"
          stroke="#0F52BA"
          strokeWidth="1.5"
          strokeDasharray={isHovered ? "6 4" : "4 6"}
          className={`opacity-40 transition-all duration-700 ${isHovered ? 'animate-spin' : ''}`}
          style={{ transformOrigin: 'center center', animationDuration: '20s' }}
        />

        {/* Outer Shield Base */}
        <polygon
          points="100,24 168,60 168,140 100,176 32,140 32,60"
          fill="url(#seoBgGrad)"
          stroke="#34D399"
          strokeWidth={isHovered ? "2.5" : "1.5"}
          strokeOpacity={isHovered ? "0.9" : "0.5"}
          className="transition-all duration-300"
        />

        {/* Ascending SEO Bar Chart & Trend Curve */}
        <g transform={isHovered ? "translate(0, -2)" : "translate(0, 0)"} className="transition-transform duration-300">
          
          {/* Chart Grid Lines */}
          <line x1="56" y1="126" x2="144" y2="126" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="56" y1="100" x2="144" y2="100" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.2" />
          <line x1="56" y1="74" x2="144" y2="74" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray="3 3" strokeOpacity="0.2" />

          {/* Bar 1 */}
          <rect x="62" y="106" width="12" height="20" rx="2.5" fill="#1E3A8A" stroke="#38BDF8" strokeWidth="1" />
          {/* Bar 2 */}
          <rect x="80" y="92" width="12" height="34" rx="2.5" fill="#0F52BA" stroke="#60A5FA" strokeWidth="1" />
          {/* Bar 3 */}
          <rect x="98" y="78" width="12" height="48" rx="2.5" fill="#0D9488" stroke="#34D399" strokeWidth="1" />
          {/* Bar 4 (Top Rank Winner) */}
          <rect x="116" y="60" width="14" height="66" rx="3" fill="url(#seoGreenGlow)" stroke="#A7F3D0" strokeWidth="1.5" />

          {/* Dynamic Ascending Trendline Arrow */}
          <path
            d="M 60,114 Q 90,92 124,56"
            fill="none"
            stroke="#FDE047"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={isHovered ? "animate-pulse" : ""}
          />
          <polygon points="120,54 132,53 128,65" fill="#FDE047" />

          {/* Trend Data Nodes */}
          <circle cx="68" cy="106" r="2.5" fill="#38BDF8" />
          <circle cx="86" cy="92" r="2.5" fill="#60A5FA" />
          <circle cx="104" cy="78" r="2.5" fill="#34D399" />
          <circle cx="123" cy="60" r="3.5" fill="#FDE047" />
        </g>

        {/* Floating Magnifier Node */}
        <g 
          transform="translate(148, 116)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115' : ''}`}
        >
          <circle cx="0" cy="0" r="14" fill="#0A2540" stroke="#38BDF8" strokeWidth="1.5" />
          <circle cx="-2" cy="-2" r="5" fill="none" stroke="#38BDF8" strokeWidth="1.8" />
          <line x1="2" y1="2" x2="6" y2="6" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Top Rank #1 Trophy Pill */}
        <g 
          transform="translate(56, 68)"
          className={`transition-transform duration-500 ${isHovered ? 'scale-115' : ''}`}
        >
          <rect x="-16" y="-9" width="32" height="18" rx="4" fill="#064E3B" stroke="#34D399" strokeWidth="1.2" />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#34D399"
            fontSize="10"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            #1 SERP
          </text>
        </g>

        {/* Bottom Sparkle Indicator */}
        <g transform="translate(100, 168)">
          <circle cx="0" cy="0" r="4" fill="#34D399" className={isHovered ? "animate-ping" : ""} />
        </g>
      </svg>
    </div>
  );
};

export const BrandedServiceIcons = ({ 
  onSelectService,
  onOpenQuote
}) => {
  const [hoveredService, setHoveredService] = useState('web');

  const SERVICES = [
    {
      id: 'web',
      title: 'Web Engineering',
      category: 'Native WordPress & Web App',
      tag: '0.7s LCP Speed',
      description: 'Zero-bloat Gutenberg blocks, custom PHP 8.3+, and modular architecture for maximum conversions.',
      badgeColor: 'bg-blue-900/60 text-cyan-300 border-blue-600/60',
      accentColor: 'from-[#0F52BA] to-blue-500',
      stat: '99/100 Mobile Score',
      renderSvg: (isHovered) => <WebServiceSvg isHovered={isHovered} />,
      features: ['Custom Gutenberg Blocks', 'Sub-second Load Times', 'WCAG AA Compliance']
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Growth',
      category: 'WooCommerce & Storefronts',
      tag: '1-Click Checkout',
      description: 'Frictionless Razorpay/UPI gateways, abandoned cart recovery, and high-velocity mobile checkouts.',
      badgeColor: 'bg-amber-900/60 text-amber-300 border-amber-600/60',
      accentColor: 'from-amber-600 to-orange-500',
      stat: '+240% Sales Velocity',
      renderSvg: (isHovered) => <EcommerceServiceSvg isHovered={isHovered} />,
      features: ['1-Click UPI & Card Checkout', 'Smart Cart Recovery', 'Inventory & ERP Sync']
    },
    {
      id: 'seo',
      title: 'SEO & Entity Search',
      category: 'Organic Traffic & Google SERP',
      tag: '#1 SERP Ranking',
      description: 'Structured JSON-LD schemas, automated entity indexing, and Core Web Vitals optimization.',
      badgeColor: 'bg-emerald-900/60 text-emerald-300 border-emerald-600/60',
      accentColor: 'from-emerald-600 to-teal-500',
      stat: '3.4x Inbound Traffic',
      renderSvg: (isHovered) => <SeoServiceSvg isHovered={isHovered} />,
      features: ['JSON-LD Rich Snippets', 'Local & Global Citations', 'Core Web Vitals Pass']
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Outer Shell with Cyber Royal Blue Aesthetics */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden">
        
        {/* Luminous Brand Ambient Lights */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0F52BA]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />

        {/* Infographic Header with Interactive Micro-Pills */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#0F52BA] to-blue-700 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
              <Sparkles className="w-4 h-4 text-cyan-300" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                CORE CAPABILITIES INFOGRAPHIC
              </div>
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-tight">
                Branded Service Architecture
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-blue-950/80 text-cyan-300 border border-blue-800/80 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping mr-0.5" />
            <span>Interactive Vector Set</span>
          </div>
        </div>

        {/* 3 Interactive Branded SVG Service Cards with Micro-Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
          {SERVICES.map((service) => {
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setHoveredService(service.id);
                  if (onSelectService) onSelectService(service.id);
                }}
                className={`relative group rounded-2xl p-3.5 border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
                  isHovered
                    ? 'bg-slate-900/95 border-blue-400/90 shadow-xl shadow-blue-500/20 translate-y-[-3px] ring-1 ring-blue-400/40'
                    : 'bg-slate-950/75 border-slate-800/90 hover:border-slate-700 hover:bg-slate-900/70'
                }`}
              >
                {/* Active Glowing Dot Indicator */}
                <div className={`absolute top-2.5 right-2.5 w-2 h-2 rounded-full transition-all duration-300 ${
                  isHovered ? 'bg-cyan-400 ring-4 ring-cyan-400/20 shadow-xs' : 'bg-slate-700'
                }`} />

                {/* Branded Vector SVG Container with Dynamic Hover Micro-animations */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center my-1 relative">
                  {service.renderSvg(isHovered)}
                </div>

                {/* Service Metadata */}
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md border mb-1.5 ${service.badgeColor}`}>
                  {service.tag}
                </span>

                <h5 className="font-heading font-bold text-xs sm:text-sm text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h5>

                <p className="text-[10px] text-slate-400 font-sans leading-tight">
                  {service.category}
                </p>
              </div>
            );
          })}
        </div>

        {/* Dynamic Detail Inspector for Currently Selected/Hovered Service */}
        {(() => {
          const current = SERVICES.find(s => s.id === hoveredService) || SERVICES[0];
          return (
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800/90 p-4 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-bold text-white font-heading">
                    {current.title} Specifications
                  </span>
                </div>
                <span className="text-[11px] font-mono font-extrabold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded">
                  {current.stat}
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {current.description}
              </p>

              {/* Verified Feature Checklist */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {current.features.map((feat, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-flex items-center gap-1 text-[10px] font-medium bg-slate-900/90 text-slate-300 border border-slate-800 px-2 py-0.5 rounded-md"
                  >
                    <Check className="w-3 h-3 text-cyan-400" />
                    <span>{feat}</span>
                  </span>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Bottom Banner Conversion Link */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span className="text-[11px] font-medium">Bespoke #0F52BA & #1E3A8A Vector Engine</span>
          </div>

          {onOpenQuote && (
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 bg-[#0F52BA] hover:bg-blue-600 text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
