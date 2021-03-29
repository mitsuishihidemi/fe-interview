import React from "react";
import { Global, css, ThemeProvider as Provider } from "@emotion/react";
import theme from "./theme";

const styles = css`
  html {
    font-size: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

const ThemeProvider: React.FC = ({ children }) => {
  return (
    <Provider theme={theme}>
      <Global styles={styles} />
      {children}
    </Provider>
  );
};

export default ThemeProvider;
