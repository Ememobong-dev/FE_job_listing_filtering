import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkCyan: "hsl(180, 29%, 50%)",
        darkGrayishCyan: "hsl(180, 14%, 20%)",
        lightGrayishCyan: "hsl(180, 31%, 95%)",
        ashDarkGrayishCyan: "hsl(180, 8%, 52%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
