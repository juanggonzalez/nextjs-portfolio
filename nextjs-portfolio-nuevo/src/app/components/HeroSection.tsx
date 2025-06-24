"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.2, 0.8, 0.2, 1],
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.2, 0.8, 0.2, 1],
        duration: 0.8,
      },
    },
  };

  const buttonHoverShadow = '0 0 20px rgba(255, 128, 0, 0.2)'; 
  const buttonInitialShadow = 'none'; 

  return (
    <section id="hero" className="w-full bg-dark-background text-text-light min-h-screen flex items-center justify-center px-6 py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 hidden md:block">
        <div className="absolute w-64 h-64 border-2 border-brand-primary top-1/4 right-1/4 transform rotate-45 opacity-5"></div>
        <div className="absolute w-96 h-96 border-2 border-brand-primary bottom-1/3 left-1/3 transform -rotate-30 opacity-5"></div>
      </div>

      <motion.div
        className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 relative z-10 pt-20 md:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left space-y-6 max-w-xl md:w-1/2">
          <motion.div variants={itemVariants}>
            <span className="bg-brand-primary text-brand-text-on-primary px-5 py-2 text-sm uppercase rounded tracking-wider font-bold inline-block transform -rotate-1 skew-x-3 mb-4 shadow-none">
              Hello, I am
            </span>
            <h1 className="text-6xl md:text-8xl font-extrabold mt-4 leading-tight text-text-light drop-shadow-[0_0_10px_rgba(255,127,0,0.6)]">
              Juan Gabriel Gonzalez
            </h1>
            <p className="text-text-muted text-xl md:text-2xl mt-4 font-medium">
              FullStack Developer
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center md:justify-start pt-6"
          >
            <a href="/Juan-Gonzalez-CV.pdf" download="Juan-Gonzalez-CV.pdf">
              <motion.button
                whileHover={{ scale: 1.07, boxShadow: buttonHoverShadow }}
                initial={{ boxShadow: buttonInitialShadow }}
                animate={{ boxShadow: buttonInitialShadow }}
                whileTap={{ scale: 0.93 }}
                className="bg-brand-primary text-brand-text-on-primary px-10 py-4 rounded font-bold text-xl shadow-none transform hover:-translate-y-1 transition-all duration-300"
              >
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={imageVariants}
          className="relative w-full max-w-md md:max-w-lg h-[400px] md:h-[500px] flex justify-center items-end"
        >
          <Image
            src="/images/iamge x.jpg"
            alt="Illustrative profile picture of Juan Gabriel Gonzalez, a FullStack Developer"
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 40vw, 35vw"
            className="object-contain w-full h-full filter brightness-90 "
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.line
                  x1="10" y1="20" x2="90" y2="80" stroke="#FF7F00" strokeWidth="0.5" opacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                />
                <motion.line
                  x1="90" y1="20" x2="10" y2="80" stroke="#FF7F00" strokeWidth="0.5" opacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.5, duration: 2, repeat: Infinity, repeatType: "mirror" }}
                />
                <motion.polygon
                  points="50,10 90,40 70,90 30,90 10,40"
                  fill="none"
                  stroke="#FF7F00"
                  strokeWidth="0.5"
                  opacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "mirror" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}