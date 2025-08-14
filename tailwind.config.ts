
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        card: {
          DEFAULT: 'hsl(0 0% 100%)',
          dark: 'hsl(222.2 84% 4.9%)'
        }
      }
    }
  },
  plugins: []
}
export default config
