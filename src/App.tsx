import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Merchants from "./pages/merchants";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Merchants />
  </ThemeProvider>
);

export default App;
