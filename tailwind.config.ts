/** @type {import('tailwindcss').Config} */
function withOpacity(variableName: string) {
  return `var(${variableName})`;
}

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        globalBg: withOpacity("--global-bg"),
        globalBgInvert: withOpacity("--global-bg-invert"),
      },
      colors: {
        globalBgInvert: withOpacity("--global-bg-invert"),
      },
      borderColor: {
        badgesPurpleBorder: withOpacity("--badges-purple-border"),
      },
    },
  },
};
