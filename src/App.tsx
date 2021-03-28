import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/theme/theme";

const Title = styled.h1`
  color: ${(props) => props.theme.colors.primary};
`;

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Title>Hello</Title>
  </ThemeProvider>
);

export default App;
