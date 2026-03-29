/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#0A1A0F',
        surface: '#112216',
        surfaceHover: '#172E1E',
        borderPrimary: '#1B3624',
        accent: '#2ECC71',
        alert: '#E74C3C',
        warning: '#F39C12',
        textPrimary: '#E8F5E9',
        textSecondary: '#81C784',
      },
      fontFamily: {
        ui: ['Inter', 'sans-serif'],
        sensor: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
