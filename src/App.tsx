import { useEffect } from 'react';
import Lenis from 'lenis';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Experience } from './components/Experience/Experience';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import { Navbar } from './components/Common/Navbar';
import { Footer } from './components/Common/Footer';
import { GlobalBackground } from './components/Background/GlobalBackground';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll for modern silky scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#E6DBC6] dark:bg-[#001E2B] text-[#3D362D] dark:text-[#C1C7C6] selection:bg-[#8C5E34] selection:text-[#F6EFE2] dark:selection:bg-[#00ED64] dark:selection:text-[#001E2B] font-['Plus_Jakarta_Sans',sans-serif] overflow-x-hidden transition-colors duration-300">
        {/* Unified Global Developer Space Atmosphere */}
        <GlobalBackground />

        {/* Top Floating Glass Header */}
        <Navbar />

      {/* Main Single Connected Experience with generous section spacing */}
      <main className="relative z-10 w-full max-w-full mx-auto flex flex-col items-center justify-center">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Interactive Technical Skills Arsenal */}
        <Skills />

        {/* 4. Featured Project Case Studies */}
        <Projects />

        {/* 5. Career & Experience Timeline */}
        <Experience />

        {/* 6. Core Services & Deliverables */}
        <Services />

        {/* 7. Transmission & Contact */}
        <Contact />
      </main>

      {/* Cosmic Footer */}
      <Footer />
    </div>
  </ThemeProvider>
);
}

export default App;
