module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        width: "width",
      },
      colors: {
        slateblue: "#001E2B",
        rhino: "#343F71",
        springgreen: "#00ED64",
        forestgreen: "#00684A",
        evergreen: "#023430",
        lavender: "#F9EBFF",
        purple: "#7C25FF",
        sun: "#FFE212",
        darkblue: "#0D427C",
        chromeyellow: "#FF9F10",
        violet: "#5400F8",
        denim: "#48527F",
        clearblue: "#006EFF",
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"],
        noto: ["Noto Serif", "serif"],
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus", "active"],
      transitionProperty: ["responsive", "hover", "focus", "active"],
      transitionDuration: ["hover", "focus", "active"],
      transitionTimingFunction: ["hover", "active", "focus"],
    },
  },
  plugins: [],
};
