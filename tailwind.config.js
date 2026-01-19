/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1f1f1f',
        muted: '#4b5563',
        surface: '#f5f5f5',
        panel: '#e5e5e5',
        dark: '#2f2f2f',
        accent: '#255df5'
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'var(--font-archivo)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
