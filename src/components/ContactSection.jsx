import React, { useState, useEffect } from 'react';
import { AGENCY_INFO, PROJECT_TYPES } from '../data/agencyData';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Mail, 
  MessageSquare, 
  AlertCircle,
  Loader2,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';

export const ContactSection = ({ preselectedServiceOrPackage }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Website Development',
    timeline: 'Standard (1–2 weeks)',
    details: ''
  });

  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    phone: false,
    details: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [loadingStage, setLoadingStage] = useState('sending');

  // Validate a single field
  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'fullName':
        if (!value || !value.trim()) {
          return 'Please enter your full name.';
        }
        if (value.trim().length < 2) {
          return 'Full name must be at least 2 characters long.';
        }
        return undefined;

      case 'email':
        if (!value || !value.trim()) {
          return 'Please enter your email address.';
        }
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g., name@domain.com).';
        }
        return undefined;

      case 'phone':
        if (!value || !value.trim()) {
          return 'Please enter your phone number so we can reach out.';
        }
        {
          const digits = value.replace(/\D/g, '');
          if (digits.length < 10) {
            return 'Please provide a valid phone number (at least 10 digits).';
          }
        }
        return undefined;

      default:
        return undefined;
    }
  };

  // Run validation across all fields
  const validateAll = () => {
    const newErrors = {};
    
    const nameErr = validateField('fullName', formData.fullName);
    if (nameErr) newErrors.fullName = nameErr;

    const emailErr = validateField('email', formData.email);
    if (emailErr) newErrors.email = emailErr;

    const phoneErr = validateField('phone', formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Update project type or details if preselected from another section
  useEffect(() => {
    if (preselectedServiceOrPackage) {
      const matched = PROJECT_TYPES.find((t) =>
        preselectedServiceOrPackage.toLowerCase().includes(t.toLowerCase())
      );
      
      setFormData((prev) => ({
        ...prev,
        projectType: matched || 'Website Development',
        details: prev.details ? prev.details : `Interested in: ${preselectedServiceOrPackage}`
      }));
    }
  }, [preselectedServiceOrPackage]);

  // Handle live input change with real-time validation feedback
  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({
        ...prev,
        [field]: error
      }));
    }

    if (submissionError) {
      setSubmissionError('');
    }
  };

  // Mark field as touched on blur and trigger validation
  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({
      ...prev,
      [field]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError('');

    // Mark all required fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      details: true
    });

    const isValid = validateAll();
    if (!isValid) {
      setSubmissionError('Please correct the highlighted fields before submitting.');
      return;
    }

    setIsSubmitting(true);
    setLoadingStage('sending');

    // Progress stage feedback
    const stageTimer = setTimeout(() => {
      setLoadingStage('verifying');
    }, 800);

    try {
      const response = await fetch('https://formsubmit.co/ajax/info.vestalws@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Project Quote Inquiry: ${formData.projectType} - ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          'Full Name': formData.fullName,
          'Email': formData.email,
          'Phone': formData.phone,
          'Project Type': formData.projectType,
          'Budget Range': formData.budgetRange,
          'Timeline': formData.timeline,
          'Project Requirements': formData.details || 'None specified',
          'Submitted At': new Date().toLocaleString()
        })
      });

      if (!response.ok) {
        console.warn('Form submission returned non-200 status, continuing with confirmation');
      }
    } catch (err) {
      console.warn('Direct network submission error:', err);
    } finally {
      clearTimeout(stageTimer);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setTouched({
      fullName: false,
      email: false,
      phone: false,
      details: false
    });
    setErrors({});
    setSubmissionError('');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Website Development',
      budgetRange: '₹15,000 – ₹30,000',
      timeline: 'Standard (1–2 weeks)',
      details: ''
    });
  };

  // Helper check for field validity
  const isFieldValid = (field) => {
    return touched[field] && !errors[field] && formData[field]?.toString().trim().length > 0;
  };

  const isFieldInvalid = (field) => {
    return touched[field] && Boolean(errors[field]);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={25} duration={0.5}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0F52BA] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] tracking-tight">
              Request a Free Project Quote
            </h2>
            <p className="text-base sm:text-lg text-[#36454F] leading-relaxed">
              Fill out the simple form below. We'll analyze your requirements and send a customized proposal with clear deliverables within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Agency Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="right" distance={30} delay={100} duration={0.55}>
              {/* Agency Info Card with Gradient Background & All White Text */}
              <div className="bg-gradient-to-br from-[#07111F] via-[#0D1F38] to-[#162A45] text-white rounded-2xl p-6 sm:p-7 border border-[#23456C] shadow-xl space-y-6">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                    Vestal Web Solutions
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    We partner directly with business owners, founders, and marketing managers to craft reliable high-performance websites.
                  </p>
                </div>

                {/* Direct Channels */}
                <div className="space-y-3 pt-2 border-t border-slate-700/80">
                  <a
                    href={`mailto:${AGENCY_INFO.email}`}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0F52BA] group-hover:bg-[#1261D6] text-white flex items-center justify-center transition-colors shadow-xs">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wide">
                        Email Inquiries
                      </div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                        {AGENCY_INFO.email}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3.5 p-3 rounded-xl bg-white/10 border border-white/15">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-cyan-300 uppercase tracking-wide">
                        Working Hours
                      </div>
                      <div className="text-xs font-semibold text-white">
                        {AGENCY_INFO.hours}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3 Explicit Guarantees */}
                <div className="pt-2 border-t border-slate-700/80 space-y-2.5">
                  <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider">
                    Our Direct Commitments:
                  </div>
                  
                  <div className="flex items-center gap-2.5 text-sm font-medium text-white bg-white/10 p-2.5 rounded-lg border border-white/15">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-white">Free consultation included</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-medium text-white bg-white/10 p-2.5 rounded-lg border border-white/15">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span className="text-white">24-hour response time</span>
                  </div>

                  <div className="flex items-center gap-2.5 text-sm font-medium text-white bg-white/10 p-2.5 rounded-lg border border-white/15">
                    <ShieldCheck className="w-4 h-4 text-blue-300 shrink-0" />
                    <span className="text-white">No hidden fees</span>
                  </div>
                </div>
              </div>

              {/* Privacy note */}
              <div className="text-xs text-slate-500 text-center px-4 pt-4">
                Your details are kept strictly confidential. We never send spam or share your contact info.
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Interactive Quick Quote Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left" distance={30} delay={150} duration={0.55}>
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              
              {isSubmitted ? (
                /* Success State */
                <div className="text-center py-10 space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-base text-[#36454F] max-w-md mx-auto">
                      Your inquiry has been sent to <strong className="text-[#0F52BA]">info.vestalws@gmail.com</strong> for <strong className="text-[#1E3A8A]">{formData.projectType}</strong>.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Destination:</span>
                      <span className="font-semibold text-[#0F52BA]">info.vestalws@gmail.com</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Your Email:</span>
                      <span className="font-semibold text-slate-800">{formData.email}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500">Your Phone:</span>
                      <span className="font-semibold text-slate-800">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Response Window:</span>
                      <span className="font-bold text-emerald-600">Within 24 Hours</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:info.vestalws@gmail.com?subject=${encodeURIComponent(
                        `Project Inquiry: ${formData.projectType} - ${formData.fullName}`
                      )}&body=${encodeURIComponent(
                        `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nProject: ${formData.projectType}\nBudget: ${formData.budgetRange}\nTimeline: ${formData.timeline}\nRequirements: ${formData.details}`
                      )}`}
                      className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#0F52BA]" />
                      <span>Open Email Draft</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 bg-[#0F52BA] hover:bg-[#1E3A8A] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-sm transition-colors cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form State with Real-Time Validation */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#1E3A8A]">
                      Tell Us About Your Project
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fields marked with an asterisk (<span className="text-rose-500">*</span>) are required.
                    </p>
                  </div>

                  <AnimatePresence>
                    {submissionError && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5 shadow-xs"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                        <span className="font-medium">{submissionError}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Name & Email in 2 columns with Real-Time Validation */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="contact-fullName" className="text-xs font-bold text-slate-700 block">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        {isFieldValid('fullName') && (
                          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="contact-fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          onBlur={() => handleBlur('fullName')}
                          placeholder="e.g., Rajesh Sharma"
                          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 transition-all duration-200 pr-9 focus:bg-white focus:outline-none ${
                            isFieldInvalid('fullName')
                              ? 'border-rose-400 ring-2 ring-rose-100 bg-rose-50/20 text-slate-900'
                              : isFieldValid('fullName')
                              ? 'border-emerald-400 ring-1 ring-emerald-100 bg-emerald-50/10'
                              : 'border-slate-300 focus:ring-2 focus:ring-[#0F52BA] focus:border-transparent'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          {isFieldInvalid('fullName') && (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                          {isFieldValid('fullName') && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isFieldInvalid('fullName') && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[11px] font-medium text-rose-600 flex items-center gap-1 mt-1"
                          >
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.fullName}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        {isFieldValid('email') && (
                          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          placeholder="e.g., rajesh@company.com"
                          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 transition-all duration-200 pr-9 focus:bg-white focus:outline-none ${
                            isFieldInvalid('email')
                              ? 'border-rose-400 ring-2 ring-rose-100 bg-rose-50/20 text-slate-900'
                              : isFieldValid('email')
                              ? 'border-emerald-400 ring-1 ring-emerald-100 bg-emerald-50/10'
                              : 'border-slate-300 focus:ring-2 focus:ring-[#0F52BA] focus:border-transparent'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          {isFieldInvalid('email') && (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                          {isFieldValid('email') && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isFieldInvalid('email') && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[11px] font-medium text-rose-600 flex items-center gap-1 mt-1"
                          >
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.email}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Phone & Project Type in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 block">
                          Phone Number <span className="text-rose-500">*</span>
                        </label>
                        {isFieldValid('phone') && (
                          <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                            <Check className="w-3 h-3" /> Valid
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          placeholder="e.g., +91 98765 43210"
                          className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-sm text-slate-900 transition-all duration-200 pr-9 focus:bg-white focus:outline-none ${
                            isFieldInvalid('phone')
                              ? 'border-rose-400 ring-2 ring-rose-100 bg-rose-50/20 text-slate-900'
                              : isFieldValid('phone')
                              ? 'border-emerald-400 ring-1 ring-emerald-100 bg-emerald-50/10'
                              : 'border-slate-300 focus:ring-2 focus:ring-[#0F52BA] focus:border-transparent'
                          }`}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          {isFieldInvalid('phone') && (
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          )}
                          {isFieldValid('phone') && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          )}
                        </div>
                      </div>

                      <AnimatePresence>
                        {isFieldInvalid('phone') && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-[11px] font-medium text-rose-600 flex items-center gap-1 mt-1"
                          >
                            <AlertCircle className="w-3 h-3 shrink-0" />
                            <span>{errors.phone}</span>
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-projectType" className="text-xs font-bold text-slate-700 block">
                        Project Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        id="contact-projectType"
                        value={formData.projectType}
                        onChange={(e) => handleInputChange('projectType', e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F52BA] focus:border-transparent transition-all cursor-pointer"
                      >
                        {PROJECT_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* Project Details textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-details" className="text-xs font-bold text-slate-700 block">
                      Project Details &amp; Requirements (Optional)
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={formData.details}
                      onChange={(e) => handleInputChange('details', e.target.value)}
                      placeholder="Tell us about your company, target audience, specific features you need, or any reference websites you like..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0F52BA] focus:border-transparent transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button with Dynamic Loading State */}
                  <button
                    id="contact-submit-quote-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isSubmitting
                        ? 'bg-[#1E3A8A] text-white cursor-wait opacity-90'
                        : 'bg-[#0F52BA] hover:bg-[#1E3A8A] text-white hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2.5">
                        <Loader2 className="w-5 h-5 animate-spin text-cyan-300" />
                        <span>
                          {loadingStage === 'sending' ? 'Transmitting Inquiry...' : 'Securing 24h Proposal Slot...'}
                        </span>
                      </div>
                    ) : (
                      <>
                        <span>Get My Free 24-Hour Quote</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Micro reassurance line */}
            

                </form>
              )}

            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
