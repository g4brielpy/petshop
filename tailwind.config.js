/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        verde1: "#007D32",
        verde2: "#004F41",
        verde3: "#4FAD64",
        verde4: "#8DC989",
        branco1: "#FFF",
        branco2: "#DCFFD6",
      },
    },
  },
  plugins: [],
};
