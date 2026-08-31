import ecommerceImage from '../image/E-Commerce Solutions.webp';
import websitedeveloment from '../image/Website Development.webp';
import seoImage from '../image/SEO Marketing.png';
import socialMediaImage from '../image/SMM.webp';
import PageSpeedOptimization from '../image/Page Speed Optimization.webp';
import contentWriting from '../image/content Writing.jpg';
import maintenanceImage from '../image/Website Maintenance.jpg';
import hostingImage from '../image/Web Hosting.jpg';
import featureimage from '../image/banner section.jpg';

export const AGENCY_INFO = {
  name: "Vestal Web Solutions",
  tagline: "Web Design, WordPress & SEO Services for Business Growth",
  featureImage: featureimage,
  description: "Vestal Web Solutions provides professional web design, WordPress development, e-commerce, and SEO services to help businesses improve Google rankings, attract more customers, and grow online.",
  email: "info.vestalws@gmail.com",
  phone: "+91 75501 56797",
  whatsapp: "+91 75501 56797",
  location: "India • Serving Global Clients",
  hours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  stats: [
    { value: "100%", label: "Client Focus", sublabel: "Custom tailored solutions" },
    { value: "< 1.0s", label: "Page Load Speed", sublabel: "Core Web Vitals passed" },
    { value: "50+", label: "Projects Delivered", sublabel: "B2B, retail & services" },
    { value: "99.9%", label: "Uptime & SLA", sublabel: "Secure cloud hosting" }
  ]
};

export const TRUST_CLIENTS = [
  {
    id: "wings-womens",
    name: "Wings Womens",
    category: "Women's Fashion & Lifestyle",
    shortTag: "Fashion & Lifestyle",
    logoBadge: "WW",
    logoType: "brand",
    primaryColor: "#E11D48",
    secondaryColor: "#7C3AED",
    accentBg: "from-rose-50 to-purple-50",
    website: "wingswomens.com"
  },
  {
    id: "avv-electrical",
    name: "AVV Electrical",
    category: "Electrical & Engineering Systems",
    shortTag: "Industrial & Electrical",
    logoBadge: "AVV",
    logoType: "power",
    primaryColor: "#0F52BA",
    secondaryColor: "#D97706",
    accentBg: "from-blue-50 to-amber-50",
    website: "avvelectrical.com",
    imageUrl: "http://vestal-technologies.local/wp-content/uploads/2026/08/AVV-Electrical.png"
  },
  {
    id: "chennai-chemicals",
    name: "Chennai Chemicals",
    category: "Industrial Chemicals & Processing",
    shortTag: "Industrial Chemicals",
    logoBadge: "CC",
    logoType: "flask",
    primaryColor: "#0D9488",
    secondaryColor: "#059669",
    accentBg: "from-teal-50 to-emerald-50",
    website: "chennaichemicals.com"
  },
  {
    id: "cm-packaging",
    name: "CM Packaging Industry",
    category: "Packaging & Corrugated Solutions",
    shortTag: "Packaging Solutions",
    logoBadge: "CMP",
    logoType: "package",
    primaryColor: "#EA580C",
    secondaryColor: "#C2410C",
    accentBg: "from-orange-50 to-amber-50",
    website: "cmpackaging.com"
  },
  {
    id: "amaat",
    name: "Amaat",
    category: "Fashion & E-Commerce",
    shortTag: "E-Commerce & Retail",
    logoBadge: "AMT",
    logoType: "sparkle",
    primaryColor: "#0F52BA",
    secondaryColor: "#4338CA",
    accentBg: "from-blue-50 to-indigo-50",
    website: "amaat.com"
  },
  {
    id: "pp-vac",
    name: "PP-Vac",
    category: "Vacuum Engineering & Systems",
    shortTag: "Vacuum Engineering",
    logoBadge: "PPV",
    logoType: "vortex",
    primaryColor: "#1E3A8A",
    secondaryColor: "#0369A1",
    accentBg: "from-slate-100 to-blue-50",
    website: "ppvac.com"
  },
  {
    id: "lario",
    name: "Lario",
    category: "Luxury Architecture & Interiors",
    shortTag: "Architecture & Decor",
    logoBadge: "LRO",
    logoType: "arch",
    primaryColor: "#B45309",
    secondaryColor: "#334155",
    accentBg: "from-amber-50 to-stone-50",
    website: "lario.com"
  }
];

export const SERVICES_DATA = [
  {
    id: "web-dev",
    number: "01",
    title: "Website Development",
    shortTitle: "Website Development",
    description: "We create modern, responsive, and high-performance websites tailored to your business goals. From design to development, we build websites that look professional and generate results.",
   image: websitedeveloment,
    deliverables: [
      "We create modern, responsive, and high-performance websites tailored to your business goals. From design to development, we build websites that look professional and generate results."
    ],
    technologies: ["WordPress", "Custom PHP", "Tailwind CSS"],
    businessImpact: "Builds instant trust and turns visitors into qualified inquiries.",
    category: "development"
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-Commerce Solutions",
    shortTitle: "E-Commerce Solutions",
    description: "Build a powerful online store with WooCommerce. We create secure, user-friendly e-commerce websites with product management, payments, shipping, and conversion-focused designs.",
    image: ecommerceImage,
    deliverables: [
      "Build a powerful online store with WooCommerce. We create secure, user-friendly e-commerce websites with product management, payments, shipping, and conversion-focused designs."
    ],
    technologies: ["WooCommerce", "Razorpay / UPI", "Stripe"],
    businessImpact: "Secure, scalable, and easy to manage online commerce.",
    category: "development"
  },
  {
    id: "seo",
    number: "03",
    title: "SEO Marketing",
    shortTitle: "SEO Marketing",
    description: "Improve your Google visibility and attract more organic customers. Our SEO strategies focus on keyword optimization, technical SEO, content, and long-term search growth.",
    image: seoImage,
    deliverables: [
      "Improve your Google visibility and attract more organic customers. Our SEO strategies focus on keyword optimization, technical SEO, content, and long-term search growth."
    ],
    technologies: ["Google Search Console", "Technical SEO", "RankMath"],
    businessImpact: "Reach more customers through search.",
    category: "marketing"
  },
  {
    id: "social-media",
    number: "04",
    title: "Social Media Marketing",
    shortTitle: "Social Media Marketing",
    description: "Grow your brand across Instagram, Facebook, and other social platforms. We create engaging content and marketing strategies designed to increase reach, engagement, and brand awareness.",
    image: socialMediaImage,
    deliverables: [
      "Grow your brand across Instagram, Facebook, and other social platforms. We create engaging content and marketing strategies designed to increase reach, engagement, and brand awareness."
    ],
    technologies: ["Meta Ads", "Campaign Strategy", "Audience Targeting"],
    businessImpact: "Create content that drives interaction and growth.",
    category: "marketing"
  },
  {
    id: "content-writing",
    number: "05",
    title: "Content Writing",
    shortTitle: "Content Writing",
    description: "Get clear, engaging, and SEO-friendly content for your website and digital marketing. We create content that communicates your brand effectively and encourages visitors to take action.",
    image: contentWriting,
    deliverables: [
      "Get clear, engaging, and SEO-friendly content for your website and digital marketing. We create content that communicates your brand effectively and encourages visitors to take action."
    ],
    technologies: ["Copywriting", "SEO Content", "Brand Voice"],
    businessImpact: "SEO-friendly content tailored to your brand.",
    category: "marketing"
  },
  {
    id: "maintenance",
    number: "06",
    title: "Website Maintenance",
    shortTitle: "Website Maintenance",
    description: "Keep your website secure, updated, and running smoothly with ongoing maintenance. We handle updates, backups, security, fixes, and technical support.",
    image: maintenanceImage,
    deliverables: [
      "Keep your website secure, updated, and running smoothly with ongoing maintenance. We handle updates, backups, security, fixes, and technical support."
    ],
    technologies: ["Core & Plugin Updates", "Cloud Backups", "Security Monitoring"],
    businessImpact: "Get reliable support whenever you need it.",
    category: "support"
  },
  {
    id: "hosting",
    number: "07",
    title: "Web Hosting",
    shortTitle: "Web Hosting",
    description: "Get fast, secure, and reliable hosting for your website. Our hosting solutions are optimized for performance, stability, security, and smooth website operation.",
    image: hostingImage,
    deliverables: [
      "Get fast, secure, and reliable hosting for your website. Our hosting solutions are optimized for performance, stability, security, and smooth website operation."
    ],
    technologies: ["NVMe Cloud", "SSL Encryption", "99.9% Uptime SLA"],
    businessImpact: "Keep your website online with confidence.",
    category: "performance"
  },
  {
    id: "speed-optimization",
    number: "08",
    title: "Speed Optimization",
    shortTitle: "Speed Optimization",
    description: "Improve website loading speed and overall performance. We optimize images, code, caching, scripts, and Core Web Vitals to deliver a faster user experience.",
    image: PageSpeedOptimization,
    deliverables: [
      "Improve website loading speed and overall performance. We optimize images, code, caching, scripts, and Core Web Vitals to deliver a faster user experience."
    ],
    technologies: ["PageSpeed 90+", "WebP Compression", "Core Web Vitals"],
    businessImpact: "Improve performance, Core Web Vitals, and conversions.",
    category: "performance"
  }
];



export const PRICING_PACKAGES = [
  // ================= WEB DEVELOPMENT PACKAGES =================
  {
    id: "quickstart",
    name: "QuickStart Web",
    price: 12000,
    priceFormatted: "₹12,000",
    tagline: "Budget Website",
    category: "web",
    billingPeriod: "No Recurring Fees",
    features: [
      "One-page website with essential business information",
      "Fully responsive and mobile-friendly design",
      "SSL certificate for a secure website",
      "On-page SEO optimization",
      "SEO-friendly website structure",
      "WhatsApp integration",
      "Click-to-call integration",
      "Email integration",
      "Social media integration",
      "Google Maps integration",
      "Basic contact form integration",
      "Full website support and maintenance",
     
    ],
    turnaroundTime: "3 – 5 Days",
    recommendedFor: "Landing pages & quick launches"
  },
  {
    id: "small-biz",
    name: "Small Business",
    price: 17500,
    priceFormatted: "₹17,500",
    tagline: "Budget Website",
    category: "web",
    billingPeriod: "No Recurring Fees",
    features: [
     "Up to 5 pages (Home, About, Services, Contact, etc.)",
"Custom website design with branding",
"Fully responsive design (Mobile-friendly)",
"SSL certificate for secure transactions",
"On-page SEO optimization",
"SEO-friendly website structure",
"WhatsApp integration",
"Click-to-call integration",
"Email integration",
"Social media integration",
"Google Maps integration",
"Contact form integration",
"Basic blog setup (Optional)",
"Full website support & maintenance"
    ],
    additionalPageCost: "Additional Pages: ₹3,500 per page",
    turnaroundTime: "7 – 10 Days",
    recommendedFor: "Businesses & Service Providers"
  },
  {
    id: "pro-presence",
    name: "Pro-Presence",
    price: 35000,
    priceFormatted: "₹35,000",
    tagline: "Budget Website",
    category: "web",
    billingPeriod: "No Recurring Fees",
    isPopular: true,
    features: [
      "Up to 10 pages",
"Custom web design tailored to your brand",
"Advanced on-page SEO optimization",
"Mobile-responsive design",
"SSL certificate for secure transactions",
"CMS for easy content updates",
"Blog setup & integration",
"WhatsApp integration",
"Click-to-call integration",
"Email integration",
"Social media integration",
"Google Maps integration",
"Contact form integration",
"Full website support & maintenance"
    ],
    additionalPageCost: "Additional Pages: ₹3,500 per page",
    turnaroundTime: "12 – 15 Days",
    recommendedFor: "Established brands & growing companies"
  },
  {
    id: "elevate-estore",
    name: "Elevate E-Store",
    price: 40000,
    priceFormatted: "₹40,000",
    tagline: "Budget Website",
    category: "web",
    billingPeriod: "No Recurring Fees",
    features: [
      "Online store with payment gateway integration",
"Shopping cart and secure checkout process",
"Up to 20 product pages",
"Order management system",
"Mobile-friendly responsive design",
"SSL certificate for secure transactions",
"Basic on-page SEO setup",
"Google Search Console & Google Analytics setup",
"Easy-to-use CMS",
"WhatsApp integration",
"Click-to-call integration",
"Email integration",
"Social media integration",
"Google Maps integration",
"Contact form integration",
"Full website support & maintenance"
    ],
    turnaroundTime: "15 – 20 Days",
    recommendedFor: "Retail brands & online storefronts"
  },

  // ================= SOCIAL MEDIA & POSTER DESIGN PACKAGES =================
  {
    id: "smm-starter",
    name: "Starter Creative",
    price: 5000,
    priceFormatted: "₹5,000",
    tagline: "Basic Social Media & Poster Design",
    category: "social",
    billingPeriod: "Per Month",
    features: [
      "Custom creative social media posters",
"High-resolution graphics for social media",
"Festival & occasion greeting posters",
"Product & service-based promotional posters",
"Engaging caption writing & copy",
"Brand-focused creative designs",
"Dedicated WhatsApp support",
    ],
    turnaroundTime: "2 to 3 Posts / Week",
    recommendedFor: "Startups & Local Retailers"
  },

  // ================= SEO MARKETING PACKAGES =================
  {
    id: "seo-basic",
    name: "SEO Package",
    price: 8500,
    priceFormatted: "₹8,500",
    tagline: "Starter Search Engine Optimization",
    category: "seo",
    billingPeriod: "Per Month",
    features: [
      
  "Google Business Profile (GMB) Full Optimization",
"Up to 10 Target Local / Core Keywords",
"On-Page SEO: Title, Meta, Heading & Alt Tag Optimization",
"Google Maps & Local Ranking Strategy",
"2–5 SEO-Optimized Blog Contents per Month",
"Keyword-Focused Content Optimization",
"AI-Assisted SEO Content Strategy",
"AI-Powered Keyword & Search Intent Analysis",
"Google Search Console & Performance Monitoring",
"Monthly Keyword Ranking & Traffic Report"

    ],
    turnaroundTime: "Monthly Retainer",
    recommendedFor: "Businesses, clinics & service providers"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description: "Align on target audience, competitor benchmarks, and core business goals.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    details: [],
    timeline: "Days 1–2"
  },
  {
    step: "02",
    title: "Planning",
    description: "Structure sitemap, wireframes, and approved design direction.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    details: [],
    timeline: "Days 3–4"
  },
  {
    step: "03",
    title: "Development",
    description: "Build clean, fast WordPress code with native Gutenberg blocks.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    details: [],
    timeline: "Days 5–10"
  },
  {
    step: "04",
    title: "Testing",
    description: "Audit speed scores, mobile UI, forms, and security safeguards.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    details: [],
    timeline: "Days 11–12"
  },
  {
    step: "05",
    title: "Launch",
    description: "Deploy to live server, index on Google, and hand over CMS access.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    details: [],
    timeline: "Day 13+"
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "ShieldCheck",
    title: "Affordable Solutions",
    description: "Transparent fixed pricing with zero hidden costs or markups."
  },
  {
    icon: "Zap",
    title: "Fast Turnaround",
    description: "Clear delivery milestones from 3-day quickstarts to 15-day stores."
  },
  {
    icon: "LayoutTemplate",
    title: "Customized Designs",
    description: "100% tailor-made designs built around your unique brand identity."
  },
  {
    icon: "Headphones",
    title: "Ongoing Support",
    description: "Direct developer support, updates, and maintenance after launch."
  }
];

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    category: "Timeline & Pricing",
    question: "How long does it take to build a website?",
    answer: "A 1-page QuickStart takes 3–5 days, a 5-page Small Business site takes 7–10 days, and custom Pro or E-Commerce stores take 12–20 days."
  },
  {
    id: "faq-2",
    category: "Timeline & Pricing",
    question: "How much does a website cost?",
    answer: "Packages start at ₹12,000 for QuickStart, ₹17,500 for Small Business (5 pages), ₹35,000 for Pro-Presence (10 pages), and ₹40,000 for full WooCommerce stores."
  },
  {
    id: "faq-3",
    category: "Design & Technology",
    question: "Will my website be mobile-friendly and fast?",
    answer: "Yes. Every website is built mobile-first and tuned for 90+ Google PageSpeed with sub-second loading."
  },
  {
    id: "faq-4",
    category: "Maintenance & Support",
    question: "Do you provide website maintenance?",
    answer: "Yes. We offer continuous care plans with weekly updates, automated daily cloud backups, and 24/7 security monitoring."
  },
  
  {
    id: "faq-5",
    category: "Hosting & Infrastructure",
    question: "Do you provide hosting?",
    answer: "Yes. We offer high-speed NVMe cloud servers with free SSL and 99.9% uptime, or we can deploy directly to your preferred hosting."
  }
];

export const PROJECT_TYPES = [
  "Website Development",
  "WooCommerce & E-Commerce",
  "Search Engine Optimization",
  "Social Media Marketing",
  "Content Writing",
  "Website Maintenance",
  "Web Hosting",
  "Speed Optimization",
  "Other / Custom Requirement"
];
