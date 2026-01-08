/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1f2b",
        "ink-soft": "#2a2d3c",
        sand: "#f6f2eb",
        "sand-dark": "#eee7dd",
        gold: "#a07a30",
        "gold-soft": "#c79b4b",
        muted: "#7c7a78",
        success: "#2f9e59",
        danger: "#d45353",
        line: "#d9d1c5",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 0, 0, 0.12)",
        lift: "0 12px 30px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
