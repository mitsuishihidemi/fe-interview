import React from "react";
import { ThemeProvider as Provider } from "@emotion/react";
import theme from "./theme";

const ThemeProvider: React.FC = ({ children }) => (
  <Provider theme={theme}>{children}</Provider>
);

export default ThemeProvider;
