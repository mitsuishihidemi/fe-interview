import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import Merchants from "./features/merchants";
import store from "./store";

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Merchants />
    </Provider>
  </ThemeProvider>
);

export default App;
