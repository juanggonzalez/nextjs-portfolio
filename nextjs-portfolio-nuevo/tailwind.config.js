/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de Colores
        'black-true': '#000000',      // Negro puro para el fondo principal
        'dark-background': '#0A0A0A', // Un negro muy oscuro, base para secciones
        'dark-surface': '#1C1C1C',    // Gris oscuro para tarjetas y superficies 
        'dark-accent': '#3A3A3A',     // Gris para bordes y detalles sutiles 

        'brand-primary': '#FF7F00',   // Naranja vibrante y brillante 
        'brand-secondary': '#FFA500', // Un naranja ligeramente más claro para glows sutiles
        'brand-text-on-primary': '#FFFFFF', // Blanco puro para texto sobre naranja

        'text-light': '#EFEFEF',      // Blanco grisáceo para texto principal 
        'text-muted': '#BDBDBD',      // Gris medio para texto secundario
        'gray-border': '#616161',     // Gris sutil para bordes
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-portfolio': 'linear-gradient(to bottom, #0A0A0A, #000000)', // Degradado ajustado a los nuevos negros
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      boxShadow: {
        'none': 'none', // Para eliminar sombras por completo
        'glow-primary': '0 0 8px rgba(255, 128, 0, 0.16)',  // Naranja muy sutil
        'glow-primary-lg': '0 0 20px rgba(255, 128, 0, 0.2)', // Naranja más grande
        'shadow-dark-panel': '0 1px 2px rgba(0,0,0,0.2)',  // Sombra muy suave para paneles
        'shadow-dark-card': '0 0px 0px rgba(0,0,0,0)',    // Sombra mínima, casi plana
      },
    },
  },
  plugins: [],
};
