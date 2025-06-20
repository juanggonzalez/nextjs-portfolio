"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioSection() {
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

  const portfolioItems = [
    {
      title: "Advanced E-commerce Platform",
      category: "FullStack Web Development",
      image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=E-commerce+Platform",
      description: "Development of a scalable e-commerce solution using React.js for the frontend and ASP.NET with SQL Server for the backend.",
    },
    {
      title: "Data Management API",
      category: "Backend Development",
      image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=Data+API",
      description: "Construction of a robust RESTful API with Node.js for data management, including authentication and query optimization. (IN PROGRESS)",
    },
    // {
    //   title: "Hybrid Mobile Application",
    //   category: "Mobile App",
    //   image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=Mobile+App",
    //   description: "Design and development of a mobile application with React Native and Kotlin, connected to backend services for a fluid experience.",
    // },
    // {
    //   title: "Enterprise Management System",
    //   category: "Software Development",
    //   image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=Enterprise+System",
    //   description: "Implementation of an internal management system using C# and .NET, applying design patterns like Repository for improved maintainability.",
    // },
    {
      title: "Interactive Analytics Dashboard",
      category: "Frontend / Data Viz",
      image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=Analytics+Dashboard",
      description: "Creation of an interactive dashboard in React.js for data visualization, enhancing business decision-making. (IN PROGRESS)",
    },
    // {
    //   title: "C# Test Automation Framework",
    //   category: "Quality Assurance",
    //   image: "https://placehold.co/400x300/0A0A0A/FFFFFF?text=Automated+Tests",
    //   description: "Development of a test automation framework to ensure the quality and stability of web applications and APIs.",
    // },
  ];


  const glowPrimaryLgValue = '0 0 20px rgba(255, 128, 0, 0.2)'; // Para 'glow-primary-lg'
  const shadowNoneValue = 'none'; 


  return (
    <motion.section
      id="portfolio" // ID for navigation
      className="w-full bg-dark-background text-text-light py-20 px-6 md:py-32 flex flex-col items-center justify-center relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-text-light mb-16 text-center drop-shadow-[0_0_10px_rgba(255,127,0,0.6)]"> 
        My Project Portfolio
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-dark-surface p-8 rounded-lg shadow-dark-card overflow-hidden border-2 border-transparent hover:border-brand-primary transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300 brightness-90"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold mb-2 text-text-light">{item.title}</h3>
              <p className="text-brand-primary text-sm uppercase font-semibold">{item.category}</p>
              <p className="text-text-muted text-sm mt-2">{item.description}</p> 
            </div>
          </motion.div>
        ))}
      </div>

    </motion.section>
  );
}
