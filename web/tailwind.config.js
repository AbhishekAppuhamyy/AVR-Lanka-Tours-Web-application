/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      /* ================= FONT ================= */
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"],
      },

      /* ================= BRAND COLORS ================= */
      colors: {
        brand: {
          light: "#D2E3C8",
          DEFAULT: "#86A789",
          dark: "#739072",
          deep: "#4F6F52",
        },
      },

      /* ================= GLASS EFFECT ================= */
      backdropBlur: {
        "2xl": "40px",
      },

      backdropSaturate: {
        150: "1.5",
      },

      /* ================= SHADOWS ================= */
      boxShadow: {
        glass: "0 8px 32px rgba(79, 111, 82, 0.35)",
        glassStrong: "0 12px 40px rgba(79, 111, 82, 0.45)",
      },

      /* ================= GRADIENT STOPS ================= */
      gradientColorStops: {
        "brand-soft": "rgba(134, 167, 137, 0.35)",
      },
    },
  },
  plugins: [],
};
