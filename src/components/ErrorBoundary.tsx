import React from "react";
import styled from "@emotion/styled";
import Container from "./Container";
import Text from "./Text";

const Wrapper = styled.div(
  ({ theme }) => `  
    background-color: ${theme.colors.lightGrey};
    border-radius: ${theme.borderRadius.default};
    border: ${theme.border};
    padding: ${theme.spacings.lg};    
    margin-top: ${theme.spacings.lg};
  `
);

type ErrorBoundaryProps = {};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Wrapper>
            <Text bold fontSize="md" textAlign="center">
              Something went wront{" "}
              <span role="img" aria-label="Loudly Crying Face">
                😭
              </span>
            </Text>
            <Text textAlign="center">Please, refresh the page</Text>
          </Wrapper>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
