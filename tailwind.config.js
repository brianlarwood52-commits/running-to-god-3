/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Red Earth - Australian Outback
        earth: {
          50: '#fdf5f0',
          100: '#f9e4d6',
          200: '#f2c5a8',
          300: '#e8a070',
          400: '#dc7a42',
          500: '#CC7722', // Ochre
          600: '#b85c1a',
          700: '#8B2500', // Red earth
          800: '#6b2014',
          900: '#4d1810',
          950: '#2d0d08',
        },
        // Dust & Sand
        dust: {
          50: '#faf8f5',
          100: '#f3efe7',
          200: '#e6ddd0',
          300: '#D4A574', // Main dust
          400: '#c4956a',
          500: '#a67c52',
          600: '#8a6642',
          700: '#6e5135',
          800: '#5a432d',
          900: '#4a3828',
          950: '#281e14',
        },
        // Spinifex Green
        spinifex: {
          50: '#f6f7f0',
          100: '#e9ebdb',
          200: '#d4d8b9',
          300: '#b8bf8f',
          400: '#9da56a',
          500: '#8B8B3A', // Main spinifex
          600: '#6a6c32',
          700: '#52532a',
          800: '#434426',
          900: '#393a23',
          950: '#1d1e10',
        },
        // Night Sky
        night: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#b3c5d5',
          300: '#8aa3b8',
          400: '#60809a',
          500: '#456580',
          600: '#354f65',
          700: '#283c4d',
          800: '#1a2836',
          900: '#0A1628', // Deep night
          950: '#050b14',
        },
        // Campfire
        campfire: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B35', // Main campfire
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Road Grey
        road: {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#6d6d6d',
          600: '#5d5d5d',
          700: '#4A4A4A', // Bitumen
          800: '#3d3d3d',
          900: '#2d2d2d',
          950: '#1a1a1a',
        },
        // Bight Blue - Great Australian Bight
        bight: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'road-texture': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        'hero-gradient': 'linear-gradient(to bottom, #CC7722 0%, #8B2500 50%, #0A1628 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'road-scroll': 'roadScroll 2s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
