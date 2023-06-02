/** @type {import('tailwindcss').Config} */
const pxToRem = (px, base = 16) => `${px / base}rem`;

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      lg: "860px",
      xl: "1280px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "90%": "90%",
      150: "150px",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      gridTemplateColumns: {
        fluid: "repeat(16, minmax(10rem, 1fr))",
      },
      minWidth: {
        1: pxToRem(4),
        2: pxToRem(8),
        3: pxToRem(12),
        4: pxToRem(16),
        5: pxToRem(20),
        6: pxToRem(24),
        8: pxToRem(32),
        10: pxToRem(40),
        12: pxToRem(48),
        16: pxToRem(64),
        20: pxToRem(80),
        24: pxToRem(96),
        32: pxToRem(128),
        48: pxToRem(192),
        52: pxToRem(224),
        56: pxToRem(240),
        64: pxToRem(256),
        68: pxToRem(288),
        72: pxToRem(320),
      },
      maxWidth: {
        modalNarrow: "24rem",
        modalWide: "40rem",
        appContent: "88rem",
        1: pxToRem(4),
        2: pxToRem(8),
        3: pxToRem(12),
        4: pxToRem(16),
        5: pxToRem(20),
        6: pxToRem(24),
        8: pxToRem(32),
        10: pxToRem(40),
        12: pxToRem(48),
        14: pxToRem(54),
        16: pxToRem(64),
        20: pxToRem(80),
        24: pxToRem(96),
        32: pxToRem(128),
        36: pxToRem(144),
        40: pxToRem(160),
        48: pxToRem(192),
        52: pxToRem(224),
        56: pxToRem(240),
        64: pxToRem(256),
        68: pxToRem(288),
        72: pxToRem(320),
      },
    },
  },
  plugins: [],
};
