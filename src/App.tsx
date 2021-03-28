import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "./components/theme/ThemeProvider";
import Merchants from "./pages/merchants";
import store from "./store";

const App: React.FC = () => (
  <ThemeProvider>
    <Provider store={store}>
      <Merchants />
    </Provider>
  </ThemeProvider>
);

export default App;
