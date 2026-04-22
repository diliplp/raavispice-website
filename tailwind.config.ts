import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Based on Raavi Spice Logo
        'forest-green': '#1E3932',
        'deep-green': '#243B35',
        'dark-green': '#152A25',
        'sage-green': '#3D5A4C',

        // Gold Accents
        'antique-gold': '#C9A962',
        'champagne-gold': '#D4BC7A',
        'light-gold': '#E8D9A8',

        // Neutrals
        'cream': '#F5F2E8',
        'off-white': '#FAFAF7',
        'charcoal': '#2D2D2D',
      },
      fontFamily: {
        // Cinzel - Sharp, prestigious, commands attention (Main Headings)
        'heading': ['Cinzel', 'Georgia', 'serif'],
        // Cormorant - Elegant serif with beautiful curves (Subheadings)
        'subheading': ['Cormorant', 'Georgia', 'serif'],
        // Raleway - Clean, sophisticated sans-serif (Body)
        'body': ['Raleway', 'system-ui', 'sans-serif'],
        // Great Vibes - Luxurious script for taglines (Accent)
        'accent': ['Great Vibes', 'cursive'],
      },
      fontSize: {
        // Cinzel looks best with generous sizing and letter-spacing
        'display': ['clamp(2.5rem, 7vw, 5rem)', { lineHeight: '1.1', letterSpacing: '0.15em' }],
        'h1': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '0.12em' }],
        'h2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.3', letterSpacing: '0.1em' }],
        'h3': ['clamp(1.25rem, 2.5vw, 1.75rem)', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 169, 98, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(201, 169, 98, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
