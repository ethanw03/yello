import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#ffda00',
        'brand-red': '#ec2327',
        'brand-white': '#fff5e6',
        'brand-black': '#414042',
      },
      fontFamily: {
        'clash': ['Clash Display', 'sans-serif'],
      },
     
    },
  },
  plugins: [],
};

export default config;
