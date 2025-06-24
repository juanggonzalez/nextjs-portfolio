"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  const serviceCards = [
    {
      title: "Web Development",
      description: "Building responsive and high-performance web applications with React.js and ASP.NET.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user interfaces for an exceptional user experience.",
      icon: "🎨",
    },
    {
      title: "APIs & Backend",
      description: "Developing robust backend services with Node.js and C#, including SQL database management.",
      icon: "⚙️", 
    },
    {
      title: "Optimization & Testing",
      description: "Implementing unit and integration tests to ensure code quality and application stability.",
      icon: "🔍",
    },
  ];

  const stats = [
    { count: "04", label: "Projects" },
    { count: "03", label: "Years of Experience" },
    { count: "06", label: "Completed Courses" },
    { count: "01", label: "Technical Title" },

  ];

  return (
    <motion.section
      id="services" // ID for navigation
      className="w-full bg-black-true text-text-light py-20 px-6 md:py-32 flex flex-col items-center justify-center relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-text-light mb-16 text-center drop-shadow-[0_0_10px_rgba(255,127,0,0.6)]"> 
        My Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full mb-20">
        {serviceCards.map((card, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-dark-surface p-8 rounded-lg shadow-dark-card text-center border-2 border-transparent hover:border-brand-primary transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="text-5xl mb-4 text-brand-primary">{card.icon}</div> 
            <h3 className="text-2xl font-bold mb-2 text-text-light">{card.title}</h3>
            <p className="text-text-muted">{card.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="border bg-brand-primary rounded-lg py-12 md:py-16 px-8 max-w-6xl w-full shadow-none">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-extrabold text-black-true mb-2">{stat.count}</span>
              <p className="text-black-true text-lg md:text-xl font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
