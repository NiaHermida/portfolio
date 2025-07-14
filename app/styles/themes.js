// $light: (
//   background: $white,
//   foreground: $black,
//   border-color: $dark-gray,

//   primary: $primary,
//   secondary: $secondary,
// );

// $dark: (
//   background: $black,
//   foreground: $white,
//   border-color: $light-gray,

//   primary: $secondary,
//   secondary: $primary,
// );

// $themes: (
//   light: $light,
//   dark: $dark,
// );

const lightPalette = {
  mode: "light",
  primary: {
    main: "#9d4edd",
  },
  secondary: {
    main: "#9c27b0",
  },
  background: {
    default: "#f5f5f5",
    paper: "#ffffff",
  },
  text: {
    primary: "#000000",
    secondary: "#333333",
  },
};

const darkPalette = {
  mode: "dark",
  primary: {
    main: "#c77dff",
  },
  secondary: {
    main: "#ce93d8",
  },
  background: {
    default: "#121212",
    paper: "#1e1e1e",
  },
  text: {
    primary: "#ffffff",
    secondary: "#aaaaaa",
  },
};

export const getPalette = (mode) =>
  mode === "dark" ? darkPalette : lightPalette;
