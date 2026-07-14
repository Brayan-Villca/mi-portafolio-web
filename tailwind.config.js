/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        card: 'rgba(255,255,255,0.05)',
        border: 'rgba(255,255,255,0.08)',
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
        },
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          orange: '#F59E42',
          yellow: '#EAB308',
        },
      },
      backdropBlur: {
        glass: '18px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        glow: '0 0 24px rgba(34,211,238,0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
