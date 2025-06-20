"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SkillsSection() { 
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  const progressBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (customWidth: number) => ({
      width: `${customWidth}%`,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    }),
  };

  const skillsData = [
    { name: "ReactJS", percentage: 95 },
    { name: "JavaScript / TypeScript", percentage: 90 },
    { name: "HTML / CSS / SASS", percentage: 90 },
    { name: "ASP.NET / C#", percentage: 85 },
    { name: "SQL (SQL Server)", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Git / GitHub / AzureDevOps", percentage: 80 },
    { name: "Design Patterns", percentage: 80 },
    { name: "Testing (C#)", percentage: 65 },
    { name: "Java / Kotlin (Android Dev)", percentage: 40 }, 
  ];


  return (
    <motion.section
      id="skills" 
      className="w-full bg-black-true text-text-light py-20 px-6 md:py-32 flex items-center justify-center relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div variants={itemVariants} className="flex flex-col items-center md:items-start gap-8 md:w-1/2">
          <div className="relative w-full max-w-lg md:max-w-xl h-auto rounded-lg overflow-hidden shadow-dark-panel border border-dark-accent">
            <Image
              src="/images/setup.jpg" 
              alt="Juan Gabriel's coding environment"
              width={600}
              height={400}
              className="object-cover w-full h-auto brightness-90"
            />
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-4 mt-6">
            <div className="text-8xl font-extrabold text-brand-primary leading-none">
              3+
            </div>
            <div className="text-left">
              <div className="text-2xl font-semibold leading-tight text-text-light">
                Years of
              </div>
              <div className="text-2xl font-semibold leading-tight text-text-light">
                Experience
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center md:text-left space-y-8 md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-text-light leading-tight drop-shadow-[0_0_10px_rgba(255,127,0,0.6)]"> {/* Adjusted shadow */}
            My Expertise & Skills
          </h2>
          <p className="text-text-muted text-lg mt-4 leading-relaxed">
            As a FullStack Developer, my passion lies in building robust and scalable web applications. I specialize in JS and .NET technologies, constantly seeking innovation and continuous learning to add value to new projects.
          </p>

          <div className="space-y-6 mt-8">
            {skillsData.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="flex justify-between items-center text-text-light text-lg font-medium">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="w-full bg-dark-surface rounded-full h-3 mt-2 overflow-hidden">
                  <motion.div
                    className="bg-brand-primary h-full rounded-full"
                    variants={progressBarVariants}
                    custom={skill.percentage}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
