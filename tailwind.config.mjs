/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '480px',      // 📱 Extra small devices (custom)
        'sm': '893px',      // ✅ Small (default)
        'md': '894px',      // ✅ Medium (default)
        'lg': '1024px',     // ✅ Large (default)
        'xl': '1280px',     // ✅ Extra large (default)
        '2xl': '1536px',    // ✅ 2X large (default)
        '3xl': '1800px',    // 💻 Ultra-wide screens (custom)
      },
    },
  },
  plugins: [],
};
