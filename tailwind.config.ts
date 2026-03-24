import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#4DFFA0',
        'accent-hover': '#3de890',
        surface: '#181818',
        'border-custom': '#242424',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
