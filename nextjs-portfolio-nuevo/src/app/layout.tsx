import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import NavBar from "@/app/components/NavBar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mi Portfolio",
  description: "Portfolio personal de desarrollador fullstack",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const sections = [
    { id: "hero", name: "Home" },
    { id: "skills", name: "Skills" }, 
    { id: "services", name: "Services" },
    { id: "portfolio", name: "Portfolio" },
  ];

  return (
    <html lang="es" className="scroll-smooth">
      <body className={`min-h-screen ${inter.className}`}>
        <NavBar sections={sections} /> 
        {children}
      </body>
    </html>
  );
}