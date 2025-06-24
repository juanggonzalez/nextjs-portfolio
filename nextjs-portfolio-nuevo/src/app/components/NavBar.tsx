"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

interface NavBarProps {
  sections: { id: string; name: string }[];
}

export default function NavBar({ sections }: NavBarProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navRef = useRef<HTMLElement>(null);

  const glowPrimaryValue = '0 0 8px rgba(255, 128, 0, 0.16)';
  const shadowNoneValue = 'none';

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const navHeight = navRef.current?.offsetHeight || 0;

    let foundActive = false;

    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionElement = document.getElementById(sections[i].id);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionElement.getBoundingClientRect().bottom + window.scrollY;

        const viewportMid = scrollY + window.innerHeight / 2;

        if (
          (viewportMid >= sectionTop && viewportMid < sectionBottom) ||
          (scrollY + navHeight >= sectionTop && scrollY + navHeight < sectionBottom)
        ) {
          setActiveSection(sections[i].id);
          foundActive = true;
          break;
        }
      }
    }

    if (!foundActive && scrollY < (document.getElementById(sections[1]?.id || '')?.offsetTop || window.innerHeight)) {
      setActiveSection("hero");
    }
  }, [sections]);

  useEffect(() => {
    const initialScrollCheck = () => {
      handleScroll();
    };
    window.requestAnimationFrame(initialScrollCheck);

    window.addEventListener('scroll', handleScroll);

    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px es el breakpoint 'md' de Tailwind
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize); 
    };
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const navOffset = navRef.current?.offsetHeight || 0;
      const offsetTop = section.offsetTop - navOffset;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false); 
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="fixed top-0 left-0 w-full bg-black-true bg-opacity-80 backdrop-blur-sm z-50 shadow-dark-panel py-4"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="#hero" className="text-2xl font-extrabold text-brand-primary tracking-wide">
            Juan Gonzalez
          </a>
        </motion.div>

        <div className="hidden md:flex space-x-2 p-1 rounded-full bg-dark-surface">
          {sections.map((section) => (
            <motion.a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section.id);
              }}
              className="relative px-4 py-2 rounded-full text-lg font-medium transition-all duration-300 z-10"
            >
              {activeSection === section.id && (
                <motion.div
                  layoutId="activeSectionBackground"
                  className="absolute inset-0 bg-brand-primary rounded-full z-[-1]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className={`${activeSection === section.id ? "text-brand-text-on-primary" : "text-text-muted"} transition-colors duration-300 relative z-20`}>
                {section.name}
              </span>
            </motion.a>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-brand-primary text-3xl focus:outline-none"
          aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:block"
        >
          <a
            href="https://www.linkedin.com/in/juan-gabriel-gonzalez-355490353/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: glowPrimaryValue }}
              initial={{ boxShadow: shadowNoneValue }}
              animate={{ boxShadow: shadowNoneValue }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-primary text-brand-text-on-primary px-6 py-2 rounded-lg font-bold text-lg transition-all duration-300 shadow-none"
            >
              Contact
            </motion.button>
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-black-true bg-opacity-95 backdrop-blur-sm shadow-lg py-4 border-t border-dark-surface"
          >
            <div className="flex flex-col items-center space-y-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSectionClick(section.id);
                  }}
                  className={`text-xl font-medium py-2 px-4 rounded-lg ${activeSection === section.id ? "text-brand-primary" : "text-text-muted"} transition-colors duration-300`}
                >
                  {section.name}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/juan-gabriel-gonzalez-355490353/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: glowPrimaryValue }}
                  initial={{ boxShadow: shadowNoneValue }}
                  animate={{ boxShadow: shadowNoneValue }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-brand-primary text-brand-text-on-primary px-6 py-2 rounded-lg font-bold text-lg transition-all duration-300 shadow-none mt-4"
                >
                  Contact
                </motion.button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}