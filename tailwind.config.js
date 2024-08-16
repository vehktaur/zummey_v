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
      backgroundImage: {
        zummey: 'url(/src/assets/zummey_bg.png)',
        'about-hero': 'url(/src/assets/overlay_store.png)'
      },
      borderImage: {
        'gradient-border':
          'linear-gradient(to right, #F9B145 100%, #FF0000 100%, #FF6B00) 1'
      },
      boxShadow: {
        'zummey-blue': '0px 3px 5px 0px rgba(0, 108, 236, 0.39)'
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
