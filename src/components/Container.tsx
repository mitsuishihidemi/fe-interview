import styled from "@emotion/styled";

const Container = styled.div(
  ({ theme }) => `
  padding: 0 ${theme.spacings.lg};
  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: ${theme.containerMaxWidth};
    margin: 0 auto;
  }`
);

export default Container;
