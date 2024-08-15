/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  corePlugins: {
    // Disable text-related core plugins
    
    fontWeight: false,
    lineHeight: false,
    letterSpacing: false,
    textAlign: false,
    width: false,
    maxWidth: false,
    // ...
  },
  
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
  variants: {},
}

