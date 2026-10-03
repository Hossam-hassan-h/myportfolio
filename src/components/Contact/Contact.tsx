import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm, ValidationError } from '@formspree/react';
import {
  ChevronDown,
  Mail,
  MapPin,
  Send,
  Check,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { UI } from '../Common/uiTokens';
import { SectionHeading } from '../Common/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [formspreeState, handleFormspreeSubmit] = useForm('mbgjjerw');
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    if (formspreeState.succeeded) {
      setShowSuccess(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [formspreeState.succeeded]);

  useEffect(() => {
    if (!sectionRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center bg-[#DDD0B8] dark:bg-[#001721] transition-colors duration-300"
    >
      <div className={UI.container}>
        {/* Section Title Divider */}
        <SectionHeading badge="CONTACT" />

        {/* 2-Column Grid on Desktop, Single Column on Tablet/Mobile */}
        <div
          ref={cardRef}
          className="w-full grid grid-cols-1 lg:grid-cols-[5fr_7fr] items-stretch gap-6 lg:gap-8 max-w-2xl lg:max-w-none mx-auto relative z-10 font-['Roboto',sans-serif]"
        >
          {/* ==================== LEFT COLUMN: INFO CARD ==================== */}
          <div
            style={{ background: 'var(--bg-card-dark)' }}
            className="w-full h-full rounded-2xl border border-[rgba(243,234,217,0.12)] dark:border-[rgba(0,237,100,0.18)] p-0 shadow-[0_14px_36px_rgba(20,15,10,0.40)] dark:shadow-[0_14px_36px_rgba(0,0,0,0.7)] flex flex-col text-left select-none transition-colors duration-300"
          >
            <div
              className="w-full h-full flex flex-col box-border p-6 sm:p-8 lg:p-10"
              style={{ padding: 'clamp(24px, 4vw, 40px)' }}
            >
              {/* Top Heading & Subtitle */}
              <div>
                <h2 className="text-[24px] sm:text-[28px] font-extrabold uppercase text-[#F6EFE2] dark:text-[#F9FBFA] font-['Roboto',sans-serif] tracking-tight leading-[1.2] transition-colors duration-300">
                  Let's Build Your<br />
                  <span className="text-[#D6CBB7] dark:text-[#00ED64] underline underline-offset-4 decoration-2 decoration-[#8C5E34] dark:decoration-[#00ED64]">
                    Digital Vision
                  </span>
                </h2>

                <p className="text-[15px] sm:text-[16px] text-[#D6CBB7] dark:text-[#C1C7C6] font-['Roboto',sans-serif] leading-[1.7] mt-4 transition-colors duration-300">
                  Have an ambitious idea, need a high-performance web platform, or looking to augment your engineering team? Let's connect and make it happen.
                </p>
              </div>

              {/* Middle: Contact Details & Channels */}
              <div className="grid grid-cols-1 gap-4 my-8">
                {/* WhatsApp Link Card */}
                <a
                  href="https://wa.me/201116596635"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#2B2621] dark:bg-[#071924] border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(243,234,217,0.25)] dark:hover:border-[#00ED64]/40 transition-all duration-200 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3A2E24] dark:bg-[#0C2331] border border-[rgba(243,234,217,0.18)] dark:border-[#00ED64]/20 flex items-center justify-center group-hover:scale-105 transition-all shrink-0">
                    <FaWhatsapp className="w-5 h-5 text-[#D6CBB7] dark:text-[#00ED64] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[12px] font-mono text-[#A89F8D] dark:text-[#00ED64] uppercase tracking-[0.12em] font-semibold transition-colors">Direct WhatsApp</span>
                    <span className="text-[15px] font-bold text-[#F6EFE2] dark:text-[#F9FBFA] group-hover:text-[#D6CBB7] dark:group-hover:text-[#00ED64] transition-colors break-words">+20 111 659 6635</span>
                  </div>
                </a>

                {/* Email Link Card */}
                <a
                  href="mailto:hossam.h.dev@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#2B2621] dark:bg-[#071924] border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] hover:border-[rgba(243,234,217,0.25)] dark:hover:border-[#00ED64]/40 transition-all duration-200 group min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3A2E24] dark:bg-[#0C2331] border border-[rgba(243,234,217,0.18)] dark:border-[#00ED64]/20 flex items-center justify-center group-hover:scale-105 transition-all shrink-0">
                    <Mail className="w-5 h-5 text-[#D6CBB7] dark:text-[#00ED64] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[12px] font-mono text-[#A89F8D] dark:text-[#00ED64] uppercase tracking-[0.12em] font-semibold transition-colors">Email Dispatch</span>
                    <span className="text-[15px] font-bold text-[#F6EFE2] dark:text-[#F9FBFA] group-hover:text-[#D6CBB7] dark:group-hover:text-[#00ED64] transition-colors break-words">hossam.h.dev@gmail.com</span>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#2B2621] dark:bg-[#071924] border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] min-w-0 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#3A2E24] dark:bg-[#0C2331] border border-[rgba(243,234,217,0.18)] dark:border-[#00ED64]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#D6CBB7] dark:text-[#00ED64] transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <span className="text-[12px] font-mono text-[#A89F8D] dark:text-[#00ED64] uppercase tracking-[0.12em] font-semibold transition-colors">Location / Timezone</span>
                    <span className="text-[15px] font-bold text-[#F6EFE2] dark:text-[#F9FBFA] break-words transition-colors">Cairo, Egypt • UTC+3 (Remote Available)</span>
                  </div>
                </div>
              </div>

              {/* Bottom: Social Profiles */}
              <div className="mt-auto pt-6 border-t border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.08)] flex flex-wrap gap-3">
                <a
                  href="https://github.com/Hossam-hassan-h"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#2B2621] hover:bg-[#3A332B] dark:bg-[#0C2331] dark:hover:bg-[#112D3E] border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.10)] dark:hover:border-[#00ED64]/40 text-xs font-mono font-bold text-[#F6EFE2] dark:text-[#F9FBFA] transition-all hover:-translate-y-0.5"
                >
                  <SiGithub className="w-4 h-4 text-[#D6CBB7] dark:text-[#00ED64] shrink-0" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/hossam-hassan-hefni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 h-12 px-4 rounded-xl bg-[#2B2621] hover:bg-[#3A332B] dark:bg-[#0C2331] dark:hover:bg-[#112D3E] border border-[rgba(243,234,217,0.12)] dark:border-[rgba(255,255,255,0.10)] dark:hover:border-[#00ED64]/40 text-xs font-mono font-bold text-[#F6EFE2] dark:text-[#F9FBFA] transition-all hover:-translate-y-0.5"
                >
                  <FaLinkedin className="w-4 h-4 text-[#D6CBB7] dark:text-[#00ED64] shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* ==================== RIGHT COLUMN: FORM CARD ==================== */}
          <div className="w-full h-full rounded-2xl bg-[#D9CCB4] dark:bg-[#0C2331] border border-[#1F1B17]/14 dark:border-[rgba(255,255,255,0.08)] p-0 shadow-[0_10px_28px_rgba(60,45,25,0.18),0_2px_6px_rgba(60,45,25,0.10)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.65)] text-left flex flex-col transition-colors duration-300">
            <div
              className="w-full h-full flex flex-col box-border p-6 sm:p-8 lg:p-10"
              style={{ padding: 'clamp(24px, 4vw, 40px)' }}
            >
              <form
                onSubmit={handleFormspreeSubmit}
                className="w-full flex flex-col gap-6 relative"
              >
                {/* Field 1 & 2: Name & Email side-by-side on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Field 1: Your name */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="name" className="block text-[13px] font-semibold text-[#3D362D] dark:text-[#F9FBFA] mb-0 transition-colors">
                      Your Name <span className="text-[#5E5547] dark:text-[#00ED64]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-[52px] bg-[#F6F0E2] dark:bg-[#041219] border border-[#BFB195] dark:border-[#1E3A4B] rounded-xl px-4 box-border text-base text-[#1F1B17] dark:text-[#F9FBFA] placeholder:text-[#5E5547] dark:placeholder:text-[#889397] focus:border-[#8C5E34] dark:focus:border-[#00ED64] focus:ring-4 focus:ring-[#8C5E34]/20 dark:focus:ring-[#00ED64]/20 outline-none transition-all"
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      errors={formspreeState.errors}
                      className="text-[#8A3A2E] dark:text-[#FF6B6B] text-xs font-mono mt-1.5"
                    />
                  </div>

                  {/* Field 2: Your Email */}
                  <div className="flex flex-col gap-2 min-w-0">
                    <label htmlFor="email" className="block text-[13px] font-semibold text-[#3D362D] dark:text-[#F9FBFA] mb-0 transition-colors">
                      Your Email <span className="text-[#5E5547] dark:text-[#00ED64]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-[52px] bg-[#F6F0E2] dark:bg-[#041219] border border-[#BFB195] dark:border-[#1E3A4B] rounded-xl px-4 box-border text-base text-[#1F1B17] dark:text-[#F9FBFA] placeholder:text-[#5E5547] dark:placeholder:text-[#889397] focus:border-[#8C5E34] dark:focus:border-[#00ED64] focus:ring-4 focus:ring-[#8C5E34]/20 dark:focus:ring-[#00ED64]/20 outline-none transition-all"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={formspreeState.errors}
                      className="text-[#8A3A2E] dark:text-[#FF6B6B] text-xs font-mono mt-1.5"
                    />
                  </div>
                </div>

                {/* Field 3: Services (Dropdown) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="block text-[13px] font-semibold text-[#3D362D] dark:text-[#F9FBFA] mb-0 transition-colors">
                    Service Requested
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-[52px] bg-[#F6F0E2] dark:bg-[#041219] border border-[#BFB195] dark:border-[#1E3A4B] rounded-xl pl-4 pr-11 box-border text-base text-[#1F1B17] dark:text-[#F9FBFA] focus:border-[#8C5E34] dark:focus:border-[#00ED64] focus:ring-4 focus:ring-[#8C5E34]/20 dark:focus:ring-[#00ED64]/20 outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="" className="text-[#5E5547] dark:text-[#889397] bg-[#F6F0E2] dark:bg-[#041219]">Select a project type...</option>
                      <option value="full-stack-app" className="text-[#1F1B17] dark:text-[#F9FBFA] bg-[#F6F0E2] dark:bg-[#041219]">Full Stack MERN Application</option>
                      <option value="frontend" className="text-[#1F1B17] dark:text-[#F9FBFA] bg-[#F6F0E2] dark:bg-[#041219]">Frontend Architecture / React</option>
                      <option value="backend-api" className="text-[#1F1B17] dark:text-[#F9FBFA] bg-[#F6F0E2] dark:bg-[#041219]">Backend &amp; API Development</option>
                      <option value="dashboard" className="text-[#1F1B17] dark:text-[#F9FBFA] bg-[#F6F0E2] dark:bg-[#041219]">Custom Dashboard / Admin Panel</option>
                      <option value="ecommerce" className="text-[#1F1B17] dark:text-[#F9FBFA] bg-[#F6F0E2] dark:bg-[#041219]">E-Commerce Solution</option>
                    </select>
                    <div className="absolute right-[18px] top-1/2 -translate-y-1/2 pointer-events-none text-[#5E5547] dark:text-[#889397]">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={formspreeState.errors}
                    className="text-[#8A3A2E] dark:text-[#FF6B6B] text-xs font-mono mt-1.5"
                  />
                </div>

                {/* Field 4: Your Message (Textarea) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="block text-[13px] font-semibold text-[#3D362D] dark:text-[#F9FBFA] mb-0 transition-colors">
                    Project Details <span className="text-[#5E5547] dark:text-[#00ED64]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your goals, requirements, timeline, or scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px] bg-[#F6F0E2] dark:bg-[#041219] border border-[#BFB195] dark:border-[#1E3A4B] rounded-xl px-4 py-3.5 box-border text-base text-[#1F1B17] dark:text-[#F9FBFA] placeholder:text-[#5E5547] dark:placeholder:text-[#889397] focus:border-[#8C5E34] dark:focus:border-[#00ED64] focus:ring-4 focus:ring-[#8C5E34]/20 dark:focus:ring-[#00ED64]/20 outline-none resize-y leading-[1.6] transition-all"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={formspreeState.errors}
                    className="text-[#8A3A2E] dark:text-[#FF6B6B] text-xs font-mono mt-1.5"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formspreeState.submitting}
                    className="w-full h-[52px] rounded-xl bg-[#1F1B17] hover:bg-[#2B2621] hover:-translate-y-0.5 text-[#F6EFE2] dark:bg-[#00ED64] dark:hover:bg-[#00C853] dark:text-[#001E2B] dark:shadow-[0_4px_20px_rgba(0,237,100,0.25)] font-bold text-base px-6 shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none"
                  >
                    {formspreeState.submitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#F6EFE2]/30 dark:border-[#001E2B]/30 border-t-[#F6EFE2] dark:border-t-[#001E2B] rounded-full animate-spin" />
                        Transmitting Signal...
                      </span>
                    ) : showSuccess ? (
                      <span className="flex items-center gap-2 text-[#F6EFE2] dark:text-[#001E2B] font-semibold">
                        <Check className="w-5 h-5 text-[#F6EFE2] dark:text-[#001E2B]" /> Message Transmitted Successfully!
                      </span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 text-[#F6EFE2] dark:text-[#001E2B]" />
                      </>
                    )}
                  </button>
                </div>

                {/* Status/message area (min-height 20px reserved to prevent layout shift) */}
                <div className="min-h-[20px] mt-1 text-center text-sm font-medium text-[#3D362D] dark:text-[#C1C7C6] flex items-center justify-center">
                  {showSuccess && (
                    <span className="text-[#1F1B17] dark:text-[#00ED64]">Thank you! I will respond promptly to your inquiry.</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};