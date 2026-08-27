import React, { useState, useEffect } from 'react';
import { 
  Laptop, 
  Zap, 
  ShoppingCart, 
  Search, 
  ShieldCheck, 
  Palette, 
  Sparkles
} from 'lucide-react';

const SERVICE_NODES = [
  {
    id: 'wordpress',
    title: 'Native WordPress Engine',
    category: 'Core Architecture',
    icon: Laptop,
    badge: 'Zero Bloat',
    metric: '3x Faster',
    color: '#0F52BA',
    glowColor: 'rgba(15, 82, 186, 0.4)',
    x: 18,
    y: 20,
    tags: ['Gutenberg', 'FSE Blocks', 'Clean PHP 8.3'],
    description: 'Custom block architecture without heavy third-party page builders.'
  },
  {
    id: 'speed',
    title: 'Core Web Vitals Pass',
    category: 'Speed Engine',
    icon: Zap,
    badge: '0.8s LCP',
    metric: '99/100',
    color: '#10B981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    x: 82,
    y: 20,
    tags: ['Brotli', 'Critical CSS', 'Redis Cache'],
    description: 'Sub-second LCP and 100/100 Lighthouse benchmark scores.'
  },
  {
    id: 'ecommerce',
    title: 'High-Converting E-Commerce',
    category: 'Revenue Stack',
    icon: ShoppingCart,
    badge: '1-Click Checkout',
    metric: '+240% Sales',
    color: '#F59E0B',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    x: 85,
    y: 75,
    tags: ['Razorpay', 'UPI Direct', 'Cart Recovery'],
    description: 'Frictionless checkout pipelines engineered for maximum conversion.'
  },
  {
    id: 'seo',
    title: 'JSON-LD Schema & SEO',
    category: 'Organic Dominance',
    icon: Search,
    badge: 'Rich Snippets',
    metric: 'Top #1 Rank',
    color: '#38BDF8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    x: 15,
    y: 75,
    tags: ['Structured Data', 'Sitemap XML', 'Clean URLs'],
    description: 'Deep semantic indexing and local business structured entity markup.'
  },
  {
    id: 'ui-design',
    title: 'Bespoke UI Design System',
    category: 'Brand Craft',
    icon: Palette,
    badge: '100% Custom',
    metric: 'WCAG AA',
    color: '#818CF8',
    glowColor: 'rgba(129, 140, 248, 0.4)',
    x: 50,
    y: 10,
    tags: ['8pt Grid', 'Tailwind', 'Mobile-First'],
    description: 'Pixel-perfect typography, contrast compliance, and responsive layouts.'
  },
  {
    id: 'security',
    title: 'Shielded Cloud & Backups',
    category: 'Enterprise Uptime',
    icon: ShieldCheck,
    badge: '99.9% Uptime',
    metric: 'Daily Cloud',
    color: '#06B6D4',
    glowColor: 'rgba(6, 182, 212, 0.4)',
    x: 50,
    y: 88,
    tags: ['WAF Firewall', 'SSL Free', 'Offsite Snapshot'],
    description: 'Proactive malware scanning, daily snapshots, and SSL encryption.'
  }
];

export const ServiceArchitectureGraphic = () => {
  const [activeNodeId, setActiveNodeId] = useState('wordpress');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // Auto-cycle through nodes every 3.5s if not manually hovered
  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveNodeId((prev) => {
        const currentIndex = SERVICE_NODES.findIndex((n) => n.id === prev);
        const nextIndex = (currentIndex + 1) % SERVICE_NODES.length;
        return SERVICE_NODES[nextIndex].id;
      });
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const activeNode = SERVICE_NODES.find((n) => n.id === activeNodeId) || SERVICE_NODES[0];

  return (
    <div 
      className="relative w-full max-w-xl mx-auto select-none"
      onMouseEnter={() => setIsAutoRotating(false)}
      onMouseLeave={() => setIsAutoRotating(true)}
    >
      {/* Outer Glow & Glass Container */}
      <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-slate-700/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl overflow-hidden group">
        
        {/* Subtle Ambient Radial Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#0F52BA]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-10 right-10 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header inside graphic */}
        <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-300">
              Vestal Ecosystem Engine
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
            <span>Hover to Inspect Node</span>
          </div>
        </div>

        {/* SVG Diagram Canvas */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] min-h-[300px]">
          
          <svg 
            className="w-full h-full absolute inset-0 overflow-visible" 
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="lineGradCore" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0F52BA" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="1" />
                <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.8" />
              </linearGradient>

              <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
              </linearGradient>

              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#0F52BA" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#0B1120" stopOpacity="0" />
              </radialGradient>

              <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Central Orbital Rings */}
            <circle 
              cx="200" 
              cy="150" 
              r="115" 
              stroke="#1E293B" 
              strokeWidth="1.5" 
              strokeDasharray="4 6" 
              className="animate-spin"
              style={{ animationDuration: '60s', transformOrigin: '200px 150px' }}
            />
            <circle 
              cx="200" 
              cy="150" 
              r="75" 
              stroke="#0F52BA" 
              strokeOpacity="0.25" 
              strokeWidth="1" 
              strokeDasharray="6 6"
              className="animate-spin"
              style={{ animationDuration: '40s', animationDirection: 'reverse', transformOrigin: '200px 150px' }}
            />

            {/* Connecting Lines */}
            <path
              d="M 200 150 Q 130 110 75 60"
              stroke={activeNodeId === 'wordpress' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'wordpress' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'wordpress' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'wordpress' ? 'url(#svgGlow)' : undefined}
            />

            <path
              d="M 200 150 Q 270 110 325 60"
              stroke={activeNodeId === 'speed' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'speed' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'speed' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'speed' ? 'url(#svgGlow)' : undefined}
            />

            <path
              d="M 200 150 L 200 35"
              stroke={activeNodeId === 'ui-design' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'ui-design' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'ui-design' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'ui-design' ? 'url(#svgGlow)' : undefined}
            />

            <path
              d="M 200 150 Q 275 190 335 225"
              stroke={activeNodeId === 'ecommerce' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'ecommerce' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'ecommerce' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'ecommerce' ? 'url(#svgGlow)' : undefined}
            />

            <path
              d="M 200 150 Q 125 190 65 225"
              stroke={activeNodeId === 'seo' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'seo' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'seo' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'seo' ? 'url(#svgGlow)' : undefined}
            />

            <path
              d="M 200 150 L 200 265"
              stroke={activeNodeId === 'security' ? 'url(#activeLineGrad)' : '#334155'}
              strokeWidth={activeNodeId === 'security' ? '2.5' : '1.2'}
              strokeDasharray={activeNodeId === 'security' ? 'none' : '4 4'}
              className="transition-all duration-300"
              filter={activeNodeId === 'security' ? 'url(#svgGlow)' : undefined}
            />

            {/* Animated Data Stream Particles */}
            <circle cx="200" cy="150" r="3" fill="#38BDF8" className="animate-ping" />
            <circle cx="200" cy="150" r="4" fill="#0F52BA" />

            {/* Center Hub Halo */}
            <circle cx="200" cy="150" r="44" fill="url(#centerGlow)" />
            <circle cx="200" cy="150" r="38" fill="#0B1120" stroke="#0F52BA" strokeWidth="2" />
            <circle cx="200" cy="150" r="34" fill="#0F172A" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
          </svg>

          {/* Central Core Hub Interactive Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center pointer-events-none">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#0F52BA] to-[#1E3A8A] border-2 border-cyan-400/80 shadow-lg shadow-blue-500/40 flex flex-col items-center justify-center text-white">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 animate-pulse" />
              <span className="font-heading font-black text-[9px] sm:text-[10px] tracking-wider text-white mt-0.5">
                VESTAL
              </span>
            </div>
            <div className="mt-1 bg-slate-900/90 border border-slate-700 text-[9px] font-mono font-bold text-cyan-300 px-2 py-0.5 rounded-full shadow-xs">
              CORE HUB
            </div>
          </div>

          {/* 6 Connected Service Node Cards positioned around Core */}

          {/* Node 1: WordPress (Top-Left) */}
          <button
            onClick={() => setActiveNodeId('wordpress')}
            onMouseEnter={() => setActiveNodeId('wordpress')}
            className={`absolute top-[4%] left-[2%] z-30 transition-all duration-300 p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer ${
              activeNodeId === 'wordpress'
                ? 'bg-blue-950/95 border-blue-400 shadow-lg shadow-blue-500/30 scale-108 ring-2 ring-blue-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">WordPress</div>
                <div className="text-[9px] text-cyan-300 font-mono">Gutenberg Native</div>
              </div>
            </div>
          </button>

          {/* Node 2: Speed / Core Web Vitals (Top-Right) */}
          <button
            onClick={() => setActiveNodeId('speed')}
            onMouseEnter={() => setActiveNodeId('speed')}
            className={`absolute top-[4%] right-[2%] z-30 transition-all duration-300 p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer ${
              activeNodeId === 'speed'
                ? 'bg-emerald-950/95 border-emerald-400 shadow-lg shadow-emerald-500/30 scale-108 ring-2 ring-emerald-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">PageSpeed</div>
                <div className="text-[9px] text-emerald-400 font-mono">99+ Lighthouse</div>
              </div>
            </div>
          </button>

          {/* Node 3: UI Design (Top-Center) */}
          <button
            onClick={() => setActiveNodeId('ui-design')}
            onMouseEnter={() => setActiveNodeId('ui-design')}
            className={`absolute -top-[1%] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 px-3 py-1.5 rounded-xl border text-center cursor-pointer ${
              activeNodeId === 'ui-design'
                ? 'bg-indigo-950/95 border-indigo-400 shadow-lg shadow-indigo-500/30 scale-108 ring-2 ring-indigo-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-[11px] font-bold text-white">Custom UI / UX</span>
            </div>
          </button>

          {/* Node 4: SEO Schema (Bottom-Left) */}
          <button
            onClick={() => setActiveNodeId('seo')}
            onMouseEnter={() => setActiveNodeId('seo')}
            className={`absolute bottom-[4%] left-[2%] z-30 transition-all duration-300 p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer ${
              activeNodeId === 'seo'
                ? 'bg-cyan-950/95 border-cyan-400 shadow-lg shadow-cyan-500/30 scale-108 ring-2 ring-cyan-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shrink-0">
                <Search className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">SEO Schema</div>
                <div className="text-[9px] text-cyan-300 font-mono">Google Indexing</div>
              </div>
            </div>
          </button>

          {/* Node 5: E-Commerce (Bottom-Right) */}
          <button
            onClick={() => setActiveNodeId('ecommerce')}
            onMouseEnter={() => setActiveNodeId('ecommerce')}
            className={`absolute bottom-[4%] right-[2%] z-30 transition-all duration-300 p-2 sm:p-2.5 rounded-xl border text-left cursor-pointer ${
              activeNodeId === 'ecommerce'
                ? 'bg-amber-950/95 border-amber-400 shadow-lg shadow-amber-500/30 scale-108 ring-2 ring-amber-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                <ShoppingCart className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] sm:text-xs font-bold text-white leading-tight">E-Commerce</div>
                <div className="text-[9px] text-amber-400 font-mono">1-Click UPI/Cards</div>
              </div>
            </div>
          </button>

          {/* Node 6: Cloud Security (Bottom-Center) */}
          <button
            onClick={() => setActiveNodeId('security')}
            onMouseEnter={() => setActiveNodeId('security')}
            className={`absolute -bottom-[1%] left-1/2 -translate-x-1/2 z-30 transition-all duration-300 px-3 py-1.5 rounded-xl border text-center cursor-pointer ${
              activeNodeId === 'security'
                ? 'bg-sky-950/95 border-sky-400 shadow-lg shadow-sky-500/30 scale-108 ring-2 ring-sky-400/40'
                : 'bg-slate-900/85 border-slate-700/80 hover:border-slate-500 hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[11px] font-bold text-white">99.9% Uptime & WAF</span>
            </div>
          </button>

        </div>

        {/* Dynamic Detail Card for Active Inspected Node */}
        <div className="mt-4 pt-3.5 border-t border-slate-800/80 bg-slate-950/70 rounded-2xl p-3.5 border border-slate-800/90 transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                  {activeNode.category}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400">
                  {activeNode.metric}
                </span>
              </div>
              <h5 className="font-heading font-bold text-sm text-white">
                {activeNode.title}
              </h5>
              <p className="text-xs text-slate-300 line-clamp-1">
                {activeNode.description}
              </p>
            </div>

            {/* Micro Tags */}
            <div className="flex flex-wrap items-center gap-1 shrink-0">
              {activeNode.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-medium bg-slate-900 border border-slate-700/80 text-slate-300 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
