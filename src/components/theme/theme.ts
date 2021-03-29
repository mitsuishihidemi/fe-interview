export interface ThemeInterface {
  border: string;
  containerMaxWidth: string;
  colors: {
    primary: string;
    transparent: string;
    black: string;
    white: string;
    grey: string;
    lightGrey: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
  spacings: {
    sm: string;
    md: string;
    lg: string;
  };
  borderRadius: {
    default: string;
    rounded: string;
  };
  fontSizes: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
  };
}

const colors = {
  primary: "rgb(8, 21, 255)",
  transparent: "transparent",
  black: "#000000",
  white: "#FFFFFF",
  grey: "rgb(176, 176, 176)",
  lightGrey: "rgb(246, 247, 250)",
};

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
};

const spacings = {
  sm: "0.5rem",
  md: "1rem",
  lg: "2rem",
};

const borderRadius = {
  default: "0.25rem",
  rounded: "50%",
};

const fontSizes = {
  xs: "0.9rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
};

const fontWeights = {
  normal: 400,
  bold: 600,
};

const theme: ThemeInterface = {
  border: `1px solid ${colors.grey}`,
  borderRadius,
  breakpoints,
  colors,
  containerMaxWidth: "1024px",
  fontSizes,
  fontWeights,
  spacings,
};

export default theme;
