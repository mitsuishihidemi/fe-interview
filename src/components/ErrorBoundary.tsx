import React from "react";
import Container from "./Container";
import Text from "./Text";
import MessageBox from "./MessageBox";

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
          <MessageBox>
            <Text bold fontSize="md">
              Something went wront{" "}
              <span role="img" aria-label="Loudly Crying Face">
                😭
              </span>
            </Text>
            <Text>Please, refresh the page</Text>
          </MessageBox>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
