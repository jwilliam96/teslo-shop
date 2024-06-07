import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        "title": "0px 1px 1px #000"
      },
      backgroundImage: {
        'fondo-tesla': "url('/imgs/desktop.png')",
        'fondo-mobile': "url('/imgs/mobile.png')",
      },
      colors: {
        "fondo-home": "#515659",
        "naranja": "#EA5823",
        "fondo-topMenu": "#1F1F1F"
      },
      screens: {
        "mobile": "315px",
        "ss": "375px",
        "ssm": "450px",
        "3xl": "1650px"
      }

    },
  },
  plugins: [],
}
export default config
