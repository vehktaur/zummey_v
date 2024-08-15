/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';
export default {
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },

  // corePlugins: {
  //   // Disable text-related core plugins

  //   fontWeight: false,
  //   lineHeight: false,
  //   letterSpacing: false,
  //   textAlign: false,
  //   width: false,
  //   maxWidth: false
  //   // ...
  // },

  theme: {
    screens,
    fontSize,
    extend: {
      borderImage: {
        'gradient-border':
          'linear-gradient(to right, #F9B145 100%, #FF0000 100%, #FF6B00) 1'
      },
      colors: {
        'zummey-orange': '#FF6B00;'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [fluid],
  variants: {}
};
