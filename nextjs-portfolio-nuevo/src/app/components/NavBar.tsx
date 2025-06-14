"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface NavBarProps {
  sections: { id: string; name: string }[];
}

export default function NavBar({ sections }: NavBarProps) {
  const [activeSection, setActiveSection] = useState("hero");
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

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
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

  console.log(activeSection)

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

        <div className="flex space-x-2 p-1 rounded-full bg-dark-surface">
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
    </motion.nav>
  );
}
