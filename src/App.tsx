import React from "react";
import { Provider } from "react-redux";
import ThemeProvider from "./components/theme/ThemeProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import Merchants from "./pages/merchants";
import store from "./store";

const App: React.FC = () => (
  <ThemeProvider>
    <ErrorBoundary>
      <Provider store={store}>
        <Merchants />
      </Provider>
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
