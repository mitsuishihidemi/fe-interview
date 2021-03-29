import styled from "@emotion/styled";

const Container = styled.div(
  ({ theme }) => `
    padding: 0 ${theme.spacings.lg};
    @media (min-width: ${theme.breakpoints.lg}) {
      margin: 0 auto;
      max-width: ${theme.containerMaxWidth};
    }
  `
);

export default Container;
