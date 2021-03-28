export interface ControlTheme {
  colors: {
    primary: string;
    transparent: string;
    black: string;
    white: string;
    grey: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
}

const theme: ControlTheme = {
  colors: {
    primary: "rgb(8, 21, 255)",
    transparent: "transparent",
    black: "#000000",
    white: "#FFFFFF",
    grey: "rgb(176, 176, 176)",
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
  },
};

export default theme;
