module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        graypink: "#f5f5f5",
        darkcolor: "#040320",
        primary: "#0066ff",
        "dark-border": "#222224",
        "dark-borderlight": "#484848",
        "darktext-color": "#ffffff80",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
