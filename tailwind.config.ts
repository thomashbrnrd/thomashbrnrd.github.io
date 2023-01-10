import type { Config } from "tailwindcss"

export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#f7f3ea",
          100: "#efe5d5",
          200: "#dfccb0",
          300: "#cdb188"
        },
        ember: {
          500: "#ba4b24",
          600: "#9f3f1f",
          700: "#7d3319"
        },
        slatewarm: {
          700: "#48505a",
          900: "#1d1f22"
        }
      },
      fontFamily: {
        sans: ["Space Grotesk", "Segoe UI", "sans-serif"],
        serif: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        card: "0 10px 30px -22px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: []
} satisfies Config
