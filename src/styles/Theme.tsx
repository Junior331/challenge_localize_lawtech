import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  palette: {
    color: {
      dark: "#000000",
      light: "#",
      medium: "#",
      regular: "#",
      default: "#ffffff",
      disable: "",
    },

    background: {
      dark: "#0C0F15",
      light: "#f3f5fb",
      medium: "#242936",
      regular: "#1A1E29",
      default: "#ffffff",
    },
    error: {
      default: "#d32f2f",
    },
    success: {
      default: "#6EBA19",
    },
    warning: {
      default: "#f9e154",
    },
  },
  typography: {
    fontSize: 1.6,
    fontSizeBold: 3.5,
    fontSizeLight: 1.2,
    fontSizeMedium: 1.4,
    fontWeightBold: 700,
    fontSizeRegular: 2.2,
    htmlFontSize: "10px",
    fontWeightLight: 400,
    fontWeightBolder: 900,
    fontWeightRegular: 500,
  },
};

export default Theme;
