import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3.5 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(230,219,198,0.92)] dark:bg-[rgba(0,30,43,0.92)] backdrop-blur-md border border-[rgba(31,27,23,0.14)] dark:border-[rgba(255,255,255,0.08)] shadow-[0_4px_20px_-2px_rgba(60,45,25,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(230,219,198,0.75)] dark:bg-[rgba(0,30,43,0.75)] backdrop-blur-sm border border-[rgba(31,27,23,0.10)] dark:border-[rgba(255,255,255,0.06)]'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group shrink-0">
          <BrandLogo className="w-9 h-9 transition-transform duration-300 group-hover:scale-105" />
          <div className="flex flex-col text-left">
            <span className="font-bold text-[#1F1B17] dark:text-[#F9FBFA] font-['Outfit',sans-serif] text-sm tracking-tight leading-tight group-hover:text-[#8C5E34] dark:group-hover:text-[#00ED64] transition-colors">
              HOSSAM HASSAN
            </span>
            <span className="text-[10px] text-[#8C5E34] dark:text-[#00ED64] font-semibold font-mono tracking-wider leading-none">
              Full Stack MERN Developer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#3D362D] dark:text-[#C1C7C6]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`transition-colors duration-200 hover:text-[#1F1B17] dark:hover:text-[#F9FBFA] relative py-1 ${
                activeSection === item.id ? 'text-[#8C5E34] dark:text-[#00ED64] font-bold' : 'text-[#3D362D] dark:text-[#C1C7C6]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8C5E34] dark:bg-[#00ED64] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 relative z-20">
          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1F1B17] dark:text-[#F9FBFA] hover:text-[#8C5E34] dark:hover:text-[#00ED64] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-[#E6DBC6] dark:bg-[#001E2B] backdrop-blur-xl border border-[rgba(31,27,23,0.14)] dark:border-[rgba(255,255,255,0.10)] flex flex-col gap-3.5 text-sm text-[#1F1B17] dark:text-[#F9FBFA] shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors py-1 font-medium ${
                activeSection === item.id ? 'text-[#8C5E34] dark:text-[#00ED64] font-bold' : 'hover:text-[#8C5E34] dark:hover:text-[#00ED64]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 rounded-xl bg-[#1F1B17] hover:bg-[#2B2621] text-[#F6EFE2] dark:bg-[#00ED64] dark:hover:bg-[#00C853] dark:text-[#001E2B] font-bold text-xs shadow-md transition-colors"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
};
